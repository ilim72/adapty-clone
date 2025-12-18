'use client';

import { useState } from 'react';

export default function CategoryFilter({ categories = [], onCategoryChange }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (slug) => {
    setActiveCategory(slug);
    if (onCategoryChange) {
      onCategoryChange(slug);
    }
  };

  return (
    <div className="mb-space-xl">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-2">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`
              shrink-0 px-4 py-2 rounded-md text-sm font-medium
              transition-all duration-200 whitespace-nowrap
              ${
                activeCategory === 'all'
                  ? 'bg-text-primary text-white'
                  : 'bg-surface-elevated text-text-secondary hover:bg-surface-hover'
              }
            `}
          >
            Все статьи
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.slug)}
              className={`
                shrink-0 px-4 py-2 rounded-md text-sm font-medium
                transition-all duration-200 whitespace-nowrap
                ${
                  activeCategory === category.slug
                    ? 'bg-text-primary text-white'
                    : 'bg-surface-elevated text-text-secondary hover:bg-surface-hover'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
