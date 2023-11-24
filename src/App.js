import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider} from "react-redux"

function App() {
  return (
    <div>
      <Provider store={store}>
      <Head/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
