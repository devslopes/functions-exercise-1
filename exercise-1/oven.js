// please ignore this file
const oven = {
  operations: [],
  tempSet: null,
  panPlaced: null,
  waitedFor: null,
  removed: null,
  set(temperature) {
    oven.tempSet = temperature;
    oven.operations.push("setTemp");
    console.log(`oven set to ${temperature}`);
  },
  place(pan) {
    oven.panPlaced = pan;
    oven.operations.push("placedPan");
    console.log("stuff added into the oven");
  },
  wait(interval) {
    oven.waitedFor = interval;
    oven.operations.push("waited");
    console.log(`waited for ${interval} seconds`);
  },
  remove(thing) {
    oven.removed = thing;
    oven.operations.push("removedStuff");
    console.log("removed stuff from oven");
  },
};
