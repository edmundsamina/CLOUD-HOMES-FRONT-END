import { v4 as uuidv4 } from 'uuid';

export default function DropDown( { array, onChange }) {
  return (
    <select className='dropdown' onChange={onChange}>
      {array.map((item) => (
        <option key={uuidv4()} value={item}>{item}</option>
      ))}
    </select>
  );
}
