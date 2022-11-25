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

// __   _______ _   _______
// \ \ / /  _  | | | | ___ \
//  \ V /| | | | | | | |_/ /
//   \ / | | | | | | |    /
//   | | \ \_/ / |_| | |\ \
//   \_/  \___/ \___/\_| \_|
//  _____       _       _   _              ______      _
// /  ___|     | |     | | (_)             | ___ \    | |
// \ `--.  ___ | |_   _| |_ _  ___  _ __   | |_/ / ___| | _____      __
//  `--. \/ _ \| | | | | __| |/ _ \| '_ \  | ___ \/ _ \ |/ _ \ \ /\ / /
// /\__/ / (_) | | |_| | |_| | (_) | | | | | |_/ /  __/ | (_) \ V  V /
// \____/ \___/|_|\__,_|\__|_|\___/|_| |_| \____/ \___|_|\___/ \_/\_/

// please write your solution below this line, and DO NOT EDIT ANYTHING UP ABOVE
function getCake() {
  oven.set(400);
  const cakeTin = ["flour", "water", "egg", "sugar"];
  oven.place(cakeTin);
  oven.wait(20);
  const cake = oven.remove(cakeTin);
  return cake;
}
