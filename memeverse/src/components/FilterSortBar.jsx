import { FilterBar, FilterButton } from '../styles/FilterBarStyles';

const FilterSortBar = ({ onFilter, onSort }) => {
  return (
    <FilterBar>
      <FilterButton onClick={() => onFilter('trending')}>Trending</FilterButton>
      <FilterButton onClick={() => onFilter('newest')}>Newest</FilterButton>
      <FilterButton onClick={() => onSort('likes')}>Most Liked</FilterButton>
    </FilterBar>
  );
};

export default FilterSortBar;
