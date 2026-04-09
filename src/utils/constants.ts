type StringRecord = Record<string, string>;

export const endPoints: Readonly<StringRecord> = {
	HOME: "/",
	CHANNEL: "/channel",
	WATCH: "/watch",
	SHORTS: "/shorts",
	HISTORY: "/history",
	PLAYLISTS: "/playlists",
	WATCH_LATER: "/watch-later",
	LIKED_VIDEOS: "/liked-videos",
	YOUR_VIDEOS: "/your-videos",
	DOWNLOADS: "/downloads",
	SUBSCRIPTIONS: "/subscriptions",
};

export const SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const PAGE_NOT_FOUND_IMAGE = "https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png";
export const PAGE_NOT_FOUND_LOGO = "https://www.gstatic.com/youtube/img/branding/youtubelogo/2x/youtubelogo_50.png";
export const LOGO = "https://www.gstatic.com/youtube/img/promos/f151681e2342d3c4725c86aaa440ef37469f00d66e8221bd675ad016839385f7_244x112.webp";
export const DUMMY_IMAGE = "https://images.unsplash.com/photo-1773158097627-cef40c9ca3ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const DUMMY_COMMENTS = [
	{
		id: "node-1",
		name: "Jordan_Dev",
		comment: "Does anyone actually use Redux anymore, or is it all Zustand and Signals now?",
		replies: [
			{
				id: "node-1-1",
				name: "StateMaster",
				comment: "Redux Toolkit is still the industry standard for enterprise. People just like chasing the new shiny object.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
				replies: [
					{
						id: "node-1-1-1",
						name: "Junior_Frontend",
						comment: "But the boilerplate is so heavy...",
						replies: [
							{
								id: "node-1-1-1-1",
								name: "StateMaster",
								comment: "RTK eliminates 80% of that boilerplate. Read the docs.",
								replies: [
									{
										id: "node-1-1-1-1-1",
										name: "Zustand_Fan",
										comment: "Or just use Zustand and have 0% boilerplate. Why suffer?",
										replies: [
											{
												id: "node-1-1-1-1-1-1",
												name: "Senior_Arch",
												comment: "Scale. When you have 50 developers on one repo, you need the structure Redux enforces.",
												replies: [],
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				id: "node-2-1",
				name: "Utility_First",
				comment: "Clean CSS is a myth. Maintenance is the reality.",
				replies: [],
			},
		],
	},
	{
		id: "node-2",
		name: "Alice_UX",
		comment: "Tailwind has ruined the art of writing clean CSS.",
		replies: [
			{
				id: "node-2-1",
				name: "Utility_First",
				comment: "Clean CSS is a myth. Maintenance is the reality.",
				replies: [],
			},
		],
	},
	{
		id: "node-3",
		name: "Backend_Ben",
		comment: "PostgreSQL is the only database you will ever need. Change my mind.",
		replies: [
			{
				id: "node-3-1",
				name: "Mongo_Mike",
				comment: "Try scaling a relational DB with unstructured JSON blobs and get back to me.",
				replies: [
					{
						id: "node-3-1-1",
						name: "Backend_Ben",
						comment: "Postgres handles JSONB faster than Mongo handles native JSON now.",
						replies: [],
					},
				],
			},
		],
	},
	{
		id: "node-4",
		name: "AI_Hype_Bot",
		comment: "If your app doesn't have an LLM integration by Q3, you're irrelevant.",
		replies: [
			{
				id: "node-4-1",
				name: "Skeptic_Sarah",
				comment: "Most 'AI integrations' are just expensive wrappers for a basic search bar.",
				replies: [],
			},
		],
	},
	{
		id: "node-5",
		name: "Cyber_Sec",
		comment: "Stop storing JWTs in LocalStorage. It's 2026.",
		replies: [
			{
				id: "node-5-1",
				name: "Web_Dev_Newbie",
				comment: "Where else should they go?",
				replies: [
					{
						id: "node-5-1-1",
						name: "Cyber_Sec",
						comment: "HttpOnly Cookies. Prevent XSS from stealing your sessions.",
						replies: [],
					},
				],
			},
		],
	},
	{
		id: "node-6",
		name: "Rust_Prophet",
		comment: "Memory safety is not a luxury, it's a requirement.",
		replies: [
			{
				id: "node-6-1",
				name: "C_Hard_Coded",
				comment: "I've been writing C for 30 years and never had a leak.",
				replies: [
					{
						id: "node-6-1-1",
						name: "Rust_Prophet",
						comment: "That's what everyone says until they run Valgrind.",
						replies: [],
					},
				],
			},
		],
	},
	{
		id: "node-7",
		name: "Project_Manager",
		comment: "Can we move the standup to 4 PM on Fridays?",
		replies: [
			{
				id: "node-7-1",
				name: "The_Whole_Team",
				comment: "No.",
				replies: [],
			},
		],
	},
	{
		id: "node-8",
		name: "Hardware_Geek",
		comment: "Apple Silicon has effectively killed the high-end Windows laptop market.",
		replies: [
			{
				id: "node-8-1",
				name: "Gamer_Guy",
				comment: "Wake me up when I can play AAA titles natively without a translation layer.",
				replies: [],
			},
		],
	},
	{
		id: "node-9",
		name: "Docker_Dan",
		comment: "Kubernetes is overkill for your 50-user startup.",
		replies: [
			{
				id: "node-9-1",
				name: "Cloud_Native",
				comment: "But it's about portability!",
				replies: [
					{
						id: "node-9-1-1",
						name: "Docker_Dan",
						comment: "You're paying $500/mo in overhead to manage a $5/mo app.",
						replies: [],
					},
				],
			},
		],
	},
	{
		id: "node-10",
		name: "Final_Boss",
		comment: "The best code is the code you delete.",
		replies: [
			{
				id: "node-10-1",
				name: "Code_Hoarder",
				comment: "But I might need that helper function in 3 years!",
				replies: [],
			},
		],
	},
];
