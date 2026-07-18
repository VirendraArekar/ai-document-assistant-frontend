import { useState } from "react";

const cards = [
  {
    question: "Spring Boot",

    answer: "Java Framework",
  },

  {
    question: "Docker",

    answer: "Container Platform",
  },

  {
    question: "JWT",

    answer: "Authentication Token",
  },
];

function FlashcardPanel() {
  const [index, setIndex] = useState(0);

  const [flip, setFlip] = useState(false);

  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6">Flash Cards</h2>

      <div
        onClick={() => setFlip(!flip)}
        className="bg-blue-600 rounded-2xl h-56 flex justify-center items-center cursor-pointer text-xl"
      >
        {flip ? cards[index].answer : cards[index].question}
      </div>

      <button
        onClick={() => {
          setFlip(false);

          setIndex((index + 1) % cards.length);
        }}
        className="mt-5 bg-green-600 rounded-xl px-6 py-3"
      >
        Next Card
      </button>
    </div>
  );
}

export default FlashcardPanel;
