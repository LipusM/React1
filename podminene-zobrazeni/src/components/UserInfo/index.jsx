const c = console.log.bind(document)

import "./style.scss"

const UserInfo = ({name, surname, age, isLoggedIn}) => {

/*   let info
  if(isLoggedIn){
    info = <p>JE přihlášený</p>
  } else {
    info = <p>NENÍ přihlášený</p>
  } */

  return ( 
    <div className="userinfo">
      <h2>Informace o uživateli</h2>
      <p>{name} {surname}, vek {age} let</p>

       {isLoggedIn ? <p>JE</p> : <p>NENÍ</p>}

       {/* <p>Uživatel {isLoggedIn ? "je" : "není"} přihlášený</p> */}
       {/* {info} */}
       

    </div>
   );
}
 
export default UserInfo
