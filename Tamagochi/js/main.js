
var easyLevel = false;
var hardLevel = false;
var veryHardLevel = false;
	let sec = -1;
	let min = 0;
let gameWindow = document.querySelector('.game_window');

play.addEventListener('click', function() {
	play.style.display = 'none';
	easy.style.display = 'inline';
	hard.style.display = 'inline';
	veryHard.style.display = 'block';
});


function easyLevell() {
	easy.style.display = 'none';
	hard.style.display = 'none';
	veryHard.style.display = 'none';
	gameWindow.classList.add('easy_level');
	easyLevel = true;
}

function hardLevell() {
	easy.style.display = 'none';
	hard.style.display = 'none';
	veryHard.style.display = 'none';
	gameWindow.classList.add('hard_level');
	hardLevel = true;
}

function veryHardLevell() {
	easy.style.display = 'none';
	hard.style.display = 'none';
	veryHard.style.display = 'none';
	stats.style.display = 'none';
	statsVeryHard.style.display = 'flex';
	btn_veryHard.style.display = 'flex';
	gameWindow.classList.add('veryHard_level');
	time.style.color = 'red';
	veryHardLevel = true;
}



function timer() {
	sec++;
	if(sec == 60) {
		min++;
		sec = 0;
	}
	let timer = document.querySelector('.timer');
	timer.innerHTML = `${min}:${sec}`
	setTimeout('timer()', 1000);

	let stat = document.querySelectorAll('.stat');

	for(let item of stat) {
			if(easyLevel === true && +item.children[1].innerHTML <= 0 
				|| hardLevel === true && +item.children[1].innerHTML <= 0 
				|| veryHardLevel === true && +item.children[1].innerHTML <= 0) {

			return `Ваше время: ${min}min ${sec}sec.`;	

		}	
	}

}



function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let foodStatEase = randomInteger(53, 100);
let cleanStatEase = randomInteger(53, 100);
let happiStatEase = randomInteger(53, 100);

let foodStatHard = randomInteger(55, 70);
let cleanStatHard = randomInteger(55, 70);
let happiStatHard = randomInteger(55, 70);

let stats = document.querySelector('.stats');

function creatNewStats(){

	if(easyLevel === true) {
		stats.children[0].children[1].innerHTML = foodStatEase;
		stats.children[1].children[1].innerHTML = cleanStatEase;
		stats.children[2].children[1].innerHTML = happiStatEase;

		stats.children[0].style.height = foodStatEase + 'px';
		stats.children[1].style.height = cleanStatEase + 'px';
		stats.children[2].style.height = happiStatEase + 'px';
	}

		if(hardLevel === true) {
		stats.children[0].children[1].innerHTML = foodStatHard;
		stats.children[1].children[1].innerHTML = cleanStatHard;
		stats.children[2].children[1].innerHTML = happiStatHard;

		stats.children[0].style.height = foodStatHard + 'px';
		stats.children[1].style.height = cleanStatHard + 'px';
		stats.children[2].style.height = happiStatHard + 'px';
	}

		if(veryHardLevel === true) {
			let health = randomInteger(53, 100);
			let socialization = randomInteger(53, 100);
			let money = randomInteger(53, 100);

			statsVeryHard.children[0].children[1].innerHTML = foodStatEase;
			statsVeryHard.children[1].children[1].innerHTML = cleanStatEase;
			statsVeryHard.children[2].children[1].innerHTML = happiStatEase;
			statsVeryHard.children[3].children[1].innerHTML = health;
			statsVeryHard.children[4].children[1].innerHTML = socialization;
			statsVeryHard.children[5].children[1].innerHTML = money;

			statsVeryHard.children[0].style.height = foodStatEase + 'px';
			statsVeryHard.children[1].style.height = cleanStatEase + 'px';
			statsVeryHard.children[2].style.height = happiStatEase + 'px';
			statsVeryHard.children[3].style.height = health + 'px';
			statsVeryHard.children[4].style.height = socialization + 'px';
			statsVeryHard.children[5].style.height = money + 'px';
	}

}

