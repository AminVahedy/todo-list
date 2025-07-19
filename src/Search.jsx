import toast from "react-hot-toast";
import { useEffect } from "react";
export default function Search({
  workList,
  setWorkList,
  quary,
  setQuary,
  inputRef,
}) {
  useEffect(() => {
    localStorage.setItem("workList", JSON.stringify(workList));
  }, [workList]);
  function handleSearch(e) {
    e.preventDefault();

    setQuary(e.target.value);
  }

  function submitSearch() {
    if (!quary) return;

    if (!workList.some((item) => item.name === quary)) {
      setWorkList([...workList, { name: quary }]);

      setQuary("");

      toast.success("Your Task succesfuly add");
    } else {
      toast.error("Your Task alredy exist");
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (!quary) return;

      if (!workList.some((item) => item.name === quary)) {
        setWorkList([...workList, { name: quary }]);

        setQuary("");

        toast.success("Your Task succesfuly add");
      } else {
        toast.error("Your Task alredy exist");
      }
    }
  }
  return (
    <div className="w-[100%] sm:w-[90%] pb-[20px] flex items-center justify-center gap-[20px] border-b border-[#F1C40F]">
      <input
        ref={inputRef}
        onKeyDown={(e) => handleKeyDown(e)}
        value={quary}
        onChange={(e) => handleSearch(e)}
        type="text"
        placeholder="Write your tasks..."
        className="p-[5px] text-[black] w-[65%] sm:w-[50%] bg-[#fff] border-2 border-[#F1C40F] rounded-lg placeholder:text-[gray] placeholder:text-[14px] sm:placeholder:text-[16px]"
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
