import React, { useState } from "react";
import { Link } from "react-router-dom";

const allCollections = [
  // 🔶 GOLD (4)
  {
    displayName: "Gold Stripes Bracelet (Kids)",
    title: "Stripes Kids Chain",
    image: "./images/g1.jpg",
    type: "Gold",
    material: "gold",
    collectionType: "stripes",
    category: "kids",
  },
  {
    displayName: "Gold Diamond Thread Bracelet (Women)",
    title: "Diamonds Thread Adults",
    image: "./images/g2.jpg",
    type: "Gold",
    material: "gold",
    collectionType: "stripes",
    category: "women",
  },
  {
    displayName: "Gold OM Swastik Bracelet",
    title: "Side Om Swastik Thread",
    image: "./images/g3.jpg",
    type: "Gold",
    material: "gold",
    collectionType: "swastik",
    category: "women",
  },
  {
    displayName: "Gold Nazariya Bracelet (Kids)",
    title: "Nazariya Kids Gold",
    image: "./images/g4.jpg",
    type: "Gold",
    material: "gold",
    collectionType: "nazariya",
    category: "kids",
  },

  // ⚪ SILVER (10)
  {
    displayName: "Silver Swastik Bracelet (Women)",
    title: "Swastik Double Chain",
    image: "./images/s1.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "swastik",
    category: "women",
  },
  {
    displayName: "Silver Swastik Bracelet (Adults)",
    title: "Swastik Adults",
    image: "./images/s2.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "swastik",
    category: "adults",
  },
  {
    displayName: "Silver Swastik Nazariya (Kids)",
    title: "Swastik Nazariya Kids",
    image: "./images/s3.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "nazariya",
    category: "kids",
  },
  {
    displayName: "Silver Swastik Bracelet (Kids)",
    title: "Swastik Kids",
    image: "./images/s4.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "swastik",
    category: "kids",
  },
  {
    displayName: "Silver Stripes Bracelet (Adults)",
    title: "Stripes Side Swastik",
    image: "./images/s5.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "stripes",
    category: "adults",
  },
  {
    displayName: "Silver Stripes Nazariya (Kids)",
    title: "Stripes Nazariya Kids",
    image: "./images/s6.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "stripes",
    category: "kids",
  },
  {
    displayName: "Silver Stripes Bracelet (Kids)",
    title: "Stripes Kids",
    image: "./images/s7.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "stripes",
    category: "kids",
  },
  {
    displayName: "Silver Stripes Bracelet (Adults)",
    title: "Stripes Adults",
    image: "./images/s8.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "stripes",
    category: "adults",
  },
  {
    displayName: "Silver Plain Bracelet (Kids)",
    title: "Plain Kids",
    image: "./images/s9.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "plain",
    category: "kids",
  },
  {
    displayName: "Silver Plain Bracelet (Adults)",
    title: "Plain Adults",
    image: "./images/s10.jpg",
    type: "Silver",
    material: "silver",
    collectionType: "plain",
    category: "adults",
  },
];

const CollectionSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCollections = showAll
    ? allCollections
    : allCollections.slice(0, 4);

  return (
    <section className="bg-gradient-to-b from-[#fbf5ec] via-[#fffaf5] to-[#f7ede0] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#af9b7d] font-semibold mb-4">
            Curated Selections
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1a1a1a] tracking-tight">
            Discover the Sacred Craft
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleCollections.map((item, index) => (
            <Link
              key={index}
              to={`/shop/${item.material}/${item.collectionType}/${item.category}`}
              className="block"
            >
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_35px_95px_-55px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_40px_110px_-55px_rgba(0,0,0,0.35)]">
                <div className="relative overflow-hidden h-72">
                  <img
                    src={item.image}
                    alt={item.displayName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-flex items-center justify-center rounded-full bg-[#121212]/90 px-4 py-2 text-[10px] tracking-[0.4em] uppercase text-white">
                      View Collection
                    </span>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-base font-serif font-semibold text-[#121212] mb-3 leading-snug">
                    {item.displayName}
                  </h3>
                  <span
                    className={`inline-block text-[10px] px-3 py-1 rounded-full uppercase tracking-[0.35em] ${
                      item.type === 'Gold'
                        ? 'bg-[#f7e6c7] text-[#8d6f3f]'
                        : 'bg-[#ece8e0] text-[#525252]'
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center rounded-full border border-[#1a1a1a] bg-transparent px-8 py-3 text-[10px] tracking-[0.4em] uppercase font-bold text-[#1a1a1a] transition-all hover:bg-[#1a1a1a] hover:text-white"
          >
            VIEW ALL COLLECTIONS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;