import { create } from "zustand";

interface useContributerModalContributer {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useContributerModal = create<useContributerModalContributer>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false}),
}))