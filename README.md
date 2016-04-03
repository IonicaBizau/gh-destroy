# fork-me [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/fork-me.svg)](https://www.npmjs.com/package/fork-me) [![Downloads](https://img.shields.io/npm/dt/fork-me.svg)](https://www.npmjs.com/package/fork-me) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Easy interface to fork one or more repositories on GitHub.

## Installation

```sh
$ npm i --save fork-me
```

## Example

```js
const forkMe = require("fork-me");

forkMe("jxmono", "jxoss", "9a181738044f3e3014c537f6562b756f047565dc", function (err, data) {
    console.log(err || "Done");
}).on("fork-success", data => {
    console.log(`Forked ${data.source.full_name} into ${data.full_name}`);
}).on("fork-error", (err, c) => {
    console.log(`Failed to fork ${c.source.full_name}. Error: ${err}`);
});
```

## Documentation

### `forkMe(what, where, token, cb)`
Forks the specified repositories in a known account.

#### Params
- **String** `what`: If a GitHub owner (user or organization) is provided, all accesible repositories will be forked. If a repository full name is provided, only that specific repository will be forked.
- **String** `where`: The account name where to fork the repositories (your username or an organization).
- **String** `token`: The GitHub token.
- **Function** `cb`: The callback function.

#### Return
- **EventEmitter** An `EventEmitter` instance emitting the following events:
 - `fork-error` (err, repo): Emitted if the forking process failed for a specific repository.
 - `fork-success` (data, repo): Emitted when a repository failed to be forked.
 - `progress` (err, data): Emitted after trying to fork a repository (if it was a success, the error will be `null`).

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md