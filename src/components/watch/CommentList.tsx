import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, UserCircle2 } from "lucide-react";

import { Thumbs } from "../../icons/icons";
import AddComments from "./AddComments";
import type { UserCommentType } from "../../utils/types";

const Comment = ({ data, level = 0 }: { data: UserCommentType; level?: number }) => {
	const commentRef = useRef<HTMLParagraphElement>(null);
	const [isReplyClicked, setIsReplyClicked] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isClamped, setIsClamped] = useState(false);
	const [isCommentTextExpanded, setIsCommentTextExpanded] = useState(false);

	useLayoutEffect(() => {
		if (commentRef.current) {
			setIsClamped(commentRef.current.scrollHeight > commentRef.current.offsetHeight);
		}
	}, [data.comment]);

	const showAddComment = () => setIsReplyClicked(true);
	const toggleReplies = () => setIsExpanded(!isExpanded);
	const toggleCommentText = () => setIsCommentTextExpanded(!isCommentTextExpanded);

	const isReply = level > 0;
	const hasReplies = data.replies && data.replies.length > 0;

	return (
		<div className="flex flex-col w-full">
			<div className={`flex w-full items-start gap-2 rounded-xl ${isReply ? "mt-10" : "mt-4"} relative`}>
				{data.replies.length !== 0 && (
					<span
						className={`absolute border-b border-l w-5 rounded-bl-[20px] block bottom-2 dark:border-neutral-600 ${isReply ? "h-[calc(100%-24px-10px)] left-3" : "h-[calc(100%-32px-10px)] left-4"}`}></span>
				)}
				<div>
					<span className={`absolute border-b border-l h-5 w-5 rounded-bl-xl block -left-9 dark:border-neutral-600 ${level === 1 && "-left-10"}`}></span>
					<UserCircle2 className={`${isReply ? "size-6" : "size-8"}`} />
				</div>
				<div className="w-full">
					<h1>@{data.name}</h1>
					<p className={`${!isCommentTextExpanded && "max-h-13"} overflow-hidden`} ref={commentRef}>
						{data.comment}
					</p>
					{isClamped && (
						<span className="text-[0.9rem] font-semibold dark:text-neutral-400 cursor-pointer" onClick={toggleCommentText}>
							{isCommentTextExpanded ? "Show less" : "Read more"}
						</span>
					)}
					<span className="flex items-center gap-3">
						<div className="flex items-center gap-2">
							<div className="flex items-center">
								<div className=" rounded-full p-1 hover:dark:bg-neutral-400/50">
									<Thumbs className="size-5" />
								</div>
								<span className="text-[0.8rem] font-semibold dark:text-neutral-500">3.2k</span>
							</div>
							<div className="rotate-180">
								<div className="rounded-full p-1 hover:dark:bg-neutral-400/50">
									<Thumbs className="size-5" />
								</div>
							</div>
						</div>
						<button className="rounded-full px-2 py-1 hover:dark:bg-neutral-400/50" onClick={showAddComment}>
							Reply
						</button>
					</span>

					{isReplyClicked && <AddComments functionFromParent={setIsReplyClicked} />}

					{hasReplies && (level > 0 || isExpanded) && (
						<div className="ml-4">
							<CommentList comments={data.replies} level={level + 1} />
						</div>
					)}

					{level === 0 && hasReplies && (
						<div className="flex items-center gap-2 mt-3 cursor-pointer" onClick={toggleReplies}>
							<span>{isExpanded ? "Hide replies" : `${data.replies.length} replies`}</span>
							{isExpanded ? <ChevronUp /> : <ChevronDown />}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const CommentList = ({ comments, level = 0 }: { comments: UserCommentType[]; level?: number }) => {
	return (
		<div className="flex flex-col gap-2 w-full max-w-2xl">
			{comments?.map((comment) => (
				<Comment key={comment.id} data={comment} level={level} />
			))}
		</div>
	);
};

export default CommentList;
