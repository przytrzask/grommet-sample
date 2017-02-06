const navReducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVATE_NAV':
      return { ...state, sidebarActive: true };
    case 'DEACTIVATE_NAV':
      return { ...state, sidebarActive: false };
    default:
      return { ...state, sidebarActive: true };
   }
};

export default navReducer;