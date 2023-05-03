import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';
import imgsec1left from "../../img/rigo-baby.jpg";


export function LoginPage () {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginEmail = event.target.elements.loginEmail.value
        const loginPassword = event.target.elements.loginPassword.value
        const loginData = {
            "email": loginEmail,
            "password": loginPassword,
        }
        console.log(loginData)

        try {
            const response = await fetch(process.env.BACKEND_URL + "/api/login", {
                method: "POST",
                body: JSON.stringify(loginData),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (response.status == 200) {
                const body = await response.json();
                console.log(body);
                actions.setToken(body.jwt_token);
                actions.getProfile;
                toast.success("Se ha iniciado sesión correctamente", {duration:4000});
                navigate("/my_account");
            }
            else if (response.status == 400) {
                toast.error("Error al iniciar sesión: datos incorrectos", {duration:4000});
                throw new Error (response.status);
            }
            else {
                toast.error("Se produjo un error al iniciar sesión", {duration:4000});
                throw new Error (response.status);
            }
        } catch (error) {
            console.log("Estatus de error: ", error);
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center flex-column" >
            <div className="container login-ccs d-flex align-items-center justify-content-center flex-row">
                <img className="login-img" src={imgsec1left} alt="IMG Login"/>
                <form onSubmit={handleSubmit} className="login-form p-5 bg-light d-flex align-items-center justify-content-center flex-column">
                    <h2 style={{color:"#AB46D2", fontWeight:"bold"}}>
                        Inicio de Sesión
                    </h2>
                    <img className="mb-4 mt-1" src="https://cdn-icons-png.flaticon.com/512/6555/6555213.png" alt="JWT Auth Logo" width="100" height="100" style={{objectFit:"contain"}}></img>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label" style={{color:"#AB46D2", fontWeight:"bold"}}>Correo electrónico</label>
                        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label" style={{color:"#AB46D2", fontWeight:"bold"}}>Contraseña</label>
                        <input type="password" className="form-control" id="loginPassword" required />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-dark hover-effect" style={{backgroundColor:"#AB46D2", border:"none"}}>Iniciar Sesión</button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    )
}