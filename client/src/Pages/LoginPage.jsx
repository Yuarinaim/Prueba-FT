import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const link = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    try {
      const response = await axios.post("/login", {
        name: username,
        password: password,
      });
      if (response.status === 200) link(`/${response.data.user.id}`);
    } catch (error) {
      console.log(error.message);
    }
    console.log("formData", username, "password", password);
  };

  return (
    <div className="flex flex-col h-screen gap-10 justify-center items-center bg-slate-700">
      <h1 className="text-xl font-bold text-white ">Inicio de Sesión</h1>
      <form onSubmit={handleSubmit} className="flex md:w-1/2 flex-col gap-4 items-center">
        <div className="mb-6 w-full">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-white ">
            Nombre de usuario
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="mb-2 w-full">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white ">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="flex items-start justify-center mb-6">
          <div>
            <Link to={"/register"}>
              <span className="text-white text-sm md:text-sm hover:underline hover:text-blue-400 cursor-pointer">
                Registrate aquí
              </span>
            </Link>
          </div>
        </div>
        {/* <Link to={"/"}> */}
        <button
          type="submit"
          className="text-white px-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Entrar
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}
