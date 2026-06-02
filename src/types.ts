/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Formula {
  name: string;
  formula: string;
  unit: string;
  explanation: string;
}

export interface Topic {
  id: string;
  grade: 9 | 10 | 11 | 12;
  unit: string;
  title: string;
  description: string;
  summary: string;
  keyConcepts: string[];
  formulas: Formula[];
}

export interface QuizQuestion {
  id: string;
  grade: 9 | 10 | 11 | 12;
  testId: number;
  topicId: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  solution: string;
  hint: string;
}

export interface VideoLecture {
  id: string;
  grade: 9 | 10 | 11 | 12;
  title: string;
  topic: string;
  videoId: string; // YouTube video ID or placeholder
  author: string;
  duration: string;
}

export interface TestResult {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface SimulationState {
  id: 'projectile' | 'refraction' | 'circuit';
  name: string;
  description: string;
}
