import { Provider } from "react-redux";

import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import store from "./store.js";

function App() {
	return (
		<Provider store={store}>
			<div className="grid grid-flow-row">
				<Navbar />
				<div className="grid grid-cols-10">
					<div className="grid grid-flow-col col-start-1 col-span-10">
						<Sidebar />
						<Body />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
