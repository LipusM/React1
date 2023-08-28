const c = console.log.bind(document)

import "./style.scss"

const UserInfo = ({name, surname, age}) => {
  return ( 
    <div className="userinfo">
      <h2>Informace o uživateli</h2>
      <p>{name} {surname}, vek {age} let</p>
    </div>
   );
}
 
export default UserInfo
