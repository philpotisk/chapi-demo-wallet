/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict'

/**
 * Simple config file (to help test against local instances of authn.io, local
 * wallets, etc).
 */

const MEDIATOR = 'https://authn.io/mediator' + '?origin=' + encodeURIComponent(window.location.origin);

//const WALLET_LOCATION = 'https://chapi-demo-wallet.digitalbazaar.com/';
//const WALLET_LOCATION = 'http://localhost:3000/';
const WALLET_LOCATION = 'https://de99dd3f.ngrok.io/';