import { motion, AnimatePresence } from "motion/react";
import { QUESTIONS } from "../constants";
import { DinosaurType } from "../types";
import { ChevronRight } from "lucide-react";

interface QuizProps {
  currentStep: number;
  onAnswer: (scores: Partial<Record<DinosaurType, number>>) => void;
}

export function Quiz({ currentStep, onAnswer }: QuizProps) {
  const question = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-12">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[#8b5e3c] font-bold text-sm">
            QUESTION {currentStep + 1} / {QUESTIONS.length}
          </span>
          <span className="text-[#4a5d23] font-black text-xl italic">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-3 w-full bg-[#e5ddd3] rounded-full overflow-hidden shadow-inner">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-[#4a5d23] rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#4a3728] leading-tight">
            {question.text}
          </h2>

          <div className="grid gap-4">
            {question.answers.map((answer, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(answer.scores)}
                className="flex items-center justify-between p-5 bg-white border-2 border-[#e5ddd3] rounded-2xl text-left hover:border-[#4a5d23] hover:bg-[#f9f7f2] transition-all group shadow-sm"
              >
                <span className="text-lg font-medium text-[#6b5a4a] group-hover:text-[#4a5d23]">
                  {answer.text}
                </span>
                <ChevronRight className="text-[#e5ddd3] group-hover:text-[#4a5d23] transition-colors" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
