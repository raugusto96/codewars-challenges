function movie(card, ticket, perc) {
  let costSystemA = 0;
  let costSystemB = card;
  let timeInCinema = 0;
  while (Math.ceil(costSystemB) >= costSystemA) {
    costSystemA += ticket;
    costSystemB += ticket * Math.pow(perc, timeInCinema += 1);
  };
  return timeInCinema;
};

console.log(movie(500, 15, 0.9));