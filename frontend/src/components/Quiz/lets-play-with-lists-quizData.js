export const quizQuestions = [
  {
    explanation: `In Python, a **list** is used to store multiple items. You create a list by using square brackets.\n\n\`\`\`python\nfruits = ["apple", "banana", "cherry"]\n\`\`\`\nThis list contains three fruits!`,
    question:
      "What type of data is this?\n\n```python\nfruits = ['apple', 'banana', 'cherry']\n```",
    options: ["Number", "String", "List", "Tuple"],
    correctAnswer: "List",
  },
  {
    explanation: `You can access items in a list by their position. For example, to get the first item in the list:\n\n\`\`\`python\nfruits[0]\n\`\`\`\nThis will give us "apple".`,
    question:
      "What is the first item in the list?\n\n```python\nfruits = ['apple', 'banana', 'cherry']\n```",
    options: ["apple", "banana", "cherry", "orange"],
    correctAnswer: "apple",
  },
  {
    explanation: `You can also change an item in a list! For example:\n\n\`\`\`python\nfruits[0] = "orange"\n\`\`\`\nThis changes the first item from "apple" to "orange".`,
    question:
      "What will the list look like after this code?\n\n```python\nfruits = ['apple', 'banana', 'cherry']\nfruits[0] = 'orange'\n```",
    options: [
      `["orange", "banana", "cherry"]`,
      `["apple", "banana", "cherry"]`,
      `["orange", "cherry", "banana"]`,
      `["banana", "apple", "cherry"]`,
    ],
    correctAnswer: `["orange", "banana", "cherry"]`,
  },
];
