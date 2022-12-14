/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  this.maxLen = k;
  this.array = [];
  this.head = -1;
  this.tail = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()){
    return false;
  }
    let wasEmpty = this.isEmpty();

        if(this.tail === this.maxLen - 1){
            this.tail = 0;
        } else {
            this.tail++;
        }
    this.array[this.tail] = value;
    if(wasEmpty){
        this.head = this.tail;
    }
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()){
    return false;
  }
  this.array[this.head] = undefined;
  if(!this.isEmpty()){
    if(this.head === this.maxLen - 1){
      this.head = 0;
    } else {
      this.head++;
    }
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? 
          -1 : 
          this.array[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ?
          -1 :
          this.array[this.tail]
;}
;
/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  if(this.head === this.tail && this.array[this.tail] === undefined){
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {  
  if(this.head === 0 && this.tail === this.maxLen - 1 && this.array[this.tail] !== undefined){
    return true;
  }
  if(this.head === this.tail + 1){
    return true;
  }
  return false;
};
