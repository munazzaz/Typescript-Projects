import inquirer from 'inquirer';
import chalk from 'chalk';

function countWordsAndCharacters(text: string): { words: number; characters: number } {
    const words = text.split(/\s+/).filter((word) => word.length > 0).length;
    const characters = text.replace(/\s+/g, '').length;
    return { words, characters };
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter an English paragraph:',
    },
  ])
  .then((answers) => {
    const { text } = answers;
    const { words, characters } = countWordsAndCharacters(text);

    console.log(chalk.green('Word Count:'), words);
    console.log(chalk.blue('Character Count:'), characters);

    if (words > 0) {
      const averageWordLength = characters / words;
      console.log(chalk.cyan('Average Word Length:'), averageWordLength.toFixed(2), 'characters per word');
      
      const lines = text.split('\n').length;
      console.log(chalk.magenta('Line Count:'), lines);

      // Additional feature: Highlight long words (more than 10 characters)
      const longWords = text.split(/\s+/).filter((word: string) => word.length > 10);
      if (longWords.length > 0) {
        console.log(chalk.yellow('Long Words:'), longWords.join(', '));
      }
    } else {
      console.log(chalk.red('No words found in the input.'));
    }
  });
