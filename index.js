const questionEl = document.querySelectorAll(".question-wraper");
const imgEl = document.querySelectorAll(".minus-plus");
const answerEl = document.querySelectorAll(".answer");
const imgPlus =
	"https://raw.githubusercontent.com/Choconaldo/FAQ-accordion/6f60e0a621ca3cc85dd4ed696657b80fb5023792/images/icon-plus.svg";
const imgMinus =
	"https://raw.githubusercontent.com/Choconaldo/FAQ-accordion/6f60e0a621ca3cc85dd4ed696657b80fb5023792/images/icon-minus.svg";

function showHideAnswer(image, answer) {
	console.log(image.src);
	if (
		image.src ===
		"https://raw.githubusercontent.com/Choconaldo/FAQ-accordion/6f60e0a621ca3cc85dd4ed696657b80fb5023792/images/icon-minus.svg"
	) {
		image.src = imgPlus;
		answer.classList.toggle("invisible");
	} else {
		image.src = imgMinus;
		answer.classList.toggle("invisible");
	}
}

questionEl[0].addEventListener("click", function () {
	showHideAnswer(imgEl[0], answerEl[0]);
});
questionEl[1].addEventListener("click", function () {
	showHideAnswer(imgEl[1], answerEl[1]);
});
questionEl[2].addEventListener("click", function () {
	showHideAnswer(imgEl[2], answerEl[2]);
});
questionEl[3].addEventListener("click", function () {
	showHideAnswer(imgEl[3], answerEl[3]);
});
