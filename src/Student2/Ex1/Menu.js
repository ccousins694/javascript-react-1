import React from 'react'
import { Food } from './Food'
import { Drink } from './Drink'
import { Dessert } from './Dessert'

export const Menu = () => {
  return (
    <div>
        <h1>Menu</h1>
        <Food />
        <Drink />
        <Dessert />
    </div>
  )
}
