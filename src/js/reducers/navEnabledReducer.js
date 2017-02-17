const navEnabledReducer = (state, action) => {
  switch (action.type) {
    case 'NAV_ENABLE':
      return { ...state, sidebarEnabled: true };
    default : return {...state};
    
  }
};

export default navEnabledReducer;


