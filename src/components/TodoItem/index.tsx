import React from "react";
import { Todo } from "../../context/globalContext";
import { CompletedIcon } from "../../assests/components";

interface TodoItemProps {
  todo: Todo;
  handleComplete: (id: number) => void;
  handleEdit: (id: number) => void;
}

export default function TodoItem({
  todo,
  handleComplete,
  handleEdit,
}: TodoItemProps) {
  const { completed, id, text } = todo;
  return (
    <li className="bg-white shadow-normalShadow rounded-md border border-neutral-border py-6 pl-6 pr-5 flex items-center justify-between mb-6">
      <div className="flex items-center">
        {completed ? (
          <CompletedIcon
            className="cursor-pointer"
            onClick={() => handleComplete(id)}
          />
        ) : (
          <span
            className="inline-block h-8 w-8 cursor-pointer rounded-full border-[1.5px] border-main-100"
            onClick={() => handleComplete(id)}
          ></span>
        )}
        <p
          className={`ml-2 cursor-pointer ${
            completed ? "line-through text-neutral-grey" : ""
          }`}
          onClick={() => handleComplete(id)}
        >
          {text}
        </p>
      </div>
      <div
        className="border border-main-100 h-[45px] w-[51px] rounded-ssm p-3 text-main-100 font-medium cursor-pointer"
        onClick={() => handleEdit(id)}
      >
        {" "}
        Edit
      </div>
    </li>
  );
}
