import React, { ReactNode } from "react";

type Table = {
  header: {
    label: ReactNode;
    key: string;
  }[];
  data: {
    [key: string]: ReactNode;
  }[];
};

const Table = ({ header, data }: Table) => {
  return (
    <div className="relative overflow-x-auto rounded">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase bg-slate-500 ">
          <tr className="text-white">
            {header.map((cell) => (
              <th scope="col" className="px-6 py-3" key={cell.key}>
                {cell.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {!data?.length ? (
            <tr className="bg-gray-50 border-b">
              <td className="px-6 py-4" colSpan={2}>
                No data
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr className="bg-gray-50 border-b" key={rowIndex}>
                {header.map((cell) => (
                  <td className="px-6 py-4" key={cell.key}>
                    {row[cell.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
