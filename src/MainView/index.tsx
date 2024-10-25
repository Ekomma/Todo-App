import React from "react";
import todoAvatar from "../assests/todoAvatar.png";
import { UpgradeBanner, TodoItem } from "../components";
import { useGlobalContext } from "../context/globalContext";

export default function MainView() {
  const {
    state: { todos },
    setMode,
    toggleTodo,
    setInput,
    setSelectedTodo,
    setShowAddOrEdit,
  } = useGlobalContext();
  const handleComplete = (id: number) => {
    toggleTodo(id);
  };
  const handleEdit = (id: number) => {
    const selectedTodo = todos.find((todo) => todo.id === id);
    setShowAddOrEdit(true);
    setInput(selectedTodo?.text || "");
    setMode("edit");
    setSelectedTodo(selectedTodo);
  };
  const handleAdd = () => {
    setShowAddOrEdit(true);
    setInput("");
    setMode("add");
  };

  return (
    <div className="bg-neutral-100 h-full relative">
      <header className="bg-primary-100 h-header py-5 px-8 flex gap-5 flex-wrap">
        <div>
          <img src={todoAvatar} alt="avatar" />
        </div>
        <div>
          <h2 className="font-medium text-white shadow-black text-shadow-lg">
            Hello, Jhon
          </h2>
          <h3 className="text-subHeader mt-2 font-thin italic shadow-black text-shadow-lg text-white">
            What are your plans <br /> for today?
          </h3>
        </div>
      </header>
      <UpgradeBanner />
      <ul className="my-5 mx-4 max-h-[60vh] overflow-y-auto">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            handleComplete={handleComplete}
            handleEdit={handleEdit}
            key={todo.id}
          />
        ))}
      </ul>
      <div className="shadow-buttonShadow rounded-full w-[60px] h-[60px] absolute bottom-6 right-4">
        <button
          className="bg-primary-100 border-2 border-primary-border shadow-buttonInnerShadow rounded-full text-4xl p-2 w-[60px] h-[60px] text-white"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
    </div>
  );
}
