import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </main>

      <Footer />

    </>

  )
}

export default App
