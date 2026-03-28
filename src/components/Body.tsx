import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Container from "./Container";
import Home from "./home/Home";
import Channel from "./channel/Channel";
import Watch from "./watch/Watch";
import PageNotFound from "./404/PageNotFound";

import { endPoints } from "../utils/constants";

const Body = () => {
	const routes = createBrowserRouter([
		{
			path: endPoints.HOME,
			element: <Container />,
			children: [
				{
					path: endPoints.HOME,
					element: <Home />,
				},
				{
					path: endPoints.CHANNEL,
					element: <Channel />,
				},
				{
					path: endPoints.WATCH,
					element: <Watch />,
				},
			],
			errorElement: <PageNotFound />,
		},
	]);
	return <RouterProvider router={routes} />;
};

export default Body;
