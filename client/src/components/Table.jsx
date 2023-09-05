const Table = () => {
  const list = [
    {
      client: "Benjamin castro",
      phone: "31231231",
      email: "XXXXXXXXXXXXXXXXXX",
      status: "New",
      action: "Edit",
    },
    {
      client: "Benjamin castro",
      phone: "31231231",
      email: "XXXXXXXXXXXXXXXXXX",
      status: "New",
      action: "Edit",
    },
    {
      client: "Benjamin castro",
      phone: "31231231",
      email: "XXXXXXXXXXXXXXXXXX",
      status: "New",
      action: "edit",
    },
  ];
  return (
    <>
      {list.map((item, index) => (
        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
            {item.client}
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
            <button>{item.action}</button>
            <button> Delete</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Table;
