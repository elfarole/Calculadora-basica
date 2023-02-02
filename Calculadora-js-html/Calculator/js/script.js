//CTRL } divide tela
const oldOperationsText = document.querySelector('#previous-operator-panel');
const newOperationsText = document.querySelector('#current-operator-panel');

const clearDigitDell= document.querySelector('.delete');
const clearAll= document.querySelector('.clear-all');
const clearCurrent= document.querySelector('.clear-current');
const opeBtn= document.querySelectorAll('.operations-btn');
const numBtn= document.querySelectorAll('.numericos-btn');
const equalBtn= document.querySelector('.equal-btn');

class Calculadora{
    constructor(oldOperationsText,newOperationsText){
        this.oldOperationsText = oldOperationsText;
        this.newOperationsText = newOperationsText;
    }
    clear(){
        this.oldOperations = "";
        this.newOperations = "";
    }
    updateDisplay(){
        this.oldOperationsText.innerText = this.oldOperations;
        this.newOperationsText.innerText = this.newOperations;
    }
}
const calculator = new Calculadora(oldOperationsText,newOperationsText);

clearAll.addEventListener('click',()=>{
    console.log('click');
    this.clear();
    this.updateDisplay();
});
/*
buttonID.forEach((btn) => {
    
    btn.addEventListener('click',function(e){
        
        const valor_botao = e.target.innerText;
        if(+valor_botao >= 0 || valor_botao === '.'){
            console.log(valor_botao);

        }
        else{
            console.log('op: '+ valor_botao);
        }
    });
});*/