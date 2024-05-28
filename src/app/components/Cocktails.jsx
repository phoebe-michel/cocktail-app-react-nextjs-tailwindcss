import React from "react";
import { FiSearch } from "react-icons/fi";
import FeaturedCocktails from "./FeaturedCocktails";

const Cocktails = () => {
  const data = [
    {
      strCategory: "Ordinary Drinks",
      strThumbnail:
        "https://www.thecocktaildb.com/images/media/drink/f9erqb1504350557.jpg",
    },
    {
      strCategory: "Cocktails",
      strThumbnail:
        "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
    },
    {
      strCategory: "Shots",
      strThumbnail:
        "https://www.thecocktaildb.com/images/media/drink/dbtylp1493067262.jpg",
    },
    {
      strCategory: "Beers",
      strThumbnail:
        "https://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg",
    },
    {
      strCategory: "Homemade Liqueurs",
      strThumbnail:
        "https://www.thecocktaildb.com/images/media/drink/qwxuwy1472667570.jpg",
    },
  ];
  const categories = data.map((drink, index) => {
    return (
      <Card key={index} className="h-max-[300px] border-2 shadow-md">
        <CardBody>
          <Image alt={drink.strCategory} src={drink.strThumbnail}></Image>
        </CardBody>
        <CardFooter className="flex justify-center py-5 text-lg font-medium">
          {drink.strCategory}
        </CardFooter>
      </Card>
    );
  });
  return (
    <section className="cocktails container flex flex-col justify-center mx-auto">
      <div className="relative w-full">
        <FeaturedCocktails />
        {/* <input
          className="absolute bottom-0.5 w-4/6 rounded-lg shadow-xl px-10 py-5 text-lg"
          placeholder="Enter a cocktail name..."
        /> */}

        <div className="search-bar flex justify-center">
          <div className="absolute bottom-0.5 w-4/6 pl-3">
            <span className="absolute inset-y-0 left-5 text-gray-500 flex items-center pl-10">
              <FiSearch size={18} />
            </span>
            <input
              className="placeholder:text-gray-500 block w-full border rounded-md py-5 pl-20 pr-3 shadow-xl focus:outline-none  focus:ring-gray-400 focus:ring-1 sm:text-lg"
              type="text"
              name="search"
              placeholder="Enter a cocktail name..."
            />
          </div>
        </div>
      </div>

      <div className="categories-section container h-screen flex justify-center py-28">
        <div className="px-48">
          <h2 className="text-5xl text-center">Categories</h2>
          <div className="categories grid grid-cols-5 gap-4 py-10">
            {categories}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
