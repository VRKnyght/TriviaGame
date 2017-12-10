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
	bio: "Plucky navigator from Na'al Fisio. Na'al Fisio is a continent that developed technology around it's abundance of steam, and has a thriving land and air transportation industry. Jade loves attention, though he usually gets it when he does not want it. He always seems to find himself in the wrong place at the wrong time, but his luck and tiger hook swords seems to keep him afloat." ,
	continent: 'steam',
	firstA: 'forest',
	secondA: 'easygoing',
	thirdA: 'Better them than me.',
	fourthA: 'Casino!!! I\'m always a big winner!',
	fifthA: 'A classic exotic weapon, like tiger hook swords',
	sixthA: 'Fuzzy Self Image',
	seventhA: 'Geothermal Engineering',
	eigthA: 'Afternoon, it is a nice time to relax',
	ninthA: 'Being Successful',
};
var sifi = {
	value: 0,
	name: "Sifi",
	bio: 'Storvik is a hardy place full of biodiesel powered engines and generators. This mechanic from Storvik knows how things work, but she has an issue seeing the bigger picture. Will war force her to examine things beyond her scope? Or will she take up her chainsawsword Fenrir, and face her Wyrd headon?',
	continent: 'diesel',
	firstA: 'mountains',
	secondA: 'bold',
	thirdA: 'I must stop this!',
	fourthA: 'Road Trip!',
	fifthA: 'A weapon of my own design, preferably a chainsaw sword.',
	sixthA: 'Seeing the grand design',
	seventhA: 'Mechanical Engineering',
	eigthA: 'Morning, it is when I am at my most productive',
	ninthA: 'Moving Forward',
};
var thini = {
	value: 0,
	name: "Thini",
	bio: 'Agcoau, the technological powerhouse continent, where technology has infiltrated every aspect of life. Agcoau is a brutal place for those who are not successful. Those that do not succeed are crushed under the opressing weight of the megacorporations live as dregs of society. This little spitfire is a star member of a group employed by the corporations to sabotage the other corporations to get a competitive edge on eachother. Any task that can help her infiltrate the corporations to aid those that the corporations have tread upon is a task she is happy to take.',
	continent: 'cyber',
	firstA: 'Megatropolis',
	secondA: 'driven',
	thirdA: 'Maybe they deserve it.',
	fourthA: 'The Moon',
	fifthA: 'Automatic pistols and a techoblade',
	sixthA: 'Finding the good in people',
	seventhA: 'Information Technologies',
	eigthA: 'Twilight, the time when shifts switch.',
	ninthA: 'Fixing Wrongs',
};
var oka = {
	value: 0,
	name: "Oka",
	bio: 'Oka is from Nishon, the continent where people are so heavily attuned to magic, that they can summon elemental constructs. These constructs have limited communication abilities and are used to power their technology. Oka wascreated by magic, and is on a quest to discover who they truly are.',
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
	bio: "The Ethreltian continent's attunement to magic is rivaled only by the Nishon and Hashon continents. Finn is a teacher from Ethreltia and is eager to learn everything he can. Will his thirst for knowledge push him past his limits? Or will his eagerness crush him underfoot?",
	continent: 'aether',
	firstA: 'tundra',
	secondA: 'educated',
	thirdA: 'I should stop this.',
	fourthA: 'Spending all day at a library.',
	fifthA: 'I prefer historical classics, like a spear and shield.',
	sixthA: 'Apathy',
	seventhA: 'Quantumn Physics',
	eigthA: 'Sunrise! Each morning brings a new discovery!',
	ninthA: 'Learning Everything',
};
var oya = {
	value: 0,
	name: "Oya",
	bio: 'Hashon is a continent where people can make a psychic, empathic link with any animal. Choosing to take a route closer in tune with nature, the Hashon people tend to take on the features of one they bond with. A Hashon doctor who made a vow to heal any living being, Oya is steadfast in her belief that killing is wrong, even when pushed to the point of no return',
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
	bio: 'Meishon looks more unique in flora and fauna than any other continent. This is due to their focus on magically evolving anything in sight. Princess of her tribe from the vast continent of Meishon, Ix is no stranger to war, but prefers to watch animals evolve.',
	continent: 'bio',
	firstA: 'plains',
	secondA: 'elite',
	thirdA: 'Where are the authorities?',
	fourthA: 'I like it right where I am right now!',
	fifthA: 'Pokemon',
	sixthA: 'Empathy',
	seventhA: 'Genetic Engineering',
	eigthA: 'Sundown, that is when the partys start',
	ninthA: 'Enjoying Life',
};
var teWa = {
	value: 0,
	name: "Te Wa",
	bio: 'Former Sea King of the island hopping people. He lost his honor by being the only survivor from a disasterous shipwreck',
	continent: 'traders',
	firstA: 'boathouse',
	secondA: 'adventurous',
	thirdA: 'Should I do something about this?',
	fourthA: 'A nice, relaxing time at the beach.',
	fifthA: 'All I need is a stick and something to hit, watch it break.',
	sixthA: 'Bearing the burden of everyone',
	seventhA: 'Navigation',
	eigthA: 'Midnight, best time to see the stars',
	ninthA: 'Reclaiming Glory',
};


