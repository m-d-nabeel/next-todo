"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModal } from "@/lib/use-store";
import { TodoForm } from "./todo-form";

export const CreateTodoModal = () => {
  const { isOpen, closeModal } = useModal();
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="p-0 m-0">
        <TodoForm />
      </DialogContent>
    </Dialog>
  );
};
