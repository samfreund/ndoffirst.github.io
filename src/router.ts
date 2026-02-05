import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from './pages/Home.vue';
import Blog from './pages/Blog.vue';
import BlogPost from './pages/BlogPost.vue';
import Resources from './pages/Resources.vue';
import Administrators from './pages/Administrators.vue';
import Partners from './pages/Partners.vue';
import Representatives from './pages/Representatives.vue';
import Retirees from './pages/Retirees.vue';
import Advisors from './pages/Advisors.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost,
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
  },
  {
    path: '/community/administrators',
    name: 'Administrators',
    component: Administrators,
  },
  {
    path: '/community/partners',
    name: 'Partners',
    component: Partners,
  },
  {
    path: '/community/representatives',
    name: 'Representatives',
    component: Representatives,
  },
  {
    path: '/community/retirees',
    name: 'Retirees',
    component: Retirees,
  },
  {
    path: '/community/advisors',
    name: 'Advisors',
    component: Advisors,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
