import { ArrowDownToLine, Bookmark, CircleUserRound, Flag, Sparkle } from "lucide-react";
import { Share, Thumbs } from "../../icons/icons";

const Actions = () => {
	return (
		<div className="w-full flex flex-col gap-3">
			<div className="flex w-full justify-between">
				<div className="flex items-center gap-2">
					<div className="w-8 h-8 rounded-full">
						<CircleUserRound className="h-full w-full object-cover stroke-1" />
					</div>
					<div className="flex items-center flex-wrap gap-2 *:text-[0.8rem] *:font-medium *:text-white md:flex-col md:items-baseline">
						<h6>The New Travels </h6>
						<h6 className="text-neutral-500!">6.2M</h6>
					</div>
				</div>
				<button className="rounded-full px-2 py-1 text-[0.9rem] font-medium dark:bg-white dark:text-black">
					Subscribe
				</button>
			</div>
			<div className="flex gap-2 w-full overflow-x-scroll">
				<button className="flex items-center gap-2 rounded-full px-3 py-1.5 dark:bg-neutral-800">
					<div className="flex items-center">
						<div>
							<Thumbs className="size-6.25" />
						</div>
						<span>11.2K</span>
					</div>
					<span className="w-px h-full rounded-full dark:bg-neutral-400"></span>
					<div className="rotate-180">
						<Thumbs className="size-6.5" />
					</div>
				</button>
				<button className="flex items-center gap-2 rounded-full px-3 py-1.5 dark:bg-neutral-800">
					<div>
						<Share className="size-6.25" />
					</div>
					<span>Share</span>
				</button>
				<button className="flex items-center gap-2 rounded-full px-3 py-1.5 dark:bg-neutral-800">
					<div>
						<Sparkle className="size-5 fill-white" />
					</div>
					<span>Ask</span>
				</button>
				<button className="flex items-center gap-2 rounded-full px-3 py-1.5 dark:bg-neutral-800">
					<div>
						<ArrowDownToLine className="size-5 " />
					</div>
					<span>Download</span>
				</button>
				<button className="flex items-center gap-2 rounded-full px-3 py-1.5 dark:bg-neutral-800">
					<div>
						<Bookmark className="size-5 " />
					</div>
					<span>Save</span>
				</button>
				<button className="flex items-center gap-2 rounded-full px-3 py-1.5 dark:bg-neutral-800">
					<div>
						<Flag className="size-5 " />
					</div>
					<span>Report</span>
				</button>
			</div>
		</div>
	);
};

export default Actions;
