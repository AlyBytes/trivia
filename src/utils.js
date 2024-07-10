const nationalParkQuestions = [
  {
    id: 0,
    question: "Which park is the first US National Park?",
    answer: "Yellowstone National Park",
  },
  {
    id: 1,
    question: "Which park is known for its ancient cliff dwellings?",
    answer: "Mesa Verde National Park",
  },
  {
    id: 2,
    question: "Which park is home to the world's largest trees?",
    answer: "Sequoia National Park",
  },
  {
    id: 3,
    question: "Which park is home to the world's largest trees, the sequoias?",
    answer: "Sequoia National Park",
  },
  {
    id: 4,
    question: "Which park is known for its extensive cave systems and underground rivers?",
    answer: "Carlsbad Caverns National Park",
  },
  {
    id: 5,
    question:
      "Which park is famous for its large granite domes and waterfalls?",
    answer: "Yosemite National Park",
  },
  {
    id: 6,
    question: "Which park contains the deepest lake in the United States?",
    answer: "Crater Lake National Park",
  },
  {
    id: 7,
    question: "Which park is home to the tallest peak in North America?",
    answer: "Denali National Park",
  },
  {
    id: 8,
    question:
      "Which park is known for its extensive system of interconnected lakes and waterways?",
    answer: "Everglades National Park",
  },
  {
    id: 9,
    question:
      "Which park is home to the deepest and longest canyon in North America?",
    answer: "Grand Canyon National Park",
  },
  {
    id: 10,
    question: "Which park is famous for its massive sandstone arches?",
    answer: "Arches National Park",
  },
  {
    id: 11,
    question:
      "Which park is the largest US National Park?",
    answer: "Wrangell-St. Elias National Park",
  },
  {
    id: 12,
    question:
      "Which park is home to the deepest and longest canyon in North America?",
    answer: "Grand Canyon National Park",
  },
  {
    id: 13,
    question:
      "Which park is known for its lush rainforests and rugged coastline?",
    answer: "Olympic National Park",
  },
  {
    id: 14,
    question:
      "Which park is famous for its massive sandstone buttes and mesas?",
    answer: "Monument Valley Navajo Tribal Park",
  },
  {
    id: 15,
    question:
      "Which park is known for its extensive system of interconnected lakes and waterways?",
    answer: "Everglades National Park",
  },
  {
    id: 16,
    question:
      "Which park is home to the largest collection of petroglyphs in North America?",
    answer: "Petroglyph National Monument",
  },
  {
    id: 17,
    question:
      "Which park is known for its extensive fossil forests and colorful badlands?",
    answer: "Badlands National Park",
  },
  {
    id: 18,
    question:
      "Which park is famous for its abundance of geysers, including Steamboat Geyser?",
    answer: "Yellowstone National Park",
  },
  {
    id: 19,
    question:
      "Which park is home to the largest alpine lake in North America, Lake Tahoe?",
    answer: "Lake Tahoe Basin Management Unit",
  },
  {
    id: 20,
    question:
      "Which park is known for its ancient bristlecone pine trees, some of the oldest living organisms on Earth?",
    answer: "Great Basin National Park",
  },
  // {
  //   id: 21,
  //   question:
  //     "Which park is known for its extensive system of limestone caves, including Mammoth Cave?",
  //   answer: "Mammoth Cave National Park",
  // },
  // {
  //   id: 22,
  //   question:
  //     "Which park is home to the famous balanced rock and prickly pear cacti?",
  //   answer: "Big Bend National Park",
  // },
  // {
  //   id: 23,
  //   question:
  //     "Which park is known for its unique hoodoo formations and the Queen's Garden Trail?",
  //   answer: "Bryce Canyon National Park",
  // },
  // {
  //   id: 24,
  //   question:
  //     "Which park is home to the deepest and clearest freshwater lake in the world, Crater Lake?",
  //   answer: "Crater Lake National Park",
  // },
  // {
  //   id: 25,
  //   question:
  //     "Which park is known for its massive sand dunes and seasonal Medano Creek?",
  //   answer: "Great Sand Dunes National Park",
  // },
  // {
  //   id: 26,
  //   question:
  //     "Which park is famous for its extensive network of natural limestone bridges?",
  //   answer: "Natural Bridges National Monument",
  // },
  // {
  //   id: 27,
  //   question:
  //     "Which park is home to the largest living tree by volume, the General Sherman Tree?",
  //   answer: "Sequoia National Park",
  // },
  // {
  //   id: 28,
  //   question:
  //     "Which park is known for its diverse marine ecosystem and historic shipwrecks?",
  //   answer: "Channel Islands National Park",
  // },
  // {
  //   id: 29,
  //   question:
  //     "Which park is famous for its intricate slot canyons and iconic Antelope Canyon?",
  //   answer: "Antelope Canyon Navajo Tribal Park",
  // },
  // {
  //   id: 30,
  //   question:
  //     "Which park is famous for its massive sandstone arches, such as Delicate Arch?",
  //   answer: "Arches National Park",
  // },
  // {
  //   id: 31,
  //   question:
  //     "Which park is known for its large limestone caves, including Mammoth Cave?",
  //   answer: "Mammoth Cave National Park",
  // },
];

// function randomNum() {
//   return Math.floor(Math.random() * 20) + 1;
// }

function randomThree() {
  // return Array.from({ length: k }, () => randomNum());
  const randomThreeNumbers = [];

  while (randomThreeNumbers.length < 3) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    if (!randomThreeNumbers.includes(randomNum)) {
      randomThreeNumbers.push(randomNum);
    }
  }
  return randomThreeNumbers;
}

export { nationalParkQuestions, randomThree };
