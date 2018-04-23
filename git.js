// chrome.browserAction.onClicked.addListener(function(activeTab) {
//     var newUrl = "http://github.com/";
//     chrome.tabs.create({url: newUrl});
//   });
var btn = document.querySelector('button');

btn.addEventListener('click', function () {
  var newUrl = "http://github.com/";
  chrome.tabs.create({url: newUrl});
});


// function outputPageContent() {
//   if (repositories.length == 0) {
//     outhtml = outhtml + '<p>No repos!</p></div>';
//   }
//   else {
//     outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
//     $.each(repositories, function(index) {
//       outhtml = outhtml + '<li><a href="' + repositories[index].html_url + '" target="_blank">' + repositories[index].name + '</a></li>';
//     });
//     outhtml = outhtml + '</ul></div>';
//   }
//   $('#ghapidata').html(outhtml);
// }
