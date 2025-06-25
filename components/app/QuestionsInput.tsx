"use client";

interface QuestionsInputProps {
  questions: string[];
  onUpdateQuestions: (questions: string[]) => void;
}

const QuestionsInput: React.FC<QuestionsInputProps> = ({
  questions,
  onUpdateQuestions,
}) => {
  const addQuestion = () => {
    if (questions.length < 3) {
      onUpdateQuestions([...questions, ""]);
    }
  };

  const updateQuestion = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    onUpdateQuestions(newQuestions);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {questions.map((question, index) => (
          <div key={index} className="flex gap-2">
            <textarea
              rows={2}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-white
                       focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none
                       placeholder-white/30"
              placeholder={`Custom goal ${index + 1}`}
              value={question}
              onChange={(e) => updateQuestion(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      {questions.length < 3 && (
        <button
          type="button"
          className="md:w-1/4 py-3 px-4 rounded-md bg-white/10 hover:bg-white/15 text-white border border-white/30 rounded-xl transition-all duration-300 font-medium"
          onClick={addQuestion}
        >
          Add Goal
        </button>
      )}
    </div>
  );
};

export default QuestionsInput;