function decreaseStats() {

	if(easyLevel === true) {
		stats.children[0].children[1].innerHTML = stats.children[0].children[1].innerHTML - 3;
		stats.children[1].children[1].innerHTML = stats.children[1].children[1].innerHTML - 3;
		stats.children[2].children[1].innerHTML = stats.children[2].children[1].innerHTML - 3;
		
		stats.children[0].style.height = (parseInt(stats.children[0].style.height) -3) + 'px';
		stats.children[1].style.height = (parseInt(stats.children[1].style.height) -3) + 'px';
		stats.children[2].style.height = (parseInt(stats.children[2].style.height) -3) + 'px';
		setTimeout('decreaseStats() ', 3000);
	}

		if(hardLevel === true) {
		stats.children[0].children[1].innerHTML = stats.children[0].children[1].innerHTML - 5;
		stats.children[1].children[1].innerHTML = stats.children[1].children[1].innerHTML - 5;
		stats.children[2].children[1].innerHTML = stats.children[2].children[1].innerHTML - 5;
		
		stats.children[0].style.height = (parseInt(stats.children[0].style.height) -5) + 'px';
		stats.children[1].style.height = (parseInt(stats.children[1].style.height) -5) + 'px';
		stats.children[2].style.height = (parseInt(stats.children[2].style.height) -5) + 'px';
		setTimeout('decreaseStats() ', 2000);
	}

		if(veryHardLevel === true) {
			statsVeryHard.children[0].children[1].innerHTML = statsVeryHard.children[0].children[1].innerHTML - 7;
			statsVeryHard.children[1].children[1].innerHTML = statsVeryHard.children[1].children[1].innerHTML - 7;
			statsVeryHard.children[2].children[1].innerHTML = statsVeryHard.children[2].children[1].innerHTML - 7;
			statsVeryHard.children[3].children[1].innerHTML = statsVeryHard.children[3].children[1].innerHTML - 7;
			statsVeryHard.children[4].children[1].innerHTML = statsVeryHard.children[4].children[1].innerHTML - 7;
			statsVeryHard.children[5].children[1].innerHTML = statsVeryHard.children[5].children[1].innerHTML - 7;


			
				 
				if(statsVeryHard.children[0].children[1].innerHTML <= 100 )	statsVeryHard.children[0].style.height = (parseInt(statsVeryHard.children[0].style.height) - 7) + 'px';
				if(statsVeryHard.children[1].children[1].innerHTML <= 100 )	statsVeryHard.children[1].style.height = (parseInt(statsVeryHard.children[1].style.height) - 7) + 'px';
				if(statsVeryHard.children[2].children[1].innerHTML <= 100 )	statsVeryHard.children[2].style.height = (parseInt(statsVeryHard.children[2].style.height) - 7) + 'px';
				if(statsVeryHard.children[3].children[1].innerHTML <= 100 )	statsVeryHard.children[3].style.height = (parseInt(statsVeryHard.children[3].style.height) - 7) + 'px';
				if(statsVeryHard.children[4].children[1].innerHTML <= 100 )	statsVeryHard.children[4].style.height = (parseInt(statsVeryHard.children[4].style.height) - 7) + 'px';
				if(statsVeryHard.children[5].children[1].innerHTML <= 100 )	statsVeryHard.children[5].style.height = (parseInt(statsVeryHard.children[5].style.height) - 7) + 'px';
				
			

			setTimeout('decreaseStats() ', 4000);
	}

	
}


