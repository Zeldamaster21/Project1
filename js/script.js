let slideIndex= 0;
let slides = document.getElementsByClassName("Slide");
let interval;

function showSlide(index){
	for(let i =0; i < slides.length; i++) {
		slides[i].style.display= "none";
	}
	slides[index].style.display = "block";
}

function nextSlide(){
	slideIndex = (slideIndex + 1) % slides.length;
	showSlide(slideIndex);
}

function previousSlide(){
	slideIndex= (slideIndex - 1 + slides.length)% slides.length;
	showSlide(slideIndex);
}

function startSlideshow(){
	interval = setInterval(nextSlide, 4000);
}

document.addEventListener("DOMCcontentLoaded", () =>{
	showSlide(slideIndex);
	startSlideshow();
});