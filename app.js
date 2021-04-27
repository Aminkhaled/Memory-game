document.addEventListener('DOMContentLoaded',()=>{

  //cards object
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const cardsArray = [

    {
      name: 'cheeseburger',
      image: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      image: 'images/cheeseburger.png'
    },
    {
      name: 'fries',
      image: 'images/fries.png'
    },
    {
      name: 'fries',
      image: 'images/fries.png'
    },
    {
      name: 'hotdog',
      image: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      image: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      image: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      image: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      image: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      image: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      image: 'images/pizza.png'
    },
    {
      name: 'pizza',
      image: 'images/pizza.png'
    },


  ]

  cardsArray.sort(() => 0.5 - Math.random());
  let cardChoosen = [];
  let cardChoosenID = [];
  let cardsWon = [];
  /* display our game */
  function  createBoard(){
    for (let i = 0 ; i < cardsArray.length; i++){
      let card = document.createElement('img');
      card.setAttribute('src','images/blank.png');
      card.setAttribute('data-id',i);
      grid.appendChild(card)
      card.addEventListener('click',flipCard);
    }
  }
function checkForMatch(){
  const imgs = document.querySelectorAll('img');
  const optionalId1 =  cardChoosenID[0];
  const  optionalId2 = cardChoosenID[1];
  if(cardChoosen[0] === cardChoosen[1]){
    alert('you found match')
    imgs[optionalId1].setAttribute('src','images/white.png')
    imgs[optionalId2].setAttribute('src','images/white.png')
    cardsWon.push(cardChoosen);
  }else {
    imgs[optionalId1].setAttribute('src','images/blank.png')
    imgs[optionalId2].setAttribute('src','images/blank.png')
   alert('please try again')

  }
  console.log(cardChoosen);
  cardChoosen = [];
  cardChoosenID = [];
  resultDisplay.textContent = cardsWon.length;
  if(cardsWon.length === cardsArray.length/2){
    resultDisplay.textContent = "you did it, you won";
  }
}
  function flipCard(){
    let cardID = this.getAttribute('data-id');
    cardChoosen.push(cardsArray[cardID].name);

    cardChoosenID.push(cardID);
     this.setAttribute('src',cardsArray[cardID].image)
      if(cardChoosen.length === 2){
        setTimeout(checkForMatch)
      }
  }

  createBoard();
  flipCard();
});

