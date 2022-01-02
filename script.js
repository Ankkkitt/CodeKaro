function run (){
    console.log("run");

    let html = document.querySelector('#html').value;
    let css = document.querySelector('#css').value;
    let js = document.querySelector('#js').value;

    // where output will be shown
    let output = document.querySelector('#output-window');
    
    // making output screen code as code takens from our input ie., html, css and js
    output.contentDocument.body.innerHTML = html+"<style>"+css+"</style>";

    // we cant simply add js here in browser as we have done above for html, css and js
    // so we can user eval() method thought contentWindow like for html & css we have used contentDocument
    output.contentWindow.eval(js);
}