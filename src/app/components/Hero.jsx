const Hero = () => {
  return (
    <section className="hero container-xl mx-auto h-screen">
      <div className="absolute top-0 bg-[#333]/[.4] w-full h-screen shadow-2xl flex flex-col justify-center items-center text-center space-y-5">
        {/* Heading Text */}
        <div className="">
          <h1 className="hero-heading text-4xl lg:text-7xl px-4 mb-4 highlight">
            Code & Cocktails <br />
          </h1>
          <h2 className="sub-heading mx-auto text-3xl mb-6 text-[#e5e5e5] w-[550px]">
            A Fusion of Artistry and Technology to Craft Your Perfect Drink
          </h2>
        </div>

        {/* Search */}
        <div className="flex justify-center">
          <input
            className="md:w-96 w-full rounded-l-full px-8 py-2"
            placeholder="Enter a cocktail name..."
          />
          <button className="bg-[#ff0033] text-[#e5e5e5] hover:text-white rounded-r-full text-xl px-8 py-2 cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
