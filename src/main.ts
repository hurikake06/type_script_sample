import runner from './runner';

console.log("------------");
console.log("Main Exec.");
console.log("------------");

function main<T extends runner>(runner: T) {
  runner.run();
}

console.log("------------");
console.log("Main Completed.");
console.log("------------");