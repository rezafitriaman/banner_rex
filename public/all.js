console.log("banner");var creative={};function enablerInitHandler(){console.log("enable is ready"),setupDom(),Enabler.isPageLoaded()?politeInit():Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,showAd)}function politeInit(){console.log("polite init"),showAd()}function showAd(){console.log("showAd"),1==(-1!=window.location.href.indexOf("localhost"))?(console.log("dev"),adds("devDynamicContent")):(console.log("live"),adds("dynamicContent"))}function adds(e){console.log("content",e),"devDynamicContent"==e?(console.log("content i",e),(e={}).TestFeed_rex_Blad1=[{}],e.TestFeed_rex_Blad1[0]._id=0,e.TestFeed_rex_Blad1[0].UniqueID=1,e.TestFeed_rex_Blad1[0].Reporting_Label="test-report",e.TestFeed_rex_Blad1[0].Default=!0,e.TestFeed_rex_Blad1[0].Active=!0,e.TestFeed_rex_Blad1[0].Start_date={},e.TestFeed_rex_Blad1[0].Start_date.RawValue="13-02-18",e.TestFeed_rex_Blad1[0].Start_date.UtcValue=-61752730022e3,e.TestFeed_rex_Blad1[0].End_Date={},e.TestFeed_rex_Blad1[0].End_Date.RawValue="20-02-18",e.TestFeed_rex_Blad1[0].End_Date.UtcValue=-61531891622e3,e.TestFeed_rex_Blad1[0].Cta_text="Check",e.TestFeed_rex_Blad1[0].Copy_1="And that's not the only special cargo TNT ships",e.TestFeed_rex_Blad1[0].Cta_bgColor="#1bb3f4",e.TestFeed_rex_Blad1[0].Cta_hoverColor="#1d96c9",e.TestFeed_rex_Blad1[0].Cta_link={},e.TestFeed_rex_Blad1[0].Cta_link.Url="https://www.tnt.com/campaign/en_ie/we_ship_anything.html?utm_source=dbm&utm_medium=display&utm_campaign=AOD_default_display&utm_content=tell",e.TestFeed_rex_Blad1[0].Exit_url={},e.TestFeed_rex_Blad1[0].Exit_url.Url="https://www.tnt.com/express/en_ie/site/home.html",Enabler.setDevDynamicContent(e),console.log(e),addListeners(e)):(console.log("live code"),addListeners(e))}function setupDom(){creative.dom={},creative.dom.banner=document.querySelector("#content"),creative.dom.headerText=document.querySelector(".header-text"),creative.dom.button=document.querySelector("#button"),creative.dom.buttonText=document.querySelector("#button-text"),creative.dom.exit=document.querySelector("#bg-exit"),creative.dom.spinner=document.querySelector("#spinner")}function addListeners(e){console.log("addListeners",e),creative.dom.banner.style.display="block",creative.dom.spinner.style.display="none",creative.dom.headerText.innerText=e.TestFeed_rex_Blad1[0].Copy_1,creative.dom.buttonText.innerText=e.TestFeed_rex_Blad1[0].Cta_text,creative.dom.button.addEventListener("click",function(){window.open(e.TestFeed_rex_Blad1[0].Cta_link.Url),Enabler.exit("Cta Exit")}),creative.dom.exit.addEventListener("click",function(){window.open(e.TestFeed_rex_Blad1[0].Exit_url.Url),Enabler.exit("Background Exit")})}function animation(){}Enabler.setProfileId(10028492),window.onload=function(){Enabler.isInitialized()?enablerInitHandler():Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler)};