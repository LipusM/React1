const c = console.log.bind(document);

import "./style.scss";
import classnames from "classnames"

const UserInfo = (props) => {
  const { name, surname, age, isLoggedIn } = props;

/*   let userInfoClass = "userinfo"
  if(isLoggedIn){
    userInfoClass += "loggedIn"
  } else {
    userInfoClass += "notLoggedIn"
  } */

/*   let info
  if(isLoggedIn){
      info = <p>JE přihlášený</p>
  } else {
      info = <p>NENÍ přihlášený</p>
  } */

  return (
    <div className={ classnames("userinfo", 
    {loggedIn: true, notLoggedIng: true}) 
    }>
      <h2>Informace o uživateli</h2>
      <p>
        {name} {surname} vek {age} let
      </p>

{/*       {info}
      {isLoggedIn ? <p>JE</p> : <p>NENI</p>}
      <p>Uživatel {isLoggedIn ? "JE" : "NENI"} přihlášený.</p> */}

{/*       {isLoggedIn ? <p>JE</p> : null}
      {!isLoggedIn && <p>NENI</p>} */}

    </div>
  );
};

export default UserInfo;
