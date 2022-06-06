import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const runEngine = (questionsAndAnswers, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const [question, rightAnswer] = questionsAndAnswers[round - 1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { runEngine, getRandomArbitrary };
export { ROUNDS_COUNT };
