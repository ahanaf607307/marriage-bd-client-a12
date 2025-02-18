import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Flowbite } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Firebase/AuthProvider/AuthProvider.jsx";
import "./index.css";
import routes from "./Routes/Routes.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <HelmetProvider>
   <Flowbite>
      <div className="">

        <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </AuthProvider>

      </div>
    </Flowbite>
  
   </HelmetProvider>
  </StrictMode>
);
