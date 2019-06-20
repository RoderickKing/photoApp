const photosReducer = (state, action) => {
  switch(action.type) {
    case 'FILTER_CATEGORY':
      return { ...state, category: action.category, description: action.description }
    default:
      return state
  };
};

export default photosReducer;
