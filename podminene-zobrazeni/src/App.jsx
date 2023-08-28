import './App.css'
import UserInfo from './components/UserInfo'

const App = () => {
  
  return (
    <>
      <UserInfo name="Jarda" surname="Vomáčka" age={28} isLoggedIn={false}/>
    </>
  )

}

export default App
