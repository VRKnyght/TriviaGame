$(document).ready(function(){
//Here is where the start menu goes

var questionsLeft = 9; 
var time = 21;
var steamCh = 0;
var dieselN = 0;
var cyberG = 0;
var aeonJ = 0;
var etherCe = 0;
var zombY = 0;
var bioM = 0;
var traderP = 0;
var crystalH = 0;



//This is where I want to put the game timer
 

timeCounter = function() {
	
	if (time === 0 && questionsLeft === 0) {return};
	//This will reset the timer
	if (time === 0) {
		questionsLeft--;
		time = 20;
	};
	time--;
	console.log(time);
	console.log(questionsLeft);
};

$('#start').on('click', setInterval(timeCounter, 1000));

$('.button').on('click', function(){ time = 20; questionsLeft--;});
//After the timer, we will put the function for the multiple choice selector
$('#first').on('click', function(){

	switch(questionsLeft) {
		case 1:
			$(this).html();
			steamCh++;

			break;
		case 2:
			$(this).html();
			dieselN++; 

			break;
		case 3:
			$(this).html();
			cyberG++;

			break;
		case 4:
			$(this).html();
			etherCe++;

			break;
		case 5:
			$(this).html();
			traderP++;

			break;
		case 6:
			$(this).html();
			bioM++;

			break;
		case 7:
			$(this).html();
			crystalH++

			break;
		case 8:
			$(this).html();
			aeonJ++;

			break;
		case 9:
			$(this).html();
			zombY++;

			break;
		default:
			crystalH++;
			break;
	};
});

$('#second').on('click', function(){
	switch(questionsLeft) {
		case 1:
			$(this).html();
			dieselN++;
	
			break;
		case 2:
			$(this).html();
			zombY++;

			break;
		case 3:
			$(this).html();

			break;
		case 4:
			$(this).html();

			break;
		case 5:
			$(this).html();

			break;
		case 6:
			$(this).html();

			break;
		case 7:
			$(this).html();

			break;
		case 8:
			$(this).html();

			break;
		case 9:
			$(this).html();

			break;
		default:
			crystalH++;
			break;
	};
});

$('#third').on('click', function(){

	switch(questionsLeft) {
		case 1:
			$(this).html();
			cyberG++;

			break;
		case 2:
			$(this).html();

			break;
		case 3:
			$(this).html();

			break;
		case 4:
			$(this).html();

			break;
		case 5:
			$(this).html();

			break;
		case 6:
			$(this).html();

			break;
		case 7:
			$(this).html();

			break;
		case 8:
			$(this).html();

			break;
		case 9:
			$(this).html();
			crystalH++;

			break;
		default:
			crystalH++;
			break;
	};
});

$('#fourth').on('click', function(){

	switch(questionsLeft) {
		case 1:
			$(this).html();
			etherCe++;

			break;
		case 2:
			$(this).html();

			break;
		case 3:
			$(this).html();

			break;
		case 4:
			$(this).html();

			break;
		case 5:
			$(this).html();

			break;
		case 6:
			$(this).html();

			break;
		case 7:
			$(this).html();

			break;
		case 8:
			$(this).html();

			break;
		case 9:
			$(this).html();

			break;
		default:
			crystalH++;
			break;
	};
});

$('#fifth').on('click', function(){

	switch(questionsLeft) {
		case 1:
			$(this).html();
			aeonJ++;

			break;
		case 2:
			$(this).html();

			break;
		case 3:
			$(this).html();

			break;
		case 4:
			$(this).html();

			break;
		case 5:
			$(this).html();

			break;
		case 6:
			$(this).html();

			break;
		case 7:
			$(this).html();

			break;
		case 8:
			$(this).html();

			break;
		case 9:
			$(this).html();

			break;
		default:
			crystalH++;
			break;
	};
});

$('#sixth').on('click', function(){

	switch(questionsLeft) {
		case 1:
			$(this).html();
			bioM++;

			break;
		case 2:
			$(this).html();

			break;
		case 3:
			$(this).html();

			break;
		case 4:
			$(this).html();

			break;
		case 5:
			$(this).html();

			break;
		case 6:
			$(this).html();

			break;
		case 7:
			$(this).html();

			break;
		case 8:
			$(this).html();

			break;
		case 9:
			$(this).html();

			break;
		default:
			crystalH++;
			break;
	};
});

$('#seventh').on('click', function(){

	switch(questionsLeft) {
		case 1:
			$(this).html();
			zombY++;

			break;
		case 2:
			$(this).html();

			break;
		case 3:
			$(this).html();

			break;
		case 4:
			$(this).html();

			break;
		case 5:
			$(this).html();

			break;
		case 6:
			$(this).html();

			break;
		case 7:
			$(this).html();

			break;
		case 8:
			$(this).html();

			break;
		case 9:
			$(this).html();

			break;
		default:
			crystalH++;
			break;
	};
});

$('#eigth').on('click', function(){

	switch(questionsLeft) {
		case 1:
			$(this).html();
			traderP++;

			break;
		case 2:
			$(this).html();

			break;
		case 3:
			$(this).html();

			break;
		case 4:
			$(this).html();

			break;
		case 5:
			$(this).html();

			break;
		case 6:
			$(this).html();

			break;
		case 7:
			$(this).html();

			break;
		case 8:
			$(this).html();

			break;
		case 9:
			$(this).html();

			break;
		default:
			crystalH++;
			break;
	};
});

$('#ninth').on('click', function(){

	switch(questionsLeft) {
		case 1:
			$(this).html();
			crystalH++;

			break;
		case 2:
			$(this).html();

			break;
		case 3:
			$(this).html();

			break;
		case 4:
			$(this).html();

			break;
		case 5:
			$(this).html();

			break;
		case 6:
			$(this).html();

			break;
		case 7:
			$(this).html();

			break;
		case 8:
			$(this).html();

			break;
		case 9:
			$(this).html();
	
			break;
		default:
			crystalH++;
			break;
	};
});

//Result selector



);