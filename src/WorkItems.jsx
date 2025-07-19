import Items from "./Items";

export default function WorkItems({
  workList,
  setWorkList,
  quary,
  setQuary,
  inputRef,
}) {
  return (
    <div className="w-[100%] sm:w-[90%] p-[10px] flex flex-col justify-start gap-[10px] sm:gap-[15px] overflow-auto">
      {workList.map((item) => (
        <Items
          key={item.name}
          item={item}
          workList={workList}
          setWorkList={setWorkList}
          quary={quary}
          setQuary={setQuary}
          inputRef={inputRef}
        />
      ))}
    </div>
  );
}
