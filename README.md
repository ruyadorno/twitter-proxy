# twitter-proxy

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
    $ twitter-proxy ~/config.json
    ```

You can now make requests to Twitter API URLs, but to `http://localhost:7890`, from your browser.

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

