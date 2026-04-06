import type { CommentType, DescriptionType } from "../../utils/types";
import Comments from "./Comments";
import Description from "./Description";
import Actions from "./Actions";

const VideoDetails = ({
	isDescriptionExpanded,
	setIsDescriptionExpanded,
	isCommentExpanded,
	setIsCommentExpanded,
}: DescriptionType & CommentType) => {
	return (
		<div
			className={`flex flex-col *:p-2 ${(isDescriptionExpanded || isCommentExpanded) && "h-screen"}`}
		>
			<div
				className={`${(isDescriptionExpanded || isCommentExpanded) && "grow"} rounded-t-xl bg-linear-to-b dark:from-neutral-900 dark:to-neutral-950 to-30% relative md:bg-linear-[none]`}
			>
				<h1 className="font-semibold text-[1.2rem] leading-7">What's your religion? 100 Russians.</h1>
				<Description
					isDescriptionExpanded={isDescriptionExpanded}
					setIsDescriptionExpanded={setIsDescriptionExpanded}
				/>
				<div className="my-4">
					<Actions />
				</div>
				<div className={`${isDescriptionExpanded && "hidden"} mt-2`}>
					<Comments isCommentExpanded={isCommentExpanded} setIsCommentExpanded={setIsCommentExpanded} />
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
