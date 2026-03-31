import RecommendedCard from "./RecommendedCard";

const Recommended = () => {
	return (
		<div className="">
			{[...Array(30)].map((_, index) => {
				return <RecommendedCard key={index} />;
			})}
		</div>
	);
};

export default Recommended;
