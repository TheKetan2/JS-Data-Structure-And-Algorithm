function Queue(array) {
  this.array = [];
  if (array) this.array = array;
}

Queue.prototype.getBuffer = function() {
  return this.array.slice();
};

Queue.prototype.isEmpty = function() {
  return this.array.length === 0;
};

Queue.prototype.peek = function() {
  return this.array[0];
};

Queue.prototype.enqueue = function(value) {
  return this.array.push(value);
};

Queue.prototype.dequeue = function() {
  return this.array.shift();
};

function queueAccessNthTopNode(queue, n) {
  var bufferArray = queue.getBuffer();
  if (n <= 0) {
    throw "error";
  }
  var bufferQueue = new Queue(bufferArray);

  while (--n) {
    bufferQueue.dequeue();
  }
  return bufferQueue.dequeue();
}

function queueSearch(queue, element) {
  var bufferArray = queue.getBuffer();

  var bufferQueue = new Queue(bufferArray);

  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() === element) {
      return true;
    }
  }
  return false;
}
