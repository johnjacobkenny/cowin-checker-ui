import { useEffect, useState } from "react";

function SettingsForm({ data, onSave }) {
  const [pincodeOrDistrictID, setPincodeOrDistrictID] = useState("");

  useEffect(() => {
    if (data) {
      setPincodeOrDistrictID(data.pincodeOrDistrictID);
    }
  }, [data]);

  const handlePincodeOrDistrictIDChange = (ev) => {
    setPincodeOrDistrictID(ev.target.value);
  };

  const handleSaveClick = () => {
    const newData = {
      ...data,
      pincodeOrDistrictID,
    };

    onSave(newData);
  };
  return (
    <>
      <label>Enter District ID or Pincode</label>
      <br />
      <input
        type="text"
        onChange={handlePincodeOrDistrictIDChange}
        value={pincodeOrDistrictID}
      />
      <br />
      <input type="button" onClick={handleSaveClick} value="Save and refresh" />
    </>
  );
}

export default SettingsForm;
