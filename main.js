$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})


const navSlide = () => {
	 
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");
	 document.querySelector('.hamburger-menu') .addEventListener('click',() =>{
		 document.querySelector('.nav-wrapper') .classList.toggle('change');
	 })

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
