import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import type { Nav } from "../../utils/types";

const isActiveLink = ({ isActive }: { isActive: boolean }) => (isActive ? "*:bg-white/20" : "");

type PropType = {
	navArr: Nav[];
	heading?: string;
	hr?: boolean;
};

const NavBar = ({ navArr, heading, hr = true }: PropType) => {
	return (
		<>
			<div className="px-3">
				{heading && (
					<div className="flex items-end gap-2 py-3">
						<h1 className="font-semibold text-xl">{heading}</h1>
						<div>
							<ChevronRight />
						</div>
					</div>
				)}
				<nav className="flex flex-col gap-2">
					{navArr.map(({ title, NavIcon, path }, index) => (
						<NavLink key={index} className={isActiveLink} to={path} end>
							<div className="rounded-[10px] flex items-center gap-4 h-fit w-full py-3 px-3">
								<NavIcon />
								<h3>{title}</h3>
							</div>
						</NavLink>
					))}
				</nav>
			</div>
			{hr && <hr className="my-4 border-neutral-700" />}
		</>
	);
};

export default NavBar;
