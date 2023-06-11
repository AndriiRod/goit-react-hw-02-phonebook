const FindField = ({ value, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};

export default FindField;
