
alert('Hello-91')
if (typeof browser === "undefined") {
    var browser = chrome;
}

try {
//   browser.runtime.sendMessage('com.LittleBirdie.app.iOSExtension', { type: 'check-installed'}, function (res){ 
//      alert(res)
//   })    
    window.addEventListener('message', (message) => {
        console.log(message?.data?.lbExtInstalled)
        })

    
    browser.runtime.sendMessage('eclmkceplokololbkleieojfomhcicdf', { type: 'check-installed'}, function(response) {
        if(response) {
            alert(JSON.stringify(response));
            alert(1);
        }
    })

    browser.runtime.sendMessage('com.LittleBirdie.app.iOSExtension (XJA6T74Z7S)', { type: 'check-installed'}, function(response) {
        if(response) {
            alert(JSON.stringify(response));
            alert(2);
        }
    })

    browser.runtime.sendMessage('com.LittleBirdie.app.iOSExtension XJA6T74Z7S', { type: 'check-installed'}, function(response) {
        if(response) {
            alert(JSON.stringify(response));
            alert(3);
        }
    })

    browser.runtime.sendMessage({ type: 'check-installed'}, function(response) {
        if(response) {
            alert(JSON.stringify(response));
            alert(4);
        }
    })
}
catch(e) {
console.log(e)
}

// var port = chrome.runtime.connect({name: "knockknock"});
// port.onMessage.addListener(function(msg) {
//  console.log(msg)
// });


// if (typeof browser === "undefined") {
//     var browser = chrome;
// }

// alert(browser?.permissions)

// let token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2NzcsIm5hbWUiOiJybWVtb24xMjIiLCJmaXJzdG5hbWUiOiJSYWhpbCIsInJvbGUiOiJhZG1pbiIsInd0aWQiOiIxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3MDAwIiwic3VybmFtZSI6bnVsbCwiZ2VuZGVyIjoibWFsZSIsImNyZWF0ZWQiOiIyMDIyLTEyLTI2IDEwOjIzOjExICswMDAwIn0.9SB7rZm1Wco-mstCazLBQBQmFEPkCePeC8rOBk-2NUU'
// if (typeof browser !== 'undefined') {

// try {
// //         browser.runtime.sendMessage('kahhahkgohnkfamdpflipoghbeejagbc', { type: 'login', token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2NzcsIm5hbWUiOiJybWVtb24xMjIiLCJmaXJzdG5hbWUiOiJSYWhpbCIsInJvbGUiOiJhZG1pbiIsInd0aWQiOiIxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3MDAwIiwic3VybmFtZSI6bnVsbCwiZ2VuZGVyIjoibWFsZSIsImNyZWF0ZWQiOiIyMDIyLTEyLTI2IDEwOjIzOjExICswMDAwIn0.9SB7rZm1Wco-mstCazLBQBQmFEPkCePeC8rOBk-2NUU' });
//         browser.runtime.sendMessage('com.LittleBirdie.app.iOSExtension (XJA6T74Z7S)', { type: 'login', token: token  });
//     } catch(e) {}
//      alert('Loaded 6')
// }

// setTimeout(()=> {
//     window.location.href = 'https://www.jbhifi.com.au/products/sony-65-x75k-bravia-led-4k-uhd-hdr-google-tv-2022?lbToken=' + token
// }, 2000)


// // window.close();
