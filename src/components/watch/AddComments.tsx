import { Smile, UserCircle2 } from "lucide-react";
import { useState } from "react";

const AddComments = ({ functionFromParent }: { functionFromParent?: (value: boolean) => void }) => {
	const [commentValue, setCommentValue] = useState("");
	const [isAddCommentFocused, setIsAddCommentFocused] = useState(false);

	const focusAddComment = () => {
		setIsAddCommentFocused(true);
	};
	const unFocusAddComment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setCommentValue("");
		setIsAddCommentFocused(false);
		if (typeof functionFromParent !== "undefined") functionFromParent(false);
	};
	return (
		<div className="w-full">
			<form className="flex gap-3 w-full">
				<div>
					<UserCircle2 />
				</div>
				<div className="grow">
					<input
						className="peer w-full border-b border-neutral-600 outline-0 transition-colors ease-in-out duration-300 focus:border-white"
						type="text"
						name="add-comment"
						id="add-comment"
						placeholder="Add a comment..."
						value={commentValue}
						onChange={(e) => {
							setCommentValue(e.target.value);
						}}
						onFocus={focusAddComment}
					/>
					<div className={`w-full justify-between items-center mt-2 ${isAddCommentFocused ? "flex" : "hidden"}`}>
						<div>
							<Smile />
						</div>
						<div className="flex items-center gap-2 *:px-4 *:py-2 *:rounded-full *:font-semibold *:cursor-pointer">
							<button className="transition-colors ease-in-out delay-150 hover:bg-neutral-600" onClick={unFocusAddComment}>
								Cancel
							</button>
							<button
								className="disabled:cursor-auto disabled:dark:bg-neutral-800 disabled:dark:text-neutral-400 dark:bg-sky-500 dark:text-sky-950"
								type="submit"
								disabled={!commentValue.length}
								onClick={(e) => {
									e.preventDefault();
								}}>
								Comment
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddComments;
