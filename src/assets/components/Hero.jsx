import React from 'react'

export default function Hero() {
  return (
    <div>
        <section class="hero">
            <div class="hero-section">
                <h2>Welcome to our Recipe Collection!</h2>
                <p>Search mouth watering recipes to satisfy your carving.</p>
                <form action="#" class="search-box">
                    <input type="text" placeholder="Search Recipe" />
                    <button type="submit">Search</button>
                </form>
            </div>
        </section>
    </div>
  )
}
