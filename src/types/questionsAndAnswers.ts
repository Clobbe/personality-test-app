export interface Options {
  answer: string;
  weight: number;
}

export interface QuestionWithAnswers {
  question: string;
  options: Array<Options>;
}
