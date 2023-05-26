import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatusView from '../views/StatusView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import DetailsView from '../views/DetailsView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/status',
        name: 'status',
        component: StatusView,
        meta: {
            title: 'Status'
        }
    },
    {
        path: '/details/:id',
        name: 'UserData',
        component: DetailsView,
        meta: {
            title: 'User'
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'notfound',
        component: NotFoundView,
        meta: {
            title: 'Not Found'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = `${to.meta.title} :: GuildVue`;
    next();
})

export default router
