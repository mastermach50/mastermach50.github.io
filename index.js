// Scroll to next page
document.getElementById("scroll-icon").addEventListener("click", function() {
	window.scrollTo(0, window.innerHeight);
})

window.onload = (event) => {
	console.log("hi")
	for (let sns_link_box of document.getElementsByClassName("sns-link-box")) {
		sns_link_box.addEventListener("onmouseenter", function() {
		console.log("hi")
		})
	}
}

