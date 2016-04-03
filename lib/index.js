const ghRepeat = require("gh-repeat");

/**
 * ghDelete
 * Deletes the specified repositories in a specified account.
 *
 * @name ghDelete
 * @function
 * @param {String} what If a GitHub owner (user or organization) is provided,
 * all accesible repositories will be deleted. If a repository full name is
 * provided, only that specific repository will be deleted.
 * @param {String} where The account name where to fork the repositories (your username or an organization).
 * @param {String} token The GitHub token.
 * @param {Function} cb The callback function.
 * @returns {EventEmitter} An `EventEmitter` instance emitting the following events:
 *
 *  - `repo-error` (err, repo): Emitted if the request failed for a specific repository.
 *  - `repo-success` (data, repo): Emitted the request is successful.
 *  - `repo-progress` (err, data): Emitted running the request to a repository (if it was a success, the error will be `null`).
 *  - `done` (err, data): Emitted after all the requests are executed.
 */
module.exports = function ghDelete(what, where, token, cb) {
    return ghRepeat(what, c => ({
        url: `repos/${c.full_name}/forks`
      , data: {
            organization: where || ""
        }
    }), token, cb);
};
