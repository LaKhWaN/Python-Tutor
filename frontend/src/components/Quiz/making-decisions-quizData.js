export const quizQuestions = [
  {
    explanation: `An **if statement** lets you make decisions in your code. For example:\n\n\`\`\`python\nage = 10\nif age >= 10:\n    print("You are 10 or older!")\n\`\`\`\nThis will print "You are 10 or older!"`,
    question:
      "What will happen if age is 10 in the following code?\n\n```python\nage = 10\nif age >= 10:\n    print('You are 10 or older!')\n```",
    options: [
      "It will print 'You are 10 or older!'",
      "It will print 'Too young!'",
      "Nothing happens",
      "It will print 'You are too old!'",
    ],
    correctAnswer: "It will print 'You are 10 or older!'",
  },
  {
    explanation: `You can also add an **else** to provide an alternative action.\n\n\`\`\`python\nage = 5\nif age >= 10:\n    print("You are 10 or older!")\nelse:\n    print("You are younger than 10!")\n\`\`\`\nThis will print "You are younger than 10!"`,
    question:
      "What will happen if age is 5 in the following code?\n\n```python\nage = 5\nif age >= 10:\n    print('You are 10 or older!')\nelse:\n    print('You are younger than 10!')\n```",
    options: [
      "It will print 'You are 10 or older!'",
      "It will print 'You are younger than 10!'",
      "Nothing happens",
      "It will print 'Invalid Age'",
    ],
    correctAnswer: "It will print 'You are younger than 10!'",
  },
  {
    explanation: `You can use multiple **if** statements for more complex decisions!\n\n\`\`\`python\nage = 15\nif age >= 10:\n    print("You are 10 or older!")\nelse:\n    print("You are younger than 10!")\n\`\`\`\nThis will print "You are 10 or older!"`,
    question:
      "What will happen if age is 15?\n\n```python\nage = 15\nif age >= 10:\n    print('You are 10 or older!')\nelse:\n    print('You are younger than 10!')\n```",
    options: [
      "It will print 'You are 10 or older!'",
      "It will print 'You are younger than 10!'",
      "It will print 'Invalid Age'",
      "Nothing happens",
    ],
    correctAnswer: "It will print 'You are 10 or older!'",
  },
];
