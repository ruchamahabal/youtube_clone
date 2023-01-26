import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Body from "./components/Body";
import VideoPage from "./components/watch/VideoPage";

import reportWebVitals from "./reportWebVitals";

const routerConfig = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Body />,
			},
			{
				path: "/watch",
				element: <VideoPage />,
			},
		],
	},
];

const router = createBrowserRouter(routerConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
