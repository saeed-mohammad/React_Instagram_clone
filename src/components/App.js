import "../style/App.scss";
import Cards from "./Cards";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Cards />
          <SideBar />
        </div>
      </main>
    </div>
  );
}

export default App;
