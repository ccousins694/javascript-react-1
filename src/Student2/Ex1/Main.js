import React from 'react'
import './Main.css'
import { Footer } from './Footer'
import { Menu } from './Menu'
import { Header } from './Header'
import { Nav } from './Nav'
import './Main.css' 


export const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Nav />
      <Menu />
      <Footer />
    </div>
  )
}
