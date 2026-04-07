import { UserCircle2 } from "lucide-react";
import type { UserCommentType } from "../../utils/types";

const Comment = ({ data }: { data: UserCommentType }) => {
	return (
		<div className="flex gap-2 rounded-xl ">
			<div>
				<UserCircle2 />
			</div>
			<div>
				<h1>@{data.name}</h1>
				<p>{data.comment}</p>
			</div>
		</div>
	);
};

const CommentList = ({ comments }: { comments: UserCommentType[] }) => {
	return (
		<div className="flex flex-col gap-2">
			{comments?.map((comment) => {
				return (
					<div key={comment.id} className="flex flex-col">
						<Comment data={comment} />
						<div className="ml-2">
							<CommentList comments={comment.replies} />
						</div></div>
				);
			})}
		</div>
	);
};

export default CommentList;
