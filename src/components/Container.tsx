import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";

const Container = () => {
	const [isSideBarOpened, setIsSideBarOpened] = useState(false);

	return (
		<div className="h-screen w-screen flex flex-col overflow-hidden dark:bg-neutral-950 dark:text-white">
			<Header isSideBarOpened={isSideBarOpened} setIsSideBarOpened={setIsSideBarOpened} />
			<div className="flex overflow-hidden">
				<SideBar isSideBarOpened={isSideBarOpened} setIsSideBarOpened={setIsSideBarOpened} />
				<main className="grow flex justify-center overflow-y-auto custom-scrollbar md:px-1">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Container;
