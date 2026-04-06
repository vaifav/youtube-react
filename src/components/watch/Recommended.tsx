import RecommendedCard from "./RecommendedCard";

const Recommended = () => {
	return (
		<div className="flex flex-col py-5 lg:gap-3 lg:grow lg:py-0">
			{[...Array(30)].map((_, index) => {
				return <RecommendedCard key={index} />;
			})}
		</div>
	);
};

export default Recommended;
