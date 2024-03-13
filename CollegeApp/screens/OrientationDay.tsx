import React, { useState } from 'react';

// Define the component
const OrientationDay = () => {
  // Script with dialogue and choices
  const script = [
    { type: 'dialogue', text: "Alex: Good morning, everyone! Welcome to what will be some of the most memorable years of your lives. I'm Alex, a senior here, and I'll be your guide today. We’re thrilled to have you join our university family!" },
    { type: 'dialogue', text: "Alex: Here, you'll face choices that shape your future. Today's no different. We’ve organized two fantastic opportunities for you to start off on the right foot. First, an academic seminar designed to equip you with essential skills for your studies. And second, a campus tour that not only shows you around but also helps you meet fellow students and make early connections." },
    { type: 'dialogue', text: "Alex: So, what’s it going to be? Will you dive into the academic side and get a head start on your classes? Or will you take this chance to explore the campus and start building your social network?" },
    { type: 'choices', options: [
        { id: '1', text: "Academic Seminar: 'I’m here to excel academically. I'll attend the seminar.'" },
        { id: '2', text: "Campus Tour: 'I want to see what campus life has to offer and meet new people.'" },
        { id: '3', text: "Skip Both Events: 'I think I'll skip these. Today feels like a day to relax on my own.'" },
        { id: '4', text: "Wander Alone: 'I prefer discovering the campus by myself. Who knows what I’ll find?'" }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [choiceMade, setChoiceMade] = useState(false);

  const advanceScript = () => {
    if (currentIndex < script.length - 1 && !choiceMade) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleChoice = (choiceId: string) => {
    console.log("Choice selected:", choiceId);
    // Here you can manage what happens after a choice is made
    // For simplicity, we'll just mark that a choice was made
    setChoiceMade(true);
  };

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '600px', textAlign: 'center' }}>
      {script[currentIndex].type === 'dialogue' && (
        <div onClick={advanceScript} style={{ cursor: 'pointer' }}>
          {script[currentIndex].text}
        </div>
      )}
      {script[currentIndex].type === 'choices' && !choiceMade && (
        <div>
          {script[currentIndex].options.map((option) => (
            <div key={option.id} onClick={() => handleChoice(option.id)} style={{ cursor: 'pointer', marginTop: '10px' }}>
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrientationDay;
