import { EllipsisVertical, CircleUserRound } from "lucide-react";
import { DUMMY_IMAGE } from "../../utils/constants";

const Video = () => {
	return (
		<article className={`py-2 md:rounded-2xl md:px-2`}>
			<div className="w-full h-5/6 rounded-[inherit] relative after:content-['22:40'] after:absolute after:bottom-0 after:right-0 after:bg-neutral-950/70 after:px-2 after:py-1 after:m-1 after:rounded-lg after:font-semibold after:text-[0.8rem]">
				<img className="w-full h-full object-cover rounded-[inherit]" src={DUMMY_IMAGE} alt="dummy" />
			</div>
			<div className="flex justify-between mt-2 px-1 md:mt-4 md:px-0">
				<div className="flex gap-3">
					<div className="w-8 h-8 rounded-full">
						<CircleUserRound className="h-full w-full object-cover stroke-1" />
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="leading-5 font-semibold">What's your religion? 100 Russians.</h1>
						<div className="flex items-center flex-wrap gap-0.5 *:text-[0.8rem] *:font-medium *:text-neutral-500 md:flex-col md:items-baseline">
							<h6>The New Travels </h6>
							<span className="md:hidden text-neutral-500">•</span>
							<h6>6.2M views • 1 year ago</h6>
						</div>
					</div>
				</div>
				<div>
					<EllipsisVertical />
				</div>
			</div>
		</article>
	);
};

export default Video;
