import React from "react";
import Items from "./Items";

export default function WorkItems({ workList, setWorkList }) {
  return (
    <div className="w-[90%] py-[10px] flex flex-col justify-start gap-[15px]">
      {workList.map((item) => (
        <Items
          key={item.name}
          item={item}
          workList={workList}
          setWorkList={setWorkList}
        />
      ))}
    </div>
  );
}
