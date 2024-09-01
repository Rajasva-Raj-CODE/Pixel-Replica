import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  const API_KEY = "SJbDyNomrYIn8YuNraPZ9DHHBCRZAVNuEn1138CSBspMqqg6snuRKH49";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      // console.log("response API",res.data.photos);
      setImages(res.data.photos);
      setLoader(false);
      console.log(images);
    };

    const data = JSON.parse(localStorage.getItem(images))
    if(data){
      setSaved(data)
    }

    fetchImage();
  }, [search]);

  useEffect(() => {
    if (saved.length !=0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("images", json);
    }
  }, [saved]);

  console.log("Image is saved", saved);

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                loader={loader}
                saved={saved}
                setSaved={setSaved}
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved saved={saved} loader={loader} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
