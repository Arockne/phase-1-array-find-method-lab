//implement superbowlWin
  //passes an array of objects
    //has year and result
  //use find method to find the object with a result of 'W'
  //return the year the win occurred
function superbowlWin(record) {
  const win = record.find(superbowl => superbowl.result === 'W');
  return win && win.year;
}