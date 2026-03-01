function calculateMBTI(answers) {

  let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  answers.forEach((value, index) => {
    const dim = questions[index].dimension;

    if (value > 3) {
      scores[dim[0]] += value - 3;
    } else if (value < 3) {
      scores[dim[1]] += 3 - value;
    }
  });

  const type =
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P");

  return { type, scores };
}
