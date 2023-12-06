import { FilterContainer, FilterTitle } from "./Filter.Styled";

const Filter = ({ filter, onChangeFilter }) => (
  <FilterContainer>
    <FilterTitle>Find contact by name</FilterTitle>
    <input
      type="text"
      value={filter}
      placeholder="Find by name"
      onChange={evt => {
        onChangeFilter(evt.target.value);
      }}
    />
  </FilterContainer>
);

export default Filter;
