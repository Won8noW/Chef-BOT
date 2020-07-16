import React, { useState } from 'react'
import logo from './res/robochef.jpeg'
import Button from './Button.js'
import RecipeButton from './RecipeButton.js'
import Row from './Row.js'
import './App.css'

function App() {
  const [recipe, setRecipe] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        {recipe
         ? <div>
          <h2>{recipe.title}</h2>
          <p>{recipe.text}</p>
          <Button label="No thanks :(" handleClick={() => setRecipe(null)}/>
         </div> 
         : <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p> 
            Generate recipies by scanning your food
          </p>

          <Row>
            <RecipeButton recipeHandler={(recipe) => setRecipe(recipe)} />
            <Button label="Scan Food" />
          </Row>  
          </div>
        }
      </header>
    </div>
  )
}

export default App
