import { useEffect, useState } from "react";
import { deSerialize, serialize } from "./util";

function useHashStorage() {
  const [data, setData] = useState();

  const updateData = (data) => {
    const hash = serialize(data);
    window.location.hash = hash;
    setData(data);
  };

  useEffect(() => {
    if (window.location.hash) {
      setData(deSerialize(window.location.hash.split("#")[1]));
    }
  }, []);

  return [data, updateData];
}

export { useHashStorage };
