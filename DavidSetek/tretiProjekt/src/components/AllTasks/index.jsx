const c = console.log.bind(document);

import { useState } from "react";
import "./style.scss";
import data from "../../data";

const AllTasks = () => {

    const [myTask, setMyTask] = useState(data)

    const tasksHandler = (id) => {
        const filteredTasks = myTask.filter( oneTask => {
            if(oneTask.id !== id){
                return oneTask.id
            }
        } )

        setMyTask(filteredTasks)
    }

  return (
    <div>
      {
          myTask.map( oneTask => {
            const {id, name} = oneTask

            return <div className="one-task" key={id}>
                <h4>{name}</h4>
                <button type="button" onClick={ () => tasksHandler(id)}>Vymazat</button>
            </div>
          })
      }
    </div>
  );
};

export default AllTasks;
