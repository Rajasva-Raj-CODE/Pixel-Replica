import React from "react";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ images, loader, setSaved, saved }) => {
  const saveImage = (img) => {
    let flag = true;
    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          //react-toastify
          // console.log("Image is already exist");

          toast.info("Image already saved", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });

          break;
        }
      }
    }
    if (flag) {
      setSaved([...saved, img]);
      // console.log("Image Saved");
      toast.success("Image saved", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container_fluid text-center" id="top">
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="items"
                  onClick={() => saveImage(image)}
                >
                  <img src={image.src.medium} alt="photography" />
                </div>
              ))}
            </div>
          </>
        )}

        {images.lenght != 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To TOP
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
