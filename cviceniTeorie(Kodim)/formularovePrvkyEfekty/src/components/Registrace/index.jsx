const c = console.log.bind(document);

import { useState } from "react";

import "./style.scss";

const Registrace = () => {
  const [userName, setUserName] = useState("");

  //Fce handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(userName)
  };

  const userNameInput = () => {
      userName.length === 0
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uživatelské jméno:
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
        />
      </label>
      <button type="submit" disabled={userNameInput}>Registrovat</button>
    </form>
  );
};

export default Registrace;
