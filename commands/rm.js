/**
 * @author youmoo
 * @since 2016/11/29
 */
'use strict';

module.exports = function rm(program, client) {
  program.command('remove <path>')
    .alias('rm')
    .description('remove file')
    .action((path, cmd) => {
      client.rm({fileId: path})
        .then(console.log)
        .catch(console.warn)
    });
};
