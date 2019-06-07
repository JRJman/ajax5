function showList(str, typeSearch){
  if (str == "") {
    document.getElementById('txtHint').innerHTML = "";
    return;
  }else{
    if(window.XMLHttpRequest){

    }else{

    }
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(typeSearch == "list"){
          printArray(this.responseText);
        } else {
          parseJson(this.responseText);
        }
      }
    }
    xmlhttp.open("GET", "php/search.php?q=" + str + "&type=" + typeSearch, true);
    xmlhttp.send();
  }
}

function printArray(arr){
  let landen = JSON.parse(arr);
  let text = "";
  for (var i = 0; i < landen.length; i++) {
    text += "<p onclick=land(" + landen[i+1] + ")>" + landen[i] + "</p><br>";
    i += 1;
  }

  txtHint.innerHTML = text;
}

function parseJson(result){
  let aids = JSON.parse(result);
  let text = "";
  text += "<h1>" + aids[1] + "</h1>";
  text += "<p>Code: " + aids[0] + "</p>";
  text += "<p>Name: " + aids[1] + "</p>";
  text += "<p>Region: " + aids[2] + "</p>";
  text += "<p>SurfaceArea: " + aids[3] + "</p>";
  text += "<p>IndepYear: " + aids[4] + "</p>";
  text += "<p>Population: " + aids[5] + "</p>";
  text += "<p>LifeExpectancy: " + aids[6] + "</p>";
  text += "<p>GNP: " + aids[7] + "</p>";
  text += "<p>GNPOld: " + aids[8] + "</p>";
  text += "<p>LocalName: " + aids[9] + "</p>";
  text += "<p>GovernmentForm: " + aids[10] + "</p>";
  text += "<p>HeadOfState: " + aids[11] + "</p>";
  text += "<p>Capital: " + aids[12] + "</p>";
  text += "<p>Code2: " + aids[13] + "</p>";

  txtHint.innerHTML = text;
}

function land(land){
  showList(land,'answer');
}
