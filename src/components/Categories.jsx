import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div className="px-4 border border-secondary rounded-2xl py-6">
      <h1 className="text-lg font-bold mb-4 text-[--color-primary]">
        All Categories ({categories.length})
      </h1>

      {/* Categories container - Responsive */}
      <div
        className="
          flex md:grid md:grid-cols-2 md:gap-3
          space-x-3 md:space-x-0
          overflow-x-auto md:overflow-visible
          scrollbar-hide
        "
      >
        {/* Dynamic Categories */}
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `shrink-0 px-4 py-2 rounded-lg border text-base font-medium transition
              ${
                isActive
                  ? "bg-secondary text-white"
                  : "bg-[--color-accent]/10 text-[--color-accent] hover:bg-secondary hover:text-white"
              }
              md:w-full`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
