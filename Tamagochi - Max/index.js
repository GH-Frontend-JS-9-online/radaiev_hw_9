class Randomaizer {
    static getRandom(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
}


class TamagDto {
    constructor(statValue, statName, actionName) {
       this.statValue = statValue;
       this.name = statName;
       this.actionName = actionName;
    }
}

class TimerDto {
    constructor(startDate) {
        let newDate = new Date(new Date() - startDate);
        this.seconds = newDate.getSeconds();
        this.minutes = newDate.getMinutes();
    }
}


class TamagModel {
    static get DEFAULT_MIN_STAT() { return 50 };
    static get DEFAULT_MAX_STAT() { return 70 };

    static get EAT_FUNC_NAME()   { return 'eat' };
    static get HAPPY_FUNC_NAME() { return 'happy' };
    static get CLEAN_FUNC_NAME() { return 'clean' };
    static get HEALTH_FUNC_NAME() { return 'visit doctor' };
    static get SOCIAL_FUNC_NAME() { return 'go to bar' };
    static get MONEY_FUNC_NAME() { return 'go to work' };
    static get BUYFOOD_FUNC_NAME() { return 'buy food' };
    static get BUSINESS_FUNC_NAME() { return 'start a business' };

    constructor(maxStat = TamagModel.DEFAULT_MAX_STAT) {
        this.maxStat = maxStat;

        this.eatStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
        this.cleanStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
        this.happyStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
        this.healthStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
        this.socializationStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
        this.moneyStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
    }

    executeAction(action) {
        switch (action) {
            case TamagModel.EAT_FUNC_NAME:
                return this._eat();
            case TamagModel.HAPPY_FUNC_NAME:
                return this._happy();
            case TamagModel.CLEAN_FUNC_NAME:
                return this._clean();
            case TamagModel.HEALTH_FUNC_NAME:
                return this._health();
            case TamagModel.SOCIAL_FUNC_NAME:
                return this._socialization();
            case TamagModel.MONEY_FUNC_NAME:
                return this._money(); 
            case TamagModel.BUYFOOD_FUNC_NAME:
                return this._buyFood(); 
            case TamagModel.BUSINESS_FUNC_NAME:
                return this._business();                
            default:
                new Error('Unsupported tamag action name')
        }
    }



    getStats() {
        return [
            new TamagDto(this.eatStat, 'Eat', TamagModel.EAT_FUNC_NAME ),
            new TamagDto(this.happyStat, 'Happy', TamagModel.HAPPY_FUNC_NAME ),
            new TamagDto(this.cleanStat, 'Clean', TamagModel.CLEAN_FUNC_NAME ),
            new TamagDto(this.healthStat, 'Health', TamagModel.HEALTH_FUNC_NAME ),
            new TamagDto(this.socializationStat, 'socialization', TamagModel.SOCIAL_FUNC_NAME ),
            new TamagDto(this.moneyStat, 'money', TamagModel.MONEY_FUNC_NAME ),
            new TamagDto('--', '--', TamagModel.BUYFOOD_FUNC_NAME ),
            new TamagDto('--', '--', TamagModel.BUSINESS_FUNC_NAME ),
        ]
    }

    isTamagDead() {
        return !!this.getStats().find((statDto) => statDto.statValue < 0)
    }

    decreaseStatsBy(num) {
        this.eatStat -= num;
        this.happyStat -= num;
        this.cleanStat -= num;
        this.healthStat -= num;
        this.socializationStat -= num;
        this.moneyStat -= num;
    }

    _eat() {
        this.eatStat = this._assignStat(this.eatStat, 30);
        this.cleanStat -= 30;
    }

    _clean() {
        this.cleanStat = this._assignStat(this.cleanStat, 40);
        this.happyStat -= 20;
    }

    _happy() {
        this.happyStat = this._assignStat(this.happyStat, 15);
        this.eatStat -= 10;
    }

    _health() {
        this.healthStat = this._assignStat(this.healthStat, 30);
        this.moneyStat -= 20;
    }

    _socialization() {
    	  this.socializationStat = this._assignStat(this.socializationStat, 40);
    	  this.eatStat = this._assignStat(this.eatStat, 10);

    	  this.moneyStat -= 20;
    	  this.healthStat -= 10;
    }

    _money() {
    	  this.moneyStat = this._assignStat(this.moneyStat, 50);

    	  this.eatStat -= 10;
    	  this.healthStat -= 10;
    	  this.socializationStat -= 20;
    }

    _buyFood() {
    	  this.eatStat = this._assignStat(this.eatStat, 20);

    	  this.moneyStat -= 20;
    }

    _business() {
    	  this.moneyStat = this._assignStat(this.moneyStat, 100);
    	  this.happyStat = this._assignStat(this.happyStat, 100);
    	  this.socializationStat = this._assignStat(this.socializationStat, 20);

    	  this.healthStat -= 100;
    }

    increasStats() {
    	let stat = this._randomInteger(0, 5);
    	let value = this._randomInteger(10, 50);
    	 if(stat == 0) this.eatStat = this._assignStat(this.eatStat, value);
    	 if(stat == 1) this.happyStat = this._assignStat(this.happyStat, value);
    	 if(stat == 2) this.cleanStat = this._assignStat(this.cleanStat, value);
    	 if(stat == 3) this.healthStat = this._assignStat(this.healthStat, value);
    	 if(stat == 4) this.socializationStat = this._assignStat(this.socializationStat, value);
    	 if(stat == 5) this.moneyStat = this._assignStat(this.moneyStat, value);
    	 console.log(stat);
    	 console.log(value);
    }


    _assignStat(stat, increaseBy) {
        let result = stat + increaseBy;
        return result;
    }

    	_randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }
}

