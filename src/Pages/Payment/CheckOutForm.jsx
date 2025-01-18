import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";






function CheckOutForm({details}) {
  console.log('xx' , details)
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
 
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
const navigate = useNavigate();

// fetch bio data 
const axiosPublic = useAxiosPublic()

const {
  _id,
  name,
  mobileNumber,
  email,
  biodataId,
} = details;


  
  const totalPrice = 5
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure , totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    const card = elements.getElement(CardElement);

if (!stripe || !elements) {
      return;
    }
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

  
        // confirm payment req
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'anonymous'
              }
          }
      })

      if (confirmError) {
        console.log('confirm error')
    }
    else{
      console.log('Payment Intent' , paymentIntent)
      if (paymentIntent.status === 'succeeded'){
        console.log('transaction id', paymentIntent.id);
             

        // bio data details
              const contactRequest = {
                requesterEmail: user.email,
                requesterName : user.displayName,
                price: totalPrice,
                transactionId: paymentIntent.id,
                mainBioDataIds: _id,
                biodataIds: biodataId,
                mobileNumbers: mobileNumber,
                bioDataOwnerEmail: email,
                bioDataOwnerName: name,
                status: 'pending'
            }
            // post contact req data with payment 
            axiosSecure.post('/contact-request' , contactRequest)
            .then(res=> {
              console.log('contactRequest and payment save',res.data)
              if(res.data?.insertedId){
                Swal.fire({
                  title: "Payment Successfull 5 $",
                  text: "Contact Request send Successfull",
                  icon: "success"
                });
            navigate('/dashboard/myContactRequest')
              }
              
            })
       
      }
    }


    
  };
  return (
    <form onSubmit={handleSubmit} >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <Button
        className="bg-pink-500 px-5 my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Request Successfull
      </Button>
      <p className="text-red-600">{error}</p>
     
    </form>
  );
}

export default CheckOutForm;
