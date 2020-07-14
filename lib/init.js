function initModes(){
  var e = document.getElementById("case");
  if (location.search.includes("slides")){
    e.classList.add("reveal")
    Reveal.initialize({
    hash: true,
    progress: true,
    plugins: [ RevealNotes ]
  });
  } else {
    e.classList.add("page");
    
    var keySections = document.querySelectorAll('section[id]');
    for (var i=0; i<keySections.length; i++){
      var ks = keySections[i];
      var al = document.createElement('a')
      al.setAttribute('name', "/" + ks.id)
      ks.prepend(al)
    }

    document.getElementById('shortcuts').classList.add('on-page');
  }
}

function initSlides(){
  Reveal.initialize({
    hash: true,
    progress: true,
  });
}