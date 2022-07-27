import Loading from "./components/Loading";
import LoadingArea from "./components/LoadingArea";
import Timer from "./components/Timer";
import Clock from "./components/Clock";
import Comp from "./components/Comp";
import Handlers from "./components/Handlers";
import Login from "./components/Login";
import Refs from "./components/Refs";

function App() {
  return (
    <div>
      <Loading />
      <LoadingArea />
      <Timer s={60} />
      <Timer s={30} />
      <Clock />
      <Comp />
      <Handlers />
      <Login />
      <Refs />
    </div>
  );
}

export default App;
