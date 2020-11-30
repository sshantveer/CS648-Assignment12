import React from 'react'
import './App.css'
import Products from './Products'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className="appContainer">
      <section>
        <Products />
      </section>
    </Container>
  )
}

export default App
