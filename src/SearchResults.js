import { useEffect, useState } from "react";
import { getCowinData } from "./cowin-checker";

function SearchResults({ data }) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    (async () => {
      if (!data) return;

      const response = await getCowinData(data.pincodeOrDistrictID);
      setResponse(response);
    })();
  }, [data]);

  return <pre>{response}</pre>;
}

export default SearchResults;
