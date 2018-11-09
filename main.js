$(document).ready(function(){

	$("button").click(function() {
    var inputItem = document.getElementById("AddNewTask").value;
    
    var aT = document.createTextNode(inputItem);
    var newItem = document.createElement("li");
    newItem.append(aT);
    document.getElementById("todo").append(newItem);
    
  });


$("li").click(function(){
	$(this).hide();
});



$(".todo").on("click", "li", function(){
	$(this).hide();
});
});



