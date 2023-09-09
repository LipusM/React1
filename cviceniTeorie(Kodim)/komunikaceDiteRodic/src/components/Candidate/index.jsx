const c = console.log.bind(document)

import React from 'react';
import './style.scss';

const Candidate = ({ name, avatar, onVote }) => (
  <div className="candidate">
    <h3 className="candidate__name">{name}</h3>
    <img className="candidate__avatar" src={avatar} />
    <button className="btn-vote" onClick={ () => onVote(name) }>Vybrat</button>
  </div>
);

export default Candidate;