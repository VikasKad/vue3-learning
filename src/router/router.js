import {
    createWebHistory,
    createRouter
} from 'vue-router';
import HelloContainer from './HelloContainer';
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/hello',
        component: HelloContainer
    }]
})
export {router}