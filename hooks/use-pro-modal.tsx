import { create } from "zustand";

// This gives us global state controls for opening and closing the modal from wherever we are in the app

interface useProModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProModal = create<useProModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
