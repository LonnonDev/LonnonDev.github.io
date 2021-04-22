$(".blog1").load("/blogs/blog1.html")
$(".blog2").load("/blogs/blog2.html")
$(".blog3").load("/blogs/blog3.html")

function ShowBlog(blognum) {
	var Blogs = document.querySelectorAll('[id=blog]')
	var BlogsLength = Blogs.length
	for (i = 1; i < BlogsLength/2+1; i++) {
		var BlogPage = document.getElementsByClassName("blog".concat(parseInt(i)))[0]
		BlogPage.style.display = "none"
	}
	document.getElementsByClassName("blog".concat(blognum))[0].style.display = "contents"
}