import { create } from "zustand";

type BearStore = {
  bears: number;
  increasePopulationBy: (value: number) => void;
  removeAllBears: () => void;
};

export const useBearStore = create<BearStore>()((set) => ({
  bears: 0,
  increasePopulationBy: (by) => set((state) => ({ bears: state.bears + by })),
  removeAllBears: () => set({ bears: 0 }),
}));
