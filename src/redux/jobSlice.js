import { createSlice } from "@reduxjs/toolkit";
const jobsFromLocalStorage = JSON.parse(
  localStorage.getItem("jobs-jt") || "[]"
);
const lastIdFromLocalStorage = JSON.parse(
  localStorage.getItem("lastID-jt") || 0
);
const defaultPriorities = [
  { id: 1, name: "Normal", value: "normal", intValue: 1, color: "gray" },
  { id: 2, name: "Onemli", value: "onemli", intValue: 2,color: "orange"},
  { id: 3, name: "Acil", value: "acil", intValue: 3,color: "red"},
];
const updateLocalStorage = (state) => {
  localStorage.setItem("jobs-jt", JSON.stringify(state.jobs));
  localStorage.setItem("lastID-jt", JSON.stringify(state.lastId));
};
export const jobSlice = createSlice({
  name: "jobSlice",
  initialState: {
    jobs: jobsFromLocalStorage,
    lastId: lastIdFromLocalStorage,
    priorities: defaultPriorities,
  },
  reducers: {
    add_job: (state, action) => {
      state.jobs.push({
        id: state.lastId + 1,
        text: action.payload.text,
        priority: action.payload.priority,
        priorityId: action.payload.priorityId,
      });
      state.lastId++;
      updateLocalStorage(state);
    },
    remove_job: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload.id);
      updateLocalStorage(state);
    },
    edit_job: (state, action) => {
      var index = state.jobs.findIndex((x) => x.id === action.payload.id);
      state.jobs[index] = action.payload;
      updateLocalStorage(state);
    },
    set_priorities: (state, action) => {
      state.priorities = action.payload;
      localStorage.setItem("priorities-jt", JSON.stringify(state.priorities));
    },
  },
});

export const { add_job, remove_job, edit_job, set_priorities } =
  jobSlice.actions;

export default jobSlice.reducer;
