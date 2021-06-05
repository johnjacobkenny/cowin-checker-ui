import "./App.css";
import { useLocalstorage } from "./useLocalstorage";
import DistrictInput from "./DistrictInput";
import CowinResponse from "./CowinResponse";

function App() {
  const [data, setData] = useLocalstorage();

  return (
    <div className="App">
      <DistrictInput data={data} onSave={setData} />
      <CowinResponse data={data} />
    </div>
  );
}

export default App;
