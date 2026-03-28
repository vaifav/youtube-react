import {
	ArrowDownToLine,
	CircleUserRound,
	EllipsisVertical,
	Send,
	ThumbsDown,
	ThumbsUp,
} from "lucide-react";
import { DUMMY_IMAGE } from "../../utils/constants";

const Video = () => {
	return (
		<div className="w-full flex flex-col gap-3">
			<div className="w-full h-[30vh] rounded-2xl md:h-[70vh]">
				<img src={DUMMY_IMAGE} alt="dummy" className="w-full h-full object-cover rounded-[inherit]" />
			</div>
			<div className="w-full">
				<h1 className="font-semibold text-xl md:text-2xl">What's your religion? 100 Russians.</h1>
				<div className="flex flex-col gap-4 mt-3 md:justify-between md:gap-40 md:flex-row">
					<div className="flex items-center gap-3">
						<div className="flex gap-2">
							<div className="w-8 h-8 rounded-full">
								<CircleUserRound className="h-full w-full object-cover stroke-1" />
							</div>
							<div>
								<h3 className="text-[1rem] font-semibold">The New Travels</h3>
								<h6 className="text-[0.8rem] font-medium text-neutral-500">10.8M subscribers</h6>
							</div>
						</div>
						<div>
							<button className="dark:bg-white dark:text-black text-[0.9rem] font-semibold rounded-full py-2 px-5">
								Subscribe
							</button>
						</div>
					</div>
					<div className="flex gap-2 *:rounded-full *:flex *:items-center *:gap-2 *:px-2 *:py-2 *:dark:bg-neutral-500/20 **:cursor-pointer overflow-x-auto custom-scrollbar">
						<div className="gap-4!">
							<button className="flex items-center gap-1 after:content-[' '] after:py-3 after:border after:border-neutral-600 after:rounded-full after:relative after:left-1.5">
								<ThumbsUp className="size-4"/> <span>12K</span>
							</button>
							<button>
								<ThumbsDown className="size-4"/>
							</button>
						</div>
						<button>
							<Send className="size-4"/> <span>Share</span>
						</button>
						<button className="">
							<ArrowDownToLine className="size-4"/> <span>Download</span>
						</button>
						<button className="px-3!">
							<EllipsisVertical className="size-4"/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
