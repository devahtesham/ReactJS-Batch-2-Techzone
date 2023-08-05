import { useState } from 'react'
// import { HomePage } from "./HomePage"
// import { AboutPage } from "./HomePage"
import HomePage from "./components/Home/HomePage"
import AboutPage from './components/About/About'
function App() {
  return <div>
    <h1>Hi react</h1>
    {/* calling of component */}
    <HomePage />
    <AboutPage />
    {/* <Ahtesham /> */}
  </div>

}

export default App
