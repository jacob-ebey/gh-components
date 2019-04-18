let needsUpdate = false;
let queue: Array<() => void> = [];

export function schedule(task: () => void) {
  queue.push(task);
  
  if (!needsUpdate) {
    needsUpdate = true;

    const run = () => {
      while (queue.length > 0) {
        queue.shift()();
      }

      if (queue.length === 0) {
        needsUpdate = needsUpdate = false;
      } else {
        window.requestAnimationFrame(run);
      }
    }

    window.requestAnimationFrame(run);
  } 
}
