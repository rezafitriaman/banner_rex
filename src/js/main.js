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
	var development = (window.location.href.indexOf('localhost') != -1) ? true : false;
	
	if(development == true) {
		//dev
		console.log('dev')
		adds('devDynamicContent');
	} else {  
		//live
		//dynamicContent.TestFeed_rex_Blad1[0].UniqueID;
		console.log('live')
		adds('dynamicContent');
	}

}

function adds(content) {
	console.log('content', content)

	if(content == 'devDynamicContent') {
		console.log('content i', content)
		content = {};
		content.TestFeed_rex_Blad1= [{}];
	    content.TestFeed_rex_Blad1[0]._id = 0;
	    content.TestFeed_rex_Blad1[0].UniqueID = 1;
	    content.TestFeed_rex_Blad1[0].Reporting_Label = "test-report";
	    content.TestFeed_rex_Blad1[0].Default = true;
	    content.TestFeed_rex_Blad1[0].Active = true;
	    content.TestFeed_rex_Blad1[0].Start_date = {};
	    content.TestFeed_rex_Blad1[0].Start_date.RawValue = "13-02-18";
	    content.TestFeed_rex_Blad1[0].Start_date.UtcValue = -61752730022000;
	    content.TestFeed_rex_Blad1[0].End_Date = {};
	    content.TestFeed_rex_Blad1[0].End_Date.RawValue = "20-02-18";
	    content.TestFeed_rex_Blad1[0].End_Date.UtcValue = -61531891622000;
	    content.TestFeed_rex_Blad1[0].Cta_text = "Check";
	    content.TestFeed_rex_Blad1[0].Copy_1 = "And that\'s not the only special cargo TNT ships";
	    content.TestFeed_rex_Blad1[0].Cta_bgColor = "#1bb3f4";
	    content.TestFeed_rex_Blad1[0].Cta_hoverColor = "#1d96c9";
	    content.TestFeed_rex_Blad1[0].Cta_link = {};
	    content.TestFeed_rex_Blad1[0].Cta_link.Url = "https://www.tnt.com/campaign/en_ie/we_ship_anything.html?utm_source=dbm&utm_medium=display&utm_campaign=AOD_default_display&utm_content=tell";
	    content.TestFeed_rex_Blad1[0].Exit_url = {};
	    content.TestFeed_rex_Blad1[0].Exit_url.Url = "https://www.tnt.com/express/en_ie/site/home.html";
	    Enabler.setDevDynamicContent(content);
	    console.log(content)

	    addListeners(content);
	}else {
		console.log('live code')
		addListeners(content);
	}

}

function setupDom() {
	creative.dom = {};
	creative.dom.banner = document.querySelector('#content');
	creative.dom.headerText = document.querySelector('.header-text');
	creative.dom.button = document.querySelector('#button');
	creative.dom.buttonText = document.querySelector('#button-text');
	creative.dom.exit = document.querySelector('#bg-exit');
	creative.dom.spinner = document.querySelector('#spinner');
}

function addListeners(content) {
	console.log('addListeners', content)
	creative.dom.banner.style.display = 'block';
	creative.dom.spinner.style.display = 'none';
	creative.dom.headerText.innerText = content.TestFeed_rex_Blad1[0].Copy_1;
	creative.dom.buttonText.innerText = content.TestFeed_rex_Blad1[0].Cta_text;


	creative.dom.button.addEventListener('click', function() {
		window.open(content.TestFeed_rex_Blad1[0].Cta_link.Url);
		Enabler.exit('Cta Exit');
	});

	creative.dom.exit.addEventListener('click', function() {
		window.open(content.TestFeed_rex_Blad1[0].Exit_url.Url);
		Enabler.exit('Background Exit');
	});

}

function animation() {

}