import { runEngine, getRandomArbitrary, ROUNDS_COUNT } from '../index.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsAndAnswers = [];

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const question = getRandomArbitrary(1, 1000);
    const answer = isEven(question) ? 'yes' : 'no';
    questionsAndAnswers.push([question, answer]);
  }

  runEngine(questionsAndAnswers, description);
};
