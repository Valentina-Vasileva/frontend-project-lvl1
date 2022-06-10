import { runEngine, getRandomArbitrary, ROUNDS_COUNT } from '../index.js';

const isPrime = (number) => {
  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAndAnswers = [];

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const question = getRandomArbitrary(1, 1000);
    const answer = isPrime(question) ? 'yes' : 'no';
    questionsAndAnswers.push([question, answer]);
  }

  runEngine(questionsAndAnswers, description);
};
