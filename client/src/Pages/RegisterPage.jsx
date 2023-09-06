import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const link = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password, email } = Object.fromEntries(formData);
    try {
      const response = await axios.post("http://localhost:4000/register", {
        name: username,
        password: password,
        email: email,
      });
      if (response.status === 200) link(`/login`);
    } catch (error) {
      console.log("errr", error.message);
    }
    console.log("formData", username, "password", password);
  };

  return (
    <div className="flex flex-col h-screen gap-2 justify-center items-center bg-slate-700">
      <h1 className="text-xl font-bold text-white ">Registrate</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 md:w-1/2 ">
        <div className="mb-6 md:w-full">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="tu-mail@gmail.com"
            required=""
          />
        </div>
        <div className="mb-6 md:w-full">
          <label
            htmlFor="username"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre de usuario
          </label>
          <input
            type="username"
            name="username"
            id="username"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        <div className="mb-6 md:w-full">
          <label
            htmlFor="password"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        {/* <div className="mb-2 md:w-full">
          <label
            htmlFor="repeat-password"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirme su contraseña
          </label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div> */}
        <div className="flex items-start justify-center mb-6 md:w-full">
          {/* <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Estoy de acuerdo con{" "}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              terminos y condiciones
            </a>
          </label> */}
          <div className="flex items-center h-5">
            <Link to={"/login"}>
              <span className="text-white text-xs hover:text-blue-400 hover:underline cursor-pointer md:text-base">
                Inicia sesion aquí
              </span>
            </Link>
          </div>
        </div>
        {/* <Link to={"/"}> */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Registre su cuenta
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}
