import { useEffect, useState } from "react";
import { getCowinData } from "./cowin-checker";

function SearchResults({ data }) {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState("");

  useEffect(() => {
    (async () => {
      if (!data) return;

      const response = await getCowinData(data.pincodeOrDistrictID);
      if (response.trim() === "")
        setResponse("No open slots for the next 5 days");
      else setResponse(response);
      setLoading(false);
    })();
  }, [data]);

  return (
    <div style={{ marginTop: 32 }}>
      <pre>
        {isLoading ? <h2>Loading</h2> : <h2>Results</h2>}
        {response}
      </pre>
    </div>
  );
}

export default SearchResults;
