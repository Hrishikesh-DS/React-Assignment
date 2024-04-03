// import { assignments } from "../../Database";
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   assignments: assignments,
//   assignment: {  },
// };

// const assignmentSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, action) => {
//       state.assignments = [
//         { ...action.payload, _id: new Date().getTime().toString() },
//           ...state.assignments,
//       ];
//     },
//     deleteAssignment: (state, action) => {
//       state.assignments = state.assignments.filter(
//         (assignment) => assignment._id !== action.payload
//       );
//     },
//     updateAssignment: (state, action) => {
//       state.assignments = state.assignments.map((assignment) => {
//         if (assignment._id === action.payload._id) {
//           return action.payload;
//         } else {
//           return assignment;
//         }
//       });
//     },
//     setAssignment: (state, action) => {
//       state.assignment = action.payload;
//     },
//   },
// });

// export const { addAssignment, deleteAssignment,
//   updateAssignment, setAssignment } = assignmentSlice.actions;
// export default assignmentSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  assignments: [{ "_id": "", "title": "", "course": "" }],
  assignment: { "_id": "", "title": "", "course": "" },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((Assignment) => {
        if (Assignment._id === action.payload._id) {
          console.log(state.assignments)
          return action.payload;
        } else {
          return Assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;