import React from "react";

function MobCard({ mob }) {
  return (
    <article className="card-mob-container bg-orange-400 mb-2 p-2 rounded-lg max-w-2xl">
      <h3 className="text-black text-xl font-bold">{mob.name}</h3>
      <p className="font-semibold">{mob.description}</p>
      <span className="text-indigo-500 font-bold">{mob.health}</span>
      <p className={mob.category === "neutral" ? "text-green-500 font-bold capitalize" : "text-red-600 font-bold capitalize"}>{mob.category}</p>
      <img className="w-32 m-auto" src={mob.image} alt={mob.name} />
    </article>
  );
}

export default MobCard;
