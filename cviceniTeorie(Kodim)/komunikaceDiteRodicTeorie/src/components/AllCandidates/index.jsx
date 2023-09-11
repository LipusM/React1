const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Candidate from '../Candidate/index.jsx';
import './style.scss';
import Castle from '../Castle/index.jsx';

import avatar1 from "../../assets/candidate01.png"
import avatar2 from '../../assets/candidate02.png'
import avatar3 from '../../assets/candidate03.png'
import avatar4 from '../../assets/candidate04.png'

const AllCandidates = () => {
  
    const [candidates, setCandidates] = useState([]);
    const [president, setPresident] = useState(null);
  
    useEffect(() => setCandidates([
      { name: "Ferdinand Mravenec", avatar: avatar1},
      { name: "Markéta Smetana", avatar: avatar2 },
      { name: "Beáta Skočdopolová", avatar: avatar3 },
      { name: "Lubomír Poňuchálek", avatar: avatar4 },
    ]), []);

    const handleVote = (name) => {
      setPresident(name)
    }
    
    return (
      <div className="container">

        <Castle president={president}/>
        
        <h2>Kandidátí</h2>
        <div className="candidate-list">
          {candidates.map(c => (
            <Candidate 
              key={c.name}
              name={c.name} 
              avatar={c.avatar} 
              onVote={handleVote}
            />
          ))}
        </div>
      </div>
    );
  };

  export default AllCandidates