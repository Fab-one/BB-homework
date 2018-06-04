// Variables
var hero = {
  name: 'Frodo',
  heroic: true,
  inventory: [{type: "gun", damage: 3}, {type: "bomb", damage: 10}, {type: "frying pan", damage: 1}],
  health: 6,
  weapon: {type: "knife", damage: 2}
};

var enemy = {
  name: 'Trump',
  health: 2,
  weapon: {type: "covfefe", damage: 1}
};

var result = '';
var inventoryObject = {};

// Game logic
function rest(creature) {
  creature.health = 10
  return creature
  }

function pickUpItem(creature, item) {
  creature.inventory.push(item)
  return creature
};

function dealDamage(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage
  return defender
};

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index]
  creature.inventory.splice(index, 1)
  return creature
};

function doBattle(heroicCreature, creature) {
  if (!heroicCreature.heroic) {
    return null
  }

  while (heroicCreature.health && creature.health > 0) {
    dealDamage(heroicCreature, creature)
    dealDamage(creature, heroicCreature)
    if (creature.health <= 0 && heroicCreature.health > 0) {
      break;
      return heroicCreature
    } else {
      window.alert('Your hero is dead!')
    }
    }
  }

// UI
function clickBed(){
  document.getElementById("bed")
  rest(hero)
  console.log("The health of " + hero.name + " is restored to " + hero.health)
};

function addWeaponToInventory(){
  document.getElementById("weapon")
  pickUpItem(hero,{type: "assaultRifle",damage: 2})
  console.log(hero.inventory)
};

function battleWithEnemy(){
  document.getElementById("enemy")
  doBattle(hero,enemy)
  console.log(hero.health)
};

function useBackPack(){
  equipWeapon(hero,window.prompt("Enter indexnumber"))
  console.log(hero.weapon.type)
};

function displayStats(){
document.getElementById("display").innerHTML="Hero name " + hero.name + ". His health is " + hero.health + ". He carries a " + hero.weapon.type + " which inflicts " + hero.weapon.damage + " points damage.";
};

function changeHero(){
  hero.name = document.getElementById("heroName").value;
  document.getElementById("heroOutput").innerHTML = ('Your hero is now ' + hero.name)
};

function displayInventory(){
    hero.inventory.forEach(function(inventoryObject){
      console.log(hero.inventory[]); 
    })
    console.log(result);
}

function updateStats(){
  displayStats()

}




displayStats();
displayInventory();
