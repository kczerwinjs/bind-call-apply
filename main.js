function LateBloomer() {
  this.name = 'Kamil';
  this.petalCount = function(){
    return this.name;
  };
}

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount() + ' petals!');
};

var flower = new LateBloomer();

var dog = {};
dog.petalCount = flower.petalCount;
console.log(dog.petalCount());

console.log('call: '+ dog.petalCount.call(flower));
console.log('apply: '+ dog.petalCount.apply(flower));
console.log('bind: '+ dog.petalCount.bind(flower)());
