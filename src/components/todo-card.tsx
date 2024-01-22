import { Draggable } from "@hello-pangea/dnd";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type TodoCardProps = {
  index: number;
  id: string;
  title: string;
  description?: string;
  dueDate: string;
};

export const TodoCard = ({
  index,
  id,
  title,
  description,
  dueDate,
}: TodoCardProps) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <Card
        onDragCapture={(e) => console.log(e)}
        className="mb-4"
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <CardHeader
          {...provided.dragHandleProps}
          onDragCapture={(e) => console.log(e)}
        >
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
