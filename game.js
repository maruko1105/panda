$(document).ready(function() {


//////////////variables//////////////////////////////
var plyr_X = "src", "pic/donut.png";
var plyr_O = "sre", "pic/coffee.png";
var turn = 0;
var x = $("#x");
var o = $("#o");
var sq1;
var sq2;
var sq3;
var sq4;
var sq5;
var sq6;
var sq7;
var sq8;
var sq9;
////////////////////////////////////////////

////////////pick player/////////////////////


	x.click(function() {

		turn = 1;
		$(dialog).slideUp();
		person = true;
		game();
	});

	o.click(function() {
		
		turn = 0;
		$(dialog).slideUp();
		person = false;
		game();
	});
	


function computer() {
	////////////////////////////If X is picked
	if(person) { 
		if( sq1 == "" && ((sq2 == "X" && sq3 == "X") || (sq4 == "X" && sq7 == "X") || (sq5 == "X" && sq9 == "X"))) {
		$('#sq1').text("O");
		turn = 1;
	
		} else if( sq2 == "" && ((sq1 == "X" && sq3 == "X") || (sq5 == "X" && sq8 == "X"))) {
			$('#sq2').text("O");
			turn = 1;
		
		}else if( sq3 == "" && ((sq1 == "X" && sq2 == "X") || (sq5 == "X" && sq7 == "X") || (sq6 == "X" && sq9 == "X"))) {
			$('#sq3').text("O");
			turn = 1;
		
		}else if( sq4 == "" && ((sq1 == "X" && sq7 == "X") || (sq5 == "X" && sq6 == "X") || (sq1 == "X" && sq9 == "X"))) {
			$('#sq4').text("O");
			turn = 1;
		
		}else if( sq5 == "" && ((sq1 == "X" && sq9 == "X") || (sq3 == "X" && sq7 == "X") || (sq4 == "X" && sq6 == "X") || 
		  (sq2 == "X" && sq8 == "X"))) {
			$('#sq5').text("O");
			turn = 1;
		
		}else if( sq6 == "" && ((sq3 == "X" && sq9 == "X") || (sq4 == "X" && sq5 == "X") || (sq7 == "X" && sq3 == "X"))) {
			$('#sq6').text("O");
			turn = 1;
		
		}else if( sq7 == "" && ((sq1 == "X" && sq4 == "X") || (sq8 == "X" && sq9 == "X") || (sq5 == "X" && sq3 == "X"))) {
			$('#sq7').text("O");
			turn = 1;
			

		}else if( sq8 == "" && ((sq5 == "X" && sq2 == "X") || (sq7 == "X" && sq9 == "X"))) {
			$('#sq8').text("O");
			turn = 1;

		}else if( sq9 == "" && ((sq5 == "X" && sq1 == "X") || (sq3 == "X" && sq6 == "X") || (sq8 == "X" && sq7 == "X") || (sq3 == "X" && sq7 == "X"))) {
			$('#sq9').text("O");
			turn = 1;
		} else { 
	            if (sq5 == "") {
	            	
	                $('#sq5').text("O");
	                turn = 1;
	               
	            } else if (sq1 == "") {
	            	
	                $('#sq1').text("O");
	                turn = 1;
	                    
	            } else if (sq9 == "") {

	                $('#sq9').text("O");
	                turn = 1;
	                  
	            } else if (sq3 == "") {
	            	
	                $('#sq3').text("O");
	                turn = 1;
	                  
	            } else if (sq4 == "") {

	                $('#sq4').text("O");
	                turn = 1;
	                  
	            } else if (sq6 == "") {

	                $('#sq6').text("O");
	                turn = 1;
	                  
	            } else if (sq2 == "") {

	                $('#sq2').text("O");
	                turn = 1;
	                  
	            } else if (sq7 == "") {

	                $('#sq7').text("O");
	                turn = 1;
	                  
	            }
	        }

	} else {


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////If O is picked
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if( sq1 == "" && ((sq2 == "O" && sq3 == "O") || (sq4 == "O" && sq7 == "O") || (sq5 == "O" && sq9 == "O"))) {
		$('#sq1').text("X");
		turn = 0;
	
	} else if( sq2 == "" && ((sq1 == "O" && sq3 == "O") || (sq5 == "O" && sq8 == "O"))) {
		$('#sq2').text("X");
		turn = 0;
	
	}else if( sq3 == "" && ((sq1 == "O" && sq2 == "O") || (sq5 == "O" && sq7 == "O") || (sq6 == "O" && sq9 == "O"))) {
		$('#sq3').text("X");
		turn = 0;
	
	}else if( sq4 == "" && ((sq1 == "O" && sq7 == "O") || (sq5 == "O" && sq6 == "O"))) {
		$('#sq4').text("X");
		turn = 0;
	
	}else if( sq5 == "" && ((sq1 == "O" && sq9 == "O") || (sq3 == "O" && sq7 == "O") || (sq4 == "O" && sq6 == "O") || 
	  (sq2 == "O" && sq8 == "O"))) {
		$('#sq5').text("X");
		turn = 0;
	
	}else if( sq6 == "" && ((sq3 == "O" && sq9 == "O") || (sq4 == "O" && sq5 == "O"))) {
		$('#sq6').text("X");
		turn = 0;
	
	}else if( sq7 == "" && ((sq1 == "O" && sq4 == "O") || (sq8 == "O" && sq9 == "O") || (sq5 == "O" && sq3 == "O"))) {
		$('#sq7').text("X");
		turn = 0;
		

	}else if( sq8 == "" && ((sq5 == "O" && sq2 == "O") || (sq7 == "O" && sq9 == "O"))) {
		$('#sq8').text("X");
		turn = 0;

	}else if( sq9 == "" && ((sq5 == "O" && sq1 == "O") || (sq3 == "O" && sq6 == "O") || (sq8 == "O" && sq7 == "O"))) {
		$('#sq9').text("X");
		turn = 0;

	} else { 
            if (sq5 == "") {

            	
            	$('#sq5').text("X");
                turn = 0;
            	
               
            } else if (sq6 == "") {

            	
            	$('#sq6').text("X");
                turn = 0;
            	
                    
            } else if (sq9 == "") {

            	
            	$('#sq9').text("X");
                turn = 0;
            	
                  
            } else if (sq8 == "") {
            	
            	$('#sq8').text("X");
                turn = 0;
            	
                  
            } else if (sq4 == "") {

            	
            	$('#sq4').text("X");
                turn = 0;
            
                  
            } else if (sq1 == "") {

                $('#sq1').text("X");
                turn = 0;
                  
            } else if (sq2 == "") {

                $('#sq2').text("X");
                turn = 0;
                  
            } else if (sq7 == "") {

                $('#sq7').text("X");
                turn = 0;
                  
            }
        }
    }


}	




function game() { /////////determines who's turn it is/////////////////////
	$("td").one('click', function(event) {
		
			if(turn === 0) {
				$(this).text(plyr_O);
				boardCheck();
				winCheck();

				turn = 1;
				
				computer();
				boardCheck();
				winCheck();
				
			} else {
				$(this).text(plyr_X);
				boardCheck();
				winCheck();
				turn = 0;
				
				computer();
				boardCheck();
				winCheck();

			}
	
	});
	
} ///////////////end of play funtion///////////////////////////////////




function winCheck() { /////////////////determines if there is a match of three for X or O////////////////////
	if( sq1 == "X" && sq2 == "X" && sq3 == "X" ||
		sq4 == "X" && sq5 == "X" && sq6 == "X" ||
		sq7 == "X" && sq8 == "X" && sq9 == "X" ||
		sq1 == "X" && sq4 == "X" && sq7 == "X" ||
		sq2 == "X" && sq5 == "X" && sq8 == "X" ||
		sq3 == "X" && sq6 == "X" && sq9 == "X" ||
		sq1 == "X" && sq5 == "X" && sq9 == "X" ||
		sq3 == "X" && sq5 == "X" && sq7 == "X"
		) {
		
		alert("X is the Winner!");
		gameOver();
	}
	else if( sq1 == "O" && sq2 == "O" && sq3 == "O" ||
			 sq4 == "O" && sq5 == "O" && sq6 == "O" ||
			 sq7 == "O" && sq8 == "O" && sq9 == "O" ||
			 sq1 == "O" && sq4 == "O" && sq7 == "O" ||
			 sq2 == "O" && sq5 == "O" && sq8 == "O" ||
			 sq3 == "O" && sq6 == "O" && sq9 == "O" ||
			 sq1 == "O" && sq5 == "O" && sq9 == "O" ||
			 sq3 == "O" && sq5 == "O" && sq7 == "O"
			 ) {

			 alert("O is the winner!");
			gameOver();
	} else if(sq1 != "" && sq2 != "" && sq3 != "" && 
			  sq4 != "" && sq5 != "" && sq6 != "" && 
			  sq7 != "" && sq8 != "" && sq9 != "") {
		alert("Tie Game!");
		gameOver();
	}
		
} /////////////////end match of three for X or O function////////////////////



var boardCheck = function () { //////////check squares//////////////////////
    sq1 = $('#sq1').html();
    sq2 = $('#sq2').html();
    sq3 = $('#sq3').html();
    sq4 = $('#sq4').html();
    sq5 = $('#sq5').html();
    sq6 = $('#sq6').html();
    sq7 = $('#sq7').html();
    sq8 = $('#sq8').html();
    sq9 = $('#sq9').html();
};

var gameOver = function() { /////// Resests Game /////////
	sq1 = $('#sq1').text("");
    sq2 = $('#sq2').text("");
    sq3 = $('#sq3').text("");
    sq4 = $('#sq4').text("");
    sq5 = $('#sq5').text("");
    sq6 = $('#sq6').text("");
    sq7 = $('#sq7').text("");
    sq8 = $('#sq8').text("");
    sq9 = $('#sq9').text("");

    location.reload();
}





});