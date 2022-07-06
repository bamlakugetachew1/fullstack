//import { createApp } from 'vue'
//import App from './App.vue'
//import apolloProvider from './apollo'
//createApp(App).mount('#app')
//import { createApp } from 'vue'
//import App from './App.vue'
//https://api.spacex.land/graphql/
//createApp(App).mount('#app')

import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import router from "./index.js";
import App from "./App.vue";
import './index.css';

const cache = new InMemoryCache();


//const headers = {};
//const token = window.localStorage.getItem("apollo-token");
  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUhhc3VyYS1Sb2xlIjoidXNlciIsIlgtSGFzdXJhLVVzZXItaWQiOjQ0LCJuYW1lIjoieW9uYXMiLCJpYXQiOjE2NTYzNDE1ODN9.wfNs0U1faLR9QlFcmpKyXX6CMGrpW86pCOG-5j3gJnI"
/*
function getHeaders() {
  
  const headers = {};
  const token = window.localStorage.getItem("apollo-token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

  headers: getHeaders(),
*/

//https://cmsgraphqlserver.herokuapp.com/graphql
//https://fullstackhahu.herokuapp.com/graphql

//const token = window.localStorage.getItem("apollo-token");
const apolloClient = new ApolloClient({
  cache,
  uri: "https://contact-applications.herokuapp.com/v1/graphql",
  
  /*
  headers:{
        Authorization:`Bearer ${token}`,
  }
  */

  

});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router).mount("#app");
