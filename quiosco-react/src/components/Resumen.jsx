import useQuiosco from "../hooks/useQUiosco";

export default function Resumen() {
  const {showResume} = useQuiosco();
  return (
    <div className={`fixed right-0 bg-white w-full max-w-[20rem] p-4 h-screen border-l border-gray-200 ${!showResume && 'hidden'}`} >Resumen</div>
  )
}
