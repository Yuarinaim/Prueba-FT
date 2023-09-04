// import { Link } from "react-router-dom";
import Table from "../components/Table";

export default function ClientList() {
  return (
    <div className="flex flex-col h-screen font-semibold items-center justify-center bg-slate-400 lg:text-lg">
      CLIENTES
      <div className="w-11/12 flex flex-col gap-3 bg-stone-500">
        <div className="flex justify-between items-center p-2 text-sm font-semibold border-r-4 bg-white w-36">
          + <button>Agregar Clientes</button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <input type="checkbox" />
                </th>
                <th scope="col" className="px-6 py-3">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3">
                  Telefono
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  Accion
                </th>
              </tr>
            </thead>
            <tbody>
              <Table />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
