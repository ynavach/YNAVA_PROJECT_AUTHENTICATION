import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import toast, { Toaster } from "react-hot-toast";

export const Navbar = () => {
  const { actions, store } = useContext(Context);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#AB46D2", height: "60px", margin: "0 auto" }}
    >
      <div className="container-fluid d-flex">
        <Link to="/" className="navbar-brand"></Link>

        <div className="position-absolute start-0 ps-3">
          <ul className="navbar-nav nav-pills">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link hover-nav"
                type="button"
                style={{ color: "#FFFFFF" }}
              >
                Inicio
              </Link>
            </li>
          </ul>
        </div>

        <div className="justify-content-end" id="navbarRight">
          <ul className="navbar-nav">
            <li className="nav-item">
              {!store.jwt_token ? (
                <Link
                  to="/signup"
                  className="nav-link hover-nav me-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Regístrate
                </Link>
              ) : (
                <Link
                  to="/my_account"
                  className="nav-link hover-nav me-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Mi Perfil
                </Link>
              )}
            </li>
            <li className="nav-item">
              {!store.jwt_token ? (
                <Link to="/login">
                  <button
                    className="btn btn-light hover-nav"
                    style={{ color: "#AB46D2", fontWeight: "bold" }}
                  >
                    Iniciar Sesión
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button
                    onClick={actions.removeToken}
                    className="btn btn-light hover-nav"
                    style={{ color: "#AB46D2", fontWeight: "bold" }}
                  >
                    Cerrar Sesión
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Toaster />
    </nav>
  );
};
