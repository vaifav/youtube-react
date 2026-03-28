import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { endPoints, PAGE_NOT_FOUND_IMAGE, PAGE_NOT_FOUND_LOGO } from "../../utils/constants";
import useTitle from "../../hooks/useTitle";

const PageNotFound = () => {
	useTitle("404 Not Found");
	return (
		<>
			<main className="flex items-center justify-center h-screen w-screen">
				<div className="w-3/12 flex flex-col items-center justify-center gap-2">
					<img src={PAGE_NOT_FOUND_IMAGE} alt="404" />
					<p className="text-center text-neutral-700 font-medium leading-5">
						This page isn't available. Sorry about that.Try searching for something else.
					</p>
					<div className="flex items-center gap-3">
						<NavLink to={endPoints.HOME} className="w-30">
							<img className="h-full w-full object-cover" src={PAGE_NOT_FOUND_LOGO} alt="logo" />
						</NavLink>
						<form className="*:border *:border-neutral-400 flex items-center">
							<input type="text" name="search" id="search" className="px-2" placeholder="search" />
							<button type="submit" className="*:stroke-neutral-400 *:p-1 *:border-l-0!">
								<Search />
							</button>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};

export default PageNotFound;
