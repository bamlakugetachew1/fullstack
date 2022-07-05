<script>
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import router from '../index.js' 
export default {
    data(){
       
        return{
             
              id1:0,
              email:"",
              name:"",
              name1:"",
              email1:"",

        }
    },

    created() {

    this.id1 = this.$route.params.id;
    this.name1=this.$route.params.name;
    this.email1=this.$route.params.email;

    this.name=this.$route.params.name;
    this.email=this.$route.params.email;
          

          
  },
  setup() {
    
     
    const name = ref('en');
    const email= ref('en');

    const { mutate: update_users } = useMutation(
      gql` mutation update_users($id:Int!, $name: String!, $email: String!) {
      update_users(
        where: { id: { _eq:$id} }
          _set: { email: $email, name: $name }
        ) {
           returning {
             id
          }
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
      update_users,
    };
    
  },
  methods:{
    changeroute(){
        router.push('/testPro');
      }
  }
};
</script>
<template>
    <div class="grid grid-cols-3 gap-4">
        <div>

   
 <div class="container mx-auto border-solid  border-2 border-brown-600 ...">
  <div class="max-w-xl p-5 mx-auto my-10 bg-blue rounded-md shadow-sm"> 
    
    
      <div class="mb-6">
          <label for="slug" class=" block mb-2 text-sm text-gray-600"
            >name</label>
          <input v-model="name"
            placeholder="Enter the valid name of page here"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>

    <div class="mb-6">
          <label for="slug" class=" block mb-2 text-sm text-gray-600"
            >email</label>
          <input v-model="email"
            placeholder="Enter the valid email of page here"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>





       <div class="mb-6">
          <button
            @click="update_users({id:this.id1,name:this.name,email:this.email})"
             class=" w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-blue"> 
           EDIT PAGE
       
          </button>
        </div>
               <div class="mb-6">
          <button
            @click="changeroute"
             class=" w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-blue"> 
            BACK TO PAGES
          </button>
        </div>

           
    </div>
</div> 

  </div>
 </div>
    
</template>