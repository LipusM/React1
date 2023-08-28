import './App.css'
import UserInfo from './components/UserInfo'

const App = () => {
  
  return (
    <>
      <UserInfo name="Jarda" surname="Vomáčka" age={28} isLoggedIn={false}/>
      <UserInfo name="Jarda" surname="Vomáčka" age={28} isLoggedIn={true}/>
    </>
  )

}

export default App
