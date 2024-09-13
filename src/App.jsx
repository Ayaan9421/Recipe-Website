import { useState } from 'react'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import Footer from './assets/components/Footer'
import RecipeCard from './assets/components/RecipeCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <section class="recipes">
        <h1>Featured Recipes</h1>
        <div class="recipe-section">
          <RecipeCard
            imgsrc="images/dish-1.jpg"
            name="Spaghetti Carbonara"
            describe="Creamy pasta with bacon, cheese, and egg sauce."
          />
          <RecipeCard
            imgsrc="images/dish-2.jpg"
            name="Chicken Tikka Masala"
            describe="Grilled chicken in a spicy, flavorful tomato sauce."
          />
          <RecipeCard
            imgsrc="images/dish-3.jpg"
            name="Caprese Salad"
            describe="Fresh tomatoes, mozzarella, basil, drizzled with olive oil"
          />
          <RecipeCard
            imgsrc="images/dish-4.jpg"
            name="Beef Tacos"
            describe="Seasoned beef, salsa, and toppings in crispy taco shells"
          />
          <RecipeCard
            imgsrc="images/fish-dish.jpg"
            name="Fish Dish"
            describe="Tender fish fillet with herbs, lemon, and spices."
          />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
