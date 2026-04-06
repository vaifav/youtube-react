import { useState } from "react";
import Recommended from "./Recommended";
import VideoDetails from "./VideoDetails";
import { DUMMY_IMAGE } from "../../utils/constants";

const Watch = () => {
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
	const [isCommentExpanded, setIsCommentExpanded] = useState(false);
	return (
		<section
			className={`w-full flex flex-col ${!isDescriptionExpanded && !isCommentExpanded && "h-fit"}`}
		>
			<div className="w-full p-0! sticky top-0 z-10">
				<img className="w-full h-full object-cover" src={DUMMY_IMAGE} alt="dummy" />
			</div>
			<VideoDetails
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
