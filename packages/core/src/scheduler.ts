let queue: Array<() => void> = [];

export function schedule(task: () => void) {
  queue.push(task);

  const run = () => {
    while (queue.length > 0) {
      queue.shift()();
    }

    if (queue.length > 0) {
      window.requestAnimationFrame(run);
    }
  }

  window.requestAnimationFrame(run);
}
