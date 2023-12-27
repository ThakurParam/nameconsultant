import "./App.css";
import { Blogs } from "./components/Blogs";
import { Chart1 } from "./components/Chart1";
import { Chart2 } from "./components/Chart2";
// import { Chart3 } from "./components/Chart3";
import { Chart4 } from "./components/Chart4";
import { Footer1 } from "./components/Footer1";
import { Footer2nd } from "./components/Footer2nd";
import { Navbar } from "./components/Navbar";
import { Toptab } from "./components/Toptab";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Toptab />
      <Chart1 />
      <Chart2 />
      {/* <Chart3 /> */}
      <Chart4 />
      <Blogs />

      <Footer1 />
      <Footer2nd />
    </div>
  );
}

export default App;
