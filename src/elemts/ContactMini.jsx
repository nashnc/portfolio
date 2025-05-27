import React, { useEffect, useState } from "react";

const ContactMini = ({ htitle }) => {
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

  return (<>
  
  <div>
      <div className="mx-auto px-10">
        <table className="border-2ndary-2 table-auto p-3">
          <tbody className="">
            <div className="border-2 hover:rounded-xl">
              {contact.map((entry, index) => (
                <div>
                  <tr key={index}>
                    <td className="p-3">
                      <img
                        className="inline h-auto w-7 object-contain"
                        src={entry.logo}
                        alt={entry.app}
                      />
                    </td>
                    <td>&nbsp;{entry.app} </td>
                    <td className="hover:text-hilit-1 p-3 hover:animate-bounce hover:text-2xl">
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {entry.uid}
                      </a>
                    </td>
                  </tr>
                </div>
              ))}
            </div>
          </tbody>
        </table>
      </div>
      {htitle !== "contact" && (
        <div className="contactmebutton relative pt-10 text-right">
          <div className="border-hilit-1 group relative inline-block border-1 text-sm font-medium">
            <a href="#" className="size-4">
              <span className="line bg-primary size-3"></span>
              <div className="bg-primary px-3 py-3"> Other...</div>
            </a>
          </div>
        </div>
      )}
    </div></>
  );
};

export default ContactMini;
