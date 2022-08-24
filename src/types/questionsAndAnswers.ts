export interface Options {
  answer: string;
  score: number;
}

export interface QuestionWithAnswers {
  key: string;
  question: string;
  options: Array<Options>;
}

export interface IAnswer {
  question: string;
  score: string;
}
