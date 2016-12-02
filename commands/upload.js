/**
 * @author youmoo
 * @since 2016/11/29
 */
'use strict';
const path = require('path');
const fs = require('fs');

module.exports = function upload(program, client) {
  program
    .command('upload <file>')
    .alias('up')
    .description('upload files')
    .option('-O, --overwrite', 'Wether to overwrite existing files')
    .option('-P, --path [fileId]', 'Specify fileId')
    .option('-B, --bucket [bucket]', 'Specify bucket')
    .option('-D, --delete', 'Delete local file after uploading is done')
    .action((file, cmd) => {
      let {overwrite, path:fileId, delete:del}=cmd;

      const filename = path.basename(file);

      if (!fileId) {
        fileId = '/' + filename;
      }
      if (!fileId.startsWith('/')) {
        fileId = '/' + fileId;
      }
      if (fileId.endsWith('/')) {
        fileId += filename;
      }
      if (!file.startsWith('/')) {
        file = process.cwd() + '/' + file;
      }

      console.log('uploading file: ', file);
      client.uploadLargeFile({localFile: file, fileId, form: {insertOnly: overwrite ? 0 : 1}})
        .then((json) => {
          console.log('上传成功', json);
          del && fs.unlinkSync(file);
        })
        .catch((json) => {
          console.warn('上传失败', json);
        })
    });
};
