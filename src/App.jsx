import React from 'react'
import './App.css'
import TextForm from './components/TextForm'
import NavBar from './components/NavBar'
import About from './components/About'

export default function App() {

  return (
    <>
      <NavBar />
      <main className="app-content">
        <TextForm />
      </main>
    </>

  )
}
