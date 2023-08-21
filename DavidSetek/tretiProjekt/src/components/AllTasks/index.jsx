const c = console.log.bind(document);

import "./style.scss";
import data from "../../data";

const AllTasks = (props) => {

  return (
    <div>
      {
          data.map( oneTask => {
            const {id, name} = oneTask

            return <div className="one-task" key={id}>
                <h4>{name}</h4>
                <button type="button">Vymazat</button>
            </div>
          })
      }
    </div>
  );
};

export default AllTasks;
