const Filter = ({ filter, onChangeFilter }) => (
  <div>
    Find contact by name
    <input
      type="text"
      value={filter}
      placeholder="Find by name"
      onChange={evt => {
        onChangeFilter(evt.target.value);
      }}
    />
  </div>
);

export default Filter;
