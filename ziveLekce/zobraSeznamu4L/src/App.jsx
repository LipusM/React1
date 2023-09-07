import './App.css'

const mujElement = <p>Toto je text</p>
const text = "Hahaha"
const seznamElementu = [
  <p>Prvni</p>,
  <p>Druhý</p>,
  <p>Třetí</p>,
  <p>Čtvrtý</p>,
  <p>Pátý</p>
]

const ovoce = ["Jablko", "Hruška", "Jahůdka", "Meloun", "Kokos"]

const osoby = [
  {id: 1, jmeno: "Alena", prijmeni: "Krása", vek: 24},
  {id: 2, jmeno: "Jan", prijmeni: "Novak", vek: 54},
  {id: 3, jmeno: "Kateřina", prijmeni: "Blahova", vek: 15},
]

const Osoba = ({jmeno, prijmeni, vek, id})=> {
  return (
    <div className='osoba'>
          <p>{jmeno} {prijmeni} <br />
          Vek: {vek} let</p>
       </div>
  )
}


const Osoba2 = ({osoba})=> {
  return (
    <div className='osoba'>
          <p>{osoba.jmeno} {osoba.prijmeni}</p>
          <p>Vek: {osoba.vek} let</p>
       </div>
  )
}

function App() {

  return (
    <>
      <h1>Seznamy</h1>

      {/* {osoby.map( osoba => <Osoba2 osoba={osoba}/> )} */}

      {osoby
      .filter(osoba => osoba.vek > 10)
      .map( osoba => 
      <Osoba 
      key={osoba.id}
      jmeno={osoba.jmeno} 
      prijmeni={osoba.prijmeni}
      vek={osoba.vek}
      /> 
      )} 

{/*       <ul>
      {ovoce.map(kousek => <li>{kousek}</li> )}
      </ul> */}
    </>
  )
}

export default App
