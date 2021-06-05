import { useEffect, useState } from "react";

function useLocalstorage() {
  const [data, setData] = useState("");

  useEffect(() => {
    const lsData = localStorage.getItem("data");
    if (lsData) {
      setData(JSON.parse(lsData));
    }
  }, []);

  return [
    data,
    (newData) => {
      localStorage.setItem("data", JSON.stringify(newData));
      setData(newData);
    },
  ];
}

export { useLocalstorage };
