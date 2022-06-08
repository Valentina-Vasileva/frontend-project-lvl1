import { runEngine, getRandomArbitrary, ROUNDS_COUNT } from '../index.js';

const gcd = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questionsAndAnswers = [];

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const number1 = getRandomArbitrary(0, 100);
    const number2 = getRandomArbitrary(0, 100);
    const answer = gcd(number1, number2);
    questionsAndAnswers.push([`${number1} ${number2}`, String(answer)]);
  }
  runEngine(questionsAndAnswers, description);
};
