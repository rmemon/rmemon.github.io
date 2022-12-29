alert('Loaded 1') 
if (typeof browser === "undefined") {
    alert('Loaded 2')
    var browser = chrome;
        console.log('1st if')   
}

console.log('=========================')   
if (typeof browser !== 'undefined') {
    alert('Loaded 3')
   
        console.log('2nd if ========================= Updatedsss')   
//         browser.runtime.sendMessage('kahhahkgohnkfamdpflipoghbeejagbc', { type: 'login', jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2NzcsIm5hbWUiOiJybWVtb24xMjIiLCJmaXJzdG5hbWUiOiJSYWhpbCIsInJvbGUiOiJhZG1pbiIsInd0aWQiOiIxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3MDAwIiwic3VybmFtZSI6bnVsbCwiZ2VuZGVyIjoibWFsZSIsImNyZWF0ZWQiOiIyMDIyLTEyLTI2IDEwOjIzOjExICswMDAwIn0.9SB7rZm1Wco-mstCazLBQBQmFEPkCePeC8rOBk-2NUU' });
        browser.runtime.sendMessage('com.LittleBirdie.app.iOSExtension (XJA6T74Z7S)', { type: 'login', jwt: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2NzcsIm5hbWUiOiJybWVtb24xMjIiLCJmaXJzdG5hbWUiOiJSYWhpbCIsInJvbGUiOiJhZG1pbiIsInd0aWQiOiIxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3MDAwIiwic3VybmFtZSI6bnVsbCwiZ2VuZGVyIjoibWFsZSIsImNyZWF0ZWQiOiIyMDIyLTEyLTI2IDEwOjIzOjExICswMDAwIn0.9SB7rZm1Wco-mstCazLBQBQmFEPkCePeC8rOBk-2NUU' });
     alert('Loaded 4')
}

// window.close();
