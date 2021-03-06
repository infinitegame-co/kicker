import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  RECEIVE_BACKING,
  REMOVE_PROJECT
} from "../actions/project_actions";

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      newState[action.payload.project.id] = action.payload.project;
      return newState;
    case RECEIVE_BACKING:
      newState[action.payload.project.id] = action.payload.project;
      return newState;
    // case REMOVE_PROJECT:
    //     return null;
    default:
      return oldState;
  }
};

export default projectsReducer;
