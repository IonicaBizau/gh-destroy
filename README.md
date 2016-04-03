# fork-me [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/fork-me.svg)](https://www.npmjs.com/package/fork-me) [![Downloads](https://img.shields.io/npm/dt/fork-me.svg)](https://www.npmjs.com/package/fork-me) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Easy interface to fork one or more repositories on GitHub.

## :cloud: Installation
    
```sh
$ npm i --save fork-me
```

            
## :clipboard: Example

        

```js
const ghDelete = require("fork-me");

// Delete all the repositories owned by @ghost
ghDelete("ghost", "your token", (err, data) => {
    console.log(err || "Done");
}).on("repo-success", (data, repo) => {
    console.log(`Deleted ${repo.full_name}`);
}).on("repo-error", (err, data) => {
    console.log(`Failed to delete ${data.full_name}.`, err);
});
```
    
## :memo: Documentation
        
### `ghDelete(what, where, token, cb)`
Deletes the specified repositories in a specified account.

#### Params
- **String** `what`: If a GitHub owner (user or organization) is provided, all accesible repositories will be deleted. If a repository full name is
provided, only that specific repository will be deleted.
- **String** `where`: The account name where to fork the repositories (your username or an organization).
- **String** `token`: The GitHub token.
- **Function** `cb`: The callback function.

#### Return
- **EventEmitter** An `EventEmitter` instance emitting the following events:
 - `repo-error` (err, repo): Emitted if the request failed for a specific repository.
 - `repo-success` (data, repo): Emitted the request is successful.
 - `repo-progress` (err, data): Emitted running the request to a repository (if it was a success, the error will be `null`).
 - `done` (err, data): Emitted after all the requests are executed.

        
## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License
    
[MIT][license] © [Ionică Bizău][website]
    
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md