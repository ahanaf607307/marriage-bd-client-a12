import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import useBiodata from "../../Hook/useBiodata";
import CreateBiodata from "./CreateBiodata";
import UpdateBiodata from "./UpdateBiodata";

function EditBiodata() {
  const [isBiodata] = useBiodata();
  console.log("existing bio data finder ----->", isBiodata);
  return (
    <div>
      {isBiodata ? (
        // Edit Biodata
        <UpdateBiodata />
      ) : (
        // Make Bio data
        <CreateBiodata />
      )}
    </div>
  );
}

export default EditBiodata;
