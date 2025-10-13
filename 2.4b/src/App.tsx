import UserCard from "./components/userCard/userCard"

const App = () => {
  const user1 = {
    name : "Dejan",
    age : 19,
    statut : "online"
  }

  const user2 = {
    name : "Loic",
    age : 19,
    statut : "offline"
  }

  const user3 = {
    name : "Nathan",
    age : 19,
    statut : "offline"
  }

  return (
    <div>
      <UserCard name={user1.name} age={user1.age} statut={user1.statut}/>
      <UserCard name={user2.name} age={user2.age} statut={user2.statut}/>
      <UserCard name={user3.name} age={user3.age} statut={user3.statut}/>
    </div>

  )
}

export default App