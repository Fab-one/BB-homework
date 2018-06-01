// Variables
var hero = {
  name: 'Frodo',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {type: '', damage: 0}
};

//var creature = {
//  name: '',
//  heroic: true,
//  inventory: [],
//  health: 10
//  item: {type: '', damage: 0}
//}

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
/* Take it from here, function not OK

function doBattle(heroicCreature, creature) {
  if (heroicCreature.heroic(false)) {
    return null
  }
}
  while (heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature)
    dealDamage(creature, heroicCreature)
    if (creature.health <= 0 && heroicCreature.health > 0) {
      return heroicCreature.health
    } else {
      window.alert('Your hero is dead!')
    }
  }

*/

// UI
