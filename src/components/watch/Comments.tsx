import { ArrowDownWideNarrow } from "lucide-react";
import AddComments from "./AddComments";

const Comments = () => {
	return (
		
			<div className="w-full">
				<div className="flex items-center gap-4 md:gap-10">
					<h1 className="font-bold text-xl">Comments</h1>
					<div className="flex items-center">
						<div>
							<ArrowDownWideNarrow />
						</div>
						<span>Sort by</span>
					</div>
				</div>
				<div className="mt-4">
					<AddComments />
				</div>
			</div>
		
	);
};

export default Comments;
