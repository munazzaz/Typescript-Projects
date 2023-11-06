import inquirer from 'inquirer';
import chalk from 'chalk';

// Define a data structure to store todos
interface Todo {
  task: string;
  completed: boolean;
  dueDate: string; // Add a dueDate property
  priority: string; // Add a priority property
}

const todos: Todo[] = [];

// Function to display the list of todos
function displayTodos() {
  console.clear();
  console.log(chalk.bold.underline("Todo List"));
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const status = todo.completed ? chalk.green('✔') : chalk.red('❌');
    console.log(`[${i + 1}] ${status} ${todo.task} (Due: ${todo.dueDate}, Priority: ${todo.priority})`);
  }
  console.log('');
}

// Function to add a new todo with error handling
function addTodo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'task',
        message: 'Enter a new task:',
        validate: (value) => {
          if (value.trim() === '') {
            return 'Task cannot be empty. Please enter a task.';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'dueDate',
        message: 'Enter the due date (optional):', // Prompt for due date
      },
      {
        type: 'list',
        name: 'priority',
        message: 'Select task priority:',
        choices: ['High', 'Medium', 'Low'], // Priority options
      },
    ])
    .then((answers) => {
      const newTodo: Todo = {
        task: answers.task,
        completed: false,
        dueDate: answers.dueDate || 'N/A', // Set due date to 'N/A' if not provided
        priority: answers.priority, // Set task priority
      };
      todos.push(newTodo);
      displayTodos();
      promptUser();
    });
}

// Function to mark a todo as completed with confirmation and error handling
function completeTodo(index: number) {
  if (isNaN(index) || index < 0 || index >= todos.length) {
    console.log(chalk.red('Invalid todo index.'));
    promptUser();
  } else {
    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: `Are you sure you want to mark "${todos[index].task}" as completed?`,
        },
      ])
      .then((answers) => {
        if (answers.confirm) {
          todos[index].completed = true;
          displayTodos();
        } else {
          console.log(chalk.yellow('Task not marked as completed.'));
        }
        promptUser();
      });
  }
}

// Function to edit an existing todo
function editTodo(index: number) {
  if (isNaN(index) || index < 0 || index >= todos.length) {
    console.log(chalk.red('Invalid todo index.'));
    promptUser();
  } else {
    const currentTodo = todos[index]; // Get the current todo item
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'task',
          message: 'Enter a new task description (leave empty to keep the current task):',
          default: currentTodo.task, // Display the current task description as a default value
        },
        {
          type: 'input',
          name: 'dueDate',
          message: 'Enter the due date (optional):',
          default: currentTodo.dueDate, // Display the current due date as a default value
        },
        {
          type: 'list',
          name: 'priority',
          message: 'Select the new task priority:',
          choices: ['High', 'Medium', 'Low'],
          default: currentTodo.priority, // Display the current priority as a default value
        },
      ])
      .then((answers) => {
        const editedTodo = todos[index];
        editedTodo.task = answers.task || editedTodo.task;
        editedTodo.dueDate = answers.dueDate || 'N/A';
        editedTodo.priority = answers.priority;
        displayTodos();
        promptUser();
      });
  }
}

// Function to delete a todo
function deleteTodo(index: number) {
  if (isNaN(index) || index < 0 || index >= todos.length) {
    console.log(chalk.red('Invalid todo index.'));
    promptUser();
  } else {
    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: `Are you sure you want to delete "${todos[index].task}"?`,
        },
      ])
      .then((answers) => {
        if (answers.confirm) {
          todos.splice(index, 1);
          displayTodos();
        } else {
          console.log(chalk.yellow('Task not deleted.'));
        }
        promptUser();
      });
  }
}

// Function to prompt the user for actions
function promptUser() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: ['Add Todo', 'Complete Todo', 'Edit Todo', 'Delete Todo', 'Quit'], // Add 'Delete Todo' option
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'Add Todo':
          addTodo();
          break;
        case 'Complete Todo':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'index',
                message: 'Enter the index of the task to complete:',
                validate: (value) => !isNaN(parseInt(value)),
              },
            ])
            .then((answers) => {
              const index = parseInt(answers.index) - 1;
              completeTodo(index);
            });
          break;
        case 'Edit Todo':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'index',
                message: 'Enter the index of the task to edit:',
                validate: (value) => !isNaN(parseInt(value)),
              },
            ])
            .then((answers) => {
              const index = parseInt(answers.index) - 1;
              editTodo(index);
            });
          break;
        case 'Delete Todo':
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'index',
                message: 'Enter the index of the task to delete:',
                validate: (value) => !isNaN(parseInt(value)),
              },
            ])
            .then((answers) => {
              const index = parseInt(answers.index) - 1;
              deleteTodo(index);
            });
          break;
        case 'Quit':
          console.log(chalk.yellow('Goodbye!'));
          break;
      }
    });
}

// Start the application
displayTodos();
promptUser();
