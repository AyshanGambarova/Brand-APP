import { CurrentUser } from "@/types";
import { create } from "zustand";

type UserStore = {
  user: CurrentUser | null;
  setUser: (user: CurrentUser) => void;
  clearUser: () => void;
};

// Create the Zustand store
export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

// const storedUser = localStorage.getItem("user");
// if (storedUser) {
//   useUserStore.setState({ user: JSON.parse(storedUser) });
// }
