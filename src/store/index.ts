import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  AdminActionHistorySlice,
  createAdminActionHistorySlice,
} from "./adminActionHistorySlice";

const useBoundStore = create<AdminActionHistorySlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAdminActionHistorySlice(...a),
      }),
      {
        name: "admin-action-history",
        partialize: (state) => ({ history: state.history }),
      },
    ),
  ),
);

export default useBoundStore;
