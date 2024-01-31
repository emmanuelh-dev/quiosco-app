import Input from "../components/Input";
import Label from "../components/Label";
import PrimaryButton from "../components/PrimaryButton";
import {Link} from 'react-router-dom';
export default function Register() {
  return (
    <main className="w-80 mx-auto space-y-4">
        <img src="../img/logo.svg" className=" mx-auto" alt="Quiosco App Logo" />
        <form className="space-y-4">
            <Label htmlFor="email">Correo:<Input id="email" name="email" placeholder="Tu correo"/></Label>
            <Label htmlFor="password">Contraseña:<Input id="password" name="password" placeholder="Tu contraseña"/></Label>
            <PrimaryButton className="uppercase">Iniciar Sesion</PrimaryButton>
            <Link to="/auth/register" className="text-center block text-slate-400">Registrarme</Link>

        </form>
    </main>
  )
}