function btnActions(event) {

	if(easyLevel === true) {
		if(event.target.dataset.actions == 'eat') {

			stats.children[0].children[1].innerHTML = +stats.children[0].children[1].innerHTML + 30;
			stats.children[1].children[1].innerHTML = +stats.children[1].children[1].innerHTML - 20;

			stats.children[0].style.height = (parseInt(stats.children[0].style.height) + 30) + 'px';
			stats.children[1].style.height = (parseInt(stats.children[1].style.height) - 20) + 'px';

			if(stats.children[0].children[1].innerHTML >= 100) {
				stats.children[0].children[1].innerHTML = 100;
				stats.children[0].style.height = '100px';
			}

		}else if (event.target.dataset.actions == 'wash') {
			stats.children[1].children[1].innerHTML = +stats.children[1].children[1].innerHTML + 40;
			stats.children[2].children[1].innerHTML = +stats.children[2].children[1].innerHTML - 20;

			stats.children[1].style.height = (parseInt(stats.children[1].style.height) + 40) + 'px';
			stats.children[2].style.height = (parseInt(stats.children[2].style.height) - 20) + 'px';

			if(stats.children[1].children[1].innerHTML >= 100) {
				stats.children[1].children[1].innerHTML = 100;
				stats.children[1].style.height = '100px';
			}

		}else if (event.target.dataset.actions == 'run') {
			stats.children[2].children[1].innerHTML = +stats.children[2].children[1].innerHTML + 15;
			stats.children[0].children[1].innerHTML = +stats.children[0].children[1].innerHTML - 10;

			stats.children[2].style.height = (parseInt(stats.children[2].style.height) + 15) + 'px';
			stats.children[0].style.height = (parseInt(stats.children[0].style.height) - 10) + 'px';

			if(stats.children[2].children[1].innerHTML >= 100) {
				stats.children[2].children[1].innerHTML = 100;
				stats.children[2].style.height = '100px';
			}
		}
	}

	if(hardLevel === true) {
		if(event.target.dataset.actions == 'eat') {

			stats.children[0].children[1].innerHTML = +stats.children[0].children[1].innerHTML + 30;
			stats.children[1].children[1].innerHTML = +stats.children[1].children[1].innerHTML - 20;

			stats.children[0].style.height = (parseInt(stats.children[0].style.height) + 30) + 'px';
			stats.children[1].style.height = (parseInt(stats.children[1].style.height) - 20) + 'px';

			if(stats.children[0].children[1].innerHTML >= 70) {
				stats.children[0].children[1].innerHTML = 70;
				stats.children[0].style.height = '70px';
			}

		}else if (event.target.dataset.actions == 'wash') {
			stats.children[1].children[1].innerHTML = +stats.children[1].children[1].innerHTML + 40;
			stats.children[2].children[1].innerHTML = +stats.children[2].children[1].innerHTML - 20;

			stats.children[1].style.height = (parseInt(stats.children[1].style.height) + 40) + 'px';
			stats.children[2].style.height = (parseInt(stats.children[2].style.height) - 20) + 'px';

			if(stats.children[1].children[1].innerHTML >= 70) {
				stats.children[1].children[1].innerHTML = 70;
				stats.children[1].style.height = '70px';
			}

		}else if (event.target.dataset.actions == 'run') {
			stats.children[2].children[1].innerHTML = +stats.children[2].children[1].innerHTML + 15;
			stats.children[0].children[1].innerHTML = +stats.children[0].children[1].innerHTML - 10;

			stats.children[2].style.height = (parseInt(stats.children[2].style.height) + 15) + 'px';
			stats.children[0].style.height = (parseInt(stats.children[0].style.height) - 10) + 'px';

			if(stats.children[2].children[1].innerHTML >= 70) {
				stats.children[2].children[1].innerHTML = 70;
				stats.children[2].style.height = '70px';
			}
		}
	}

	if(veryHardLevel === true) {
			if(event.target.dataset.actions == 'eat') {

				statsVeryHard.children[0].children[1].innerHTML = +statsVeryHard.children[0].children[1].innerHTML + 30;
				statsVeryHard.children[1].children[1].innerHTML = +statsVeryHard.children[1].children[1].innerHTML - 20;

				statsVeryHard.children[0].style.height = (parseInt(statsVeryHard.children[0].style.height) + 30) + 'px';
			if(statsVeryHard.children[1].children[1].innerHTML < 100)	statsVeryHard.children[1].style.height = (parseInt(statsVeryHard.children[1].style.height) - 20) + 'px';

				if(+statsVeryHard.children[0].children[1].innerHTML > 100) {
					
					statsVeryHard.children[0].style.height = '100px';
				}

			}else if (event.target.dataset.actions == 'wash') {
			statsVeryHard.children[1].children[1].innerHTML = +statsVeryHard.children[1].children[1].innerHTML + 40;
			statsVeryHard.children[2].children[1].innerHTML = +statsVeryHard.children[2].children[1].innerHTML - 20;

			statsVeryHard.children[1].style.height = (parseInt(statsVeryHard.children[1].style.height) + 40) + 'px';
		if(statsVeryHard.children[2].children[1].innerHTML < 100)	statsVeryHard.children[2].style.height = (parseInt(statsVeryHard.children[2].style.height) - 20) + 'px';

			if(statsVeryHard.children[1].children[1].innerHTML > 100) {
				
				statsVeryHard.children[1].style.height = '100px';
			}

		}else if (event.target.dataset.actions == 'run') {
			statsVeryHard.children[2].children[1].innerHTML = +statsVeryHard.children[2].children[1].innerHTML + 15;
			statsVeryHard.children[0].children[1].innerHTML = +statsVeryHard.children[0].children[1].innerHTML - 10;

			statsVeryHard.children[2].style.height = (parseInt(statsVeryHard.children[2].style.height) + 15) + 'px';
		if(statsVeryHard.children[0].children[1].innerHTML < 100)	statsVeryHard.children[0].style.height = (parseInt(statsVeryHard.children[0].style.height) - 10) + 'px';

			if(statsVeryHard.children[2].children[1].innerHTML > 100) {
		
				statsVeryHard.children[2].style.height = '100px';
			}

		}else if (event.target.dataset.actions == 'visit_doctor') {

			statsVeryHard.children[3].children[1].innerHTML = +statsVeryHard.children[3].children[1].innerHTML + 30;
			statsVeryHard.children[5].children[1].innerHTML = +statsVeryHard.children[5].children[1].innerHTML - 20;

				statsVeryHard.children[3].style.height = (parseInt(statsVeryHard.children[3].style.height) + 30) + 'px';
			if(statsVeryHard.children[5].children[1].innerHTML < 100)	statsVeryHard.children[5].style.height = (parseInt(statsVeryHard.children[5].style.height) - 20) + 'px';
			if(statsVeryHard.children[3].children[1].innerHTML > 100)   statsVeryHard.children[3].style.height = '100px';
			event.stopPropagation();

		}else if (event.target.dataset.actions == 'go_to_bar') {

			statsVeryHard.children[4].children[1].innerHTML = +statsVeryHard.children[4].children[1].innerHTML + 40;
			statsVeryHard.children[0].children[1].innerHTML = +statsVeryHard.children[0].children[1].innerHTML + 10;
			statsVeryHard.children[5].children[1].innerHTML = +statsVeryHard.children[5].children[1].innerHTML - 20;
			statsVeryHard.children[3].children[1].innerHTML = +statsVeryHard.children[3].children[1].innerHTML - 10;

				statsVeryHard.children[4].style.height = (parseInt(statsVeryHard.children[4].style.height) + 40) + 'px';
				statsVeryHard.children[0].style.height = (parseInt(statsVeryHard.children[0].style.height) + 10) + 'px';
			if(statsVeryHard.children[5].children[1].innerHTML < 100)	statsVeryHard.children[5].style.height = (parseInt(statsVeryHard.children[5].style.height) - 20) + 'px';
			if(statsVeryHard.children[3].children[1].innerHTML < 100)	statsVeryHard.children[3].style.height = (parseInt(statsVeryHard.children[3].style.height) - 10) + 'px';
			
			if(statsVeryHard.children[4].children[1].innerHTML > 100)   statsVeryHard.children[4].style.height = '100px';
			if(statsVeryHard.children[0].children[1].innerHTML > 100)   statsVeryHard.children[0].style.height = '100px';
			event.stopPropagation();

		}else if (event.target.dataset.actions == 'go_to_work') {

			statsVeryHard.children[5].children[1].innerHTML = +statsVeryHard.children[5].children[1].innerHTML + 50;
			statsVeryHard.children[0].children[1].innerHTML = +statsVeryHard.children[0].children[1].innerHTML - 10;
			statsVeryHard.children[3].children[1].innerHTML = +statsVeryHard.children[3].children[1].innerHTML - 10;
			statsVeryHard.children[4].children[1].innerHTML = +statsVeryHard.children[4].children[1].innerHTML - 20;

				statsVeryHard.children[5].style.height = (parseInt(statsVeryHard.children[5].style.height) + 50) + 'px';

			if(statsVeryHard.children[0].children[1].innerHTML < 100)	statsVeryHard.children[0].style.height = (parseInt(statsVeryHard.children[0].style.height) - 10) + 'px';
			if(statsVeryHard.children[3].children[1].innerHTML < 100)	statsVeryHard.children[3].style.height = (parseInt(statsVeryHard.children[3].style.height) - 10) + 'px';
			if(statsVeryHard.children[4].children[1].innerHTML < 100)	statsVeryHard.children[4].style.height = (parseInt(statsVeryHard.children[4].style.height) - 20) + 'px';
			
			if(statsVeryHard.children[5].children[1].innerHTML > 100)   statsVeryHard.children[5].style.height = '100px';
			event.stopPropagation();

		}else if (event.target.dataset.actions == 'byu_food') {

			statsVeryHard.children[0].children[1].innerHTML = +statsVeryHard.children[0].children[1].innerHTML + 20;
			statsVeryHard.children[5].children[1].innerHTML = +statsVeryHard.children[5].children[1].innerHTML - 20;

				statsVeryHard.children[0].style.height = (parseInt(statsVeryHard.children[0].style.height) + 20) + 'px';
			if(statsVeryHard.children[5].children[1].innerHTML < 100)	statsVeryHard.children[5].style.height = (parseInt(statsVeryHard.children[5].style.height) - 20) + 'px';

			if(statsVeryHard.children[0].children[1].innerHTML > 100)   statsVeryHard.children[0].style.height = '100px';
			event.stopPropagation();

		}else if (event.target.dataset.actions == 'start_a_business') {

			statsVeryHard.children[5].children[1].innerHTML = +statsVeryHard.children[5].children[1].innerHTML + 100;
			statsVeryHard.children[2].children[1].innerHTML = +statsVeryHard.children[2].children[1].innerHTML + 100;
			statsVeryHard.children[4].children[1].innerHTML = +statsVeryHard.children[4].children[1].innerHTML + 20;
			statsVeryHard.children[3].children[1].innerHTML = +statsVeryHard.children[3].children[1].innerHTML - 100;

				statsVeryHard.children[5].style.height = (parseInt(statsVeryHard.children[5].style.height) + 100) + 'px';
				statsVeryHard.children[2].style.height = (parseInt(statsVeryHard.children[2].style.height) + 100) + 'px';
				statsVeryHard.children[4].style.height = (parseInt(statsVeryHard.children[4].style.height) + 20) + 'px';
			if(statsVeryHard.children[3].children[1].innerHTML < 100 && statsVeryHard.children[3].children[1].innerHTML > 0)	statsVeryHard.children[3].style.height = statsVeryHard.children[3].children[1].innerHTML + 'px';
				else if (statsVeryHard.children[3].children[1].innerHTML < 0) statsVeryHard.children[3].style.height = '0px';

			if(statsVeryHard.children[5].children[1].innerHTML > 100)   statsVeryHard.children[5].style.height = '100px';
			if(statsVeryHard.children[2].children[1].innerHTML > 100)   statsVeryHard.children[2].style.height = '100px';
			if(statsVeryHard.children[4].children[1].innerHTML > 100)   statsVeryHard.children[4].style.height = '100px';
			event.stopPropagation();

		}
   } 
}

