import React from "react";
const ContactMini = () => {
  const contact = [
    {
      app: "Telegram",
      uid: "@nashnc11",
      logo: "https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=e5e7eb",
    },
    {
      app: "Discord",
      uid: "nashnc11",
      logo: "https://img.icons8.com/?size=100&id=25627&format=png&color=e5e7eb",
    },
    {
      app: "e-mail",
      uid: "nash.nc@gmail.com",
      logo: "https://img.icons8.com/?size=100&id=of3VL9FKzJuz&format=png&color=e5e7eb",
    },
  ];
  return (
    <div>
      <table className="border-2ndary-2 table-auto border-2 p-3">
        {contact.map((entry, index) => (
          <tr key={index} className="">
            <td className="p-3">
              <img className="inline size-7" src={entry.logo} alt={entry.app} />
              &nbsp; {entry.app}
            </td>
            &nbsp;<td className="p-3">{entry.uid}</td>
          </tr>
        ))}
      </table>
      <div className="contactmebutton relative text-right">
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
