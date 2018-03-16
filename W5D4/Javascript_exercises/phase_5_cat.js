function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};

let cat1 = new Cat('Curie', 'Ned');
let cat2 = new Cat('Jorge', 'Ana');
console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return function() {
    return `Everyone loves ${this.name}`;
  }.bind(this);
};

console.log(cat1.cuteStatement()());
let a = cat1.cuteStatement();
console.log(a());

Cat.prototype.meow = function() {
  return "meow";
}

console.log(cat1.meow());

cat1.meow = function() {
  return "MEWOWOW";
}

console.log(cat1.meow());
console.log(cat2.meow());
