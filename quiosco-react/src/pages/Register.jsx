import Input from "../components/Input";
import Label from "../components/Label";
import PrimaryButton from "../components/PrimaryButton";
import {Link} from "react-router-dom";
import axiosInstance from "../config/axios";
import { useState } from "react";

export default function Register() {

  const [errores, setErrores] = useState({});

  const handleSubmit = async (e) => {

    e.preventDefault();

    const datos = {
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
      password_confirmation: document.querySelector('#password_confirmation').value,
    }
    try{
      const respuesta = await axiosInstance.post('/register', datos);
      console.log(respuesta);
    } catch(error){
      setErrores(Object.values(error.response.data.errors));
    }
  }

  return (
    <main className="w-80 mx-auto space-y-4">
        <img src="../img/logo.svg" className=" mx-auto" alt="Quiosco App Logo" />
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {errores.length > 1 ? errores.map((error, index)=>(
              <div key={index} className="text-center text-red-400">{error}</div>
            )) : null}
            <Label htmlFor="name" >Nombre:
              <Input id="name" name="name" placeholder="Tu nombre" />
            </Label>
            <Label htmlFor="email" >Correo:
              <Input id="email" name="email" placeholder="Tu correo" />
            </Label>
            <Label htmlFor="password" >Contraseña:
              <Input type="password" id="password" name="password" placeholder="Tu contraseña" />
            </Label>
            <Label htmlFor="password_confirmation" >Repite tu contraseña:
              <Input type="password" id="password_confirmation" name="password_confirmation" placeholder="Tu contraseña" />
            </Label>
            <PrimaryButton type="submit" className="uppercase">Registrarme</PrimaryButton>
            <Link to="/auth/login" className="text-center block text-slate-400">Iniciar Sesion</Link>
        </form>
    </main>
  )
}