function showColorStats() {

	if(easyLevel === true) {

   	for(let i = 0; i < stats.children.length; i++ ) {
   		if( parseInt(stats.children[i].style.height) < 70 && parseInt(stats.children[i].style.height) > 30) {
   			stats.children[i].style.background = 'yellow';
   		}else if ( parseInt(stats.children[i].style.height) < 30 ) {
   			stats.children[i].style.background = 'red';
   		}else if( parseInt(stats.children[i].style.height) >= 70) {
   			stats.children[i].style.background = 'green';
   		}
   	}

	}

	if(hardLevel === true) {

		for(let i = 0; i < stats.children.length; i++) {
			if( parseInt(stats.children[i].style.height) < 47 && parseInt(stats.children[i].style.height) > 24 ) {
				stats.children[i].style.background = 'yellow';
			}else if ( parseInt(stats.children[i].style.height) <= 24 ) {
				stats.children[i].style.background = 'red';
			}else if( parseInt(stats.children[i].style.height) >= 47) {
   			stats.children[i].style.background = 'green';
   		}
		}

	}

	if(veryHardLevel === true) {

		for(let i = 0; i < statsVeryHard.children.length; i++) {
			if( parseInt(statsVeryHard.children[i].style.height) < 70 && parseInt(statsVeryHard.children[i].style.height) > 30 ) {
				statsVeryHard.children[i].style.background = 'yellow';
			}else if ( parseInt(statsVeryHard.children[i].style.height) < 30 ) {
				statsVeryHard.children[i].style.background = 'red';
			}else if( parseInt(statsVeryHard.children[i].style.height) >= 70 && parseInt(statsVeryHard.children[i].style.height) < 99) {
   			statsVeryHard.children[i].style.background = 'green';
   		}else if( parseInt(statsVeryHard.children[i].style.height) >= 100) {
   			statsVeryHard.children[i].style.background = 'purple';
   		}
		}

	}

	requestAnimationFrame(showColorStats);
}

