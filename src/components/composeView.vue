<script>
//import HelloWorld from './components/HelloWorld.vue'
//
// <HelloWorld msg="Welcome to Your Vue.js App"/>
//import testPro from './components/testPro.vue'
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
//import router from "../index.js";

export default {
  name: "composeVue",
  components: {},
  data() {
    return {
      id1: 0,
      email: "",
      name: "",
      name1: "",
      email1: "",
      index:[],
      count: 0,
    };
  },

  methods: {
    changeroute() {
      this.index = this.register;
       window.localStorage.clear();
    },

    createBook() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation register($name: String!, $email: String!) {
              register(name: $name, email: $email) {
                name
              }
            }
          `,
          variables: {
            name: this.name,
            email: this.email,
          },
        })
        .then((response) => {
          this.index = response.data.name;
          location.reload();
        });
    },

    createuser() {
      this.register({ name: this.name, email: this.email }).then(
        (data) => (this.index = data.data.register.message
                         
        )
      );
    },

      loginuser() {
      this.login({ name: this.name, email: this.email }).then(
        (data) => (
                
                  
                this.index= data.data.login.token
                     
                  //window.localStorage.setItem("apollo-token",this.index),
                  // this.name1= window.localStorage.getItem("apollo-token")

                  //router.push({path:'/testPro'})
               
        )  
      );

    },
  },
  created() {},

  setup() {
    /*

  const { mutate: insert_users } = useMutation(
      gql`mutation insert_users($name: String!, $email: String!) {
        insert_users(objects: [{ name: $name, email: $email }]) {
             returning {
               name
             }
         }
       }
`,
*/

  
 



    const name = ref("en");
    const email = ref("en");

    const { mutate: register } = useMutation(
      gql`
        mutation register($name: String!, $email: String!) {
          register(name: $name, email: $email) {
            message
          }
        }
      `,
      () => ({
        variables: {
          name: name.value,
          email: email.value,
        },
      })
    );

    const { mutate: login } = useMutation(
      gql`
        mutation login($name: String!, $email: String!) {
          login(name: $name, email: $email) {
            message
            token
          }
        }
      `,
      () => ({
        variables: {
          name: name.value,
          email: email.value,
        },
      })
    );

    return {
      register,
      login,
    };
  },
};
//createBook({name:this.name,email:this.email})
</script>
<template>
   <div  v-for="space in this.index" :key="space.id">
    {{space.email}}
    {{space.id}}
    {{space.name}}
   </div>
  <div class="grid grid-cols-3 gap-4">
    <div>
      <div class="container mx-auto border-solid border-2 border-brown-600 ...">
        <div class="max-w-xl p-5 mx-auto my-10 bg-blue rounded-md shadow-sm">
          <div class="mb-6">
            <label for="slug" class="block mb-2 text-sm text-gray-600"
              >name</label
            >
            <input
              v-model="name"
              placeholder="Enter the valid name of page here"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>

          <div class="mb-6">
            <label for="slug" class="block mb-2 text-sm text-gray-600"
              >email</label
            >
            <input
              v-model="email"
              placeholder="Enter the valid email of page here"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>

          <div class="mb-6">
            <button
              @click="createuser({ name: this.name, email: this.email })"
              class="w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"
            >
              compose PAGE
            </button>

             <button
              @click="loginuser({ name: this.name, email: this.email })"
              class="w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"
            >
              LOGIN
            </button>
          </div>
          <div class="mb-6">
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="changeroute">clear</button>
</template>
