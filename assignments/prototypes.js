/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(obj) {
  (this.createdAt = obj.createdAt),
    (this.name = obj.name),
    (this.dimensions = obj.dimensions);
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(obj) {
  GameObject.call(this, obj);
  this.healthPoints = obj.healthPoints;
}

// let hero = new CharacterStats("TODAY", "John Wick", "BIG", 3000);

// console.log(hero.destroy());

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(obj) {
  CharacterStats.call(this, obj);

  this.team = obj.team;
  this.weapons = obj.weapons;
  this.language = obj.language;
}

//Declare prototype copying before declaring new prototypes

CharacterStats.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
};

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`;
};

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});


const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function Villain(obj) {
  Humanoid.call(this, obj);
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.sneakAttack = function (obj) {
  if (obj.healthPoints > 0) {
    let damageAmount = Math.floor(
      Math.random() *
      (this.dimensions["length"] *
        this.dimensions["width"] *
        this.dimensions["height"])
    );
    obj.healthPoints -= damageAmount;
    let randomWeapon = Math.floor(Math.random() * this.weapons.length);
    if (obj.healthPoints > 0) {
      console.log(
        `${this.name} attacks ${obj.name} with ${
        this.weapons[randomWeapon]
        } for ${damageAmount} damage! ${obj.name} has ${
        obj.healthPoints
        } health points left!`
      );
    } else {
      console.log(
        `${this.name} attacks ${obj.name} with ${this.weapons[randomWeapon]}! ${
        obj.name
        } has no health points left!`
      );
      console.log(obj.destroy());
    }
  }
};

function Hero(obj) {
  Humanoid.call(this, obj);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.justiceStrike = function (obj) {
  if (obj.healthPoints > 0) {
    let damageAmount = Math.floor(
      Math.random() *
      (this.dimensions["length"] *
        this.dimensions["width"] *
        this.dimensions["height"])
    );

    obj.healthPoints -= damageAmount;
    let randomWeapon = Math.floor(Math.random() * this.weapons.length);
    if (obj.healthPoints > 0) {
      console.log(
        `${this.name} attacks ${obj.name} with ${
        this.weapons[randomWeapon]
        } for ${damageAmount} damage! ${obj.name} has ${
        obj.healthPoints
        } health points left!`
      );
    } else {
      console.log(
        `${this.name} attacks ${obj.name} with ${
        this.weapons[randomWeapon]
        } for ${damageAmount}! ${obj.name} has ${
        obj.healthPoints
        } health points left!`
      );
      console.log(obj.destroy());
    }
  }
};

const demon = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 5,
    height: 1
  },
  healthPoints: 110,
  name: "Beelzebub",
  team: "HellSpawn",
  weapons: ["Fire Breath", "Black Curse", "Poison Bite"],
  language: "Demoniac"
});

const angel = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 3
  },
  healthPoints: 100,
  name: "Tyrael",
  team: "Arch Angels",
  weapons: ["Light Sword", "Redemption Prayer", "Fist of Mercy"],
  language: "Demoniac"
});

window.setInterval(function () {
  if (angel.healthPoints > 0){
    angel.justiceStrike(demon);
  }
  if (demon.healthPoints > 0) {
    demon.sneakAttack(angel);
  }
  if (angel.healthPoints < 1 || demon.healthPoints < 1) {
    clearInterval();
  }
}, 1000);
