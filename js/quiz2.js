// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});
	console.log("this is a message for you!!!")
})(jQuery);

var ol = document.getElementsByTagName("ol");
var li = ol[0].getElementsByTagName("li");
for(var i=0; i<li.length; i++){
	li[i].innerHTML = "<font color = \"#00"+ (i+6).toString()+(i+6).toString()+(i+6).toString()+(i+6).toString()
											+"\"> " + (i+2) + " cat </font>";
}

function accordionclick(id){
	var acc = document.getElementById(id);
	if(acc.className.indexOf("show") == -1){
		acc.className += "-show";
	}else{
		acc.className = acc.className.replace("-show", "");
	}
}

function magic(event){
	$("body").html("<section>Goodbye my friend! :(</section>");
}

function happy(event){
	$("body").html("");
	var j;
	for(j=0; j<1000; j++){
		$("body").append("<img src='./images/parrot.gif'/>");
	}
}
