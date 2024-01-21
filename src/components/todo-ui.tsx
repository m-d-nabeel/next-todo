"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { useModal } from "@/lib/use-store";
import ModalProvider from "./modal-provider";
import { TodoSchema } from "@/schemas/index";
import z from "zod";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

type Todo = z.infer<typeof TodoSchema>;
type TodoCardProps = {
  index: number;
  id: string;
  title: string;
  description?: string;
  dueDate: string;
};

const TodoCard = ({
  index,
  id,
  title,
  description,
  dueDate,
}: TodoCardProps) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <Card
        className="mb-4"
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <CardHeader {...provided.dragHandleProps}>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter className="text-sm text-gray-600">{dueDate}</CardFooter>
      </Card>
    )}
  </Draggable>
);

export function TodoUI({ todoList }: { todoList: Todo[] | undefined }) {
  const { openModal } = useModal();
  const completed: Todo[] = [];
  const onGoing: Todo[] = [];
  const incomplete: Todo[] = [];
  todoList?.forEach((todo) => {
    if (todo.status === "completed") {
      completed.push(todo);
    } else if (todo.status === "ongoing") {
      onGoing.push(todo);
    } else {
      incomplete.push(todo);
    }
  });
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
        <DragDropContext onDragEnd={() => {}}>
          <Droppable
            droppableId="incomplete"
            type="card"
            direction="horizontal"
          >
            {(provided) => (
              <div
                className="bg-[#eff6ff] p-6 rounded-lg"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-lg font-semibold text-[#1e40af] mb-4">
                  In Completed
                </h2>
                <Badge variant="secondary">{incomplete.length}</Badge>
                <div className="mt-4">
                  <Droppable droppableId={"incomplete"}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {incomplete.map((todo, i) => (
                          <TodoCard
                            index={i}
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            dueDate={todo.dueDate}
                          />
                        ))}
                      </div>
                    )}
                  </Droppable>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="onGoing" type="card" direction="horizontal">
            {(provided) => (
              <div
                className="bg-[#fff1f2] p-6 rounded-lg"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-lg font-semibold text-[#be123c] mb-4">
                  On Going
                </h2>
                <Badge variant="secondary">{onGoing.length}</Badge>
                <div className="mt-4">
                  <Droppable droppableId={"onGoing"} type="card">
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {onGoing.map((todo, i) => (
                          <TodoCard
                            index={i}
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            dueDate={todo.dueDate}
                          />
                        ))}
                      </div>
                    )}
                  </Droppable>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="completed" type="card" direction="horizontal">
            {(provided) => (
              <div
                className="bg-[#ecfdf5] p-6 rounded-lg"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-lg font-semibold text-[#064e3b] mb-4">
                  Completed
                </h2>
                <Badge variant="secondary">{completed.length}</Badge>
                <div className="mt-4">
                  <Droppable droppableId={"completed"}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {completed.map((todo, i) => (
                          <TodoCard
                            index={i}
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            dueDate={todo.dueDate}
                          />
                        ))}
                      </div>
                    )}
                  </Droppable>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <ModalProvider />
    </div>
  );
}
