"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/lib/use-store";
import ModalProvider from "./modal-provider";
import { TodoSchema } from "@/schemas/index";
import z from "zod";
import { DragDropContext } from "@hello-pangea/dnd";
import { reorderTodoList } from "@/actions";
import DroppableUI from "./droppable-ui";

type Todo = z.infer<typeof TodoSchema>;

export function TodoUI({ todoList }: { todoList: Todo[] | undefined }) {
  const { openModal } = useModal();
  const completed: Todo[] = [];
  const ongoing: Todo[] = [];
  const incomplete: Todo[] = [];
  todoList?.forEach((todo) => {
    if (todo.status === "completed") {
      completed.push(todo);
    } else if (todo.status === "ongoing") {
      ongoing.push(todo);
    } else {
      incomplete.push(todo);
    }
  });

  const handleDragEnd = async (result: any) => {
    const { source, destination } = result;
    const todoId = result.draggableId;
    try {
      const dst = destination.droppableId;
      const todoToSwap = todoList?.find((todo) => todo.id === todoId);
      await reorderTodoList({ dst, todoId });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white md:p-8 sm:p-4 p-0 w-full h-full ">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 mb-8">
        <Button className="bg-[#f3f4f6] text-black" variant="outline">
          All Tasks
        </Button>
        <Button className="bg-[#f3f4f6] text-black" variant="outline">
          Boards
        </Button>
        <div className="flex-grow" />
        <Button className="bg-[#f3f4f6] text-black" variant="outline">
          Filter
        </Button>
        <Button className="bg-[#f3f4f6] text-black" variant="outline">
          Sort
        </Button>
        <Button className="bg-[#22c55e] text-white" onClick={openModal}>
          + Add Task
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* DraggableContext */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <DroppableUI header="Incomplete" list={incomplete} />
          <DroppableUI header="Ongoing" list={ongoing} />
          <DroppableUI header="Completed" list={completed} />
        </DragDropContext>
      </div>
      <ModalProvider />
    </div>
  );
}
