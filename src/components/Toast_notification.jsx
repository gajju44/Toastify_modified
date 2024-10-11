import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Toast_notification() {
    function notify(){ toast.success("Data cleared successfully!", {
        containerId: "Toastmodified",
      });}
      
  return (
   <>
<div className="w-screen h-screen flex justify-center items-center " >
    <button onClick={notify}>Notify</button>
</div>
   
    <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       theme="dark"
        transition={Slide}
        closeButton={false}
        containerId={`Toastmodified`}
      />
   </>
  )
}

export default Toast_notification;
