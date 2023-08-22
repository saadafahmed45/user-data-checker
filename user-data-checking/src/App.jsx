import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))

  }, [])

  // console.log(user);


  const [search, setSearch] = useState('');


  console.log(search);

  return (
    <>
      <header>
        <div className="search">
          <input type="text" placeholder="Search..."

            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="theader">
          <h2>User{user.length}</h2>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
              </tr>
            </thead>
            {
              user.filter((user) => {
                return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search)
              }).map(user => (
                <tbody key={user.id}>
                  <tr >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                </tbody>
              ))
            }

          </table>
        </div>
      </header>

    </>
  )
}

export default App
