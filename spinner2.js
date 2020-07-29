let spinner = function() {
  let n = 100;
  let symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
  for (let  i = 0; i < 8; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${symbols[i]}   `);
    }, n);
    n += 200;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, 1800);
};
spinner();



