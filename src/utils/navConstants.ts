import { ArrowDownToLine, CircleUserRound, Clock, GalleryVerticalEnd, History, Home, ListVideo, ThumbsUp, TvMinimalPlay, Video } from "lucide-react";

import { endPoints } from "./constants";
import type { Nav } from "./types";

export const BASE_NAV = [
	{
		title: "Home",
		path: endPoints.HOME,
		NavIcon: Home,
	},
	{
		title: "Shorts",
		path: endPoints.SHORTS,
		NavIcon: Video,
	},
];

export const YOU_NAV = [
	{
		title: "History",
		path: endPoints.HISTORY,
		NavIcon: History,
	},
	{
		title: "Playlists",
		path: endPoints.PLAYLISTS,
		NavIcon: ListVideo,
	},
	{
		title: "Watch Later",
		path: endPoints.WATCH_LATER,
		NavIcon: Clock,
	},
	{
		title: "Liked videos",
		path: endPoints.LIKED_VIDEOS,
		NavIcon: ThumbsUp,
	},
	{
		title: "Your videos",
		path: endPoints.YOUR_VIDEOS,
		NavIcon: TvMinimalPlay,
	},
	{
		title: "Downloads",
		path: endPoints.DOWNLOADS,
		NavIcon: ArrowDownToLine,
	},
];

export const INITIAL_SIDEBAR: Nav[] = [
	...BASE_NAV,
	...[
		{ title: "Subscriptions", NavIcon: GalleryVerticalEnd, path: endPoints.SUBSCRIPTIONS },
		{ title: "You", NavIcon: CircleUserRound, path: endPoints.YOUR_VIDEOS },
	],
];
