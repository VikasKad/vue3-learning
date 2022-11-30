import {
    createWebHistory,
    createRouter
} from 'vue-router';
import HelloContainer from './HelloContainer';
import PostContainer from './PostContainer';
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/hello',
            component: HelloContainer
        },
        {
            path:'/post',
            component:PostContainer
        }
    ]
})
export {
    router
}