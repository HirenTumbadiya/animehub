import React, { useState } from 'react';

const CategoryCard = ({ category, onClick }) => {
  return (
    <div className="category-card" onClick={() => onClick(category)}>
      <h3 className="text-xl font-bold">{category}</h3>
    </div>
  );
};

const CategoryDetail = ({ category }) => {
  return (
    <div className="category-detail">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      {/* Add additional details about the category */}
    </div>
  );
};

const AnimeWebsite = () => {
  const categories = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Slice of Life',
    'Fantasy',
    'Magic',
    'Supernatural',
    'Horror',
    'Mystery',
    'Psychological',
    'Romance',
    'Sci-Fi',
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Categories</h2>
      <div className="grid gap-4 grid-cols-3">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            onClick={handleCategoryClick}
          />
        ))}
      </div>
      {selectedCategory && <CategoryDetail category={selectedCategory} />}
    </div>
  );
};

export default AnimeWebsite;
