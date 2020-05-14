# Credential Handler API Test Wallet

> [Credential Handler API](https://w3c-ccg.github.io/credential-handler-api/) (CHAPI) Test Wallet app

## Table of Contents

- [Background](#background)
- [Usage](#usage)
- [Install](#install)
- [Security](#security)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)

Demos:

1. [Test Wallet](https://chapi-demo-wallet.digitalbazaar.com/)
2. [Demo Issuer](https://chapi-demo-issuer.digitalbazaar.com/)
3. [Demo Verifier](https://chapi-demo-verifier.digitalbazaar.com/)

## Background

## Usage

    npm install 

    Install ngrok and let it listen on http-port 3000
    ./ngrok http 3000

    replace WALLET_LOCATION in config.js with ngrok url e.g. http://2d69a803.ngrok.io
        
    node server.js

    now visit the ngrok url

## Security

See https://github.com/digitalbazaar/credential-handler-polyfill#security

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

Note: If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[New BSD License (3-clause)](LICENSE) © 2020 Digital Bazaar