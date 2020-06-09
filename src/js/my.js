const element = document.querySelector('.info__stamp');
element.classList.add('animate__animated', 'animate__fadeIn');

function conventionalAnimation() {
	var elem =$("#benefits__number");
	let toNum=1200;
	let step = 8;
	let num=0;
	let id = setInterval(frame, 10);
	let numAnimation;
	function frame() {
		if (num === toNum) {
			clearInterval(id);
			$(elem).removeClass('animate__score');
			$(elem).css('opacity',1);
		} else {
			$(elem).addClass('animate__score');
			num=num+step;
			$(elem).text(num);
			$(elem).removeClass('animate__score');
			$(elem).css('opacity',1);
		}
	}

}
conventionalAnimation();
