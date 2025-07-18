import React from "react";

export default function Items({ item, setWorkList, workList }) {
  //   function handleDeleteItem(item) {
  //     setWorkList(workList.filter((items) => !items.name === item.name));

  //     console.log(item.name);
  //   }
  return (
    <div className="w-[100%] flex items-center justify-between">
      <p className="text-[#F1C40F]">{item.name}</p>
      <div className="flex item-center gap-[20px]">
        <p>+</p>
        <button
          onClick={() => handleDeleteItem(item)}
          className="text-[red] cursor-pointer"
        >
          delete
        </button>
      </div>
    </div>
  );
}
