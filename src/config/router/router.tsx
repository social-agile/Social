import { createBrowserRouter } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { UserRedirect } from '@/config/router/UserRedirect.tsx'
import { LoginPage } from '@/modules/auth/view/LoginPage/LoginPage.tsx'
import { HomePage } from '@/modules/home/view/HomePage/HomePage.tsx'
import { RegisterPage } from '@/modules/auth/view/RegisterPage/RegisterPage.tsx'
import { NotFoundPage } from '@/modules/common/NotFoundPage/NotFoundPage.tsx'
import { WithAuth } from '@/config/router/WithAuth.tsx'
import { AccountConfirmPage } from '@/modules/common/AccountConfirmPage/AccountConfirmPage.tsx'
import { PostDetailPage } from '@/modules/home/view/PostDetailPage/PostDetailPage'
import { SearchPage } from '@/modules/search/view/SearchPage/SearchPage.tsx'
import { ProfilePage } from '@/modules/profile/view/ProfilePage/ProfilePage.tsx'
import { ProfileFollow } from '@/modules/profile/view/ProfileFollow/ProfileFollow.tsx'
import { LayoutWithHeader, LayoutWithHeaderCompact } from '@/modules/common/components/layout/Layout.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWithHeaderCompact />,
    children: [
      {
        index: true,
        element: <UserRedirect />,
      },
      {
        path: APP_ROUTES.login,
        element: <LoginPage />,
      },
      {
        path: APP_ROUTES.register,
        element: <RegisterPage />,
      },
      {
        path: APP_ROUTES.accountConfirmation,
        element: <AccountConfirmPage />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <WithAuth>
        <LayoutWithHeader />
      </WithAuth>
    ),
    children: [
      {
        path: APP_ROUTES.home,
        element: <HomePage />,
      },
      {
        path: APP_ROUTES.comments(':id'),
        element: <PostDetailPage />,
      },
      {
        path: APP_ROUTES.profile,
        element: <ProfilePage />,
      },
      {
        path: APP_ROUTES.search,
        element: <SearchPage />,
      },
      {
        path: APP_ROUTES.user(':id'),
        element: <ProfileFollow />,
      },
      {
        path: APP_ROUTES.accountConfirmation,
        element: <AccountConfirmPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
