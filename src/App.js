import "./App.css";
import SettingsForm from "./SettingsForm";
import SearchResults from "./SearchResults";
import UsageTip from "./UsageTip";
import { useHashStorage } from "./useHashStorage";
import InitialTip from "./UsageTip";

function App() {
  const [data, setData] = useHashStorage();

  return (
    <div className="App">
      <InitialTip />
      <SettingsForm data={data} onSave={setData} />
      {data && <UsageTip />}
      {data && <SearchResults data={data} />}
      {data && (
        <a href="https://selfregistration.cowin.gov.in/" target="_blank">
          Open COWIN Site
        </a>
      )}
    </div>
  );
}

export default App;
