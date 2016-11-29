cos-cli
=======


### Usage

在*HOME*目录下新建一个.cos.json的文件内容如下:

```json
{
  "appId": "your app id",
  "secretId": "your secret id",
  "secretKey": "your secret key",
  "bucket": "your bucket"
}
```

然后安装*cos-cli*:`npm i -g cos-cli`

执行一下命令:

```bash
# 查看帮助
cos -h

# 查看版本号
cos -V

# 查看上传帮助
cos upload -h

# 上传文件
cos upload hello.txt

# 上传文件，指定服务器端的文件名
cos upload hello.txt --path /hello.log

# 删除cdn上的文件
cos rm /hello.lg

# 查看目录下文件
cos ls /path/
```

## Todos

- [ ] 美化控制台输出
- [ ] 补充文档
- [ ] 支持批量上传 
