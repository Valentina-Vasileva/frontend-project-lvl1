import { runEngine, getRandomArbitrary, ROUNDS_COUNT } from '../index.js';

const getProgression = (firstNumber, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

export default () => {
  const description = 'What number is missing in the progression?';
  const questionsAndAnswers = [];

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const firstNumber = getRandomArbitrary(0, 100);
    const step = getRandomArbitrary(0, 100);
    const progressionLength = 10;

    const progression = getProgression(firstNumber, step, progressionLength);
    const randomIndex = getRandomArbitrary(0, progressionLength - 1);
    const answer = progression[randomIndex];

    progression[randomIndex] = '..';

    questionsAndAnswers.push([progression.join(' '), String(answer)]);
  }
  runEngine(questionsAndAnswers, description);
};
