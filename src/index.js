import { createWebHistory, createRouter } from "vue-router";
//import Home from './components/Home.vue'
import AboutWorld from './components/AboutWorld.vue'
import composeView from './components/composeView.vue'
//import service from './components/service.vue'
import editView from './components/editView.vue'
import testPro from './components/testPro.vue'
import signupPage from './components/signupPage.vue'
import loginPage from './components/loginPage.vue'
import loggedUser from './components/loggedUser.vue'
import contactList from './components/contactList.vue'
import createContacts from './components/createContacts.vue'
import updateContact from './components/updateContact.vue'
import adminComponet from './components/adminComponet.vue'
import listUser from './components/listUser.vue'
import deleteSpecfic from './components/deleteSpecfic.vue'

import App from './App.vue'
const routes = [
    {
        path: "/createContacts",
        name: "createContacts",
        component: createContacts,
      },

      
      {
        path: "/about/:id",
        name: "AboutWorld",
        component: AboutWorld,
      },

      {
        path: "/deleteSpecfic/:id",
        name: "deleteSpecfic",
        component: deleteSpecfic,
      },

      {
        path: "/listUser",
        name: "listUser",
        component: listUser,
      },
      {
        path: "/adminComponet",
        name: "adminComponet",
        component: adminComponet,
      }, 
      {
        path: "/updateContact/:id",
        name: "updateContact",
        component:updateContact,
      },
      {
        path: "/contactList",
        name: "contactList",
        component: contactList,
      },
      {
        path: "/loggedUser",
        name: "loggedUser",
        component: loggedUser,
      },
      {
        path: "/home",
        name: "App",
        component: App,
      },
      
      {
        path: "/signupPage",
        name: "signupPage",
        component:signupPage,
      },
      
      {
        path: "/loginPage",
        name: "loginPage",
        component: loginPage,
      },
      {
        path: "/testPro",
        name: "testPro",
        component:testPro,
      },


      {
        path: "/editView/:id",
        name: "editView",
        component: editView,
      },

      {
        path: "/composeView",
        name: "composeView",
        component: composeView,
      },
      
      /*
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 
 
   

  {
    path: "/service",
    name: "service",
    component:service,
  },
 
  */

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;