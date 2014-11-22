// quick 'n' dirty js to handle blog coming soon

var home_subtitle = document.getElementById('home_subtitle').style,
	blog_subtitle = document.getElementById('blog_subtitle').style,
	home_btn = document.getElementById('home_btn').style,
	blog_btn = document.getElementById('blog_btn').style,
	btn1, btn2, st1, st2;

function swapTo(target) {
	if (target === "blog") {
		btn1 = home_btn;
		btn2 = blog_btn;
		st1 = blog_subtitle;
		st2 = home_subtitle;
	} else {
		btn1 = blog_btn;
		btn2 = home_btn;
		st1 = home_subtitle;
		st2 = blog_subtitle;
	}

	btn1.display = 'none';
	st1.display = 'none'
	btn2.animation = 'none';
	btn2['-webkit-animation'] = 'none';
	btn2['-moz-animation'] = 'none';
	btn2['-o-animation'] = 'none';
	btn2['-ms-animation'] = 'none';

	btn2.opacity = 1;
	btn2.display = 'inline-block';
	st2.display = 'block';
}

document.getElementById('blog_btn').onclick = function() { swapTo('home') };
document.getElementById('home_btn').onclick = function() { swapTo('blog') };