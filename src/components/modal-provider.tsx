"use client";

import { useModal } from "@/lib/use-store";
import { CreateTodoModal } from "./modal";

export default function ModalProvider() {
  const { isOpen } = useModal();
  if (isOpen) return <CreateTodoModal />;
  return null;
}
