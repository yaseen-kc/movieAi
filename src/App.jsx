import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    // Wrap the application in the Provider to make the Redux store available to all components
    <Provider store={appStore}>
      <Body /> {/* Render the main Body component */}
    </Provider>
  );
}

export default App;
