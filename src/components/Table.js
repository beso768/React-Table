import React, { useState, useEffect } from "react";
import httpService from "../services/httpService";
export default function Table() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // initialize data
  useEffect(async () => {
    const response = await httpService.getUsers();
    setData(response);
  }, []);

  const keyArr = [];
  for (const key in data[0]) {
    keyArr.push(key);
  }
  console.log(keyArr);
  return (
    <div>
      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            {keyArr.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.CATEGORY_ID}</td>
                  <td>{item.IS_NATIONAL_CCY}</td>
                  <td>{item.BANK_CODE}</td>
                  <td>{item.ACC_IBAN}</td>
                  <td>{item.ACC_DESCRIP}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
