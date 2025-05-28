import React from "react";
import image from "./assets/sdalt.jpg";
import { motion } from "framer-motion";

const AboutMini = ({ htitle, container, container2 }) => {
  // Remove internal container/container2, use props instead
  const mern = ["MongoDB", "Express.js", "React.js", "Node.js"];
  return (
    <>
      {htitle !== "homeabout" ? (
        <div className="text-base md:text-lg">
          <p className="py-5">
            Hey! You can call me
            <span className="texthilit1"> Nash</span>!!
          </p>
          <p className="relative py-5">
            I'm an <span className="font-bold"> aspiring web developer</span>. I
            with a strong foundation in the &nbsp;
            <span className="xplain decoration-lhilit-1 dark:decoration-dhilit-1 underline-offset-4 dark:relative dark:underline">
              MERN stack
            </span>
            <div className="hide texthilit1 dark:bg-primary bg-2ndry-1 absolute p-3">
              MERN stands for <span className="">{mern.join(", ")}</span>
            </div>
            &nbsp; As a recent full-stack development trainee, I’m eager to
            apply my skills to real-world projects and grow into a confident,
            industry-ready developer.
          </p>
          <div>
            <img
              className="float-right size-60 object-contain"
              id=" "
              src={image}
              alt="profilepic"
            />
          </div>
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
        </div>
      ) : (
        <div className="text-base md:text-lg">
          <motion.p
            variants={container(0.9)}
            initial="hidden"
            animate="visible"
            className="py-5"
          >
            Hey! You can call me
            <span className="texthilit1"> Nash</span>!!
          </motion.p>
          <motion.p
            variants={container2(0.9)}
            initial="hidden"
            animate="visible"
            className="py-5"
            className="relative py-5"
          >
            I'm an <span className="font-bold"> aspiring web developer</span>. I
            with a strong foundation in the &nbsp;
            <span className="xplain decoration-lhilit-1 dark:decoration-dhilit-1 relative underline underline-offset-4">
              MERN stack
            </span>
            <div className="hide texthilit1 dark:bg-primary bg-2ndry-1 absolute p-3">
              MERN stands for <span className="">{mern.join(", ")}</span>
            </div>
            &nbsp; As a recent full-stack development trainee, I’m eager to
            apply my skills to real-world projects and grow into a confident,
            industry-ready developer. While I’ve trained across the full stack,
            I’m especially passionate about front-end development and creating
            clean, responsive, and engaging user experiences. I’m constantly
            learning, building side projects, and staying updated with the
            latest web development trends. I’m excited to join a team where I
            can contribute, learn from experienced developers, and sharpen my
            skills every day
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="py-5"
          >
            Let’s connect and build something awesome together!
          </motion.p>
        </div>
      )}
    </>
  );
};

export default AboutMini;
