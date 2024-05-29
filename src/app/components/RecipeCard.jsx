import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

async function getData() {
  //   const res = await fetch(
  //     "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  //   );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  const apiUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17175";
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const cocktail = data.drinks[0];

    return cocktail;
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

const RecipeCard = async () => {
  const drink = await getData();
  return (
    <section className="container mx-auto px-44 gap-24 py-28 w-full grid grid-cols-2 justify-center">
      <Image
        className=""
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
      ></Image>
      <div className="recipe">
        <div className="">
          <h4 className="text-lg highlight font-bold">Featured Cocktail</h4>
          <h1 className="text-5xl font-semibold font-serif">
            {drink.strDrink}
          </h1>
          <h3 className="text-lg text-zinc-400 font-light">
            {drink.strCategory}
          </h3>
        </div>

        <div className="instructions py-10 text-xl">
          {drink.strInstructions}
        </div>
      </div>
    </section>
  );
};

export default RecipeCard;
