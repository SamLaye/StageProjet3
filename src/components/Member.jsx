import React from "react";

function Member() {
  const members = [
    {
      name: "Dakota",
      country: "Rice Niger",
      city: "Oud-Turnhout",
      salary: 36.738,
    },
    {
      name: "Minerva Hooper",
      country: "Curaçao",
      city: "Sinaai-Waas",
      salary: 23.789,
    },
    {
      name: "Sage Rodriguez",
      country: "Netherlands",
      city: "Baileux",
      salary: 56.142,
    },
    {
      name: "Philip Chaney",
      country: "Korea, South",
      city: "Overland Park",
      salary: 38.735,
    },
    {
      name: "Doris Greene",
      country: "Malawi",
      city: "Feldkirchen in Kärnten",
      salary: 63.542,
    },
    {
      name: "Mason Porter",
      country: "Chile",
      city: "Gloucester",
      salary: 78.615,
    },
    {
      name: "Jon Porter",
      country: "Portugal",
      city: "Gloucester",
      salary: 98.615,
    },
  ];
  return (
    <tbody className="text-white">
      {members.map((member) => (
        <tr key={Math.random()} style={{ padding: "10px 0" }}>
          <td className="py-3 ">{member.name}</td>
          <td className="py-3 ">{member.country}</td>
          <td className="py-3 ">{member.city}</td>
          <td className="py-3 ">${member.salary}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Member;
