export default async function getRecipeFromChefClaude(ingredientsArr) {
  const res = await fetch("/.netlify/functions/getRecipe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredientsArr }),
  });

  const data = await res.json();
  return data.recipe;
}
