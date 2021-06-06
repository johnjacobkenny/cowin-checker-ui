import "./App.css";
import SettingsForm from "./SettingsForm";
import SearchResults from "./SearchResults";
import UsageTip from "./UsageTip";
import { useHashStorage } from "./useHashStorage";
import InitialTip from "./InitialTip";

function App() {
  const [data, setData] = useHashStorage();

  return (
    <div className="App">
      <h1>Cowin checker</h1>
      <div>Use this app to see available slots for next 5 days</div>
      <SettingsForm data={data} onSave={setData} />
      <InitialTip />
      {/* {data && <UsageTip />} */}
      {data && <SearchResults data={data} />}
      {data && (
        <a href="https://selfregistration.cowin.gov.in/" target="_blank">
          Open COWIN Site
        </a>
      )}
      <div style={{ position: "fixed", bottom: 4 }}>
        Made with ❤️ by{" "}
        <a href="https://kennyj.me/" target="_blank">
          Kenny John Jacob
        </a>
      </div>
    </div>
  );
}

export default App;
