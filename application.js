$(document).ready(function() { 

 	//Adding list items
 	$('#add').click(function() {
 		event.preventDefault();
 		var txtbox = document.getElementById('#item'); 
  		var txtval = txtbox.value; 
  		var value =$('#item').val();
 		$('<li class="items"></li>').prependTo('.list').html('<div class="box"><span>' + txtval + '</span></div>'); 
        document.getElementById('#item').value = '';
    });

    /*//delete list items 
 	$('#list').click(function(e){
 		e.preventDefault(); 
 		$(this).fadeOut(2000);
 	}); 
 
    //cross off list items 
 	$('.list').on('click','li', function(){
 		//$(this).toggleClass('strike'); 
 		alert("click item");
    }); */

 


});