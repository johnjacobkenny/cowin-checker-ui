import { useEffect, useState } from "react";

function DistrictInput({ data, onSave }) {
  const [text, setText] = useState(data);

  useEffect(() => {
    setText(data);
  }, [data]);

  const handleTAChange = (ev) => {
    setText(ev.target.value);
  };

  const handleSaveClick = () => onSave(text);
  return (
    <>
      <input type="text" onChange={handleTAChange} value={text} />
      <input type="button" onClick={handleSaveClick} value="Save" />
    </>
  );
}

export default DistrictInput;
