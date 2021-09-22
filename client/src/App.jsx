//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

//temp
import Temp from "./Components/temp"


function App() {
  return (
    <>
      <HomeLayoutHOC path ="/" exact component = {Temp}/>
    </>
  );
}

export default App;
