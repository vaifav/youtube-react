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

export type Nav = { title: string; NavIcon: LucideIcon; path: string };
