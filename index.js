/* const answer = [
	"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
	"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
	"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
	"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
];

const question = [
	"What is Frontend Mentor, and how will it help me?",
	"Is Frontend Mentor free?",
	"Can I use Frontend Mentor projects in my portfolio?",
	"How can I get help if I'm stuck on a challenge?",
]; */

const answerEl = document.getElementById("answer-el");
const questionEl = document.getElementById("question-el");
const imgEl = document.getElementById("minus-el");
let toggle = false;

function showHideAnswer(image, answer) {
	if (toggle) {
		image.src = "images/icon-plus.svg";
		answer.classList.toggle("invisible");
	} else {
		image.src = "images/icon-minus.svg";
		answer.classList.toggle("invisible");
	}
	toggle = !toggle;
}

questionEl.addEventListener("click", function () {
	showHideAnswer(imgEl, answerEl);
});