function showTopStats(event) {

	if(event.target.dataset.actions == 'eat') {
		stats.children[0].children[0].innerHTML = "+30";
		stats.children[0].children[0].style.display = 'inline';
		setTimeout(() => stats.children[0].children[0].style.display = 'none', 500);

		stats.children[1].children[0].innerHTML = "-20";
		stats.children[1].children[0].style.display = 'inline';
		setTimeout(() => stats.children[1].children[0].style.display = 'none', 500);
	
		statsVeryHard.children[0].children[0].innerHTML = "+30";
		statsVeryHard.children[0].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[0].children[0].style.display = 'none', 500);

		statsVeryHard.children[1].children[0].innerHTML = "-20";
		statsVeryHard.children[1].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[1].children[0].style.display = 'none', 500);

	}else if(event.target.dataset.actions == 'wash') {
		stats.children[1].children[0].innerHTML = "+40";
		stats.children[1].children[0].style.display = 'inline';
		setTimeout(() => stats.children[1].children[0].style.display = 'none', 500);

		stats.children[2].children[0].innerHTML = "-20";
		stats.children[2].children[0].style.display = 'inline';
		setTimeout(() => stats.children[2].children[0].style.display = 'none', 500);
	
		statsVeryHard.children[1].children[0].innerHTML = "+40";
		statsVeryHard.children[1].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[1].children[0].style.display = 'none', 500);

		statsVeryHard.children[2].children[0].innerHTML = "-20";
		statsVeryHard.children[2].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[2].children[0].style.display = 'none', 500);
		
	}else if(event.target.dataset.actions == 'run') {
		stats.children[2].children[0].innerHTML = "+15";
		stats.children[2].children[0].style.display = 'inline';
		setTimeout(() => stats.children[2].children[0].style.display = 'none', 500);

		stats.children[0].children[0].innerHTML = "-10";
		stats.children[0].children[0].style.display = 'inline';
		setTimeout(() => stats.children[0].children[0].style.display = 'none', 500);
		
		statsVeryHard.children[2].children[0].innerHTML = "+15";
		statsVeryHard.children[2].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[2].children[0].style.display = 'none', 500);

		statsVeryHard.children[0].children[0].innerHTML = "-10";
		statsVeryHard.children[0].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[0].children[0].style.display = 'none', 500);

	}else if(event.target.dataset.actions == 'visit_doctor') {
		statsVeryHard.children[3].children[0].innerHTML = "+30";
		statsVeryHard.children[3].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[3].children[0].style.display = 'none', 500);

		statsVeryHard.children[5].children[0].innerHTML = "-20";
		statsVeryHard.children[5].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[5].children[0].style.display = 'none', 500);

	}else if(event.target.dataset.actions == 'go_to_bar') {
		statsVeryHard.children[4].children[0].innerHTML = "+40";
		statsVeryHard.children[4].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[4].children[0].style.display = 'none', 500);

		statsVeryHard.children[0].children[0].innerHTML = "+10";
		statsVeryHard.children[0].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[0].children[0].style.display = 'none', 500);

		statsVeryHard.children[5].children[0].innerHTML = "-20";
		statsVeryHard.children[5].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[5].children[0].style.display = 'none', 500);

		statsVeryHard.children[3].children[0].innerHTML = "-10";
		statsVeryHard.children[3].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[3].children[0].style.display = 'none', 500);

	}else if(event.target.dataset.actions == 'go_to_work') {
		statsVeryHard.children[5].children[0].innerHTML = "+50";
		statsVeryHard.children[5].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[5].children[0].style.display = 'none', 500);

		statsVeryHard.children[0].children[0].innerHTML = "-10";
		statsVeryHard.children[0].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[0].children[0].style.display = 'none', 500);

		statsVeryHard.children[4].children[0].innerHTML = "-20";
		statsVeryHard.children[4].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[4].children[0].style.display = 'none', 500);

		statsVeryHard.children[3].children[0].innerHTML = "-10";
		statsVeryHard.children[3].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[3].children[0].style.display = 'none', 500);

	}else if(event.target.dataset.actions == 'byu_food') {
		statsVeryHard.children[0].children[0].innerHTML = "+20";
		statsVeryHard.children[0].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[0].children[0].style.display = 'none', 500);

		statsVeryHard.children[5].children[0].innerHTML = "-20";
		statsVeryHard.children[5].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[5].children[0].style.display = 'none', 500);

	}else if(event.target.dataset.actions == 'start_a_business') {
		statsVeryHard.children[5].children[0].innerHTML = "+100";
		statsVeryHard.children[5].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[5].children[0].style.display = 'none', 500);

		statsVeryHard.children[2].children[0].innerHTML = "+100";
		statsVeryHard.children[2].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[2].children[0].style.display = 'none', 500);

		statsVeryHard.children[4].children[0].innerHTML = "+20";
		statsVeryHard.children[4].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[4].children[0].style.display = 'none', 500);

		statsVeryHard.children[3].children[0].innerHTML = "-100";
		statsVeryHard.children[3].children[0].style.display = 'inline';
		setTimeout(() => statsVeryHard.children[3].children[0].style.display = 'none', 500);

	}

}

