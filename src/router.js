import { createRouter, createWebHistory } from 'vue-router';
import AboutUsPage from './components/AboutUsPage.vue'
import ContactPage from './components/ContactPage.vue'
import HomePage from './components/HomePage.vue'
import MenuPage from './components/MenuPage.vue'
import NotFound from './components/pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    { path: '/', component: HomePage },
    { path: '/AboutUs', component: AboutUsPage },
    { path: '/ContactUs', component: ContactPage},
    { path: '/Menu', component: MenuPage },
    { path: '/:notFound(.*)', component: NotFound },
    ]
  });
  
  export default router;
  