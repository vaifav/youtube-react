import { Bell, Menu, Mic, ArrowLeft, Plus, Search } from "lucide-react";
import { endPoints, LOGO } from "../../utils/constants";
import { useState } from "react";
import type { SideBarType } from "../../utils/types";
import { NavLink } from "react-router-dom";

const Header = ({ isSideBarOpened, setIsSideBarOpened }: SideBarType) => {
	const [isSearchIconActive, setIsSearchIconActive] = useState(false);
	return (
		<header
			className={`sticky top-0 w-full py-2 px-3  ${isSideBarOpened ? "hidden md:flex" : "flex"} items-center justify-between md:px-5 xmd:gap-3`}
		>
			<div
				className={`flex items-center *:hover:cursor-pointer ${isSearchIconActive && "hidden"} sm:flex`}
			>
				<figure
					onClick={() => {
						setIsSideBarOpened(!isSideBarOpened);
					}}
				>
					<Menu />
				</figure>
				<NavLink to={endPoints.HOME}>
					<figure className="w-30">
						<img className="w-full h-full object-cover" src={LOGO} alt="logo" />
					</figure>
				</NavLink>
			</div>
			<div
				className={`flex items-center justify-between gap-3 ${isSearchIconActive && "w-full"} xmd:justify-center xmd:w-fit`}
			>
				<form
					className={`flex items-center ${isSearchIconActive && "w-11/12 justify-between"} sm:justify-end`}
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<button
						type="submit"
						className={`${isSearchIconActive ? "block mr-2" : "hidden"} border-0! sm:hidden`}
						onClick={() => setIsSearchIconActive(false)}
					>
						<ArrowLeft />
					</button>
					<div className={`flex items-center *:border *:border-neutral-800 *:py-2 *:focus:outline-0`}>
						<input
							type="text"
							name="search"
							id="search"
							placeholder="search"
							className={`pl-2 rounded-l-full ${isSearchIconActive ? "block pr-0 w-11/12" : "hidden pr-80"} sm:block sm:pr-30 lg:pr-80`}
						/>
						<button
							type="submit"
							className={`rounded-r-full ${isSearchIconActive ? "px-2 dark:bg-neutral-900" : "border-0! px-0"} sm:px-5 sm:border! sm:dark:bg-neutral-900 `}
							onClick={() => setIsSearchIconActive(true)}
						>
							<Search />
						</button>
					</div>
				</form>
				<figure
					className={`dark:bg-neutral-900 rounded-full py-2 px-2 ${isSearchIconActive ? "block" : "hidden"} sm:block`}
				>
					<Mic />
				</figure>
			</div>
			<div className="hidden items-center gap-4 md:flex">
				<div>
					<div className="flex items-center justify-center gap-1 dark:bg-neutral-900 rounded-full h-10 px-4 md:hidden xmd:flex">
						<figure>
							<Plus />
						</figure>
						<span>Create</span>
					</div>
				</div>
				<div>
					<Bell />
				</div>
				<div>
					<div className="rounded-full h-10 w-10 flex items-center justify-center bg-orange-600">
						<span>V</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
