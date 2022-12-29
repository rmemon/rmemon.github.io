if (typeof browser === "undefined") {
    var browser = chrome;
}
if (typeof browser !== 'undefined') {
  console.log('2nd if ========================= Updatedsss')   
  browser.runtime.sendMessage('com.LittleBirdie.app.iOSExtension (XJA6T74Z7S)', { type: 'logout' }); 
}
