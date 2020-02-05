function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function() {
  return this.array.slice();
};

Stack.prototype.isEmpty = function() {
  return this.array.length == 0;
};

Stack.prototype.peek = function() {
  return this.array[this.array.length - 1];
};

Stack.prototype.puch = function(value) {
  this.array.push(value);
};

Stack.prototype.pop = function() {
  return this.array.pop();
};

function stackAccessHthTopNode(stack1, n) {
  let bufferArray = stack1.getBuffer();

  if (n <= 0) throw "error";

  let bufferStack = new Stack(bufferArray);

  while (--n) {
    bufferStack.pop();
  }

  return bufferStack.pop();
}

function stackSearch(stack1, element) {
  var bufferArray = stack.getBuffer();

  var bufferStack = new Stack(bufferArray);

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() === element) {
      return true;
    }
  }
  return false;
}

let stack1 = new Stack();
