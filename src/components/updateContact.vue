
<template>
  <h3 class="px-7 font-semibold text-gray-800"></h3>
  <div class="container w-80 mx-auto my-20 px-6 py-6 shadow">
    <h1 class="text-pink-600 font-bold font-sans text-4xl text-center">
      EDIT CONTACT
    </h1>
    <div class="h-0.5 bg-gray-200 w-36 mx-auto mt-2.5"></div>

    <div class="flex flex-col my-5">
      <label class="my-2" for="uname">firstname</label>
      <input
        type="text"
        id="uname"
        name="uname"
        v-model="fname"
        class="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-sm bg-gray-100 text-pink-500"
      />
      <label class="my-2" for="uname">lastname</label>
      <input
        type="text"
        id="uname"
        name="uname"
        v-model="lname"
        class="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-sm bg-gray-100 text-pink-500"
      />

      <label class="my-2" for="psw">Email</label>
      <input
        type="email"
        id="psw"
        name="psw"
        v-model="email"
        class="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-sm bg-gray-100 text-pink-500"
      />
    </div>
    <div class="text-center mt-3"></div>
  </div>

  <button  @click="updatecontact({id:this.id ,fname: this.fname, lname: this.lname,email:this.email,cemail:this.cemail })"
              class="w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue">
              UPDATE CONTACT
            </button>


</template>

<script>

import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import router from "../index.js";

  
export default {
  name: "createContact",
  components: {},
  data() {
    return {
      id1: 0,
      email: "",
      name: "",
      name1: "",
      email1: "",
      index: [],
      count: 0,
      fname: "",
      lname: "",
      cemail: "",
    };
  },

  methods: {
    createuser() {
      this.register({ name: this.name, email: this.email }).then(
        (data) => (this.index = data.data.register.message)
      );
    },

    loginuser() {
      this.login({ name: this.name, email: this.email }).then(
        (data) => (this.index = data.data.login.token)
      );
    },
    creatcontact() {
      this.insert_contacts({
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        cemail: this.cemail,
      }).then(
        (data) => (
          (this.loggedemail = data.data.insert_contacts),
          router.push({ path: "/contactList"})
        )
      );
    },

     updatecontact() {
      this.update_contacts({
        id:this.id,
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        cemail: this.cemail,
      }).then(
        (data) => (
          (this.loggedemail = data.data.update_contacts),
          router.push({ path: "/contactList"})
        )
      );
    },

  },
  created() {
    //this.cemail = this.$route.params.email;
     this.cemail=window.localStorage.getItem("apollo-token");
      this.id = this.$route.params.id;
       this.fname = this.$route.params.fname;
        this.lname = this.$route.params.lname;
         this.email = this.$route.params.email;
          this.cemail = this.$route.params.cemail;
  },

  setup() {
    const id=ref("id");
    const fname= ref('en');
    const lname = ref('en');
    const email = ref('vue js tutorials');
    const cemail= ref('2015');
  
   
   

  const { mutate: update_contacts } = useMutation(
      gql` mutation update_contacts($id:Int!,$fname:String!,$lname:String!,$email:String!,$cemail:String){
     update_contacts(
      where:{id:{_eq:$id}},
    
      _set:{fname:$fname,lname:$lname,email:$email,cemail:$cemail}
      
    ){
       affected_rows
      returning{
        id
        fname
        lname
        email
        cemail
        
      }
  }
} `,() => ({
        variables: {
          id:id.value,
          fname: fname.value,
          lname: lname.value,
          email:email.value,
          cemail:cemail.value
       
        },
      })
    );





    return {  
update_contacts
      
    };
   
  },
}

</script>