const c = console.log.bind(document);

import { useState } from "react";
import "./style.scss";
import data from "../../data";

const AllTasks = (props) => {

    const tasksHandler = () => {
        c("Kliknuto!")
    }

  return (
    <div>
      {
          data.map( oneTask => {
            const {id, name} = oneTask

            return <div className="one-task" key={id}>
                <h4>{name}</h4>
                <button type="button" onClick={tasksHandler}>Vymazat</button>
            </div>
          })
      }
    </div>
  );
};

export default AllTasks;
