const forkMe = require("../lib");

forkMe("jxmono", "jxoss", "9a181738044f3e3014c537f6562b756f047565dc", function (err, data) {
    console.log(err || "Done");
}).on("fork-success", data => {
    console.log(`Forked ${data.source.full_name} into ${data.full_name}`);
}).on("fork-error", (err, c) => {
    console.log(`Failed to fork ${c.source.full_name}. Error: ${err}`);
});