function showGameOver() {
	let stat = document.querySelectorAll('.stat');
	let statsHard = document.querySelectorAll('.stat');


if(easyLevel === true || hardLevel === true) {
	for(let item of stat) {
			if(easyLevel === true && +item.children[1].innerHTML <= 0 || hardLevel === true && +item.children[1].innerHTML <= 0) {

			gameWindow.classList.remove('easy_level');	
			gameWindow.classList.remove('hard_level');

			gameOver.style.display = 'block';	
			result.style.display = 'block';
			setTimeout(() => { restart.style.display = 'block';}, 1000);
			let resultTime = timer();
			result.innerHTML = resultTime;
			time.style.display = 'none';

			easyLevel = false;
			hardLevel = false;
			return;	
		}	
	}
}	

 if(veryHardLevel === true) {

	for(let item of statsHard) {
		if(veryHardLevel === true && +item.children[1].innerHTML <= 0) {
			gameWindow.classList.remove('veryHard_level');

			gameOver.style.display = 'block';	
			result.style.display = 'block';
			setTimeout(() => { restart.style.display = 'block';}, 1000);
			let resultTime = timer();
			result.innerHTML = resultTime;
			time.style.display = 'none';

			veryHardLevel = false;
			return;
		}
	}
}	
	
		requestAnimationFrame(showGameOver);
}

