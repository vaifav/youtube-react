import RecommendedCard from "./RecommendedCard";

const Recommended = () => {
	return (
		<div className="py-5">
			{[...Array(30)].map((_, index) => {
				return <RecommendedCard key={index} />;
			})}
		</div>
	);
};

export default Recommended;
