const canvas = document.querySelector('canvas');
const cto =canvas.getContext('2d');

const words = ['canvas','ironhack','programming']
const secretWord = words[Math.floor(Math.random()*words.length)]

let secretkeys = []



/*-----------------buton init++++++++++++++++++++*/



const btn_strat = document.querySelector('#start-game-button')

const drwaHangman = ()=>{

}


const drawLines = ()=>{

}


let printletter = () =>{
	console.log(secretkeys[secretkeys.length]);
				if(secretkeys.length>0){

			cto.font="30px Arial"
			cto.fillText(secretkeys[secretkeys.length], 100, 100 );
				}
		

}
function toknowifhaveSomthing(e){


if(secretWord.includes(e.key)){
	secretkeys.push(e.key)
	printletter()
	return secretkeys
}else{
return e.key}
	
}
const getWordAndInsertincanvas = ()=>{

	let parentInputWord = document.querySelector('div:nth-child(3)');
	// let inputWord=document.createElement('input')
	// inputWord.setAttribute('type', 'text')
	// inputWord.setAttribute('value', '')
	// parentInputWord.insertBefore(inputWord,parentInputWord.childNodes[1])
	// 	console.log(parentInputWord);
	window.onkeydown=(e)=>{
		toknowifhaveSomthing(e)
				}
}



const showTheInitGame = ()=>{
	console.log("holil");
	document.querySelector('div>img').style.display = 'none';
	document.querySelector('button').style.display = 'none'

	getWordAndInsertincanvas()
}







btn_strat.addEventListener('click',showTheInitGame);





