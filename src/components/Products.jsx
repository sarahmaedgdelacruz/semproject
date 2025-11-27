const Products = () => {
  const products = [
    {
      name: "Artisan Breads",
      desc: "Freshly baked with premium ingredients.",
      img: "./src/elements/waffles.jpg",
      btn: "View Selection",
    },
    {
      name: "Sweet Pastries",
      desc: "Indulge in our heavenly sweet treats.",
      img: "./src/elements/chococake.jpg",
      btn: "Explore Pastries",
    },
    {
      name: "Custom Cakes",
      desc: "Crafted for your special celebrations.",
      img: "./src/elements/cookies.jpg",
      btn: "Get Custom Cake",
    },
  ];

  return (
    <section className="bg-pink-50 py-16 px-6">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-pink-600 mb-12">
        Explore Products 🎂
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6 text-center">
              <h2 className="font-bold text-xl text-pink-700">{item.name}</h2>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>

              <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full font-semibold transition">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
