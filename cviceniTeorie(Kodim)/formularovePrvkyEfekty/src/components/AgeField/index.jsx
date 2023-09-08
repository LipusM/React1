const c = console.log.bind(document)

import { useState } from 'react';

import "./style.scss"

const AgeField = () => {

  const [age, setAge] = useState('');
  c(age)

  return (
    <label>
      Zadej svůj věk:
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
    </label>
  );
};

export default AgeField