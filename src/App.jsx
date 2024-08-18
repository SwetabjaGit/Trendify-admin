import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
const App = () => {
  return (
    <div>
      {/* <h1>Trendify Admin</h1> */}

      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App;