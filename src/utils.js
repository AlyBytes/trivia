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
    question:
      "Which park is known for its extensive cave systems and underground rivers?",
    answer: "Carlsbad Caverns National Park",
  },
  {
    id: 4,
    question: "Which national park has the most diverse flora?",
    answer: "Great Smoky Mountains National Park",
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
    question: "Which park is the largest US National Park?",
    answer: "Wrangell-St. Elias National Park",
  },
  {
    id: 12,
    question: "Which park is located mostly underground?",
    answer: "Mammoth Cave National Park",
  },
  {
    id: 13,
    question:
      "Which park is known for its lush rainforests and rugged coastline?",
    answer: "Olympic National Park",
  },
  {
    id: 14,
    question: "Which national park is the hottest (place on Earth)?",
    answer: "Death Valley National Park",
  },
  {
    id: 15,
    question: "Which park is the youngest US National Park?",
    answer: "New River Gorge National Park",
  },
  {
    id: 16,
    question:
      "Which park is known for its massive sand dunes and seasonal Medano Creek?",
    answer: "Great Sand Dunes National Park",
  },
  {
    id: 17,
    question:
      "Which park is known for its extensive fossil forests and colorful badlands?",
    answer: "Badlands National Park",
  },
  {
    id: 18,
    question: "Which park owes its name to imaginative Frenchmen?",
    answer: "Grand Teton National Park",
  },
  {
    id: 19,
    question: "Which park is the smallest National Park?",
    answer: "Gateway Arch National Park",
  },
  {
    id: 20,
    question: "Which park is considered the Crown Jewel of the Continent?",
    answer: "Glacier National Park",
  },
];

function randomThree(currentIdx) {
  // return Array.from({ length: k }, () => randomNum());
  const randomThreeNumbers = [];

  while (randomThreeNumbers.length < 3) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    if (randomNum !== currentIdx && !randomThreeNumbers.includes(randomNum)) {
      randomThreeNumbers.push(randomNum);
    }
  }
  return randomThreeNumbers;
}

export { nationalParkQuestions, randomThree };
