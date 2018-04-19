function outputPageContent() {
  if (repositories.length == 0) {
    outhtml = outhtml + '<p>No repos!</p></div>';
  }
  else {
    outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
    $.each(repositories, function(index) {
      outhtml = outhtml + '<li><a href="' + repositories[index].html_url + '" target="_blank">' + repositories[index].name + '</a></li>';
    });
    outhtml = outhtml + '</ul></div>';
  }
  $('#ghapidata').html(outhtml);
} 
