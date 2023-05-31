import { useState, useEffect } from "react";
import Students from "./Students";
import "./class.css";
function Class() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showStudents, setStudents] = useState(false);
  const [idS, setIdS] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8080/cm/class/`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.records);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function studenti(id: number) {
    setIdS(id);
    setStudents(true);
  }
  return (
    <>
      <h1>Classi</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>year</th>
          <th>section</th>
          <th>spec</th>
        </tr>
        {data.length > 0 &&
          data.map((val: any, key: any) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <th>{val.year}</th>
                <th>{val.section}</th>
                <td>{val.spec}</td>
                <td>
                  <button onClick={() => studenti(val.id)}>Studenti</button>
                </td>
              </tr>
            );
          })}
      </table>
      {showStudents && <Students id={idS}></Students>}
    </>
  );
}

export default Class;
