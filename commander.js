// const fs = require("fs")

// const main = (filename)=>{
// fs.readFile(filename,"utf-8",(err,data)=>{
//     let total = 0;
//     for(let i = 0;i< data.length;i++){
//             if(data[i] === " ")
//             {
//                 total++;
//             }
//     }
//     console.log(total + 1)
// })
// }

// main(process.argv[2])

//******************************************************************************

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

  program.command('count-words')
  .description('Count the number of Words in a file')
  .argument('<file>', 'file to count words')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split(' ').length;
        console.log(`There are ${lines} words in ${file}`);
      }
    });
  });

program.parse();

