import { runEngine, getRandomArbitrary, ROUNDS_COUNT } from '../index.js';

const OPERATIONS = ['+', '-', '*'];

export default () => {
  const description = 'What is the result of the expression?';
  const questionsAndAnswers = [];

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const number1 = getRandomArbitrary(-100, 100);
    const number2 = getRandomArbitrary(-100, 100);
    const operation = OPERATIONS[getRandomArbitrary(0, 2)];

    let answer;
    let question;

    switch (operation) {
      case '+':
        answer = number1 + number2;
        question = `${number1} + ${number2}`;
        break;
      case '-':
        answer = number1 - number2;
        question = `${number1} - ${number2}`;
        break;
      case '*':
        answer = number1 * number2;
        question = `${number1} * ${number2}`;
        break;
      default:
        throw new Error('Unknown operation');
    }

    questionsAndAnswers.push([question, String(answer)]);
  }

  runEngine(questionsAndAnswers, description);
};
