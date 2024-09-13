import React from 'react'

export default function Header() {
  return (
    <div>
        <header>
        <div class="container">
            <h1 class="logo">Delicious Recipes</h1>
            <nav>
                <div class="menu-icon">&#9776;</div>
                <ul class="nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Recipe</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}
