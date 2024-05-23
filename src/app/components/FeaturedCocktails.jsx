import { Card, Text, Grid, Button } from "@nextui-org/react";

const FeaturedCocktails = () => {
  return (
    <div className="featured-cocktails h-screen bg-[#333]">
      <div className="container mx-auto py-24">
        <h1 className="text-white text-6xl py-8 text-center">
          Featured Cocktails
        </h1>

        <div className="cocktail-cards grid grid-cols-4">
          <Card>
            <Text>Test</Text>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCocktails;
