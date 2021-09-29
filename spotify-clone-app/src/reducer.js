export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Leave Token null after finsihing developing
    token: "BQD3FrIV4v8cviq4AsRBum9VM2lN9o9n8Mv3V2uhMYjwTFlg1l0gu5YlF3hLOC9Pz6ugN1CnTOKVrtRKVKCrrsDn6H2BCcsImHHDcTfyrKMiVFvuVW9mEvRFhj2ifDG6NInS6wi1Vy8_DVvN6c6a3kj7EpCRZA",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

        case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      
      case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

      default:
        return state;
    }
  };
  
  export default reducer;