import { useState } from "react";
import Recommended from "./Recommended";
import Video from "./Video";

const Watch = () => {
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
	const [isCommentExpanded, setIsCommentExpanded] = useState(false);
	return (
		<section className={`w-full flex flex-col`}>
			<Video
				isDescriptionExpanded={isDescriptionExpanded}
				setIsDescriptionExpanded={setIsDescriptionExpanded}
				isCommentExpanded={isCommentExpanded}
				setIsCommentExpanded={setIsCommentExpanded}
			/>
			{!isDescriptionExpanded && !isCommentExpanded && (
				<div>
					<Recommended />
				</div>
			)}
		</section>
	);
};

export default Watch;
