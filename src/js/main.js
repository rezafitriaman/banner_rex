console.log('banner');
var creative = {};
Enabler.setProfileId(10028492);
/*Enabler.isInitialized()
Enabler.exit()*/

// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
	console.log('enable is ready')
  // Start polite loading, or start animation,
  // load in your image assets, call Enabler methods,
  // and/or include other Studio modules.

  setupDom();

  if (Enabler.isPageLoaded()) {
    politeInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);
  }
}

// Runs when the page is completely loaded.
function politeInit(){
	console.log('polite init')
	showAd();
  // Add your code to hide any loading image or animation and load creative  
  // assets or begin creative animation.
};

function showAd() {
	console.log('showAd')
	/*This code checks if the page is loaded using the Enabler’s isPageLoaded method, which returns true or false. 
	If true, call a custom function that loads your creative (in this example, the custom function is called showAd). 
	If false, listen for the Enabler’s PAGE_LOADED event before calling showAd.*/

	// Dynamic Content variables and sample values
	var development = (window.location.href.indexOf('3000') != -1) ? true : false;

	adds(development);
}

function adds(development) {

	if(development == true) {
		console.log('dev', development);

		var devDynamicContent = {};
		/*temp code*/
		devDynamicContent.TestFeed_rex_Blad1= [{}];
	    devDynamicContent.TestFeed_rex_Blad1[0]._id = 0;
	    devDynamicContent.TestFeed_rex_Blad1[0].UniqueID = 1;
	    devDynamicContent.TestFeed_rex_Blad1[0].Targeting_key = "test";
	    devDynamicContent.TestFeed_rex_Blad1[0].Reporting_Label = "test-report";
	    devDynamicContent.TestFeed_rex_Blad1[0].Default = true;
	    devDynamicContent.TestFeed_rex_Blad1[0].Active = true;
	    devDynamicContent.TestFeed_rex_Blad1[0].Start_date = {};
	    devDynamicContent.TestFeed_rex_Blad1[0].Start_date.RawValue = "13-02-18";
	    devDynamicContent.TestFeed_rex_Blad1[0].Start_date.UtcValue = -61752730022000;
	    devDynamicContent.TestFeed_rex_Blad1[0].End_Date = {};
	    devDynamicContent.TestFeed_rex_Blad1[0].End_Date.RawValue = "20-02-18";
	    devDynamicContent.TestFeed_rex_Blad1[0].End_Date.UtcValue = -61531891622000;
	    devDynamicContent.TestFeed_rex_Blad1[0].Cta_text = "Check";
	    devDynamicContent.TestFeed_rex_Blad1[0].Copy_1 = "And that\'s not the only special cargo TNT ships";
	    devDynamicContent.TestFeed_rex_Blad1[0].Cta_bgColor = "#1bb3f4";
	    devDynamicContent.TestFeed_rex_Blad1[0].Cta_hoverColor = "#1d96c9";
	    devDynamicContent.TestFeed_rex_Blad1[0].Cta_link = {};
	    devDynamicContent.TestFeed_rex_Blad1[0].Cta_link.Url = "https://www.tnt.com/campaign/en_ie/we_ship_anything.html?utm_source=dbm&utm_medium=display&utm_campaign=AOD_default_display&utm_content=tell";
	    devDynamicContent.TestFeed_rex_Blad1[0].Exit_url = {};
	    devDynamicContent.TestFeed_rex_Blad1[0].Exit_url.Url = "https://www.tnt.com/express/en_ie/site/home.html";
	    devDynamicContent.TestFeed_rex_Blad1[0].Copy_2 = "Ever shipped a T-REX accross the world?";
	    Enabler.setDevDynamicContent(devDynamicContent);

	    startAds(devDynamicContent);
	}else {
		console.log('live');
		dynamicContent
		startAds(dynamicContent);
	}

}

