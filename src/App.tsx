import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ScrollProgressIndicator height="6px" color="#ff9800" />
      <div style={{ height: "2000px", padding: "20px" }}>
        <h1>Scroll down to see the progress bar</h1>
        {/* Page Content */}
      </div>
    </div>
  );
}
