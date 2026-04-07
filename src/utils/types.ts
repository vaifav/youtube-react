import type { LucideIcon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export type SideBarType = {
	isSideBarOpened: boolean;
	setIsSideBarOpened: Dispatch<SetStateAction<boolean>>;
};

export type DescriptionType = {
	isDescriptionExpanded: boolean;
	setIsDescriptionExpanded: Dispatch<SetStateAction<boolean>>;
};

export type CommentType = {
	isCommentExpanded: boolean;
	setIsCommentExpanded: Dispatch<SetStateAction<boolean>>;
};

export type SearchType = {
	isSearchIconActive: boolean;
	setIsSearchIconActive: Dispatch<SetStateAction<boolean>>;
};

export interface UserCommentType {
	id: string;
	name: string;
	comment: string;
	replies: UserCommentType[];
}

export type Nav = { title: string; NavIcon: LucideIcon; path: string };
