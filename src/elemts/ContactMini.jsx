import React from "react";

const ContactMini = () => {
  const contact = [
    {
      app: "Telegram",
      uid: "@nashnc11",
      logo: "https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=e5e7eb",
      link: "https://t.me/nashnc11",
    },
    {
      app: "Discord",
      uid: "nashnc11",
      logo: "https://img.icons8.com/?size=100&id=25627&format=png&color=e5e7eb",
      link: "https://discord.com/users/nashnc11", // Direct links require user ID; this will work only if `nashnc11` is your numeric ID.
    },
    {
      app: "e-mail",
      uid: "nash.nc@gmail.com",
      logo: "https://img.icons8.com/?size=100&id=of3VL9FKzJuz&format=png&color=e5e7eb",
      link: "mailto:nash.nc@gmail.com",
    },
  ];

  return (
    <div>
      <div className="mx-auto px-10">
        <table className="border-2ndary-2 table-auto p-3">
          <tbody className="border-2 hover:rounded-xl">
            {contact.map((entry, index) => (
              <div className="">
                <tr key={index}>
                  <td className="p-3">
                    <img
                      className="inline size-7"
                      src={entry.logo}
                      alt={entry.app}
                    />
                  </td>
                  <td>&nbsp; {entry.app} &nbsp;</td>
                  <td className="hover:text-hilit-1 p-3 hover:animate-bounce hover:text-2xl">
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {entry.uid}
                    </a>
                  </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
      <div className="contactmebutton relative pt-10 text-right">
        <div className="border-hilit-1 group relative inline-block border-1 text-sm font-medium">
          <a href="#" className="size-4">
            <span className="line bg-primary size-3"></span>
            <div className="bg-primary px-3 py-3"> Other...</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMini;
