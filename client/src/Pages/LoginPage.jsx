import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen gap-10 justify-center items-center bg-slate-700">
      <h1 className="text-xl font-bold text-white ">Inicio de Sesión</h1>
      <form className="flex flex-col gap-4 items-center">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">
            Correo electronico
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="tu-mail@gmail.com"
            required=""
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white ">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required=""
            />
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Recuerdame
            </label>
            <Link className="ml-10" to={"/register"}>
              <span className="text-white text-xs hover:underline cursor-pointer">
                Registrate aquí
              </span>
            </Link>
          </div>
        </div>
        <Link to={"/"}>
          <button
            type="submit"
            className="text-white px-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
}
