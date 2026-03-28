import { CircleUserRound, Smile } from "lucide-react";
import { useState } from "react";

const AddComments = () => {
	const [commentInputValue, setCommentInputValue] = useState("");
	return (
		<div className="flex gap-2">
				<div className="w-6 h-6 rounded-full">
					<CircleUserRound className="h-full w-full object-cover stroke-1" />
				</div>
				<form className="grow relative">
					<input
						className="peer border-b outline-0 w-full transition-all duration-200 ease-in-out dark:border-neutral-500 focus:dark:border-neutral-50 focus:border-b-2"
						type="text"
						name="add-comments"
						id="add-comments"
						placeholder="Add a comment..."
						onChange={(e) => {
							setCommentInputValue(e.target.value);
						}}
					/>
					<div className="hidden peer-focus:flex justify-between items-center mt-10 absolute top-0 left-0 w-full">
						<div>
							<Smile />
						</div>
						<div className="flex items-center gap-2 *:dark:bg-neutral-600/30 *:rounded-full *:px-5 *:py-2 *:text-[0.9rem]">
							<button>Cancel</button>
							<button
								className="disabled:dark:bg-neutral-500/10 disabled:dark:text-neutral-500"
								disabled={!commentInputValue ? true : false}
							>
								Comment
							</button>
						</div>
					</div>
				</form>
			</div>
	);
};

export default AddComments;
