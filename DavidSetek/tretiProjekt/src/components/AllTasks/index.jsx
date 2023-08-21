const c = console.log.bind(document);

import "./style.scss";
import data from "../../data";

const AllTasks = (props) => {

  return (
    <div>
      {
          data.map( oneTask => {
            const {id, name} = oneTask

            return <div className="one-task">
                <h4>{name}</h4>
            </div>
          })
      }
    </div>
  );
};

export default AllTasks;
