

export function navActivate(active) {
  return { type: "NAV_ACTIVATE", active };
}

export function navDeactivate(active) {
  return { type: "NAV_DEACTIVATE", active };
}


export function navEnable(enabled) {
  return { type: "NAV_ENABLE", enabled };
}

// export function navResponsive(responsive) {
//   return { type: "NAV_RESPONSIVE", responsive };
// }
