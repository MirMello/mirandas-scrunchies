const { Scrunchie } = require('../models');

const scrunchiedata = [
    {
      title: "Blue Leaves",
      inventory: 5,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Brown Fall",
      inventory: 4,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Red/Yellow Fall",
      inventory: 6,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Orange Fall",
      inventory: 4,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Red Leaves",
      inventory: 3,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Pink Leaves",
      inventory: 4,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Dancing Leaves",
      inventory: 2,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Falling Leaves",
      inventory: 5,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Dark Marble",
      inventory: 5,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Autumn Kiss",
      inventory: 2,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Fleur de lis",
      inventory: 1,
      price: 3,
      collection_id: 1,
      cogs: 0.5
    },
    {
      title: "Trick or Treat",
      inventory: 5,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Witch Poison",
      inventory: 6,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Halloween Stars",
      inventory: 4,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Bat",
      inventory: 7,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Black Cat",
      inventory: 3,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Glowing Spider Webs",
      inventory: 2,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Mickey & Minnie Halloween",
      inventory: 3,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Scooby Doo Halloween",
      inventory: 2,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Jack Skeleton",
      inventory: 3,
      price: 3,
      collection_id: 2,
      cogs: 0.5
    },
    {
      title: "Check Plaid",
      inventory: 7,
      price: 3,
      collection_id: 3,
      cogs: 0.5
    },
    {
      title: "Gingham",
      inventory: 6,
      price: 3,
      collection_id: 3,
      cogs: 0.5
    },
    {
      title: "Macleod",
      inventory: 7,
      price: 3,
      collection_id: 3,
      cogs: 0.5
    },
    {
      title: "Royal Stewart",
      inventory: 7,
      price: 3,
      collection_id: 3,
      cogs: 0.5
    },
    {
      title: "Checkered Stripes",
      inventory: 5,
      price: 3,
      collection_id: 3,
      cogs: 0.5
    },
    {
      title: "White Linen",
      inventory: 4,
      price: 3,
      collection_id: 4,
      cogs: 0.5
    },
    {
      title: "Cream Linen",
      inventory: 5,
      price: 3,
      collection_id: 4,
      cogs: 0.5
    },
    {
      title: "Mandalorian Blue",
      inventory: 0,
      price: 3,
      collection_id: 5,
      cogs: 0.5
    },
    {
      title: "Mandalorian White",
      inventory: 3,
      price: 3,
      collection_id: 5,
      cogs: 0.5
    },
    {
      title: "Marauders Map",
      inventory: 2,
      price: 3,
      collection_id: 18,
      cogs: 0.5
    },
    {
      title: "The Golden Snitch",
      inventory: 2,
      price: 3,
      collection_id: 18,
      cogs: 0.5
    },
    {
      title: "The Daily Prophet",
      inventory: 3,
      price: 3,
      collection_id: 18,
      cogs: 0.5
    },
    {
      title: "The Deathly Hallows",
      inventory: 2,
      price: 3,
      collection_id: 18,
      cogs: 0.5
    },
    {
      title: "Purple Minky",
      inventory: 5,
      price: 5,
      collection_id: 6,
      cogs: 0.67
    },
    {
      title: "Teal Minky",
      inventory: 4,
      price: 5,
      collection_id: 6,
      cogs: 0.67
    },
    {
      title: "Pink Minky",
      inventory: 7,
      price: 5,
      collection_id: 6,
      cogs: 0.67
    },
    {
      title: "Blue Polkadot",
      inventory: 1,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Light Blue Polkadot",
      inventory: 2,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Sky Blue Polkadot",
      inventory: 2,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Frosted Window",
      inventory: 6,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Blue Mirror Polkadot",
      inventory: 31,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Brown Polkadot",
      inventory: 1,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Purple Polkadot",
      inventory: 1,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Chocolate Blue Polkadot",
      inventory: 5,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Yellow Polkadot",
      inventory: 4,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Yellow&Orange Polkadot",
      inventory: 1,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Pink Polkadot",
      inventory: 8,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Confetti Pink",
      inventory: 3,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Green Polkadot",
      inventory: 1,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Light Green Polkadot",
      inventory: 2,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Orange Polkadot",
      inventory: 1,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "Red Polkadot",
      inventory: 8,
      price: 3,
      collection_id: 7,
      cogs: 0.5
    },
    {
      title: "B&W Checkered",
      inventory: 9,
      price: 3,
      collection_id: 8,
      cogs: 0.5
    },
    {
      title: "B&W Illusion",
      inventory: 6,
      price: 3,
      collection_id: 8,
      cogs: 0.5
    },
    {
      title: "B&W Leaves",
      inventory: 6,
      price: 3,
      collection_id: 8,
      cogs: 0.5
    },
    {
      title: "B&W Chevron",
      inventory: 5,
      price: 3,
      collection_id: 8,
      cogs: 0.5
    },
    {
      title: "B&W Flower",
      inventory: 2,
      price: 3,
      collection_id: 8,
      cogs: 0.5
    },
    {
      title: "B&W Floral",
      inventory: 6,
      price: 3,
      collection_id: 8,
      cogs: 0.5
    },
    {
      title: "Purple Pastel",
      inventory: 5,
      price: 3,
      collection_id: 9,
      cogs: 0.5
    },
    {
      title: "Green Pastel",
      inventory: 5,
      price: 3,
      collection_id: 9,
      cogs: 0.5
    },
    {
      title: "Blue Pastel",
      inventory: 4,
      price: 3,
      collection_id: 9,
      cogs: 0.5
    },
    {
      title: "Tri Colored Pastel",
      inventory: 1,
      price: 3,
      collection_id: 9,
      cogs: 0.5
    },
    {
      title: "Orange",
      inventory: 6,
      price: 3,
      collection_id: 10,
      cogs: 0.5
    },
    {
      title: "Solar Flare",
      inventory: 3,
      price: 3,
      collection_id: 10,
      cogs: 0.5
    },
    {
      title: "Patterned Orange",
      inventory: 3,
      price: 3,
      collection_id: 10,
      cogs: 0.5
    },
    {
      title: "Dark Solar",
      inventory: 2,
      price: 3,
      collection_id: 10,
      cogs: 0.5
    },
    {
      title: "Black Flower Bow",
      inventory: 5,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Pink Floral",
      inventory: 4,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Hidden Bird",
      inventory: 5,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Grey & Yellow Floral",
      inventory: 0,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Blue and White Flower",
      inventory: 8,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Ocean Flower",
      inventory: 5,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Floral Love",
      inventory: 2,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Fantasy Floral",
      inventory: 4,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Flower Petal",
      inventory: 1,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Blue River",
      inventory: 4,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Cherry Blossom",
      inventory: 2,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Storybook Floral",
      inventory: 19,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Blue Flower",
      inventory: 7,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Yellow & Pink Floral",
      inventory: 4,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Red Floral",
      inventory: 3,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Blue Floral",
      inventory: 5,
      price: 3,
      collection_id: 11,
      cogs: 0.5
    },
    {
      title: "Mistletoe Love",
      inventory: 4,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Starry Night",
      inventory: 4,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Holiday Candy",
      inventory: 4,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Night Snowfall",
      inventory: 6,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Green Squares",
      inventory: 6,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Fresh Pine",
      inventory: 4,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Sandy Pine",
      inventory: 1,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Christmas Presents",
      inventory: 4,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Frosty Snowflake",
      inventory: 4,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Red Snowflake",
      inventory: 2,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Reindeer",
      inventory: 3,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Christmas Flower",
      inventory: 2,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Green Mistletoe",
      inventory: 1,
      price: 3,
      collection_id: 12,
      cogs: 0.5
    },
    {
      title: "Vintage Stars",
      inventory: 2,
      price: 3,
      collection_id: 13,
      cogs: 0.5
    },
    {
      title: "50 Stars",
      inventory: 5,
      price: 3,
      collection_id: 13,
      cogs: 0.5
    },
    {
      title: "Navy Blue Anchors",
      inventory: 4,
      price: 3,
      collection_id: 13,
      cogs: 0.5
    },
    {
      title: "Black Anchor",
      inventory: 2,
      price: 3,
      collection_id: 13,
      cogs: 0.5
    },
    {
      title: "Sports Star",
      inventory: 13,
      price: 3,
      collection_id: 13,
      cogs: 0.5
    },
    {
      title: "Back to the 60s",
      inventory: 4,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Starry Pink",
      inventory: 4,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Love Seeds",
      inventory: 4,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Rose Pink",
      inventory: 2,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Pink Triangles",
      inventory: 4,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Watermelon Pink",
      inventory: 4,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Strawberry Pink",
      inventory: 6,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Pink Damask",
      inventory: 3,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Geometric Pink",
      inventory: 2,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Peach Pink",
      inventory: 4,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Fuchsia Pink",
      inventory: 4,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Pink Bubbles",
      inventory: 4,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Pink Fantasy",
      inventory: 1,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Cupid's Arrow",
      inventory: 3,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Crazy Love",
      inventory: 2,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Love Arrow",
      inventory: 1,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Red",
      inventory: 3,
      price: 3,
      collection_id: 14,
      cogs: 0.5
    },
    {
      title: "Green Swirl",
      inventory: 4,
      price: 3,
      collection_id: 15,
      cogs: 0.5
    },
    {
      title: "Irish Luck",
      inventory: 2,
      price: 3,
      collection_id: 15,
      cogs: 0.5
    },
    {
      title: "Green Plaid",
      inventory: 7,
      price: 3,
      collection_id: 15,
      cogs: 0.5
    },
    {
      title: "Bird Nest",
      inventory: 2,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Butterfly Magic",
      inventory: 0,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Rainbow",
      inventory: 0,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Chicken Wire",
      inventory: 6,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Light Finder",
      inventory: 2,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Pink Diamond",
      inventory: 3,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Grey Stiped",
      inventory: 3,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Animal Print",
      inventory: 5,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Yellow Patterned",
      inventory: 4,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Love Llamas",
      inventory: 5,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Floral Llamas",
      inventory: 13,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Desert Llamas",
      inventory: 6,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Sleepy Unicorn",
      inventory: 20,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Ivory Faux Fur",
      inventory: 1,
      price: 5,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Celebration",
      inventory: 25,
      price: 3,
      collection_id: 16,
      cogs: 0.5
    },
    {
      title: "Large Dusty Rose",
      inventory: 2,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Dusty Rose",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Dusty Rose",
      inventory: 2,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Dusty Rose w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Dusty Rose w/ Bow",
      inventory: 1,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Royal Blue",
      inventory: 2,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Royal Blue",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Royal Blue",
      inventory: 3,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Royal Blue w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Royal Blue w/ Bow",
      inventory: 0,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Dark Blue",
      inventory: 4,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Dark Blue",
      inventory: 4,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Dark Blue",
      inventory: 2,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Dark Blue w/ Ribbon",
      inventory: 2,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Dark Blue w/ Bow",
      inventory: 2,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Olive Green",
      inventory: 2,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Olive Green",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Olive Green",
      inventory: 3,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Olive Green w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Olive Green w/ Bow",
      inventory: 2,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Blush",
      inventory: 1,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Blush",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Blush",
      inventory: 3,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Blush w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Blush w/ Bow",
      inventory: 2,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Charcoal",
      inventory: 1,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Charcoal",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Charcoal",
      inventory: 2,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Charcoal w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Charcoal w/ Bow",
      inventory: 1,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Pink",
      inventory: 4,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Pink",
      inventory: 2,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Pink",
      inventory: 7,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Pink w/ Ribbon",
      inventory: 2,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Pink w/ Bow",
      inventory: 2,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Yellow",
      inventory: 1,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Yellow",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Yellow",
      inventory: 2,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Yellow w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Yellow w/ Bow",
      inventory: 1,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Lavender",
      inventory: 1,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Lavender",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Lavender",
      inventory: 3,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Lavender w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Lavender w/ Bow",
      inventory: 2,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Champagne",
      inventory: 1,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Champagne",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Champagne",
      inventory: 2,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Champagne w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Champagne w/ Bow",
      inventory: 2,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Rusty Orange",
      inventory: 2,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Rusty Orange",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Rusty Orange",
      inventory: 2,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Rusty Orange w/ Ribbon",
      inventory: 0,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Rusty Orange w/ Bow",
      inventory: 2,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Large Hot Pink",
      inventory: 2,
      price: 4,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Hot Pink",
      inventory: 1,
      price: 3,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Skinny Hot Pink",
      inventory: 2,
      price: 2,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Hot Pink w/ Ribbon",
      inventory: 1,
      price: 6,
      collection_id: 17,
      cogs: 0.5
    },
    {
      title: "Hot Pink w/ Bow",
      inventory: 2,
      price: 5,
      collection_id: 17,
      cogs: 0.5
    }
];

const seedScrunchies = () => Scrunchie.bulkCreate(scrunchiedata);

module.exports = seedScrunchies;