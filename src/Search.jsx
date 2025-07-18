import { useState } from "react";

export default function Search({ workList, setWorkList }) {
  const [quary, setQuary] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    setQuary(e.target.value);
  }

  function submitSearch() {
    setWorkList([...workList, { name: quary }]);

    setQuary("");
  }
  return (
    <div className="w-[90%] pb-[20px] flex items-center justify-center gap-[20px] border-b border-[#F1C40F]">
      <input
        value={quary}
        onChange={(e) => handleSearch(e)}
        type="text"
        placeholder="write your work"
        className="p-[5px] text-[black] w-[50%] bg-[#fff] border-2 border-[#F1C40F] rounded-lg placeholder:text-[gray]"
      ></input>
      <button
        onClick={submitSearch}
        className="py-[5px] px-[10px] rounded-md text-[#fff] border cursor-pointer hover:text-[#F1C40F]"
      >
        confirm
      </button>
    </div>
  );
}
