export default function DropDown( { array, onChange }) {
  return (
    <select onChange={onChange}>
      {array.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
}
