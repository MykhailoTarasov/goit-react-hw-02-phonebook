import { FilterContainer, FilterInput, FilterTitle } from "./Filter.Styled";

const Filter = ({ filter, onChangeFilter }) => (
  <FilterContainer>
    <FilterTitle>Find contact by name</FilterTitle>
    <FilterInput
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
