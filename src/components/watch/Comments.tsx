import { ChartNoAxesColumnDecreasing, CircleUserRound, X } from "lucide-react";
import type { CommentType } from "../../utils/types";
import AddComments from "./AddComments";
import CommentList from "./CommentList";
import { DUMMY_COMMENTS } from "../../utils/constants";

const Comments = ({ isCommentExpanded, setIsCommentExpanded }: CommentType) => {
	const closeComment = () => {
		setIsCommentExpanded(false);
	};

	const openComment = () => {
		setIsCommentExpanded(true);
	};

	return (
		<>
			<div className="rounded-xl px-2 py-3 flex flex-col gap-2 dark:bg-neutral-800 lg:hidden">
				<h1 className="text-xl font-semibold ">Comments</h1>
				<div className="flex gap-2" onClick={openComment}>
					<div>
						<CircleUserRound />
					</div>
					<div className="flex items-center grow rounded-full px-2 text-[0.9rem] dark:bg-neutral-700">
						<span>Add comments...</span>
					</div>
				</div>
				<div className={`${isCommentExpanded ? "block" : "hidden"} w-full h-full overflow-y-scroll custom-scrollbar absolute top-0 left-0 z-10 rounded-t-xl dark:bg-neutral-900`}>
					<div className="flex justify-between sticky top-0 rounded-[inherit] px-2 py-4 border-b border-neutral-500 dark:bg-neutral-800">
						<h1 className="text-xl font-semibold">Comments</h1>
						<div onClick={closeComment}>
							<X />
						</div>
					</div>
					<div className="p-2">
						<CommentList comments={DUMMY_COMMENTS} />
					</div>
				</div>
			</div>
			<div className="hidden mt-10 lg:block">
				<div className="flex gap-4 items-end">
					<h1 className="font-bold text-xl">1K Comments</h1>
					<div className="flex items-start gap-1">
						<div className="rotate-90">
							<ChartNoAxesColumnDecreasing />
						</div>
						<span className="font-semibold">Sort by</span>
					</div>
				</div>
				<div className="mt-3">
					<AddComments />
				</div>
				<div className="mt-3">
					<CommentList comments={DUMMY_COMMENTS} />
				</div>
			</div>
		</>
	);
};

export default Comments;
