<p align="center">
<img src="https://avatars.githubusercontent.com/u/109497456?s=200&v=4" alt="3em Logo" width="110" height="110">
<h3 align="center">Execution Machine </h3>

<p align="center">
    Creating scalable decentralized applications without wallet or tokens
</p>
</p>

## General

EXM enables developers to build stateful "serverless/lambda" functions on top of Arweave (a permanent data layer). There has been multiple use cases worked on, among them we have found people are using EXM for: Decentralized databases & digital identity.

## The examples

- In `function.js` you will find a very raw example of how these blockchain-based serverless functions are structured.
- In `sdk-example.js` you will find a code example to deploy and interact with the function.

## Running the examples

> Remember to run `npm i` when cloning this repository

1) To deploy & send an interaction to `function.js`, please run:
```shell
$ npm run deploy
```

**Remember to replace** `YOUR_TOKEN_GOES_HERE` in the file `sdk-example.js` with your EXM API Key ([Read how to create one here](https://docs.exm.dev/introduction/creating-an-api-token))

## CLI 

In order for you to use EXM's CLI, you can find its documentation [here](https://docs.exm.dev/cli/introduction).

## Sending requests to function without having an EXM Account

EXM enables anyone to interact with EXM functions. In order to do this, your users can use [function urls](https://docs.exm.dev/trustless-serverless-functions/function-urls) which behaves as the equivalent of a "http request" in this decentralized environment.