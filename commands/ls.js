/**
 * @author youmoo
 * @since 2016/11/29
 */
'use strict';


module.exports = function ls(program, client) {
  program.command('list <dir>')
    .alias('ls')
    .description('list files')
    .option('-N, --num [num]', 'num of rows')
    .action((dir, cmd) => {
      client.ls({dir, num: cmd.num})
        .then(data => {
          console.log(JSON.stringify(data, null, 2));
        })
        .catch(console.warn)
    });
};
