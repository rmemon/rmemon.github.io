if (typeof browser === "undefined") {
    var browser = chrome;
}
if (typeof browser !== 'undefined') {
  console.log('2nd if ========================= Updatedsss')   
  browser.runtime.sendMessage('com.LittleBirdie.app.iOSExtension (XJA6T74Z7S)', { type: 'logout', token: null }); 
}

setTimeout(() => {
    window.location.href = 'https://www.jbhifi.com.au/products/sony-65-x75k-bravia-led-4k-uhd-hdr-google-tv-2022'
}, 2000)
