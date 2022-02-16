let alert = document.querySelector(".alert");
let box = document.querySelector(".box");

let eresult = document.querySelector(".result p");
let ekey = document.querySelector(".details-list .key p:last-child");
let elocation = document.querySelector(".details-list .location p:last-child");
let ewhich = document.querySelector(".details-list .which p:last-child");
let ecode = document.querySelector(".details-list .code p:last-child");

document.addEventListener("keydown", function (e) {
	if (e.code === "Space") {
		eresult.innerText = e.code;
		ekey.innerText = "_";
		elocation.innerText = e.location;
		ewhich.innerText = e.which;
		ecode.innerText = e.code;
	} else {
		eresult.innerText = e.code;
		ekey.innerText = e.key;
		elocation.innerText = e.location;
		ewhich.innerText = e.which;
		ecode.innerText = e.code;
	}

	alert.classList.add("hide");
	box.classList.remove("hide");
});