function increasingRandomStats(randomInt) {
	
		let statsHard = document.querySelector('.statsHard');
		let randomInteger = randomInt(0,5);
		let randomStat = randomInt(10,50);
	console.log(randomStat);
		 for(let i = 0; i < statsHard.children.length; i++ ) {
		 	if(i == randomInteger) {
		 		statsHard.children[i].children[1].innerHTML = +statsHard.children[i].children[1].innerHTML + randomStat;

		 		statsVeryHard.children[i].children[0].innerHTML = `+${randomStat}`;
		 		statsVeryHard.children[i].children[0].style.display = 'inline';
		 		statsVeryHard.children[i].children[0].style.color = 'red';

		 		setTimeout(() => {statsVeryHard.children[i].children[0].style.display = 'none';
		 		statsVeryHard.children[i].children[0].style.color = 'black';}, 500);

		 		statsVeryHard.children[i].style.height = (parseInt(statsVeryHard.children[i].style.height) + randomStat) + 'px';

		 		if(statsVeryHard.children[i].children[1].innerHTML > 100)   statsVeryHard.children[i].style.height = '100px';
		 	}
		 }

	setTimeout( 'increasingRandomStats(randomInteger)', 1000 * 60 );
}


function restarted() {
	location.reload();
}


easy.addEventListener("click", easyLevell);
easy.addEventListener("click", timer);
easy.addEventListener("click", creatNewStats);
easy.addEventListener("click", decreaseStats);


hard.addEventListener('click',hardLevell);
hard.addEventListener('click',timer);
hard.addEventListener("click", creatNewStats);
hard.addEventListener("click", decreaseStats);

veryHard.addEventListener('click', veryHardLevell);
veryHard.addEventListener('click', timer);
veryHard.addEventListener('click', creatNewStats);
veryHard.addEventListener('click', decreaseStats);
veryHard.addEventListener('click', function() {
	setTimeout( () => increasingRandomStats(randomInteger), 1000 * 60);
} );

buttons.addEventListener('click',btnActions);
buttons.addEventListener('click',showTopStats);
btn_veryHard.addEventListener('click',btnActions);
btn_veryHard.addEventListener('click',showTopStats);

restart.addEventListener('click',restarted);

showColorStats();
showGameOver();
