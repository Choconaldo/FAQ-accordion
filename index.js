const questionEl = document.querySelectorAll(".question-wraper");
const imgEl = document.querySelectorAll(".minus-plus");
const answerEl = document.querySelectorAll(".answer");
const imgPlus = "images/icon-plus.svg";
const imgMinus = "images/icon-minus.svg";

function showHideAnswer(image, answer) {
	if (answer.classList.contains("invisible")) {
		image.src = imgMinus;
		answer.classList.remove("invisible");
	} else {
		image.src = imgPlus;
		answer.classList.add("invisible");
	}
}

for (let i = 0; i < questionEl.length; i++) {
	questionEl[i].addEventListener("click", function () {
		showHideAnswer(imgEl[i], answerEl[i]);
	});
}
