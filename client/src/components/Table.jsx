import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import FormPutClient from "../components/FormPutClient";

// eslint-disable-next-line react/prop-types
const Table = ({ cerrarModal }) => {
  const [data, setData] = useState(null); // Estado para almacenar los datos de la solicitud
  const { id } = useParams(); // Obtenemos el parámetro 'id' de la URL usando useParams

  useEffect(() => {
    // Realiza la solicitud GET al endpoint usando Axios cuando el componente se monta
    axios
      .get(`http://localhost:4000/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [id]);

  const handledDelete = async (id) => {
    await axios.delete(`http://localhost:4000/${id}`);
  };

  // const handleEdit = async ({ id, name, email, phone, status }) => {
  //   await axios.put(`http://localhost:4000/${id}`, {
  //     name,
  //     email,
  //     phone,
  //     status,
  //   });
  // };

  return (
    <>
      {/* {console.log(data)} */}
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
              <button onClick={cerrarModal}>Edit</button>
              <button onClick={() => handledDelete(item.id)}> Delete</button>
            </td>
          </tr>
        ))}
      {/* <FormPutClient /> */}
    </>
  );
};

export default Table;
