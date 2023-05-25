function compareTime(timeString1, timeString2) {
  let t1 = new Date(timeString1);
  let t2 = new Date(timeString2);
  return t1.getTime() > t2.getTime();
}

module.exports = {
  compareTime,
};
