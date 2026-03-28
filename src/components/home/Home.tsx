import { NavLink } from "react-router-dom";

import Video from "./Video";

import useTitle from "../../hooks/useTitle";
import { endPoints } from "../../utils/constants";

const Home = () => {
	useTitle("YouTube");
	return (
		<>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] xlg:grid-cols-[repeat(auto-fill,minmax(500px,1fr))]">
				{[...Array(60)].map((_, index) => (
					<NavLink key={index} to={endPoints.WATCH} end>
						<Video />
					</NavLink>
				))}
			</div>
		</>
	);
};

export default Home;
