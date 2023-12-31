import { useContext } from "react";
import { MultipleContext } from "../context/MultipleContext";
import MobCard from "./MobCard";

function MobsList() {
  const { mobs } = useContext(MultipleContext);
  return (
    <div className="flex flex-col items-center">
      {mobs.map((mob) => (
        <MobCard key={mob.id} mob={mob}></MobCard>
      ))}
    </div>
  );
}

export default MobsList;