//setInterval( () => new tamagModel().say(), 1000 );

class TamagView {
    constructor(elem) {
        this.elem = elem;
    };

    setActionHandler(action) {
        this.action = action;
    }

    // @param statsDtos Array <TeamDto>
    // @param timerDto [TimerDto]
    renderGame(statsDtos, timerDto) {
        this.elem.innerHTML = null;

        statsDtos.forEach((statProps) => {
            let container = document.createElement('div');
            container.style.display = 'flex';

            let statName = document.createElement('p');
            statName.innerHTML = statProps.name;

            let statValueElem = document.createElement('p');
            statValueElem.innerHTML = '        . . . .   ' + statProps.statValue + ' . . . ';

            let actionButton = document.createElement('button');
            actionButton.innerHTML = statProps.actionName;
            actionButton.addEventListener('click', () => {
                this.action(statProps.actionName)
            });

            container.appendChild(statName);
            container.appendChild(statValueElem);
            container.appendChild(actionButton);

            this.elem.appendChild(container)
        });

        let timer = document.createElement('p');
        timer.innerHTML = timerDto.minutes + ' : ' +  timerDto.seconds;

        this.elem.appendChild(timer)
    }
}


class TamgControllerAbstract{
    constructor(temagView, tamagModel, main) {
        this.temagView = temagView;
        this.tamagModel = tamagModel;

        this.main = main;

        this.temagView.setActionHandler(this.executeAction.bind(this));

        this.startTime = new Date();

        this._initTimer();
        this._initStatsDecreasing();
        this._newRandomStats();
    }

    render() { this._renderGame() };


    executeAction(action) {
        this.tamagModel.executeAction(action);
        this._renderGame();
    }

    _initTimer() {
        this.timerId = setInterval(() => {
            this._renderGame();
        }, 1000)
    };

    _initStatsDecreasing() {
        this.decreaseStatsId =  setInterval(() => {
            this._decreaseStats();

            this._renderGame();
        }, 5000)
    };

    _newRandomStats() {
    	this._newRandomStats = setInterval(() => {
    			this.tamagModel.increasStats();

            this._renderGame();
        }, 60000)
    }

    _renderGame() {
        if (this.tamagModel.isTamagDead()) return this._gameOver();

        this.temagView.renderGame(
            this._getTamagStats(),
            new TimerDto(this.startTime)
        );
    }

    _getTamagStats() {
        return this.tamagModel.getStats()
    }

    _gameOver() {
        clearInterval(this.timerId);
        clearInterval(this.decreaseStatsId);
        this.main.changeState(new GameOverState(this.main))
    }

