// chrome.browserAction.onClicked.addListener(function(activeTab) {
//     var newUrl = "http://github.com/";
//     chrome.tabs.create({url: newUrl});
//   });

// var btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//   var newUrl = "http://github.com/";
//   chrome.tabs.create({url: newUrl});
// });

let inputValue = document.getElementById("ghusername").value;

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', function() {
    chrome.tabs.create({url: 'http://github.com/' + inputValue});
  });
});
