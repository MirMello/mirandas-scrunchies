const { Scrunchie } = require('../models');

const scrunchiedata = [
    {
      scrunchie_id: 1,
      title: "Blue Leaves",
      inventory: 5,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 2,
      title: "Brown Fall",
      inventory: 4,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 3,
      title: "Red/Yellow Fall",
      inventory: 6,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 4,
      title: "Orange Fall",
      inventory: 4,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 5,
      title: "Red Leaves",
      inventory: 3,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 6,
      title: "Pink Leaves",
      inventory: 4,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 7,
      title: "Dancing Leaves",
      inventory: 2,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 8,
      title: "Falling Leaves",
      inventory: 5,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 9,
      title: "Dark Marble",
      inventory: 5,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 10,
      title: "Autumn Kiss",
      inventory: 2,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 11,
      title: "Fleur de lis",
      inventory: 1,
      price: 3,
      category: 1,
      cogs: 0.5
    },
    {
      scrunchie_id: 12,
      title: "Trick or Treat",
      inventory: 5,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 13,
      title: "Witch Poison",
      inventory: 6,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 14,
      title: "Halloween Stars",
      inventory: 4,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 15,
      title: "Bat",
      inventory: 7,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 16,
      title: "Black Cat",
      inventory: 3,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 17,
      title: "Glowing Spider Webs",
      inventory: 2,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 18,
      title: "Mickey & Minnie Halloween",
      inventory: 3,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 19,
      title: "Scooby Doo Halloween",
      inventory: 2,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 20,
      title: "Jack Skeleton",
      inventory: 3,
      price: 3,
      category: 2,
      cogs: 0.5
    },
    {
      scrunchie_id: 21,
      title: "Check Plaid",
      inventory: 7,
      price: 3,
      category: 3,
      cogs: 0.5
    },
    {
      scrunchie_id: 22,
      title: "Gingham",
      inventory: 6,
      price: 3,
      category: 3,
      cogs: 0.5
    },
    {
      scrunchie_id: 23,
      title: "Macleod",
      inventory: 7,
      price: 3,
      category: 3,
      cogs: 0.5
    },
    {
      scrunchie_id: 24,
      title: "Royal Stewart",
      inventory: 7,
      price: 3,
      category: 3,
      cogs: 0.5
    },
    {
      scrunchie_id: 25,
      title: "Checkered Stripes",
      inventory: 5,
      price: 3,
      category: 3,
      cogs: 0.5
    },
    {
      scrunchie_id: 26,
      title: "White Linen",
      inventory: 4,
      price: 3,
      category: 4,
      cogs: 0.5
    },
    {
      scrunchie_id: 27,
      title: "Cream Linen",
      inventory: 5,
      price: 3,
      category: 4,
      cogs: 0.5
    },
    {
      scrunchie_id: 28,
      title: "Mandalorian Blue",
      inventory: 0,
      price: 3,
      category: 5,
      cogs: 0.5
    },
    {
      scrunchie_id: 29,
      title: "Mandalorian White",
      inventory: 3,
      price: 3,
      category: 5,
      cogs: 0.5
    },
    {
      scrunchie_id: 30,
      title: "Marauders Map",
      inventory: 2,
      price: 3,
      category: 18,
      cogs: 0.5
    },
    {
      scrunchie_id: 31,
      title: "The Golden Snitch",
      inventory: 2,
      price: 3,
      category: 18,
      cogs: 0.5
    },
    {
      scrunchie_id: 32,
      title: "The Daily Prophet",
      inventory: 3,
      price: 3,
      category: 18,
      cogs: 0.5
    },
    {
      scrunchie_id: 33,
      title: "The Deathly Hallows",
      inventory: 2,
      price: 3,
      category: 18,
      cogs: 0.5
    },
    {
      scrunchie_id: 34,
      title: "Purple Minky",
      inventory: 5,
      price: 5,
      category: 6,
      cogs: 0.67
    },
    {
      scrunchie_id: 35,
      title: "Teal Minky",
      inventory: 4,
      price: 5,
      category: 6,
      cogs: 0.67
    },
    {
      scrunchie_id: 36,
      title: "Pink Minky",
      inventory: 7,
      price: 5,
      category: 6,
      cogs: 0.67
    },
    {
      scrunchie_id: 37,
      title: "Blue Polkadot",
      inventory: 1,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 38,
      title: "Light Blue Polkadot",
      inventory: 2,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 39,
      title: "Sky Blue Polkadot",
      inventory: 2,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 40,
      title: "Frosted Window",
      inventory: 6,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 41,
      title: "Blue Mirror Polkadot",
      inventory: 31,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 42,
      title: "Brown Polkadot",
      inventory: 1,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 43,
      title: "Purple Polkadot",
      inventory: 1,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 44,
      title: "Chocolate Blue Polkadot",
      inventory: 5,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 45,
      title: "Yellow Polkadot",
      inventory: 4,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 46,
      title: "Yellow&Orange Polkadot",
      inventory: 1,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 47,
      title: "Pink Polkadot",
      inventory: 8,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 48,
      title: "Confetti Pink",
      inventory: 3,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 49,
      title: "Green Polkadot",
      inventory: 1,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 50,
      title: "Light Green Polkadot",
      inventory: 2,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 51,
      title: "Orange Polkadot",
      inventory: 1,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 52,
      title: "Red Polkadot",
      inventory: 8,
      price: 3,
      category: 7,
      cogs: 0.5
    },
    {
      scrunchie_id: 53,
      title: "B&W Checkered",
      inventory: 9,
      price: 3,
      category: 8,
      cogs: 0.5
    },
    {
      scrunchie_id: 54,
      title: "B&W Illusion",
      inventory: 6,
      price: 3,
      category: 8,
      cogs: 0.5
    },
    {
      scrunchie_id: 55,
      title: "B&W Leaves",
      inventory: 6,
      price: 3,
      category: 8,
      cogs: 0.5
    },
    {
      scrunchie_id: 56,
      title: "B&W Chevron",
      inventory: 5,
      price: 3,
      category: 8,
      cogs: 0.5
    },
    {
      scrunchie_id: 57,
      title: "B&W Flower",
      inventory: 2,
      price: 3,
      category: 8,
      cogs: 0.5
    },
    {
      scrunchie_id: 58,
      title: "B&W Floral",
      inventory: 6,
      price: 3,
      category: 8,
      cogs: 0.5
    },
    {
      scrunchie_id: 59,
      title: "Purple Pastel",
      inventory: 5,
      price: 3,
      category: 9,
      cogs: 0.5
    },
    {
      scrunchie_id: 60,
      title: "Green Pastel",
      inventory: 5,
      price: 3,
      category: 9,
      cogs: 0.5
    },
    {
      scrunchie_id: 61,
      title: "Blue Pastel",
      inventory: 4,
      price: 3,
      category: 9,
      cogs: 0.5
    },
    {
      scrunchie_id: 62,
      title: "Tri Colored Pastel",
      inventory: 1,
      price: 3,
      category: 9,
      cogs: 0.5
    },
    {
      scrunchie_id: 63,
      title: "Orange",
      inventory: 6,
      price: 3,
      category: 10,
      cogs: 0.5
    },
    {
      scrunchie_id: 64,
      title: "Solar Flare",
      inventory: 3,
      price: 3,
      category: 10,
      cogs: 0.5
    },
    {
      scrunchie_id: 65,
      title: "Patterned Orange",
      inventory: 3,
      price: 3,
      category: 10,
      cogs: 0.5
    },
    {
      scrunchie_id: 66,
      title: "Dark Solar",
      inventory: 2,
      price: 3,
      category: 10,
      cogs: 0.5
    },
    {
      scrunchie_id: 67,
      title: "Black Flower Bow",
      inventory: 5,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 68,
      title: "Pink Floral",
      inventory: 4,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 69,
      title: "Hidden Bird",
      inventory: 5,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 70,
      title: "Grey & Yellow Floral",
      inventory: 0,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 71,
      title: "Blue and White Flower",
      inventory: 8,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 72,
      title: "Ocean Flower",
      inventory: 5,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 73,
      title: "Floral Love",
      inventory: 2,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 74,
      title: "Fantasy Floral",
      inventory: 4,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 75,
      title: "Flower Petal",
      inventory: 1,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 76,
      title: "Blue River",
      inventory: 4,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 77,
      title: "Cherry Blossom",
      inventory: 2,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 78,
      title: "Storybook Floral",
      inventory: 19,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 79,
      title: "Blue Flower",
      inventory: 7,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 80,
      title: "Yellow & Pink Floral",
      inventory: 4,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 81,
      title: "Red Floral",
      inventory: 3,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 82,
      title: "Blue Floral",
      inventory: 5,
      price: 3,
      category: 11,
      cogs: 0.5
    },
    {
      scrunchie_id: 83,
      title: "Mistletoe Love",
      inventory: 4,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 84,
      title: "Starry Night",
      inventory: 4,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 85,
      title: "Holiday Candy",
      inventory: 4,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 86,
      title: "Night Snowfall",
      inventory: 6,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 87,
      title: "Green Squares",
      inventory: 6,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 88,
      title: "Fresh Pine",
      inventory: 4,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 89,
      title: "Sandy Pine",
      inventory: 1,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 90,
      title: "Christmas Presents",
      inventory: 4,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 91,
      title: "Frosty Snowflake",
      inventory: 4,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 92,
      title: "Red Snowflake",
      inventory: 2,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 93,
      title: "Reindeer",
      inventory: 3,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 94,
      title: "Christmas Flower",
      inventory: 2,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 95,
      title: "Green Mistletoe",
      inventory: 1,
      price: 3,
      category: 12,
      cogs: 0.5
    },
    {
      scrunchie_id: 96,
      title: "Vintage Stars",
      inventory: 2,
      price: 3,
      category: 13,
      cogs: 0.5
    },
    {
      scrunchie_id: 97,
      title: "50 Stars",
      inventory: 5,
      price: 3,
      category: 13,
      cogs: 0.5
    },
    {
      scrunchie_id: 98,
      title: "Navy Blue Anchors",
      inventory: 4,
      price: 3,
      category: 13,
      cogs: 0.5
    },
    {
      scrunchie_id: 99,
      title: "Black Anchor",
      inventory: 2,
      price: 3,
      category: 13,
      cogs: 0.5
    },
    {
      scrunchie_id: 100,
      title: "Sports Star",
      inventory: 13,
      price: 3,
      category: 13,
      cogs: 0.5
    },
    {
      scrunchie_id: 101,
      title: "Back to the 60s",
      inventory: 4,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 102,
      title: "Starry Pink",
      inventory: 4,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 103,
      title: "Love Seeds",
      inventory: 4,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 104,
      title: "Rose Pink",
      inventory: 2,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 105,
      title: "Pink Triangles",
      inventory: 4,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 106,
      title: "Watermelon Pink",
      inventory: 4,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 107,
      title: "Strawberry Pink",
      inventory: 6,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 108,
      title: "Pink Damask",
      inventory: 3,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 109,
      title: "Geometric Pink",
      inventory: 2,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 110,
      title: "Peach Pink",
      inventory: 4,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 111,
      title: "Fuchsia Pink",
      inventory: 4,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 112,
      title: "Pink Bubbles",
      inventory: 4,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 113,
      title: "Pink Fantasy",
      inventory: 1,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 114,
      title: "Cupid's Arrow",
      inventory: 3,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 115,
      title: "Crazy Love",
      inventory: 2,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 116,
      title: "Love Arrow",
      inventory: 1,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 117,
      title: "Red",
      inventory: 3,
      price: 3,
      category: 14,
      cogs: 0.5
    },
    {
      scrunchie_id: 118,
      title: "Green Swirl",
      inventory: 4,
      price: 3,
      category: 15,
      cogs: 0.5
    },
    {
      scrunchie_id: 119,
      title: "Irish Luck",
      inventory: 2,
      price: 3,
      category: 15,
      cogs: 0.5
    },
    {
      scrunchie_id: 120,
      title: "Green Plaid",
      inventory: 7,
      price: 3,
      category: 15,
      cogs: 0.5
    },
    {
      scrunchie_id: 121,
      title: "Bird Nest",
      inventory: 2,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 122,
      title: "Butterfly Magic",
      inventory: 0,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 123,
      title: "Rainbow",
      inventory: 0,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 124,
      title: "Chicken Wire",
      inventory: 6,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 125,
      title: "Light Finder",
      inventory: 2,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 126,
      title: "Pink Diamond",
      inventory: 3,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 127,
      title: "Grey Stiped",
      inventory: 3,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 128,
      title: "Animal Print",
      inventory: 5,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 129,
      title: "Yellow Patterned",
      inventory: 4,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 130,
      title: "Love Llamas",
      inventory: 5,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 131,
      title: "Floral Llamas",
      inventory: 13,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 132,
      title: "Desert Llamas",
      inventory: 6,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 133,
      title: "Sleepy Unicorn",
      inventory: 20,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 134,
      title: "Ivory Faux Fur",
      inventory: 1,
      price: 5,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 135,
      title: "Celebration",
      inventory: 25,
      price: 3,
      category: 16,
      cogs: 0.5
    },
    {
      scrunchie_id: 136,
      title: "Large Dusty Rose",
      inventory: 2,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 137,
      title: "Dusty Rose",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 138,
      title: "Skinny Dusty Rose",
      inventory: 2,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 139,
      title: "Dusty Rose w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 140,
      title: "Dusty Rose w/ Bow",
      inventory: 1,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 141,
      title: "Large Royal Blue",
      inventory: 2,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 142,
      title: "Royal Blue",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 143,
      title: "Skinny Royal Blue",
      inventory: 3,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 144,
      title: "Royal Blue w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 145,
      title: "Royal Blue w/ Bow",
      inventory: 0,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 146,
      title: "Large Dark Blue",
      inventory: 4,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 147,
      title: "Dark Blue",
      inventory: 4,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 148,
      title: "Skinny Dark Blue",
      inventory: 2,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 149,
      title: "Dark Blue w/ Ribbon",
      inventory: 2,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 150,
      title: "Dark Blue w/ Bow",
      inventory: 2,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 151,
      title: "Large Olive Green",
      inventory: 2,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 152,
      title: "Olive Green",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 153,
      title: "Skinny Olive Green",
      inventory: 3,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 154,
      title: "Olive Green w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 155,
      title: "Olive Green w/ Bow",
      inventory: 2,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 156,
      title: "Large Blush",
      inventory: 1,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 157,
      title: "Blush",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 158,
      title: "Skinny Blush",
      inventory: 3,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 159,
      title: "Blush w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 160,
      title: "Blush w/ Bow",
      inventory: 2,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 161,
      title: "Large Charcoal",
      inventory: 1,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 162,
      title: "Charcoal",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 163,
      title: "Skinny Charcoal",
      inventory: 2,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 164,
      title: "Charcoal w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 165,
      title: "Charcoal w/ Bow",
      inventory: 1,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 166,
      title: "Large Pink",
      inventory: 4,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 167,
      title: "Pink",
      inventory: 2,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 168,
      title: "Skinny Pink",
      inventory: 7,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 169,
      title: "Pink w/ Ribbon",
      inventory: 2,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 170,
      title: "Pink w/ Bow",
      inventory: 2,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 171,
      title: "Large Yellow",
      inventory: 1,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 172,
      title: "Yellow",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 173,
      title: "Skinny Yellow",
      inventory: 2,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 174,
      title: "Yellow w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 175,
      title: "Yellow w/ Bow",
      inventory: 1,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 176,
      title: "Large Lavender",
      inventory: 1,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 177,
      title: "Lavender",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 178,
      title: "Skinny Lavender",
      inventory: 3,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 179,
      title: "Lavender w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 180,
      title: "Lavender w/ Bow",
      inventory: 2,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 181,
      title: "Large Champagne",
      inventory: 1,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 182,
      title: "Champagne",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 183,
      title: "Skinny Champagne",
      inventory: 2,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 184,
      title: "Champagne w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 185,
      title: "Champagne w/ Bow",
      inventory: 2,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 186,
      title: "Large Rusty Orange",
      inventory: 2,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 187,
      title: "Rusty Orange",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 188,
      title: "Skinny Rusty Orange",
      inventory: 2,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 189,
      title: "Rusty Orange w/ Ribbon",
      inventory: 0,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 190,
      title: "Rusty Orange w/ Bow",
      inventory: 2,
      price: 5,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 191,
      title: "Large Hot Pink",
      inventory: 2,
      price: 4,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 192,
      title: "Hot Pink",
      inventory: 1,
      price: 3,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 193,
      title: "Skinny Hot Pink",
      inventory: 2,
      price: 2,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 194,
      title: "Hot Pink w/ Ribbon",
      inventory: 1,
      price: 6,
      category: 17,
      cogs: 0.5
    },
    {
      scrunchie_id: 195,
      title: "Hot Pink w/ Bow",
      inventory: 2,
      price: 5,
      category: 17,
      cogs: 0.5
    }
];

const seedScrunchies = () => Post.bulkCreate(scrunchiedata);

module.exports = seedScrunchies;