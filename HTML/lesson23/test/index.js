const chokidar = require("chokidar");

let watcher = chokidar.watch(".", { disableGlobbing: true, usePolling: false });

watcher.on("ready", () => {
  console.log("ready!");
  watcher.close();
});
