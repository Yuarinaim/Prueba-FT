import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col p-8 items-center pt-44 gap-40  h-screen w-screen bg-slate-700">
      <h1 className="text-white font-bold text-center text-base md:text-xl lg:text-2xl">
        Bienvenidos al Sistema de Gestión de Clientes de la Prueba Fullstack
      </h1>
      <div className="flex gap-8 md:gap-20">
        <Link to={"/register"}>
          <button className="p-3 bg-slate-500 rounded-md text-sm md:text-base lg:text-lg font-semibold text-slate-300">
            Registrate aquí
          </button>
        </Link>
        <Link to={"/login"}>
          <button className="p-3 bg-slate-500 rounded-md text-sm md:text-base lg:text-lg font-semibold text-slate-300">
            Inicia sesión aquí
          </button>
        </Link>
      </div>
    </div>
  );
}
