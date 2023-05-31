import { useState, useEffect } from "react";
import StudentiIns from "./StudentIns";

interface props {
  id: number;
}

function Students({ id }: props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showIns, setIns] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/cm/students/`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.records.filter((obj: any) => obj.class_id == id));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  function visualizza() {
    setIns(true);
  }
  return (
    <>
      <h1>Studenti</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Codice fiscale</th>
          <th>Data di nascità</th>
          <th>Anno scolastico</th>
          <th>Sezione</th>
          <th>Specializzazione</th>
        </tr>
        {data.length > 0 &&
          data.map((val: any, key: any) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.surname}</td>
                <td>{val.fiscal_code}</td>
                <td>{val.birthday}</td>
                <th>{val.year}</th>
                <th>{val.section}</th>
                <td>{val.spec}</td>
              </tr>
            );
          })}
      </table>
      <button onClick={() => visualizza()}>Inserisci</button>
      {showIns && <StudentiIns idClasse={id}></StudentiIns>}
    </>
  );
}

export default Students;
