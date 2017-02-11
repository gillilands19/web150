//roboDealer.js
//A program that deals random cards from a 52 card deck!
//@author Sean Gilliland


//Create Card Objects
function card(value, suit){
    this.value = value;
    this.suit = suit;
}

//deals 5 random cards and 
function deal(){
 
    var randomCard = [];//initialize the array
    
    //generates a random number and pushes the value at that position in the deck array to the randomCard array
    for (c = 0; c < 5; c++){
        var randomNumber = Math.floor(Math.random() * 52);
        randomCard.push(deck[randomNumber]);
    }
    
    //create a nodelist for all elements with the 'card' class
    var cardHolders = document.getElementsByClassName('card');
    
    var cardID = [];
    
    //loop through each card div and add the card value and suit
    for(var i = 0; i < cardHolders.length; i++){
        cardID.push(cardHolders[i].id); //pushes the id of each card div to cardID array
        document.getElementById(cardID[i]).innerHTML = "<div style='margin:0 auto; margin-top:70px;'><strong style='margin-top:100px;'>" + randomCard[i].value + '<br \> ' + 'of' + '<br \>' + randomCard[i].suit + '</strong></div>'; 
    }
    
}

//Creates the deck of 52 cards by adding new card Objects to 'deck' array
var deck = [];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

for (s = 0; s < suits.length; s++){
    for (v = 0; v < values.length; v++){
        deck.push(new card(values[v], suits[s]));
    }
}

