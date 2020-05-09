var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/hedgehog"] = requestHandlers.hedgehog;
handle["/echidna"] = requestHandlers.echidna;
handle["/raccoon"] = requestHandlers.raccoon;

server.start(router.route, handle);