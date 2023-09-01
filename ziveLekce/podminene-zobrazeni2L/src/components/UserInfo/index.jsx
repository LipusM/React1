const c = console.log.bind(document)

import "./style.scss"
import classnames from "classnames"

const UserInfo = ({name, surname, age, isLoggedIn}) => {

/*   let info
  if(isLoggedIn){
    info = <p>JE přihlášený</p>
  } else {
    info = <p>NENÍ přihlášený</p>
  } */

  {/* <div className={isLoggedIn ? "userinfo loggedIn" : "userinfo notLoggedIn"}></div> */}

  return ( 
    <div className={classnames("userinfo", {
      loggedIn: isLoggedIn,
      notLoggedIn: !isLoggedIn,
    })}>
      <h2>Informace o uživateli</h2>
      <p>{name} {surname}, vek {age} let</p>

       {isLoggedIn ? <p>JE</p> : <p>NENÍ</p>}

       {/* <p>Uživatel {isLoggedIn ? "je" : "není"} přihlášený</p> */}
       {/* {info} */}
       

    </div>
   );
}
 
export default UserInfo
