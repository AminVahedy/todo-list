import toast from "react-hot-toast";

export default function Items({
  item,
  setWorkList,
  workList,
  setQuary,
  inputRef,
}) {
  function handleDeleteItem(item) {
    setWorkList(workList.filter((items) => items.name !== item.name));

    toast.success("Your Task Succesfuly Delete");
  }
  function handleEdit(item) {
    setWorkList(workList.filter((items) => items.name !== item.name));

    inputRef.current?.focus();

    setQuary(item.name);
  }
  return (
    <div className="w-[100%] flex items-center justify-between">
      <p className="text-[#F1C40F] text-[18px]">{item.name}</p>
      <div className="flex item-center gap-[20px]">
        <span
          className="text-[#fff] text-[16px] cursor-pointer p-[3px] border border-[#fff] rounded-md hover:text-[#F1C40F] hover:border-[#F1C40F]"
          onClick={() => handleEdit(item)}
        >
          +
        </span>
        <button
          onClick={() => handleDeleteItem(item)}
          className="cursor-pointer text-[16px] p-[5px] rounded-md text-[#fff] border border-[#fff] hover:text-[red] hover:border-[red]"
        >
          delete
        </button>
      </div>
    </div>
  );
}
