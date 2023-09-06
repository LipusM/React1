const c = console.log.bind(document)

import "./style.scss"

const dayElements = [
    <li>pondělí</li>,
    <li>úterý</li>,
    <li>středa</li>,
    <li>čtvrtek</li>,
    <li>pátek</li>,
  ];

  const days = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek'];

const SeznamyJSX = () => {

    return (
        <>
            <h1>Pracovní dny</h1>
            <ul>{days.map(day => <li>{day}</li> )}</ul>
        </>
    )

}

export default SeznamyJSX