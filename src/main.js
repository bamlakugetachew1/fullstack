//import { createApp } from 'vue'
//import App from './App.vue'
//https://api.spacex.land/graphql/
//createApp(App).mount('#app')
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
//import VueWebsocket from "vue-websocket";
//import VueSocketIO from 'vue-3-socket.io'
import router from './index.js' 
import App from './App.vue'
import './index.css'
//import VueNativeSock from 'vue-native-websocket'
//import  VueNativeSock from 'vue-native-websocket'
const cache = new InMemoryCache()
//https://cmsgraphqlserver.herokuapp.com/graphql
const apolloClient = new ApolloClient({
  cache,
  uri: 'https://fullstackhahu.herokuapp.com/graphql',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router).mount('#app');