import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactMini = ({ htitle, container, container2 }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect if `dark` class is present on <html>
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // Initial check

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // const color = isDarkMode ? "282C33" : "e5e7eb";

  const color = isDarkMode ? "e5e7eb" : "282C33";
  const contact = [
    {
      app: "Telegram",
      uid: "@nashnc11",
      logo: `https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=${color}`,
      link: "https://t.me/nashnc11",
    },
    {
      app: "Discord",
      uid: "nashnc11",
      logo: `https://img.icons8.com/?size=100&id=25627&format=png&color=${color}`,
      link: "https://discord.com/users/nashnc11", // Direct links require user ID; this will work only if `nashnc11` is your numeric ID.
    },
    {
      app: "mail",
      uid: "nash.nc@gmail",
      logo: `https://img.icons8.com/?size=100&id=QqtDTGEho4jP&format=png&color=${color}`,
      link: "mailto:nash.nc@gmail.com",
    },
  ];

  return (
    <>
      <div>
        <div className="mx-auto px-10">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="py-5 text-lg"
          >
            I'm looking forward to being a part of your team! Let me help you
            develop your ideas into an internet reality.
          </motion.p>
          <table className="border-2ndary-2 table-auto p-3">
            <tbody className="">
              <div className="rounded-lg border-2 hover:rounded-xl">
                {contact.map((entry, index) => (
                  <tr key={index}>
                    <td className="p-3">
                      <div className="w-7 h-7 flex-shrink-0">
                        <img
                          className="fill-primary w-full h-full object-contain"
                          src={entry.logo}
                          alt={entry.app}
                        />
                      </div>
                    </td>
                    <td>&nbsp;{entry.app} </td>
                    <td className="hover:text-lhilit-1 hover:dark:text-dhilit-1 p-3 hover:animate-bounce hover:text-2xl">
                      <a href={entry.link} target="_blank" rel="">
                        {entry.uid}
                      </a>
                    </td>
                  </tr>
                ))}
              </div>
            </tbody>
          </table>
        </div>
        {htitle !== "contact" && (
          <div className="contactmebutton relative pt-10 text-right">
            <div className="border-lhilit-1 dark:border-dhilit-1 group relative inline-block border-2 text-sm font-medium">
              <a href="/contact#contact" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3">Other...</div>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactMini;