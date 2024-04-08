export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    // disabled  the line
    const task2 = false;
    // disabled the line
  }

  return [task, task2];
}
