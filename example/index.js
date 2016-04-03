const ghDestroy = require("../lib");

// Delete all the repositories owned by @ghost
ghDestroy("ghost", "your token", (err, data) => {
    console.log(err || "Done");
}).on("repo-success", (data, repo) => {
    console.log(`Deleted ${repo.full_name}`);
}).on("repo-error", (err, data) => {
    console.log(`Failed to delete ${data.full_name}.`, err);
});
