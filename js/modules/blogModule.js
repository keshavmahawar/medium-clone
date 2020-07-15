class Blog {
	constructor(blogId=null, heading, content, creatorId, tags = [], comments = [], date = null) {
		this.blogId = blogId;
		this.heading = heading;
		this.content = content;
		this.creatorId = creatorId;
		this.tags = tags;
		this.comments = comments;
        this.date = date;
        this.blogData = JSON.parse(localStorage.getItem("blogs"))
	}
	createBlog(){
        /*{
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
		} */  
        const blog = {}
        blog["heading"] = this.heading
        blog["content"] = this.content
        blog["creatorId"] = this.creatorId
        blog["date"] = Date.now()
        blog["tags"] = this.tags
        blog["comments"] = this.comments
        // this.blogData.blogArray = 
    }
}
