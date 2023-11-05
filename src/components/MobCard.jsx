import React from "react";

function MobCard({ mob }) {
  return (
    <article>
      <h3>{mob.name}</h3>
      <p>{mob.description}</p>
      <span>{mob.health}</span>
      <p>{mob.category}</p>
    </article>
  );
}

export default MobCard;
