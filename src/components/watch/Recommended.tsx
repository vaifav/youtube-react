import { NavLink } from "react-router-dom";
import { endPoints } from "../../utils/constants";
import RecommendedCard from "./RecommendedCard";

const Recommended = () => {
	return (
		<>
			<div className="flex flex-col bg-amer-600 md:shrink-0">
				{[...Array(10)].map((_, index) => (
					<NavLink key={index} to={endPoints.WATCH}>
						<RecommendedCard />
					</NavLink>
				))}
			</div>
		</>
	);
};

export default Recommended;
