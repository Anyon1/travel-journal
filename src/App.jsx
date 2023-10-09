import React from "react"
import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'
import data from '../data.js'

function App() {
    const cards = data.map(item =>{
        return (
            <Card
                key={item.id}
                {...item}
                />
        )
    })
  return (
    <div className="content">
        <Nav />
        <div>
            {cards}
        </div>

    </div>
  )
}

export default App
