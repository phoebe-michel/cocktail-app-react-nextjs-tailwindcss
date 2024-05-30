import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

async function getData() {
  //   const res = await fetch(
  //     "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  //   );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  //   const apiUrl =
  //     "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17175";

  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  try {
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    const data = await res.json();
    const cocktail = data.drinks[0];

    return cocktail;
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

const RecipeCard = async () => {
  let drink = await getData();

  const numOfIngredients = Object.keys(drink).length;

  const ingredients = [];

  for (let i = 1; i <= numOfIngredients; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (drink[ingredientKey] && drink[measureKey]) {
      const obj = {
        ingredient: drink[ingredientKey],
        measure: drink[measureKey],
      };

      ingredients.push(obj);
    }
  }

  return (
    <section className="container mx-auto px-44 gap-24 py-28 w-full grid grid-cols-2 justify-center">
      <Image
        className=""
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
      ></Image>
      <section className="recipe place-self-center max-h-screen">
        <div>
          <h4 className="text-lg highlight font-bold">Featured Cocktail</h4>
          <h1 className="text-5xl font-semibold font-serif">
            {drink.strDrink}
          </h1>
          <h3 className="text-lg text-zinc-400 font-light">
            {drink.strCategory}
          </h3>
          <div className="overflow-y-scroll max-h-[300px] py-5">
            <div className="ingredients py-5">
              <h3 className="font-medium text-2xl text-zinc-800 pb-3">
                Ingredients
              </h3>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.measure} {ingredient.ingredient}
                </li>
              ))}
            </div>
            <div className="instructions py-5">
              <h3 className="font-medium text-2xl text-zinc-800 pb-3">
                Instructions
              </h3>
              {drink.strInstructions}
            </div>
          </div>
          <div className="py-10">
            <button className="bg-[#ff0033] text-white shadow-md rounded-lg text-lg px-5 py-2 cursor-pointer">
              Shuffle Recipe
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RecipeCard;