var ramaY = {
	value: 0,
	name: "Rama'Y",
	bio: "Niivan is a floating continent hidden from the rest of the world by a giant windstorm. These people understand and attune themselves to crystals. Born and raised to be an arbiter of his people from the floating continent of Niivan, Rama'y is an inquisitive soul that wants to know more about the world",
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
var answers2 = [oka, finn, teWa, ramaY, ix, oya, thini, jade, sifi];
var answers3 = [oya, ix, jade, oka, thini, teWa, finn, sifi, ramaY];
var answers4 = [ix, oya, oka, teWa, finn, sifi, jade, ramaY, thini];
var answers5 = [teWa, oka, ramaY, jade, sifi, thini, ix, oka, finn];
var answers6 = [sifi, jade, finn, thini, oka, ix, ramaY, oya, teWa];
var answers7 = [jade, ramaY, oya, sifi, thini, oka, teWa, finn, ix];
var answers8 = [finn, thini, sifi, ix, ramaY, jade, oka, teWa, oya];
var answers9 = [thini, sifi, teWa, finn, jade, ramaY, oya, ix, oka];
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
			a.text(array[i].eigthA);
		} else if (array === answers9) {
			a.text(array[i].ninthA)
		}

		$('.quiz').append(a);

	};



	$('.answer').on('click', function(){ 
		time = 20; 
		questionsLeft--;
		answersResult.push($(this).attr('data-name')); 
	});
};



function result() {
	
		$('.question').empty();
		$('.quiz').empty();
		$('body').html('<h1>Congratulations!</h1>')
	
	function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    )


}
mode(answersResult);
if (answersResult[8] === "crystal") {
	$('body').html('<h1>' + ramaY.name);
	$('body').append(ramaY.bio);

} else if (answersResult[8] === "bio") {
	$('body').html('<h1>' + ix.name);
	$('body').append(ix.bio)

} else if (answersResult[8] === "zombie") {
	$('body').html('<h1>' + oya.name);
	$('body').append(oya.bio)

} else if (answersResult[8] === "steam") {
	$('body').html('<h1>' + jade.name);
	$('body').append(jade.bio)

} else if (answersResult[8] === "diesel") {
	$('body').html('<h1>' + sifi.name);
	$('body').append(sifi.bio)

} else if (answersResult[8] === "aether") {
	$('body').html('<h1>' + finn.name);
	$('body').append(finn.bio)

} else if (answersResult[8] === "traders") {
	$('body').html('<h1>' + teWa.name);
	$('body').append(teWa.bio)

} else if (answersResult[8] === "aeon") {
	$('body').html('<h1>' + oka.name);
	$('body').append(oka.bio)

} else if (answersResult[8] === "cyber") {
	$('body').html('<h1>' + thini.name);
	$('body').append(thini.bio)

}

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