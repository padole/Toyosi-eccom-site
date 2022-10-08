function navMenu(){
    var navbar = document.getElementById('nav');
    navbar.classList.toggle('show');
}

//explore slider

var currentIndex =1
displaySlides(currentIndex);

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementById("imageslides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "flex";
}


//cart

// var cart = document.getElementsByClassName('cart-account');
// var select = document.querySelector('.select');
// var addCart = document.getElementById('cart2');

// for(var but of addCart){
//     but.addEventListener('click', (e)=>{
//         var add = Number(cart.getAttribute('data-count') || 0);
//         cart.setAttribute('data-count', add +1);
//         cart.classList.add('zero') 
        
        
//         var image = e.target.parentNode.querySelector('img');
// 			var span = e.target.parentNode.querySelector('span');
// 			var s_image = image.cloneNode(false);
// 			span.appendChild(s_image);
// 			span.classList.add("active");
// 			setTimeout(()=>{
// 				span.classList.remove("active");
// 				span.removeChild(s_image);
// 			}, 500); 


//         var parent = e.target.parentNode;
// 			var clone = parent.cloneNode(true);
// 			select.appendChild(clone);
// 			clone.lastElementChild.innerText = "Buy-now";
			
// 			if (clone) {
// 				cart.onclick = ()=>{
// 					select.classList.toggle('display');
// 				}	
// 			}
//     })
// }

