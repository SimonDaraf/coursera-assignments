(function(window){

  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.sayBye = function(name){
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
