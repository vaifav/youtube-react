import { Search } from "lucide-react";
import type { SearchType } from "../../utils/types";
import { useState } from "react";
import useSearchSuggestions from "../../hooks/useSearchSuggestions";


const SearchBar = ({ isSearchIconActive, setIsSearchIconActive }: SearchType) => {
	const [searchValue, setSearchValue] = useState("");
	const [isSuggestionBarOpened, setIsSuggestionBarOpened] = useState(false);
	const suggestions = useSearchSuggestions(searchValue);

	const updateSearchValue = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const focusSearch = () => {
		setIsSuggestionBarOpened(true);
	};
	const unFocusSearch = () => {
		setIsSuggestionBarOpened(false);
	};

	return (
		<div className={`flex items-center relative *:border *:border-neutral-800 *:py-2 *:focus:outline-0`}>
			<input
				className={`pl-2 rounded-l-full ${isSearchIconActive ? "block pr-0 w-11/12" : "hidden pr-80"} sm:block sm:pr-30 lg:pr-80`}
				type="text"
				name="search"
				id="search"
				placeholder="search"
				autoComplete="off"
				onChange={updateSearchValue}
				onFocus={focusSearch}
				onBlur={unFocusSearch}
			/>
			<button
				type="submit"
				className={`rounded-r-full ${isSearchIconActive ? "px-2 dark:bg-neutral-900" : "border-0! px-0"} sm:px-5 sm:border! sm:dark:bg-neutral-900 `}
				onClick={() => setIsSearchIconActive(true)}>
				<Search />
			</button>
			{isSuggestionBarOpened && (
				<div className="fixed z-60 top-12 right-0 h-dvh w-screen my-2 px-2 overflow-scroll custom-scrollbar dark:bg-neutral-800 md:absolute md:left-0 md:w-full md:rounded-xl md:h-110">
					<ul className="flex flex-col">
						{suggestions?.map((str, index) => {
							return (
								<li key={index} className="flex items-center gap-3 py-3 px-4 rounded-xl cursor-pointer hover:dark:bg-neutral-700/70">
									<div>
										<Search className="size-5" />
									</div>
									<span className="font-semibold">{str}</span>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
