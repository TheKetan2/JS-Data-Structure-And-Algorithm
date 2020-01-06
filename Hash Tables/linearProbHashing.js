const HashTable = size => {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
};

HashTable.prototype.put = (key, value) => {
  if (this.limit >= this.size) throw "hash table is full";
  let hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] != null) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.put = key => {
  let hashedIndex = this.hash(key);
  while (this.keys[hashedIndex] != key) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  return this.value[hashedIndex];
};

HashTable.prototype.hash = key => {
  if (!Number.isInteger(key)) throw "must be int";
  return key % this.size;
};

HashTable.prototype.initArray = size => {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(null);

    return array;
  }
};