/*custom dom elements*/
function setupDom() {
	creative.dom = {};
	creative.dom.banner = document.querySelector('#content');

	/*banner scene one*/
	creative.dom.scene_one = document.querySelector('#scene_one');
	creative.dom.header_text_one = document.querySelector('.header-text-one');
	creative.dom.body_text = document.querySelector('.body-text');
	creative.dom.t_rex = document.querySelector('.t-rex');
	creative.dom.bg_orange = document.querySelector('.bg-orange');

	/*banner scene two*/
	creative.dom.scene_two = document.querySelector('#scene_two');
	creative.dom.grrrr = document.querySelector('.grrrr');

	/*banner scene three*/
	creative.dom.scene_three = document.querySelector('#scene_three');
	creative.dom.header_text_three = document.querySelector('.header-text-three');
	creative.dom.button = document.querySelector('#button');
	creative.dom.buttonText = document.querySelector('#button-text');
	creative.dom.exit = document.querySelector('#bg-exit');
	creative.dom.box = document.querySelector('.box');

	/*all*/
	creative.dom.spinner = document.querySelector('#spinner');
	creative.dom.wrapper_logo = document.querySelector('.wrapper-logo');
}

/*custom dynamicContent*/
function startAds(prefix) {
	console.log('startAds', prefix)

	/*Dynamic Content*/
	/*start*/
	creative.dom.banner.style.display = 'block';
	creative.dom.spinner.style.display = 'none';

	creative.dom.header_text_one.innerText = prefix.TestFeed_rex_Blad1[0].Copy_2;

	creative.dom.header_text_three.innerText = prefix.TestFeed_rex_Blad1[0].Copy_1;
	creative.dom.buttonText.innerText = prefix.TestFeed_rex_Blad1[0].Cta_text;

	creative.dom.button.addEventListener('click', function() {
		window.open(prefix.TestFeed_rex_Blad1[0].Cta_link.Url);
		Enabler.exit('Cta Exit');
	});
	creative.dom.exit.addEventListener('click', function() {
		window.open(prefix.TestFeed_rex_Blad1[0].Exit_url.Url);
		Enabler.exit('Background Exit');
	});

	creative.dom.wrapper_logo.addEventListener('click', function() {
		window.open(prefix.TestFeed_rex_Blad1[0].Exit_url.Url);
		Enabler.exit('Background Exit');
	});

	animation();
}

/*custom animation*/
function animation() {
	tl = new TimelineLite();
	/*trex*/
	TweenMax.set(creative.dom.body_text, {autoAlpha: 0});
	TweenMax.set(creative.dom.grrrr, {autoAlpha: 0});
	TweenMax.set(creative.dom.scene_three, {y: -600});
	TweenMax.set(creative.dom.button, {autoAlpha: 0});

	tl
	.to(creative.dom.t_rex, 0.1, {x:"+=15", ease:Power0.easeIn, yoyo:true, repeat:4, delay: 1})
	.to(creative.dom.t_rex, 0.1, {x:"-=15", ease:Power0.easeIn, yoyo:true, repeat:4, delay: 1.5, onComplete: showBodyText})
	.to(creative.dom.body_text, 0.5, {autoAlpha: 0, ease:Power3.easeIn, delay: 2})
	.to(creative.dom.header_text_one, 0.5, {autoAlpha: 0, ease:Power3.easeIn}, '-=0.5')
	.to(creative.dom.bg_orange, 0.5, {y: -600, ease:Power3.easeIn})
	.to(creative.dom.t_rex, 0.8, {x: 120, width: 355, ease:Power3.easeIn}, '-=0.5')
	.to(creative.dom.grrrr, 0.5, {autoAlpha: 1, ease:Power3.easeIn})
	.to(creative.dom.grrrr, 0.1, {x:"+=15", ease:Power0.easeIn, yoyo:true, repeat:4})
	.to(creative.dom.scene_three, 0.2, {y: 0, ease:Power0.easeIn,  delay: 0.8})
	.to(creative.dom.button, 0.5, {autoAlpha: 1, ease:Power0.easeIn,  delay: 0.1})

	.to(creative.dom.box, 0.1, {x:"+=15", ease:Power0.easeIn, yoyo:true, repeat:4, delay: 2})
	.to(creative.dom.box, 0.1, {x:"-=15", ease:Power0.easeIn, yoyo:true, repeat:4, delay: 2.5, onComplete: repeatBox})

	function showBodyText() {
		TweenMax.to(creative.dom.body_text, 0.5, {autoAlpha: 1, ease:Power3.easeIn});
	}

	function repeatBox() {
		TweenMax.to(creative.dom.box, 0.1, {x:"+=15", ease:Power0.easeIn, yoyo:true, repeat:4, delay: 2})
		TweenMax.to(creative.dom.box, 0.1, {x:"-=15", ease:Power0.easeIn, yoyo:true, repeat:4, delay: 2.5, onComplete: repeatBox})
	}

}
