import { Provider } from "react-redux";
import reduxStore from "../configs/reduxStore";
import Body from "./Body";

const App = () => {
	return (
		<Provider store={reduxStore}>
			<Body />
		</Provider>
	);
};

export default App;
