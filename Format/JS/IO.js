var XMLHttpFactories = [
        function ( )
          {
          return ( new XMLHttpRequest ( ) );
          },
        function ( )
          {
          return ( new ActiveXObject ( "Msxml2.XMLHTTP" ) );
          },
        function ( )
          {
          return ( new ActiveXObject ( "Msxml3.XMLHTTP" ) );
          },
        function ( )
          {
          return ( new ActiveXObject ( "Microsoft.XMLHTTP" ) );
          }
        ];

// ********************************************** createXMLHTTPObject

function createXMLHTTPObject()
{
    var xmlhttp = false;

    for ( var i = 0; ( i < XMLHttpFactories.length ); i++ )
      {
      try
        {
        xmlhttp = XMLHttpFactories [ i ] ( );
        }

      catch ( e )
        {
        continue;
        }

      break;
      }

    return ( xmlhttp );
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
  alert("xhr = "+xhr);
  return xhr;
}

// var xhr = createCORSRequest('GET', url);
// if (!xhr) {
//  throw new Error('CORS not supported');
// }

// xhr.onload = function() {
//  var responseText = xhr.responseText;
//  console.log(responseText);
//  // process the response.
// };

// xhr.onerror = function() {
//   console.log('There was an error!');
// };

// **************************************************** read_contents

function read_contents ( url )
{
    var request = createXMLHTTPObject ( );

    request.open ('GET', url, false );
    request.setRequestHeader ( 'Content-Type', 'text/html' );
    request.send ( '' );

    return ( request.responseText );
}

function read_contentsxhr(url)
{
  var xhr = createCORSRequest('GET', url);
  alert("url call" + url);
  alert("Cors Request" + xhr);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
  xhr.send();
  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    return text;
    alert('Response from CORS request to ' + url + ': ' + text);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  //xhr.send();
  //return "dsdfdfdfsDF"
}