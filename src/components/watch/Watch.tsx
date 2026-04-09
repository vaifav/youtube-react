import { useState } from "react";
import Recommended from "./Recommended";
import VideoDetails from "./VideoDetails";
import { DUMMY_IMAGE } from "../../utils/constants";

const Thumbnail = ({ className }: { className?: string }) => (
	<div className={`${className}`}>
		<img className="aspect-video w-full h-full object-cover rounded-[inherit]" src={DUMMY_IMAGE} alt="dummy" />
	</div>
);

const Watch = () => {
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
	const [isCommentExpanded, setIsCommentExpanded] = useState(false);

	return (
		<section className={`w-full flex flex-col ${!isDescriptionExpanded && !isCommentExpanded && "h-fit"} lg:flex-row lg:gap-3 lg:p-2`}>
			<Thumbnail className="w-full p-0! sticky top-0 z-10 sm:h-90 lg:hidden" />
			<div className="lg:hidden">
				<VideoDetails isDescriptionExpanded={isDescriptionExpanded} setIsDescriptionExpanded={setIsDescriptionExpanded} isCommentExpanded={isCommentExpanded} setIsCommentExpanded={setIsCommentExpanded} />
			</div>

			<div className="hidden lg:block lg:w-9/12 lg:shrink-0 xl:w-10/12">
				<Thumbnail className="w-full rounded-2xl xl:h-120" />
				<VideoDetails isDescriptionExpanded={isDescriptionExpanded} setIsDescriptionExpanded={setIsDescriptionExpanded} isCommentExpanded={isCommentExpanded} setIsCommentExpanded={setIsCommentExpanded} />
			</div>

			<div className={`${(isDescriptionExpanded || isCommentExpanded) && "hidden lg:block"}`}>
				<Recommended />
			</div>
		</section>
	);
};

export default Watch;
