import React from 'react'
import Featured from '../components/Featured'
import Delivery from '../components/Delivery'
import TopPicks from '../components/TopPicks'
import Meal from '../components/Meal'
import Categories from '../components/Categories'

function Home({addToCart}) {
  return (
    <div>
              <Featured/>
      <Delivery/>
      <TopPicks  addToCart={addToCart}/>
      <Meal/>
      <Categories/>
    </div>
  )
}

export default Home