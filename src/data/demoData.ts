export interface Student {
  id: number;
  name: string;
  class: string;
  points: number;
  lastActive: string;
  weaknesses: string[];
  avatar?: string;
  topicScores: { [key: string]: number };
  activities: Activity[];
}

export interface Activity {
  id: number;
  timestamp: string;
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer?: string;
  topic: string;
}

export const demoStudents: Student[] = [
  {
    id: 1,
    name: "Jane Mwangi",
    class: "Std 3",
    points: 240,
    lastActive: "Today",
    weaknesses: ["Fractions", "Division"],
    topicScores: {
      Addition: 85,
      Subtraction: 78,
      Multiplication: 92,
      Division: 45,
      Fractions: 38,
      Geometry: 72
    },
    activities: [
      {
        id: 1,
        timestamp: "2 hours ago",
        question: "What is 5 × 3?",
        answer: "15",
        isCorrect: true,
        topic: "Multiplication"
      },
      {
        id: 2,
        timestamp: "3 hours ago", 
        question: "What is ½ + ¼?",
        answer: "¾",
        isCorrect: false,
        correctAnswer: "¾",
        topic: "Fractions"
      },
      {
        id: 3,
        timestamp: "Yesterday",
        question: "What is 12 ÷ 3?",
        answer: "4",
        isCorrect: true,
        topic: "Division"
      },
      {
        id: 4,
        timestamp: "Yesterday",
        question: "What is 8 + 7?",
        answer: "15",
        isCorrect: true,
        topic: "Addition"
      }
    ]
  },
  {
    id: 2,
    name: "Ali Otieno",
    class: "Std 4",
    points: 325,
    lastActive: "Yesterday",
    weaknesses: ["Multiplication"],
    topicScores: {
      Addition: 95,
      Subtraction: 88,
      Multiplication: 52,
      Division: 79,
      Fractions: 83,
      Geometry: 91
    },
    activities: [
      {
        id: 5,
        timestamp: "Yesterday",
        question: "What is 7 × 8?",
        answer: "54",
        isCorrect: false,
        correctAnswer: "56",
        topic: "Multiplication"
      },
      {
        id: 6,
        timestamp: "Yesterday",
        question: "What is 100 - 37?",
        answer: "63",
        isCorrect: true,
        topic: "Subtraction"
      },
      {
        id: 7,
        timestamp: "2 days ago",
        question: "What is 15 + 28?",
        answer: "43",
        isCorrect: true,
        topic: "Addition"
      }
    ]
  },
  {
    id: 3,
    name: "Mary Achieng",
    class: "Std 3",
    points: 125,
    lastActive: "2 days ago",
    weaknesses: ["Addition", "Fractions"],
    topicScores: {
      Addition: 42,
      Subtraction: 68,
      Multiplication: 75,
      Division: 61,
      Fractions: 35,
      Geometry: 58
    },
    activities: [
      {
        id: 8,
        timestamp: "2 days ago",
        question: "What is 9 + 6?",
        answer: "14",
        isCorrect: false,
        correctAnswer: "15",
        topic: "Addition"
      },
      {
        id: 9,
        timestamp: "3 days ago",
        question: "What is ⅓ of 12?",
        answer: "3",
        isCorrect: false,
        correctAnswer: "4",
        topic: "Fractions"
      },
      {
        id: 10,
        timestamp: "3 days ago",
        question: "What is 6 × 4?",
        answer: "24",
        isCorrect: true,
        topic: "Multiplication"
      }
    ]
  },
  {
    id: 4,
    name: "David Kiprotich",
    class: "Std 4",
    points: 185,
    lastActive: "3 days ago",
    weaknesses: ["Geometry", "Division"],
    topicScores: {
      Addition: 89,
      Subtraction: 82,
      Multiplication: 76,
      Division: 48,
      Fractions: 71,
      Geometry: 38
    },
    activities: [
      {
        id: 11,
        timestamp: "3 days ago",
        question: "How many sides does a triangle have?",
        answer: "4",
        isCorrect: false,
        correctAnswer: "3",
        topic: "Geometry"
      },
      {
        id: 12,
        timestamp: "4 days ago",
        question: "What is 81 ÷ 9?",
        answer: "9",
        isCorrect: true,
        topic: "Division"
      }
    ]
  }
];

export const classAverages = {
  Addition: 78,
  Subtraction: 79,
  Multiplication: 74,
  Division: 58,
  Fractions: 57,
  Geometry: 65
};

export const weeklyProgress = [
  { day: 'Mon', students: 12, questions: 45 },
  { day: 'Tue', students: 15, questions: 67 },
  { day: 'Wed', students: 18, questions: 89 },
  { day: 'Thu', students: 14, questions: 52 },
  { day: 'Fri', students: 21, questions: 98 },
  { day: 'Sat', students: 8, questions: 23 },
  { day: 'Sun', students: 5, questions: 12 }
];