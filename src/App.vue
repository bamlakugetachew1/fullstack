<template>
 <div class="max-w-6xl mx-auto px-4">
  <div class="flex justify-between">
    <div class="flex space-x-7">
 <h3 class=" text-lg font-medium ">PAGE BUILDERS</h3>
  <div id="nav" class="pt-6  flex  justify-around  font-bold">
      <router-link to="/"	class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</router-link> 
      <router-link to="/service" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">list</router-link>
      <router-link to="/compose" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">compose</router-link> 
</div>
</div>
  </div>
  </div>
  <router-view />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'




export default {
  name: 'App',
  components:{
 
  },

  methods:{
       createwebsocket(){
          // Connect to a WebSocket that echos back the messages it receives.
  var ws = new WebSocket('wss://192.168.137.94:8080');
  ws.onopen = function(e) {
    console.log('WebSocket Opened. Sending "Hello"');
    ws.send('Hello');
    console.log(e);
  };

  ws.onmessage = function(e) {
    console.log('Received:', e.data);
  };
       }
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
