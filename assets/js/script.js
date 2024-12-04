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
document.getElementById('emailButton').addEventListener('click', function () {
	// Tạo liên kết email
	const email = 'joseph@newzealandbrands.co.nz'; // Địa chỉ email
	const subject = 'Tiêu đề email'; // Tiêu đề email
	const body = 'Nội dung email'; // Nội dung email
	const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	// Điều hướng đến liên kết mailto
	window.location.href = mailtoLink;
});
