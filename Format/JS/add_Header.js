function add_header ()
{                                               
  var header = document.getElementById ('header');
  //var header_contents = read_contentsxhr ("http://localhost/format/js/header.txt");
  //place_in_outerHTML(header,header_contents);
  //alert("header contents = " + header_contents);
  setHeaderContent();
}

function setHeaderContent()
{
  var header = document.getElementById ('header');
  var xhr = createCORSRequest('GET', "http://localhost/format/js/header.txt");
  
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
  xhr.send();
  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    place_in_outerHTML(header,text);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  }; 
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  // alert("xhr = "+xhr);
  return xhr;
}