import axios from "axios";
import { SEARCH_SUGGESTION_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearch } from "../redux_slices/searchSlice";

const useSearchSuggestions = (query: string): string[] => {
	const dispatch = useDispatch();
	const [suggestions, setSuggestions] = useState([]);
	const cachedSuggestions = useSelector((store) => store.search);

	const fetchSearchSuggestions = async () => {
		try {
			if (cachedSuggestions[query]) {
				setSuggestions(cachedSuggestions[query]);
			} else {
				const { data } = await axios.get(`${SEARCH_SUGGESTION_API}${encodeURI(query)}`);
				setSuggestions(data?.[1]);
				dispatch(cacheSearch({ [query]: data?.[1] }));
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const timer = setTimeout(fetchSearchSuggestions, 200);
		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return suggestions;
};

export default useSearchSuggestions;
