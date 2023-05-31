import { useState, useEffect } from "react";

interface props {
  idClasse: number;
}

function StudentiIns({ idClasse }: props) {
  const [nome, setNome] = useState(String);
  const [cognome, setCognome] = useState(String);
  const [codFisc, setCodFisc] = useState(String);
  const [nascita, setNascita] = useState(String);

  function aggiungi() {
    fetch(`http://localhost:8080/cm/students/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nome,
        surname: cognome,
        fiscal_code: codFisc,
        birthday: nascita,
        class_id: idClasse,
      }),
    }).catch((err) => {
      console.log(err.message);
    });
  }
  return (
    <>
      <h1>Inserisci nuovo studente</h1>
      <form>
        <label>Nome</label>
        <input type="text" onChange={(e) => setNome(e.target.value)} />
        <label>Cognome</label>
        <input type="text" onChange={(e) => setCognome(e.target.value)} />
        <label>Codice fiscale</label>
        <input type="text" onChange={(e) => setCodFisc(e.target.value)} />
        <label>Data di nascita</label>
        <input type="date" onChange={(e) => setNascita(e.target.value)} />
        <input type="button" onClick={() => aggiungi()} value="inserisci" />
      </form>
    </>
  );
}

export default StudentiIns;
