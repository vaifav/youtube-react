import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { endPoints, LOGO } from "../../utils/constants";
import type { SideBarType } from "../../utils/types";
import { BASE_NAV, YOU_NAV, INITIAL_SIDEBAR } from "../../utils/navConstants";

import NavBar from "./NavBar";

const SideBar = ({ isSideBarOpened, setIsSideBarOpened }: SideBarType) => {
	const closeSideBar = () => {
		setIsSideBarOpened(false);
	};

	return (
		<>
			{isSideBarOpened && (
				<aside className={`w-64 h-full flex flex-col shrink-0 ${isSideBarOpened ? "fixed inset-0 z-50 lg:relative lg:z-0" : "hidden"} dark:bg-neutral-900`}>
					<div className={`flex items-center px-3 py-2 shrink-0 ${isSideBarOpened && "lg:hidden"}`}>
						<Menu className="cursor-pointer" onClick={closeSideBar} />
						<NavLink to={endPoints.HOME}>
							<figure className="w-30">
								<img className="w-full h-full object-cover" src={LOGO} alt="logo" />
							</figure>
						</NavLink>
					</div>
					<div className={`flex-1 overflow-y-auto custom-scrollbar`} onClick={closeSideBar}>
						<NavBar navArr={BASE_NAV} />
						<NavBar navArr={YOU_NAV} heading="You" hr={true} />
					</div>
				</aside>
			)}

			{!isSideBarOpened && (
				<div className="hidden px-3 flex-col items-cener gap-10 w-15 pt-5 lg:flex">
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
