import React from "react";
import TopCategoryCard from "./TopCategoryCard";
export default function TopCategories() {
  const categories = [
    {
      id: 1,
      name: "Beach",
      image: "/images/beach.jpg",
    },
    {
      id: 2,
      name: "Mountain",
      image: "/images/mountain.jpg",
    },
    {
      id: 3,
      name: "City",
      image: "/images/city.jpg",
    },
    {
      id: 4,
      name: "Desert",
      image: "/images/desert.jpg",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <h2 className="text-5xl text-left font-bold my-8">Top Categories</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <TopCategoryCard key={category.id} category={category}></TopCategoryCard>
        ))}
      </div>
    </div>
  );
}
