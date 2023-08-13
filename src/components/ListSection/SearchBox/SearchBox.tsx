import { Styled } from "./SearchBox.styles";

export const SearchBox = (handleFilterChange) => {
  return (
    <Styled.SearchBox>
      <h2>Search for your Favorites</h2>
      <input
        type="text"
        placeholder="Filter My Favorites"
        onChange={handleFilterChange}
      />
    </Styled.SearchBox>
  );
};
