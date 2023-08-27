import React from 'react'
// import { HomePage } from "./HomePage"
// import { AboutPage } from "./HomePage"
import HomePage from "./components/Home/HomePage"
import AboutPage from './components/About/AboutPage'
import Contact from './components/Contact/Contact'
import Counter from './components/Counter/Counter'
import CompA from './components/LearningProps/CompA'
import { MyComp, MyCompSection, MyCompSectionContainer } from './components/useEffect'
import GithubFinder from './components/GithubFinder/GithubFinder'
import Router from './Router/Router'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import "../src/App.css"
// import MyCompSectionContainer from './components/useEffect/MyCompSectionContainer'
// import MyCompSection from './components/useEffect/MyCompSection'
// import MyComp from './components/useEffect/MyComp'

function App() {
  return <>
    {/* <AboutPage /> */}
    {/* <Contact /> */}
    {/* <Counter /> */}
    {/* <CompA /> */}

    {/* <MyCompSectionContainer />
    <MyCompSection />
    <MyComp /> */}

    {/* <MyCompSectionContainer /> */}
    {/* <MyComp />
    <MyCompSection /> */}
    {/* <GithubFinder /> */}
    {/* <Header /> */}
    <Router />
</>


}

export default App
