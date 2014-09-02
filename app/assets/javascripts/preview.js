$(document).on("page:change", function(){

var Translator = function(input, output) {
  this.input = input;
  this.output = output;
  this.keyListener();
  console.log("Made a new instance!")
};

Translator.prototype.draw = function(){
  console.log("I got called!");
  // debugger
  $(this.output).empty();
  // this.output.innerHTML
}

Translator.prototype.keyListener = function() {
  // debugger
  $(this.input[0]).keypress(this.draw.bind(this));
}

new_translator = new Translator($("#rawtext"), $("#preview"));

})
