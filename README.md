# Serverless Hello World

**Install**

```sh
$ npm install -g serverless
$ npm install -g serverless@1.78.1
```

**Install eslint airbnb**

```sh
$ npm install --save-dev eslint
$ npx eslint --init
```

**Create Project**

```sh
$ sls create -t aws-nodejs -p serverless_wolox	
```

**Invoke**
```sh
$ sls invoke local -f healthCheck
```

### `Serverless`

| Command                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| sls deploy                      | Deploy a Serverless service                                           |
| sls remove -v                   | Remove the deployed service                                           |
| sls offline                     | Usage serverless-offline                                              |

### `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| eslint                          | Linter for JavaScript                                                  |
| serverless-offline              | Emulates AWS λ and API Gateway                                         |

### License

MIT
