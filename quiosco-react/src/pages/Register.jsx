import Input from "../components/Input";
import Label from "../components/Label";
import PrimaryButton from "../components/PrimaryButton";
import {Link} from "react-router-dom";
export default function Register() {
  return (
    <main className="w-80 mx-auto space-y-4">
        <img src="../img/logo.svg" className=" mx-auto" alt="Quiosco App Logo" />
        <form className="space-y-4">
            <Label htmlFor="name">Nombre:<Input id="name" name="name" placeholder="Tu nombre"/></Label>
            <Label htmlFor="email">Correo:<Input id="email" name="email" placeholder="Tu correo"/></Label>
            <Label htmlFor="password">Contraseña:<Input id="password" name="password" placeholder="Tu contraseña"/></Label>
            <Label htmlFor="password_confirmation">Repite tu contraseña:<Input id="password_confirmation" name="password_confirmation" placeholder="Tu contraseña"/></Label>
            <PrimaryButton className="uppercase">Registrarme</PrimaryButton>
            <Link to="/auth/login" className="text-center block text-slate-400">Iniciar Sesion</Link>
        </form>
    </main>
  )
}
