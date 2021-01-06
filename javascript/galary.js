//Slider Section
const addition = (()=>{
	let $ = (container) =>{
		return document.querySelector(container);
	}
	let al = (container) =>{
		return document.querySelectorAll(container);
	}

	let imageList = [];
	let counter = 0;

	let images = al('.store-img');
	let container = $('.lightbox-container');
	let item = $('.lightbox-item');
	let  close = $('.lightbox-close');
	let leftBtn = $('.btnLeft');
	let rightBtn = $('.btnRight');


	images.forEach((image)=>{
		imageList.push(image.src);
		image.addEventListener('click',(event)=>{
			container.classList.add('show');

			let getSrc = event.target.src;
			//console.log(get);
			item.style.backgroundImage = `url(${getSrc})`;

			counter = imageList.indexOf(getSrc);
			//console.log(counter);
		})
	})

	close.addEventListener('click',()=>{
		event.preventDefault()
		container.classList.remove('show')
	})

	leftBtn.addEventListener('click',(event)=>{
		event.preventDefault();
		counter--;
		if (counter < 0) {
			counter = imageList.length-1;
		}
		item.style.backgroundImage = `url(${imageList[counter]})`;
	})
	
	rightBtn.addEventListener('click',(event)=>{
		event.preventDefault();
		counter++;
		if (counter > imageList.length-1) {
			counter = 0;
		}
		item.style.backgroundImage = `url(${imageList[counter]})`;
	})


	
})();


