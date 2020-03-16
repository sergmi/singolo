/*Header*/

let createNavMenu = function(){
	let temp = document.getElementsByClassName("header-nav-menu-item"); 
	for(var i = 0; i < temp.length; i++){
		temp[i].setAttribute("class","header-nav-menu-item");
	}
	return;
}

let changeNavMenuItem = function(){
		if(event.target.className === "header-nav-menu-item"){
			createNavMenu();
			event.target.className += " checked";
		}
		return;	
}
let element = document.getElementsByClassName("header-nav-menu")[0];
element.addEventListener('click', changeNavMenuItem, false);


/*MainSlider*/

let switchMainSliderContent = function(){
		if(event.target.id === "phone_vertical"){
			if(event.target.className === "main-slider-content-item-1"){event.target.className = "main-slider-content-item-1-power-off"}
			else if(event.target.className === "main-slider-content-item-1-power-off"){event.target.className = "main-slider-content-item-1"}
		}
		if(event.target.id === "phone_horizontal"){
			if(event.target.className === "main-slider-content-item-2"){event.target.className = "main-slider-content-item-2-power-off"}
			else if(event.target.className === "main-slider-content-item-2-power-off"){event.target.className = "main-slider-content-item-2"}
		}
		return;	
}
let main_slider_content_container = document.getElementsByClassName("main-slider-content-container")[0];
main_slider_content_container.addEventListener('click', switchMainSliderContent, false);


/*Portfolio*/

let createMenuPortfolio = function(){
	let temp = document.getElementsByClassName("portfolio-nav-menu-item");

	for(var i = 0; i < temp.length; i++){
		temp[i].setAttribute("class","portfolio-nav-menu-item");
	}
	return;
}

let createContentPortfolio = function(x){
	let temp = document.getElementsByClassName("portfolio-image");
	switch (x){
		case "portfolio_all": data = ["1","2","3","4","5","6","7","8","9","10","11","12"];
					data.sort(() => {return Math.random()-0.5});					
					break;
		case "portfolio_web_design": data = ["1","2","3","4","5","6","7","8","9","10","11","12"]; break;
		case "portfolio_graphic_design": data = ["2","4","6","8","10","12","11","9","7","5","3","1"]; break;
		case "portfolio_artwork": data = ["5","3","1","7","9","11","12","10","8","6","4","2"]; break;
	}
	
	for(var i = 0; i < temp.length; i++){
		temp[i].setAttribute("class","portfolio-image layer-"+data[i]);
	}
	return;
}

let changePortfolioMenuItem = function(){
		if(event.target.className === "portfolio-nav-menu-item"){
			createMenuPortfolio();
			event.target.className += " checked";
			createContentPortfolio(event.target.id);
		}
		return;
}
let portfolio_nav_menu = document.getElementsByClassName("portfolio-nav-menu")[0];
portfolio_nav_menu.addEventListener('click', changePortfolioMenuItem, false);

let createSectionPortfolio = function(x){
	let temp = document.getElementsByClassName("portfolio-nav-menu-item checked")[0];
	createContentPortfolio(temp.id);
	return;
}
createSectionPortfolio("portfolio_all");

let changePortfolioItem = function(){
	if(event.target.className.slice(0,15) === "portfolio-image"){
		let temp = document.getElementsByClassName("portfolio-image");
		let temp_item = document.getElementsByClassName("checkedItem")[0];
		if(temp_item){temp_item.className = temp_item.className.slice(0,24);}
		event.target.className += " checkedItem";
	}			
	return;
}
let portfolio_content_container = document.getElementsByClassName("content-container")[0];
portfolio_content_container.addEventListener('click', changePortfolioItem, false);