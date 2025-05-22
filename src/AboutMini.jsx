import React from "react";
const AboutMini = () => {
  const mern = ["MongoDB", "Express.js", "React.js", "Node.js"];
  return (
    <>
      <masala className="text-base md:text-lg">
        <p className="py-5">
          Hey! You can call me
          <span className="text-hilit-1"> Nash</span>!!
        </p>
        <p className="relative py-5">
          I'm an <span className="font-bold"> aspiring web developer</span>. I
          with a strong foundation in the &nbsp;
          <span className="xplain decoration-hilit-1 relative underline underline-offset-4">
            MERN stack
          </span>
          <div className="hide text-hilit-1 bg-primary absolute p-3">
            MERN stands for <span className="">{mern.join(", ")}</span>
          </div>
          &nbsp; As a recent full-stack development trainee, I’m eager to apply
          my skills to real-world projects and grow into a confident,
          industry-ready developer.
        </p>
        <p className="py-5">
          I love bringing ideas to life through clean, responsive, and
          user-friendly web interfaces. While I’ve trained across the full
          stack, I’m especially passionate about front-end development and
          creating smooth, engaging user experiences.
        </p>
        <p className="py-5">
          As a fresher, I’m constantly learning, building side projects, and
          keeping myself updated with the latest trends and tools in web
          development. I’m excited about opportunities where I can learn from
          experienced teams, contribute meaningfully, and sharpen my skills
          every day.
        </p>
        <p className="py-5">
          Let’s connect and build something awesome together!
        </p>
      </masala>
    </>
  );
};

export default AboutMini;
