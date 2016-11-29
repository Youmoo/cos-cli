/**
 * @author youmoo
 * @since 2016/11/29
 */
'use strict';
const path = require('path');

module.exports = function upload(program, client) {
  program
    .version('0.0.1')
    .command('upload <file>')
    .alias('up')
    .description('upload files')
    .option('-O, --overwrite', 'Wether to overwrite existing files')
    .option('-P, --path [fileId]', 'Specify fileId')
    .option('-B, --bucket [bucket]', 'Specify bucket')
    .action((file, cmd) => {
      let {overwrite, path:fileId}=cmd;

      if (!fileId) {
        fileId = '/' + path.basename(file);
      }
      if (!fileId.startsWith('/')) {
        fileId = '/' + fileId;
      }
      if (!file.startsWith('/')) {
        file = process.cwd() + '/' + file;
      }
      console.log('uploading file: ', file);
      client.uploadLargeFile({localFile: file, fileId, form: {insertOnly: overwrite && 1}})
        .then((json) => {
          console.log('上传成功', json);
        })
        .catch((json) => {
          console.warn('上传失败', json);
        })
    });
};
