const carousel = document.querySelector('.carousel');
let isDragStart = false,
	prevPageX,
	prevScrollLeft;

const dragStart = (e) => {
	isDragStart = true;
	prevPageX = e.pageX;
	prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
	if (!isDragStart) return;
	e.preventDefault();
	let positionDiff = e.pageX - prevPageX;
	carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
	isDragStart = false;
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);
