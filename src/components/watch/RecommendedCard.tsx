import { EllipsisVertical } from "lucide-react";
import { DUMMY_IMAGE } from "../../utils/constants";

const RecommendedCard = () => {
	return (
		<>
			<article className="flex justify-between gap-10 w-full p-2">
				<div className="flex gap-2">
					<div className="rounded-[10px] w-42">
						<img className="h-full w-full object-cover rounded-[inherit]" src={DUMMY_IMAGE} alt="dummy" />
					</div>
					<div className="flex flex-col gap-1">
						<h1 className="leading-5 font-semibold text-[1rem]">What's your religion? 100 Russians.</h1>
						<div>
							<h6 className="text-[0.8rem] font-medium text-neutral-500">The New Travels</h6>
							<h6 className="text-[0.8rem] font-medium text-neutral-500">6.2M views • 1 year ago</h6>
						</div>
					</div>
				</div>
				<div>
					<EllipsisVertical />
				</div>
			</article>
		</>
	);
};

export default RecommendedCard;
