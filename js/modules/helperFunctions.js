function $(id) {
	return document.getElementById(id);
}
function $set(id) {
	let element = $(id);
	element.innerText = "";
	return element;
}
function setLoading(id) {
	$set(id).append(createDiv("spinner-border"));
}
function createEle(elementName, elementClass, ...args) {
	let element = document.createElement(elementName);
	element.className = elementClass;
	element.append(...args);
	return element;
}
function createImage(src, alt) {
	const img = createEle("img", "img-fluid");
	img.setAttribute("src", src);
	img.setAttribute("alt", alt);
	return img;
}
function createDiv(divClass, ...args) {
	const div = createEle("div", divClass);
	div.append(...args);
	return div;
}

export { $, $set, setLoading, createEle, createImage, createDiv };
