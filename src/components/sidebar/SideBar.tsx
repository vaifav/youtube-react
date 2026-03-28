import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { endPoints, LOGO } from "../../utils/constants";
import type { SideBarType } from "../../utils/types";
import { BASE_NAV, YOU_NAV, INITIAL_SIDEBAR } from "../../utils/navConstants";

import NavBar from "./NavBar";

const SideBar = ({ isSideBarOpened, setIsSideBarOpened }: SideBarType) => {
	return (
		<>
			{isSideBarOpened && (
				<aside
					className={`w-64 ${isSideBarOpened ? "flex md:static md:dark:bg-transparent md:pt-4" : "hidden"} flex-col h-full absolute top-0 left-0 dark:bg-neutral-900`}
				>
					<div className={`flex items-center px-3 py-2 shrink-0 ${isSideBarOpened && "md:hidden"}`}>
						<Menu
							className="cursor-pointer"
							onClick={() => {
								setIsSideBarOpened(false);
							}}
						/>
						<NavLink to={endPoints.HOME}>
							<figure className="w-30">
								<img className="w-full h-full object-cover" src={LOGO} alt="logo" />
							</figure>
						</NavLink>
					</div>
					<div className={`flex-1 overflow-y-auto custom-scrollbar`}>
						<NavBar navArr={BASE_NAV} />
						<NavBar navArr={YOU_NAV} heading="You" hr={true} />
					</div>
				</aside>
			)}

			{!isSideBarOpened && (
				<div className="hidden px-3 flex-col items-cener gap-10 w-15 pt-5 md:flex">
					{INITIAL_SIDEBAR.map(({ title, NavIcon, path }, index) => (
						<NavLink key={index} to={path} end>
							<figure className="flex flex-col items-center justify-center">
								<NavIcon />
								<figcaption className="text-[0.6rem]">{title}</figcaption>
							</figure>
						</NavLink>
					))}
				</div>
			)}
		</>
	);
};

export default SideBar;
