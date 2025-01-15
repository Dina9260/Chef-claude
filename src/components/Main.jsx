import IngredientsList from "../components/IngredientsList";
import ClaudeRecipe from "../components/ClaudeRecipe";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai";
import React from "react";

export default function Main(){
    const [ingredients, setIngredients] = React.useState(
        ["chicken", "all the main spices", "corn", "heavy cream", "pasta"]
    )
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return(
        <main>
            <form action={addIngredient} className="ingredients-form">
                <input 
                    name="ingredient"  
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"/>
                <button>
                    + Add Ingredient
                </button>
                {ingredients.length > 0 &&
                    <IngredientsList
                        ingredients={ingredients}
                        getRecipe={getRecipe}
                    />
                }

                {recipe && <ClaudeRecipe recipe={recipe} />}
            </form>
        </main>
    )
}