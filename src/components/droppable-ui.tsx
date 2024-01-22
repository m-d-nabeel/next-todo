import { Droppable } from "@hello-pangea/dnd";
import { Badge } from "./ui/badge";
import { TodoCard } from "./todo-card";
import z from "zod";
import { TodoSchema } from "@/schemas";
import { cn } from "@/lib/utils";

type Todo = z.infer<typeof TodoSchema>;

export default function DroppableUI({
  list,
  header,
}: {
  list: Todo[];
  header: string;
}) {
  return (
    <Droppable droppableId="completed" type="card" direction="horizontal">
      {(provided) => (
        <div
          className={cn(
            "p-6 rounded-lg",
            header.toLowerCase() === "completed"
              ? "bg-[#ecfdf5]"
              : header.toLowerCase() === "ongoing"
              ? "bg-[#fff1f2]"
              : "bg-[#eff6ff]"
          )}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h2
            className={cn(
              "text-lg font-semibold mb-4",
              header.toLowerCase() === "completed"
                ? "text-[#059669]"
                : header.toLowerCase() === "ongoing"
                ? "text-[#be123c]"
                : "text-[#1e40af]"
            )}
          >
            {header}
          </h2>
          <Badge variant="secondary">{list.length}</Badge>
          <div className="mt-4">
            <Droppable droppableId={header.toLowerCase()}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {list.map((todo, i) => (
                    <TodoCard
                      index={i}
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      description={todo.description}
                      dueDate={todo.dueDate}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
