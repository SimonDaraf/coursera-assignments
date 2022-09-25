(function (window){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(var i = 0; i < names.length; i++){

    if(names[i].toLowerCase().charAt(0) == 'j'){
      byeSpeaker.sayBye(names[i]);
    }
    else{
      helloSpeaker.sayHello(names[i]);
    }

  }

})(window);

