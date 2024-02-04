import { useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import PrimaryButton from "../components/PrimaryButton";
import {Link} from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";


export default function Register() {

  const [errores, setErrores] = useState({});
  const {login} = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const handleSubmit = async (e) => {

    e.preventDefault();

    const datos = {
      email: document.querySelector('#email').value,
      password: document.querySelector('#password').value,
    }

    login(datos, setErrores);
  }
  return (
    <main className="w-80 mx-auto space-y-4">
        <img src="../img/logo.svg" className=" mx-auto" alt="Quiosco App Logo" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          {
            errores.length > 0 ? errores.map((error, index)=>(
              <div key={index} className="text-red-500 text-center">{error}</div>
            )) : null
          }
            <Label htmlFor="email">Correo:<Input id="email" name="email" placeholder="Tu correo" type="text"/></Label>
            <Label htmlFor="password">Contraseña:<Input id="password" name="password" placeholder="Tu contraseña" type="password"/></Label>
            <PrimaryButton className="uppercase" type="submit">Iniciar Sesion</PrimaryButton>
            <Link to="/auth/register" className="text-center block text-slate-400">Registrarme</Link>
        </form>
    </main>
  )
}
