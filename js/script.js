/*Mobile Menu*/
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
navIcon.addEventListener('click', function(){
	navIcon.classList.toggle('active');									   
	nav.classList.toggle('active');									   
});
navLinks.forEach(function(link){
	link.addEventListener('click', function(){
		navIcon.classList.remove('active');									   
		nav.classList.remove('active');									   
	});
});

// AOS Scroll Animation init
AOS.init({
	duration: 800,
});



