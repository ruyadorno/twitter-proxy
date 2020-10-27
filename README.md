# twitter-proxy [![NPM version](https://badge.fury.io/js/twitter-proxy.svg)](https://npmjs.org/package/twitter-proxy)

> Tiny Twitter API proxy server

Allows you to make requests to the Twitter API from the comfort of your browser.

## Install

`npm install -g twitter-proxy`

## Getting started

0. Create an app on https://dev.twitter.com – the URLs and name don't matter, you won't be using it to authenticate people

0. Create a json configuration file, containing your consumer key and secret:

    ```json
    {
      "consumerKey": "<paste consumer key here>",
      "consumerSecret": "<paste consumer secret here>"
    }
    ```

0. Let's say we save it on `~/config.json`

0. Run the app using the saved config: 

    ```sh
    $ twitter-proxy ~/config.json # If installed with npm i -g
    $ npm start ~/config.json     # If you cloned the repository
    ```

You can now make requests to Twitter APIs by substituting Twitter base URL with `http://localhost:port`, where `port`
denotes the port that was assigned to this server. As an example, if a prior direct request to Twitter pointed to

```
https://api.twitter.com/1.1/search/tweets.json?q=%40twitterdev
```

now, having to pass through the proxy, it points to

```
http://localhost:port/1.1/search/tweets.json?q=%40twitterdev
```

## Programmatic API

From your node app, just require this module as a function and call it using the config object as the only parameter:

```
var twitterProxyServer = require('twitter-proxy');
twitterProxyServer({
  consumerKey: '<paste consumer key here>',
  consumerSecret: '<paste consumer secret here>'
});
```

## Configuration

The possible configuration properties, and its default values are:

```json
{
  "consumerKey": "",
  "consumerSecret": "",
  "accessToken": "",
  "accessTokenSecret": "",
  "port": "7890"
}
```

## License

[MIT License](http://phuu.mit-license.org/)

