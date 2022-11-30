// Consegna:
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

const gridContainer = document.querySelector("div.grid");

const buttonPlayHundred = document.querySelector("button.btn-100");

const buttonPlayEightyOne = document.querySelector("button.btn-81");

const buttonPlayFourtyNine = document.querySelector("button.btn-49");

buttonPlayHundred.addEventListener("click", function(){
    gridContainer.innerHTML = " ";

    getForLoop(100, "square-100");
})

buttonPlayEightyOne.addEventListener("click", function(){
    gridContainer.innerHTML = " ";
    
    getForLoop(81, "square-81");
})

buttonPlayFourtyNine.addEventListener("click", function(){
    gridContainer.innerHTML = " ";

    getForLoop(49, "square-49");
})

function getForLoop(quantity, numClass){

    for(let i=1; i <= quantity; i++){
    
        const newSquare = getNewSquare(i, numClass);
    
        gridContainer.appendChild(newSquare);
    }
}

function getNewSquare(content, numClass){
    
    const newSquare = document.createElement("div");
    
    newSquare.classList.add(numClass);
    
    newSquare.addEventListener("click", function(){
        newSquare.classList.toggle("clicked");
        console.log(content);
    })

    return newSquare;
}
