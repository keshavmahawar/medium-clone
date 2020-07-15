class Blog {
	constructor(blogId, heading, content, creatorId, tags = [], comments = [], date = null) {
		this.blogId = blogId;
		this.heading = heading;
		this.content = content;
		this.creatorId = creatorId;
		this.tags = tags;
		this.comments = comments;
		this.date = date;
		this.blogData = JSON.parse(localStorage.getItem("blog"));
	}
	createBlog() {
		const blog = {};
        
        blog["heading"] = this.heading;
		blog["content"] = this.content;
		blog["creatorId"] = this.creatorId;
		blog["date"] = Date.now();
		blog["tags"] = this.tags;
		blog["comments"] = this.comments;
        
        this.blogData.blogArray[this.blogData.blogArrayLength] = blog;
		this.blogData.blogArrayLength++;

		for (let i in this.tags) {
			if (!this.blogData.blogTags.includes(this.tags[i])) {
				this.blogData.blogTags.push(this.tags[i]);
			}
		}

		localStorage.setItem("blog", JSON.stringify(this.blogData));
	}
	fetchBlog() {
		const blog = this.blogData.blogArray[this.blogId];
		this.heading = blog.heading;
		this.content = blog.content;
		this.creatorId = blog.creatorId;
		this.date = blog.date;
		this.tags = blog.tags;
		this.comments = blog.comments;
	}
	getAllTags() {
		return this.blogData.blogTags;
	}
	getBlogsByTag(tag) {
		let arr = this.blogData.blogArray;
		let tagBlogArr = [];

		for (let i in arr) {
			if (arr[i].tags.includes(tag)) tagBlogArr.push(arr[i]);
		}

		return tagBlogArr;
	}
	getBlogJson() {
		this.fetchBlog();
		return { ...this };
	}
}

export default Blog;

//------Class usage examples-----------
// let test1 = new Blog('1').getBlogJson();
// console.log(test1)

// let test2 = new Blog("","test 3","xyz","kesMahawar",["tagNew","tech","test"]);
// test2.createBlog();

// let test3 = new Blog().getAllTags();
// console.log(test3);

// let test4 = new Blog().getBlogsByTag("tech");
// console.log(test4);