    _decreaseStats() {
        new Error('not implemented')
    }
}

class TamagLazyController extends TamgControllerAbstract {
    _decreaseStats() {
        this.tamagModel.decreaseStatsBy(3);
    }
}

class TamagHardcoreController extends TamgControllerAbstract{
    _decreaseStats() {
        this.tamagModel.decreaseStatsBy(5);
    }
}

class TamagVeryHardcoreController extends TamgControllerAbstract{
    _decreaseStats() {
        this.tamagModel.decreaseStatsBy(7);
    }
}



class TamagFactory {
    static get LAZY_TYPE() { return 'lazy' };
    static get HARDCORE_TYPE() { return 'hardcore' };
    static get VERYHARDCORE_TYPE() { return 'very hardcore' };

    static get TAMAG_TYPES() { return [TamagFactory.LAZY_TYPE, TamagFactory.HARDCORE_TYPE, TamagFactory.VERYHARDCORE_TYPE] }

    static getGameByType(type, main) {
        let tamagView = new TamagView(main.getRootElem());

        switch (type) {
            case TamagFactory.LAZY_TYPE:
                return new TamagLazyController(tamagView, new TamagModel(), main);
            case TamagFactory.HARDCORE_TYPE:
                return new TamagHardcoreController(tamagView, new TamagModel(100), main);
            case TamagFactory.VERYHARDCORE_TYPE:
                return new TamagVeryHardcoreController(tamagView, new TamagModel(100), main);    
            default:
                new Error('Unsupported type')
        }
    }
}


class NewGameState {
    constructor(main) {
        this.main = main;
        this.elem = main.getRootElem();
    };

    render() {
        this.elem.innerHTML = null;
        let select = document.createElement('select');

        TamagFactory.TAMAG_TYPES.forEach((tamapType) => {
            let option = document.createElement('option');
            option.setAttribute('value', tamapType);
            option.innerHTML = tamapType;
            select.appendChild(option);
        });

        let button = document.createElement('button');
        button.innerHTML = 'Start';
        button.addEventListener('click', (event) => { this._handleStart(select) });

        this.elem.appendChild(select);
        this.elem.appendChild(button);
    }

    _handleStart(select) {
        let selectedGameType = select.value;

        if (TamagFactory.TAMAG_TYPES.includes(selectedGameType)) {
            this._startNewGame(selectedGameType);
        } else {
            alert("select type");
        }

    };

    _startNewGame(selectedGameType) {
        this.main.changeState(new GameInProgressState(this.main, selectedGameType))
    };
}



/*class IncreasingRandomStats extends TamagModel {
 
	Increas() {

 		setInterval( () => {
 			
 			this.say();
 			
 		}, 1000)
 	
 		
	}

	// this.eatStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
	// this.cleanStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
	// this.happyStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
	// this.healthStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
	// this.socializationStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);
	// this.moneyStat = Randomaizer.getRandom(TamagModel.DEFAULT_MIN_STAT, maxStat);

	

	randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

}

console.dir(TamagModel);*/

class GameOverState {
    constructor(main) {
        this.main = main;
        this.elem = main.getRootElem();
    };

    render() {
        let gameOver = document.createElement('p');
        gameOver.innerHTML = 'YOU DIED';

        let button = document.createElement('button');
        button.innerHTML = 'Start';
        button.addEventListener('click', (event) => { this._startNewGame() });

        this.elem.appendChild(gameOver);
        this.elem.appendChild(button);
    }

    _startNewGame() {
        this.main.changeState(new NewGameState(this.main));
    };
}

class GameInProgressState {
    constructor(main, type) {
        this.game = TamagFactory.getGameByType(type, main);
    };

    render(){
        this.game.render();
    }
}


class Main {

    static run(elem) {
        new Main(elem).render();
    }

    constructor(elem) {
        this.elem = elem;
        this.state = new NewGameState(this);
    }

    changeState(state) {
        this.state = state;
        this.elem.innerHTML = null;
        this.render();
    }

    getRootElem() {
        return this.elem;
    }

    render() {
        this.state.render();
    }
}

Main.run(document.getElementById('game1'));
// Main.run(document.getElementById('game2'));
// Main.run(document.getElementById('game3'));
