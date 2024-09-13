import React from 'react'

export default function RecipeCard(props) {
    return (
        <div className='recipe-card'>
            <img src={props.imgsrc} />
            <h2>{props.name}</h2>
            <p>{props.describe}</p>
            <a href="#">View Recipe</a>
        </div>
    )
}
