import { EllipsisVertical, CircleUserRound } from "lucide-react";
import { DUMMY_IMAGE } from "../../utils/constants";

const Video = () => {
	return (
		<article className="bg-amber-70 rounded-2xl p-2">
			<div className="w-full h-5/6 rounded-2xl">
				<img className="w-full h-full object-cover rounded-[inherit]" src={DUMMY_IMAGE} alt="dummy" />
			</div>
			<div className="flex justify-between mt-4">
				<div className="flex gap-3">
					<div className="w-8 h-8 rounded-full">
						<CircleUserRound className="h-full w-full object-cover stroke-1" />
					</div>
					<div className="flex flex-col gap-2">
						<h1 className="leading-5 font-semibold">What's your religion? 100 Russians.</h1>
						<div>
							<h6 className="text-[0.9rem] font-medium text-neutral-500">The New Travels</h6>
							<h6 className="text-[0.9rem] font-medium text-neutral-500">6.2M views • 1 year ago</h6>
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
