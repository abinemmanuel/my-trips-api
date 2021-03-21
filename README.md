# my-trips-api

This Micro service API is created using serverless framework on AWS to serve data to the myTrips trip planning application.

## Prerequisites

- Node 12.x
- npm 6
- serverless
- aws (aws - cli)

## Initialising
Add dependencies / dev-dependencies as needed

```bash
npm install <package-name> --save
```
```bash
npm install <package-name> --save-dev
```

 Install/download the dependencies

```bash
npm install
```

Run locally using [serverless offline](https://github.com/dherault/serverless-offline). Thanks to [David Hérault](https://github.com/dherault)

```bash
npm start
```

## Develop / Debug

Start API locally

```bash
npx serverless offline
```

### Individual functions

```bash
npx serverless invoke local --function functionName <stringified event>
```
## Lint Code
Execute eslint as below 
```bash
npm run lint
```

## Unit Test
Execute tests as below 
```bash
npm run test
```
## Manage Plugins

Add plugins like below:

```bash
npx serverless plugin install --name <plugin-name>
```

## Deploy
 Deploy to AWS as below.
```bash
sls delploy
```

## Additional Read:
- [API Conventions](docs/apiConventions.md)

- [License](LICENSE)

- [Features](docs/features.md)

- [TODO](docs/TODO.md)
