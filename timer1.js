const args = process.argv.slice(2);

const alarm = (array) => {

  for (let index of array) {
    if (index === undefined) {
      return;
    };
    if (index < 0) {
      return;
    };
    if (isNaN(index)) {
      return;
    };

    setTimeout(() => {
      process.stdout.write('\x07');
    }, index * 1000);
  }
};

console.log(alarm(args));