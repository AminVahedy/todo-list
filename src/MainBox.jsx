import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Search from "./Search";
import WorkItems from "./WorkItems";

export default function MainBox() {
  // const [workList, setWorkList] = useState(function () {
  //   const storageArr = JSON.parse(localStorage.getItem("workList"));
  //   return storageArr;
  // });
  const [workList, setWorkList] = useState(() => {
    return JSON.parse(localStorage.getItem("workList")) || [];
  });

  const [quary, setQuary] = useState("");
  const inputRef = useRef(null);
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-[#1c1c1c] text-[#fff] w-[60%] h-[60%] rounded-lg p-[20px] flex flex-col items-center gap-[10px]">
        <Search
          workList={workList}
          setWorkList={setWorkList}
          quary={quary}
          setQuary={setQuary}
          inputRef={inputRef}
        />
        <WorkItems
          workList={workList}
          setWorkList={setWorkList}
          quary={quary}
          setQuary={setQuary}
          inputRef={inputRef}
        />
      </div>
    </main>
  );
}
