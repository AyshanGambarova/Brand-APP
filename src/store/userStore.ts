import { CurrentUser } from "@/types";
import Cookies from "js-cookie";
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

// Rehydrate Zustand store with user data from cookies on app load
const storedUser = Cookies.get("user");
if (storedUser) {
  useUserStore.setState({ user: JSON.parse(storedUser) });
}
