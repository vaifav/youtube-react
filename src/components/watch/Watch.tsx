import Comments from "./Comments";
import Description from "./Description";
// import Recommended from "./Recommended";
import Video from "./Video";

const Watch = () => {
	return (
		<>
			<section className="w-full pl-2 py-4 md:px-1">
				<div className="flex flex-col justify-center md:justify-between md:flex-row">
					<div className="w-full flex flex-col gap-3 md:gap-5">
						<Video />
						<Description />
						<Comments />
					</div>
					{/* <Recommended /> */}
				</div>
			</section>
		</>
	);
};

export default Watch;
