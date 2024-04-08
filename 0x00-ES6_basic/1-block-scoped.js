export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true;
      // disabled line
      const task2 = false;
      // disabled line
    }
  
    return [task, task2];
  }