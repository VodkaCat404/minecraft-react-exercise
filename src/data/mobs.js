import pig from '../assets/pig.webp';
import zombie from '../assets/zombie.webp';
import creeper from '../assets/creeper.webp';
import skeleton from '../assets/skeleton.webp'; // Corregí la extensión de la imagen a "png"
import cow from '../assets/cow.webp';
import spider from '../assets/spider.webp';
import wolf from '../assets/wolf.webp';
import sheep from '../assets/sheep.webp';
import enderman from '../assets/enderman.webp';
import ghast from '../assets/ghast.webp';
import slime from '../assets/slime.webp';
import blaze from '../assets/blaze.webp';
import enderDragon from '../assets/ender dragon.webp';
import guardian from '../assets/guardian.webp';
import villager from '../assets/villager.webp';
import hoglin from '../assets/hoglin.webp';
import ironGolem from '../assets/iron golem.webp';
import wither from '../assets/wither.webp';
import dolphin from '../assets/dolphin.webp';
import frog from '../assets/frog.webp';

export const mobs = [
  {
    "id": 0,
    "name": "Pig",
    "description": "A friendly pig found in plains.",
    "health": 10,
    "image": pig,
    "category": "neutral"
  },
  {
    "id": 1,
    "name": "Zombie",
    "description": "A hostile creature that lurks in the darkness.",
    "health": 10,
    "image": zombie,
    "category": "hostile"
  },
  {
    "id": 2,
    "name": "Creeper",
    "description": "An explosive creature that roams the night.",
    "health": 10,
    "image": creeper,
    "category": "hostile"
  },
  {
    "id": 3,
    "name": "Skeleton",
    "description": "An undead skeleton that shoots arrows.",
    "health": 10,
    "image": skeleton,
    "category": "hostile"
  },
  {
    "id": 4,
    "name": "Cow",
    "description": "A peaceful cow that provides milk and meat.",
    "health": 10,
    "image": cow,
    "category": "neutral"
  },
  {
    "id": 5,
    "name": "Spider",
    "description": "A hostile spider that weaves webs.",
    "health": 10,
    "image": spider,
    "category": "hostile"
  },
  {
    "id": 6,
    "name": "Wolf",
    "description": "A friendly wolf that can be tamed.",
    "health": 10,
    "image": wolf,
    "category": "neutral"
  },
  {
    "id": 7,
    "name": "Sheep",
    "description": "A sheep that provides wool.",
    "health": 10,
    "image": sheep,
    "category": "neutral"
  },
  {
    "id": 8,
    "name": "Enderman",
    "description": "A mysterious creature that teleports.",
    "health": 10,
    "image": enderman,
    "category": "neutral"
  },
  {
    "id": 9,
    "name": "Ghast",
    "description": "A floating monster in the Nether.",
    "health": 10,
    "image": ghast,
    "category": "hostile"
  },
  {
    "id": 10,
    "name": "Slime",
    "description": "A slimy creature that bounces.",
    "health": 10,
    "image": slime,
    "category": "hostile"
  },
  {
    "id": 11,
    "name": "Blaze",
    "description": "A fiery enemy in the Nether.",
    "health": 10,
    "image": blaze,
    "category": "hostile"
  },
  {
    "id": 12,
    "name": "Ender Dragon",
    "description": "The ultimate end-game beast.",
    "health": 200,
    "image": enderDragon,
    "category": "hostile"
  },
  {
    "id": 13,
    "name": "Guardian",
    "description": "A hostile fish that dwells in oceans.",
    "health": 10,
    "image": guardian,
    "category": "hostile"
  },
  {
    "id": 14,
    "name": "Villager",
    "description": "The inhabitants of villages.",
    "health": 10,
    "image": villager,
    "category": "neutral"
  },
  {
    "id": 15,
    "name": "Hoglin",
    "description": "A dangerous beast in the Nether.",
    "health": 10,
    "image": hoglin,
    "category": "hostile"
  },
  {
    "id": 16,
    "name": "Iron Golem",
    "description": "An iron golem that protects villages.",
    "health": 50,
    "image": ironGolem,
    "category": "neutral"
  },
  {
    "id": 17,
    "name": "Wither",
    "description": "A terrifying entity that can be summoned.",
    "health": 150,
    "image": wither,
    "category": "hostile"
  },
  {
    "id": 18,
    "name": "Dolphin",
    "description": "A friendly dolphin that swims in oceans.",
    "health": 10,
    "image": dolphin,
    "category": "neutral"
  },
  {
    "id": 19,
    "name": "Frog",
    "description": "A little bouncy creature that lives in the swamps.",
    "health": 10,
    "image": frog,
    "category": "neutral"
  }
];
