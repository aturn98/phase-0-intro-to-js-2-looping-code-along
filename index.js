function writeCards(names, event) {
  let completedCards = [];
  for (let i = 0; i < names.length; i++) {
    completedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return completedCards;
}

function countDown() {
  let number = 10;
  while (number >= 0) {
    console.log(number--);
  }
}
