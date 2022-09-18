(function (window){

  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.sayHello = function(name){
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
