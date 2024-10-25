import React from "react";
import { useGlobalContext } from "../context/globalContext";
import { useMedia } from "../hooks/useMedia";

export default function AddOrEditTodo() {
  const {
    state: { mode, inputText, selectedTodo },
    setMode,
    addTodo,
    setInput,
    editTodo,
    deleteTodo,
    setSelectedTodo,
    setShowAddOrEdit,
  } = useGlobalContext();

  const min768w = useMedia("(min-width: 768px)");

  const handleClose = () => {
    setShowAddOrEdit(false);
    setMode(undefined);
    setSelectedTodo(undefined);
  };

  const handleDelete = () => {
    setShowAddOrEdit(false);
    setMode(undefined);
    selectedTodo?.id && deleteTodo(selectedTodo?.id);
    selectedTodo?.id && deleteTodo(selectedTodo?.id);
  };

  const handleSave = () => {
    if (!mode || inputText.trim().length === 0) return;

    if (mode === "add") {
      addTodo(inputText);
      setInput("");
    } else {
      selectedTodo?.id && editTodo(selectedTodo?.id, inputText);
    }

    if (!min768w) {
      setShowAddOrEdit(false);
    }
  };

  return (
    <div className="bg-neutral-100 h-full relative">
      {" "}
      <header className="bg-primary-100 h-header py-5 px-8 flex gap-5 flex-wrap shadow-normalShadow">
        {mode && (
          <h1 className="text-center text-white text-shadow-lg shadow-black text-2xl my-auto mx-auto">
            {mode === "add" ? "Add" : "Edit"} Task
          </h1>
        )}
      </header>
      {mode && (
        <>
          <div className="pt-7 pl-5 pb-6 pr-5">
            <h3 className="text-black tracking-long mb-4">Task Name</h3>
            <input
              className="border-2 border-neutral-inputBorder rounded-lgg px-6 py-5 text-main-100 text-xl h-[69px] w-full"
              value={inputText}
              tabIndex={0}
              autoFocus
              onChange={(e) => setInput(e.target.value.trimStart())}
            />
          </div>
          <div className="absolute bottom-6 w-full px-6 flex gap-5">
            <div className="shadow-buttonShadow w-[121px] h-[61px]">
              <button
                className="w-[121px] h-[61px] border-2 border-red-border bg-red-main rounded-md text-white text-lg shadow-buttonInnerShadow"
                onClick={
                  mode === "add" || inputText.length === 0
                    ? handleClose
                    : handleDelete
                }
              >
                <p className="shadow-black text-shadow-lg">
                  {mode === "add" || inputText.length === 0
                    ? "Close"
                    : "Delete"}
                </p>
              </button>
            </div>
            <div className="shadow-buttonShadow rounded-md w-full h-[61px]">
              <button className="rounded-md bg-primary-100 border-2 border-main-100 shadow-buttonInnerShadow text-shadow-lg h-[61px] w-full text-white text-lg">
                <p className="shadow-black text-shadow-lg" onClick={handleSave}>
                  Save
                </p>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
