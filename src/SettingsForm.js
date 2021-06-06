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
    <div style={{ marginTop: 32 }}>
      <h2>Enter District ID or Pincode</h2>
      <input
        type="text"
        onChange={handlePincodeOrDistrictIDChange}
        value={pincodeOrDistrictID}
      />
      <input type="button" onClick={handleSaveClick} value="Save and refresh" />
    </div>
  );
}

export default SettingsForm;
