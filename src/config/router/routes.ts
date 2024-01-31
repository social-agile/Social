export const APP_ROUTES = {
  login: '/login',
  register: '/register',
  home: '/home',
  settings: '/settings',
  user: (id: string) => `/users/${id}`,
  accountConfirmation: '/account-confirmation',
} as const