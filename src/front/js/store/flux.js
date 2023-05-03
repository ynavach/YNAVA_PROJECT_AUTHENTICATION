import React from "react";
import toast, { Toaster } from 'react-hot-toast';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			jwt_token: localStorage.getItem("jwt_token"),
			user: null,	
			Perro:[
				"Bull Terrier",
				"Dachshund",
				"Galgo",
				"Golden Retriever",
				"Gran Danes",
				"Husky",
				"Jack Russell",
				"Labrador",
				"Otro",
				"Poodle",
				"Rottweiler",
				"Schnauzer"			
		],
			Gato:[
				"Americano Pelo Corto",
				"Angora Turco",
				"Bengala",
				"British Shorthair",
				"Carey",
				"Esfinge",
				"Korat",
				"Li Dragon",
				"Munchskin",
				"Otro",
				"Persa",
				"Siames"
		]
		},
		actions: {
			setToken: (jwt_token) => {
				setStore({jwt_token: jwt_token});
				localStorage.setItem("jwt_token", jwt_token);
			},

			removeToken: () => {
				const store = getStore()
				localStorage.removeItem("jwt_token");
				setStore({jwt_token: null});
				if (!store.jwt_token) {
					toast.success("Se ha cerrado sesión correctamente", {duration:4000});
				}
				<Toaster />
			},

			getProfile: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/private", {
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.jwt_token}`,
						}
					})
					if (response.status == 200) {
						const body = await response.json();
						setStore({user: body.user});
					}
					else {
						alert("Se produjo un error al cargar el perfil de usuario");
						throw new Error (response.status);
					}
				} catch (error) {
					console.log("Estatus de error: ", error);
				}
			},
		}
	};
};

export default getState;
