import React from "react";
import { motion } from "framer-motion";

const FunFacts = () => {
  const funfacts = [
    "A cup of coffee is a ticket to heaven",
    "Speak English, Malayalam, and Tamil",
    "Self-taught in MS Office",
    "Likes to explore tech",
    "Ready to take on a challenge",
  ];

  const getRandomDuration = () => 1.5 + Math.random();
  const getRandomOscillationDuration = () => 1.5 + Math.random() * 2; // 1.5 to 3.5 seconds
  const getRandomDelay = () => Math.random() * 0.5; // 0 to 0.5 seconds delay

  const getRandomInitial = () => {
    const directions = [
      { x: -200, y: 0 }, // From left
      { x: 200, y: 0 }, // From right
      { x: 0, y: -200 }, // From top
      { x: 0, y: 200 }, // From bottom
      { x: -200, y: -200 }, // From top-left
      { x: 200, y: -200 }, // From top-right
      { x: -200, y: 200 }, // From bottom-left
      { x: 200, y: 200 }, // From bottom-right
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  return (
    <div className="flex flex-wrap justify-center">
      {funfacts.map((funfact, index) => {
        const entranceDuration = getRandomDuration();
        const initialPosition = getRandomInitial();
        const oscillationDuration = getRandomOscillationDuration();
        const oscillationDelay = getRandomDelay();

        return (
          <div
            className="mt-2 mr-2 inline-flex text-base/10 last:mr-0"
            key={index}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: initialPosition.x,
                y: initialPosition.y,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: entranceDuration,
                  ease: "easeOut",
                },
              }}
              animate={{
                y: [-5, 5, -5],
                transition: {
                  y: {
                    duration: oscillationDuration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: entranceDuration + oscillationDelay,
                  },
                },
              }}
              viewport={{ once: true }}
              className="dark:border-primary-3 border-2ndry-2 border-1 px-2"
            >
              <p>{funfact}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default FunFacts;
