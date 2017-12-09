$(document).ready(function(){
//Here is where the start menu goes

var start = false;
var questionsLeft = 9; 
var time = 21;
// var steamCh = 0;
// var dieselN = 0;
// var cyberG = 0;
// var aeonJ = 0;
// var etherCe = 0;
// var zombY = 0;
// var bioM = 0;
// var traderP = 0;
// var crystalH = 0;
var jade = {
	value: 0,
	name: "Jade",
	continent: 'steam',
	firstA: 'forest',
	secondA: 'easygoing',
	thirdA: 'Better them than me.',
	fourthA: 'Casino!!! I\'m always a big winner!',
	fifthA: 'A classic exotic weapon',
	sixthA: 'Fuzzy Self Image',
	seventhA: 'Geothermal Engineering',
	eigthA: 'Afternoon, it is a nice time to relax',
	ninthA: 'Being Successful',
};
var sifi = {
	value: 0,
	name: "Sifi",
	continent: 'diesel',
	firstA: 'mountains',
	secondA: 'bold',
	thirdA: 'I must stop this!',
	fourthA: 'Road Trip!',
	fifthA: 'A weapon of my design',
	sixthA: 'Seeing the grand design',
	seventhA: 'Mechanical Engineering',
	eigthA: 'Morning, it is when I am at my most productive',
	ninthA: 'Moving Forward',
};
var thini = {
	value: 0,
	name: "Thini",
	continent: 'cyber',
	firstA: 'Megatropolis',
	secondA: 'driven',
	thirdA: 'Maybe they deserve it.',
	fourthA: 'The Moon',
	fifthA: 'Automatic pistols and daggers',
	sixthA: 'Finding the good in people',
	seventhA: 'Information Technologies',
	eigthA: 'Twilight, the time when shifts switch.',
	ninthA: 'Fixing Wrongs',
};
var oka = {
	value: 0,
	name: "Oka",
	continent: 'aeon',
	firstA: 'town',
	secondA: 'mild-mannered',
	thirdA: 'I should not get involved.',
	fourthA: 'My work comes first...',
	fifthA: 'My hands are all I need',
	sixthA: 'Existensialism',
	seventhA: 'Structural Engineering',
	eigthA: 'Whenever I am working',
	ninthA: 'Understanding myself',
};
var finn = {
	value: 0,
	name: "Finn",
	continent: 'ether',
	firstA: 'tundra',
	secondA: 'educated',
	thirdA: 'I should stop this.',
	fourthA: 'Spending all day at a library.',
	fifthA: 'I want to study all of them.',
	sixthA: 'Apathy',
	seventhA: 'Quantumn Physics',
	eigthA: 'Sunrise! Each morning brings a new discovery!',
	ninthA: 'Learning Everything',
};
var oya = {
	value: 0,
	name: "Oya",
	continent: 'zombie',
	firstA: 'desert',
	secondA: 'caring',
	thirdA: 'What can I do to stop this?',
	fourthA: 'A nature reserve',
	fifthA: 'Fighting is abhorrent, I would use my words',
	sixthA: 'Pacifism in the face of war',
	seventhA: 'Animal Husbandry',
	eigthA: 'Meal Time',
	ninthA: 'Helping Others',
};
var ix = {
	value: 0,
	name: "Heiress Ix of Consequat",
	continent: 'bio',
	firstA: 'plains',
	secondA: 'elite',
	thirdA: 'Where are the authorities?',
	fourthA: 'I like it right where I am right now!',
	fifthA: 'I let others fight for me',
	sixthA: 'Empathy',
	seventhA: 'Genetic Engineering',
	eigthA: 'Sundown, that is when the partys start',
	ninthA: 'Enjoying Life',
};
var teWa = {
	value: 0,
	name: "Te Wa",
	continent: 'traders',
	firstA: 'boathouse',
	secondA: 'adventurous',
	thirdA: 'Should I do something about this?',
	fourthA: 'A nice, relaxing time at the beach.',
	fifthA: 'Sports Equipment',
	sixthA: 'Bearing the burden of everyone',
	seventhA: 'Navigation',
	eigthA: 'Midnight, best time to see the stars',
	ninthA: 'Reclaiming Glory',
};


var ramaY = {
	value: 0,
	name: "Rama'Y",
	continent: 'crystal',
	firstA: 'I do not know',
	secondA: 'curious',
	thirdA: 'Why would they do that?',
	fourthA: 'A trip around the world.',
	fifthA: 'lazer focused through a crystal',
	sixthA: 'Naievete',
	seventhA: 'Piezoelectricity',
	eigthA: 'Noon, one\'s shadow is at its smallest',
	ninthA: 'Seeking Justice',
};

//object of questions
var questions = {
	firstQ: 'Which of these areas is a place you would want to live?',
	secondQ: 'If you could describe yourself in one word, what would that word be closest to?',
	thirdQ: 'You see someone in front of you getting mugged, what do you think?',
	fourthQ: 'Which of these is an ideal vacation?',
	fifthQ: 'If you could use one of these weapons, what would it be?',
	sixthQ: 'Which of these do you struggle with most?',
	seventhQ: 'Which of these technologies interests you most?', 
	eigthQ: 'When is the best time of day?',
	ninthQ: 'Which of these most closely alligns with your goals?',
}

//Answer arrays
var answers1 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answers2 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answers3 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answers4 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answers5 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answers6 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answers7 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answers8 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answers9 = [ramaY, teWa, ix, oya, oka, finn, sifi, thini, jade];
var answersResult = [];

//This is where I want to put the game timer
timeCounter = function() {
	
	if (questionsLeft === -1|| start === false) {return};
	//This will reset the timer
	if (time === 0) {
		questionsLeft--;
		time = 20;
		answersResult.push(ramaY.continent)
	};
	time--;

	console.log(time);
	console.log(questionsLeft);
	runQuiz();
};


setInterval(function(){ timeCounter() },1000);

function runQuiz() {
	if (questionsLeft === 9) {
		$('#question').text(questions.firstQ);
		renderButtons(answers1);
	} else if (questionsLeft === 8) {
		$('#question').text(questions.secondQ);
		renderButtons(answers2);
	} else if (questionsLeft === 7) {
		$('#question').text(questions.thirdQ);
		renderButtons(answers3);
	} else if (questionsLeft === 6) {
		$('#question').text(questions.fourthQ);
		renderButtons(answers4);
	} else if (questionsLeft === 5) {
		$('#question').text(questions.fifthQ);
		renderButtons(answers5);
	} else if (questionsLeft === 4) {
		$('#question').text(questions.sixthQ);
		renderButtons(answers6);
	} else if (questionsLeft === 3) {
		$('#question').text(questions.seventhQ);
		renderButtons(answers7);
	} else if (questionsLeft === 2) {
		$('#question').text(questions.eighthQ);
		renderButtons(answers8);
	} else if (questionsLeft === 1) {
		$('#question').text(questions.ninthQ);
		renderButtons(answers9);
	} else {
		result();
	}
};


$('#start').on('click', function() {
	start = true;
	$('#start').hide()
});

function renderButtons(array){
	$('.quiz').empty();

	for (var i = 0; i < array.length; i++) {
		var a = $('<button>');
		a.addClass('answer btn btn-primary');
		a.attr('data-name', array[i].continent);
		if (array === answers1) {
			a.text(array[i].firstA);
		} else if (array === answers2) {
			a.text(array[i].secondA);
		} else if (array === answers3) {
			a.text(array[i].thirdA);
		} else if (array === answers4) {
			a.text(array[i].fourthA);
		} else if (array === answers5) {
			a.text(array[i].fifthA);
		} else if (array === answers6) {
			a.text(array[i].sixthA);
		} else if (array === answers7) {
			a.text(array[i].seventhA);
		} else if (array === answers8) {
			a.text(array[i].answers8);
		} else if (array === answers9) {
			a.text(array[i].ninthA)
		}

		$('.quiz').append(a);

	};



	$('.answer').on('click', function(){ 
		time = 20; 
		questionsLeft--;
		answersResult.push($(this).attr('data-name')); 
		console.log(answersResult);
	});
};



function result() {
	console.log("result is being called");
		$('.question').empty();
		$('.quiz').empty();
		$('body').html('<h1>Congratulations!</h1>')

};

// //After the timer, we will put the function for the multiple choice selector
// $('#first').on('click', function(){

// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		case 2:
// 			$(this).html('<p>dieselN Test</p>');
// 			dieselN++; 

// 			break;
// 		case 3:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		case 4:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++;

// 			break;
// 		case 5:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;

// 			break;
// 		case 6:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		case 7:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++

// 			break;
// 		case 8:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;

// 			break;
// 		case 9:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// $('#second').on('click', function(){
// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>dieselN</p>');
// 			dieselN++;
	
// 			break;
// 		case 2:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		case 3:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		case 4:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		case 5:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++;

// 			break;
// 		case 6:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;	

// 			break;
// 		case 7:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		case 8:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++;

// 			break;
// 		case 9:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// $('#third').on('click', function(){

// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		case 2:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		case 3:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;

// 			break;
// 		case 4:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;

// 			break;
// 		case 5:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		case 6:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++;

// 			break;
// 		case 7:
// 			$(this).html('<p>dieselN Test</p>');
// 			dieselN++;

// 			break;
// 		case 8:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		case 9:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++;

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// $('#fourth').on('click', function(){

// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++;

// 			break;
// 		case 2:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;

// 			break;
// 		case 3:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++;

// 			break;
// 		case 4:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		case 5:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		case 6:
// 			$(this).html('<p>dieselN Test</p>');
// 			dieselN++;

// 			break;
// 		case 7:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		case 8:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		case 9:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// $('#fifth').on('click', function(){

// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;

// 			break;
// 		case 2:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++;

// 			break;
// 		case 3:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		case 4:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;

// 			break;
// 		case 5:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++;

// 			break;
// 		case 6:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		case 7:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		case 8:
// 			$(this).html('<p>dieselN Test</p>');
// 			dieselN++;

// 			break;
// 		case 9:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// $('#sixth').on('click', function(){

// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		case 2:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++;	

// 			break;
// 		case 3:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++

// 			break;
// 		case 4:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;	

// 			break;
// 		case 5:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		case 6:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		case 7:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;

// 			break;
// 		case 8:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		case 9:
// 			$(this).html('<p>dieselN Test</p>');
// 			dieselN++;	

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// $('#seventh').on('click', function(){

// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		case 2:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;

// 			break;
// 		case 3:
// 			$(this).html('<p>dieselN Test</p>');
// 			dieselN++;

// 			break;
// 		case 4:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		case 5:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;

// 			break;
// 		case 6:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++;

// 			break;
// 		case 7:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++;

// 			break;
// 		case 8:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		case 9:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// $('#eigth').on('click', function(){

// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;

// 			break;
// 		case 2:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		case 3:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;

// 			break;
// 		case 4:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++;

// 			break;
// 		case 5:
// 			$(this).html('<p>dieselN Test</p>');
// 			dieselN++;

// 			break;
// 		case 6:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		case 7:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		case 8:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++;

// 			break;
// 		case 9:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// $('#ninth').on('click', function(){

// 	switch(questionsLeft) {
// 		case 1:
// 			$(this).html('<p>crystalH Test</p>');
// 			crystalH++;

// 			break;
// 		case 2:
// 			$(this).html('<p>cyberG Test</p>');
// 			cyberG++;

// 			break;
// 		case 3:
// 			$(this).html('<p>zombY Test</p>');
// 			zombY++;

// 			break;
// 		case 4:
// 			$(this).html('<p>steamCh Test</p>');
// 			steamCh++;

// 			break;
// 		case 5:
// 			$(this).html('<p>bioM Test</p>');
// 			bioM++;

// 			break;
// 		case 6:
// 			$(this).html('<p>dieselN Test</p>');
// 			dieselN++;

// 			break;
// 		case 7:
// 			$(this).html('<p>aeonJ Test</p>');
// 			aeonJ++;

// 			break;
// 		case 8:
// 			$(this).html('<p>traderP Test</p>');
// 			traderP++;

// 			break;
// 		case 9:
// 			$(this).html('<p>etherCe Test</p>');
// 			etherCe++;

// 			break;
// 		default:
// 			crystalH++;
// 			break;
// 	};
// });

// //Result selector

// var resultArray = new Array(crystalH, etherCe, bioM, traderP, dieselN, aeonJ, cyberG, steamCh, zombY)

// function choice() {
// 		if (questionsLeft === 0) {
// 			for (var i = 0; resultArray.length > i; i++){
// 					if (resultArray[i] < resultArray[i+1]) {
// 						var temp = resultArray[i];
// 						resultArray[i+1] = resultArray[i];
// 						resultArray[i] = temp
// 					}
// 			}
// 		}	
	
// 		console.log(resultArray);
// }
// choice();

});