import React from "react";

const FilterSortBar = React.memo(({ setCategory, setSortBy }) =>  {
    return (
      <div className="flex flex-wrap justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded shadow mb-4">
        {/* Filter by Category */}
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded bg-white dark:bg-gray-700"
        >
          <option value="">All Categories</option>
          <option value="trending">Trending</option>
          <option value="new">New</option>
          <option value="classic">Classic</option>
          <option value="random">Random</option>
        </select>
  
        {/* Sort by Option */}
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 rounded bg-white dark:bg-gray-700"
        >
          <option value="">Sort By</option>
          <option value="likes">Most Liked</option>
          <option value="date">Newest</option>
          <option value="comments">Most Commented</option>
        </select>
      </div>
    );
  });
  
  export default FilterSortBar;
  