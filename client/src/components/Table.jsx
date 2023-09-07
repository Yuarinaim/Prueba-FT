import axios from "axios";
import { useState } from "react";
import FormPutClient from "../components/FormPutClient";

const Table = ({ data, updateTableData }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const cerrarModal = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handledDelete = async (id) => {
    try {
      const response = await axios.delete(`/${id}`);
      if (response.status === 200) {
        console.log("Cliente borrado correctamente");
        updateTableData();
      }
    } catch (error) {
      console.log("Hubo un error en el borrado del cliente");
    }
  };

  return (
    <>
      {data &&
        data.data.map((item) => (
          <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              <input type="checkbox" className="mr-2" />
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {item.name}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {item.phone}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {item.email}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              {item.status}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium flex gap-3 text-gray-900 dark:text-white whitespace-nowrap"
            >
              <button
                className="transition duration-300 ease-in-out hover:text-blue-400"
                onClick={cerrarModal}
              >
                Edit
              </button>
              {mostrarFormulario && (
                <>
                  <div
                    onClick={cerrarModal}
                    className="fixed top-0 left-0 w-full h-full bg-black/20"
                  ></div>
                  <FormPutClient
                    updateTableData={updateTableData}
                    id={item.id}
                    cerrarModal={cerrarModal}
                  />
                </>
              )}
              <button
                className="transition duration-300 ease-in-out hover:text-red-400"
                onClick={() => handledDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default Table;
