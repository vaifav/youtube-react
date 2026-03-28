import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

const Container = () => {
	const [isSideBarOpened, setIsSideBarOpened] = useState(false);

	return (
		<div className="h-screen w-screen flex flex-col overflow-hidden dark:bg-neutral-950 dark:text-white">
			<Header isSideBarOpened={isSideBarOpened} setIsSideBarOpened={setIsSideBarOpened} />
			<div className="flex flex-1 overflow-hidden">
				<SideBar isSideBarOpened={isSideBarOpened} setIsSideBarOpened={setIsSideBarOpened} />
				<main className="flex-1 overflow-y-auto custom-scrollbar px-2">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Container;
