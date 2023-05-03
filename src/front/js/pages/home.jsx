import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import toast, { Toaster } from "react-hot-toast";
import imgsec1left from "../../img/rigo-baby.jpg";


<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
</style>;

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid text-center">
      <div
        className="jumbotronms-2 pt-5 mt-3"
        style={{ background: "white", fontFamily: "Montserrat, sans-serif" }}
      >
        <div>
          <div className="row d-flex">
            <div className="col-sm-12">
              <img style={{ width: "45em" }} src={imgsec1left} />
            </div>
           
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
