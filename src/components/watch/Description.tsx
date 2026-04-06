import { X } from "lucide-react";
import type { DescriptionType } from "../../utils/types";

const Description = ({ isDescriptionExpanded, setIsDescriptionExpanded }: DescriptionType) => {
	const closeDescription = () => {
		setIsDescriptionExpanded(false);
	};
	const openDescription = () => {
		setIsDescriptionExpanded(true);
	};
	const toggleDescription = () => {
		setIsDescriptionExpanded(!isDescriptionExpanded);
	};

	return (
		<>
			<div className="lg:hidden">
				<div className="flex gap-2 *:text-[0.8rem] *:font-medium" onClick={openDescription}>
					<h6 className="dark:text-neutral-500">6.2M views • 1 year ago </h6>
					<span className="dark:text-white">...more</span>
				</div>
				<div className={`${isDescriptionExpanded ? "block" : "hidden"} w-full h-full overflow-y-scroll custom-scrollbar z-10 absolute top-0 left-0 rounded-t-xl dark:bg-neutral-900`}>
					<div className="flex justify-between sticky top-0 rounded-[inherit] px-2 py-4 border-b border-neutral-500 dark:bg-inherit">
						<h1 className="text-xl font-semibold">Description</h1>
						<div onClick={closeDescription}>
							<X />
						</div>
					</div>
					<div className="p-2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nesciunt nulla saepe expedita reiciendis a quia iusto ullam, eaque, provident aperiam sed laborum aspernatur
					</div>
				</div>
			</div>
			<div className="hidden lg:block">
				<div className="rounded-xl px-2 py-3 flex flex-col dark:bg-neutral-800 h-fit cursor-pointer *:font-semibold *:text-[0.9rem]" onClick={toggleDescription}>
					<h6>2.5M views 5 months ago</h6>
					<div className={`${!isDescriptionExpanded ? "h-12 overflow-y-hidden" : "h-auto"}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi quis praesentium tempora veritatis minus corrupti totam facere nesciunt sequi, quasi, porro ducimus consequatur cum sit,
						reiciendis a quia iusto ullam, eaque, provident aperiam sed laborum
					</div>
					<h6 className="shrink-0 mt-1">{!isDescriptionExpanded ? "...more" : "show less"}</h6>
				</div>
			</div>
		</>
	);
};

export default Description;
