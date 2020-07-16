import React from 'react'
import Button from './Button.js'

function RecipeButton(props) {
    const onClick = (e) => {
        fetch('/recipe')
            .then(res => res.json())
            .then(recipe => props.recipeHandler(recipe))
    }

    return (
        <Button label="Generate Recipe" handleClick={onClick} />
    )
}

export default RecipeButton