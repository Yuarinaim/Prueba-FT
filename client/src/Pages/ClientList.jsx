// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../components/Table";
import FormPostClient from "../components/FormPostClient";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ClientList() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [data, setData] = useState(null);

  const cerrarModal = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [id]);

  const updateTableData = () => {
    axios
      .get(`/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  };

  useEffect(() => {
    updateTableData();
  }, [id]);

  return (
    <div className="flex flex-col gap-12 h-screen font-semibold items-center justify-center bg-slate-700 text-white lg:text-lg">
      CLIENTES
      <div className="w-11/12 flex flex-col gap-3">
        <div
          onClick={/* abrirModal */ () => setMostrarFormulario(!mostrarFormulario)}
          className="flex justify-between items-center p-2 text-sm font-semibold border rounded-sm text-gray-900 bg-white w-36"
        >
          <span className="text-xl">+</span> <button>Agregar Clientes</button>
        </div>
        <div className="bg-slate-800 relative h-64 overflow-y-scroll overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              <Table updateTableData={updateTableData} data={data} cerrarModal={cerrarModal} />
            </tbody>
          </table>
        </div>
      </div>
      {mostrarFormulario && (
        <>
          <div onClick={cerrarModal} className="fixed top-0 left-0 w-full h-full bg-black/20"></div>
          <FormPostClient updateTableData={updateTableData} cerrarModal={cerrarModal} />
        </>
      )}
    </div>
  );
}
