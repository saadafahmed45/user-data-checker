import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Users } from './Components/Users'
import Home from './Components/Home/Home'

function App() {

  const [product, setProduct] = useState('')


  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => setProduct(data.products))






  const [quary, setQuary] = useState('');




  // console.log(Users.filter(user => user.name.includes(quary)));

  const search = (data) => {
    return data.filter((item) => item.title.toLowerCase().includes(quary))
  }

  return (
    <>
      <header>

        <div className="container">
          <div className="search__bar">
            <h1>Search Your users..</h1>
            <h1>{product.length}</h1>
            <input type="text"
              placeholder="Search.."
              className="search"
              onChange={e => setQuary(e.target.value)} />
          </div>
          {/* <div className="list__main">
            {
              Users.filter(user => user.name.toLowerCase().includes(quary)).map(user => (
                <ul>
                  <li key={user.id}>{user.name}</li>
                  <h3>{user.email}</h3>
                </ul>
              ))
            }
          </div> */}
          {/* <Home data={search(Users)} /> */}

          <Home data={product} />
        </div>
      </header>

    </>
  )
}

export default App
