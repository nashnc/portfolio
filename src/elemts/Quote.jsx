import React from "react";
import { motion } from "framer-motion";

const Quote = () => {
  const quoteText =
    "Dedication, perseverance, patience, and focus, are basics to achieve anything ";
  const author = "___By Nash";

  // Create multiple copies for seamless loop
  const quotes = Array(3).fill({ text: quoteText, author });

  return (
    <div className="relative w-full overflow-hidden">
      {/* Container for the scrolling quote */}
      <div className="relative flex h-16 items-center lg:h-20">
        {/* Left gradient overlay */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-gray-200 to-transparent dark:from-[#0a0a0a]" />

        {/* Right gradient overlay */}
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-gray-200 to-transparent dark:from-[#0a0a0a]" />

        {/* Animated quote container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
        >
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="quote inline-flex items-center px-8 lg:text-2xl"
            >
              <span>{quote.text}</span>
              <span className="ml-2 text-sm lg:text-base">{quote.author}</span>
              {/* Separator between quotes */}
              {index < quotes.length - 1 && (
                <span className="mx-8 text-gray-400">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;
