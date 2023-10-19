import './App.css'
import UserContextProvider from './contex/UserContexProvider'
import Login from './components/login'
import Profile from './components/profile'
function App() {

  return (
    <UserContextProvider>
      <h1>Gobinda dey</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
