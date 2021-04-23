function loadData() {
    var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlSOjDpTBtFE1rYGltsFOwdANRVTnXpkZTwMAi-I47NGxfuHHKTIiUBEoN1H0uiRB40LvAk78o1uE8/pub?gid=0&single=true&output=csv";
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 4 && xmlhttp.status==200){
        document.getElementById("display").innerHTML = xmlhttp.responseText;
      }
    };
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
  }