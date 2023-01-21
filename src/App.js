import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoPage from "./components/watch/VideoPage.js";

import store from "./store.js";

const routerConfig = [
	{
		path: "/",
		element: <Body />,
	},
	{
		path: "/watch",
		element: <VideoPage />,
	},
];

const router = createBrowserRouter(routerConfig);

function App() {
	return (
		<Provider store={store}>
			<div className="grid grid-flow-row">
				<Navbar />
				<div className="grid grid-cols-10">
					<div className="grid grid-flow-col col-start-1 col-span-10">
						<Sidebar />
						<RouterProvider router={router} />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
