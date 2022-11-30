import {
    createWebHistory,
    createRouter
} from 'vue-router';
import HelloContainer from './HelloContainer';
import PostsContainer from './PostsContainer';
import PostContainer from './PostContainer';
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/hello',
            component: HelloContainer
        },
        {
            path: '/post',
            component: PostsContainer,
            children: [{
                path: ':id',
                component: PostContainer

            }]
        }
    ]
})
export {
    router
}