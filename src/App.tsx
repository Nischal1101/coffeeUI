import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Transform from "./components/test/Transform";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
      <div id="home">
        <Home />
      </div>
      <div className="menu">
        
      </div>
      </main>
      {/* <Transform /> */}
    </>
  );
};

export default App;
