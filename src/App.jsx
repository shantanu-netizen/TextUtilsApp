import React from 'react'
import TextForm from './components/TextForm'
import NavBar from './components/NavBar'
import About from './components/About'

export default function App() {

  return (
    <>
      <NavBar />
      <div className='container'>
        <TextForm />

      </div>
    </>

  )
}
