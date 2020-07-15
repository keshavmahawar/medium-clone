let blog = {
	blogArray: {
		0: {
			heading: "Test Heading 1",
			content: "content 1",
            date: "1594830609887",
            creatorId: "kesMahawar",
			tags: ["tech", "medic"],
			comments: [
				{
					userId: "kesMahawar",
					comment: "comment 1",
					date: "1594830610887",
				},
				{
					userId: "manideep",
					comment: "comment 2",
					date: "1594830609887",
				},
			],
		},
		1: {
			heading: "Test Heading 2",
			content: "content 2",
            date: "1594830609887",
            creatorId: "kesMahawar",
			tags: ["tech"],
			comments: [
				{
					userId: "kesMahawar",
					comment: "comment 1",
					date: "1594830609887",
				},
				{
					userId: "manideep",
					comment: "comment 2",
					date: "1594830609887",
				},
			],
		},
	},
	blogArrayLength: 2,
	blogTags: ["tech", "medics"],
};

localStorage.setItem("blog",JSON.stringify(blog))