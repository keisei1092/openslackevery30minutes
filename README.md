```sh
git clone git@github.com:keisei1092/openslackevery30minutes.git
cd openslackevery30minutes
npm install
npm install -g forever
vim env.js
```

*env.js*

```javascript
module.exports = {
  SLACK_URLS: function() {
    return ['http://hoge.slack.com/', 'https://fuga.slack.com/'];
  }
};
```

```sh
forever start main.js
```
