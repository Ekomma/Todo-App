import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { useGlobalContext } from "../../context/globalContext";
import MainView from "../../MainView";
import AddOrEditTodo from "../../AddOrEditTodo";

export default function MainLayout() {
  const {
    state: { showAddOrEdit },
  } = useGlobalContext();

  const min768w = useMedia("(min-width: 768px)");

  return (
    <div className="w-full min-h-screen flex">
      <div
        className={`w-full md:w-1/3 relative z-20 ${
          min768w || !showAddOrEdit ? "shadow-sideShadow block" : "hidden"
        } `}
      >
        <MainView />
      </div>
      {!min768w && !showAddOrEdit ? null : (
        <div className={`w-full ${min768w ? "md:w-2/3" : ""} `}>
          <AddOrEditTodo />
        </div>
      )}
    </div>
  );
}
