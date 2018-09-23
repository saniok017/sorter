class Sorter {
  constructor() {
    this.arr =[];
    this.numbers = function(a,b){
      return a-b;
    }
    this.comparator=this.numbers
  }

  add(element) {
    this.arr.push(element);
  }
  at(index) {
    return this.arr[index]
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
  return this.arr
  }

  sort(indices) {
    this.indices = indices;
    this.indices.sort();
    this.temp = [];
    this.tosort = [];
    this.prefix = [];
    // in 1 piece
    if(this.arr.length == this.indices.length){
      return this.arr.sort(this.comparator);}
    // in 3 pieces
    if(this.indices[0] !== 0){
      this.prefix = this.arr.splice(0,this.indices[0]);
      this.tosort = this.arr.slice(0,this.indices.length);
      this.temp = this.arr.slice(this.indices.length);
    // compare numbers with function
      this.tosort.sort(this.comparator);
      return this.arr = this.prefix.concat(this.tosort,this.temp);
    }
    // in 2 pieces 
    if (this.arr.length !== this.indices.length){
      this.tosort = this.arr.slice(this.indices[0],this.indices.length);
      this.temp = this.arr.slice(this.indices.length);
      this.tosort.sort(this.comparator);
      return this.arr = this.tosort.concat(this.temp);}
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
