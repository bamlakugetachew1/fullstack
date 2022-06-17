<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <div v-else v-for="space in result.allPages" :key="space.id">


<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ space.title }}</h5>
         </a>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>

          <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">    <router-link :to="{ name: 'priview', params: { id: space.id,title:space.title,slug:space.slug,lang:space.lang,published:space.published,section_id:this.section_id,content:this.content} }"
          >priview</router-link></span>

         <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
            <router-link :to="{ name: 'About', params: { id: space.id } }"
          >delete</router-link></span>


        
       <span class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">           <router-link :to="{ name: 'edit', params: { id: space.id,title:space.title,slug:space.slug,lang:space.lang,published:space.published,section_id:this.section_id,content:this.content} }"
        >edit</router-link></span>

     
       
</div>
  </div>
  <div></div>

  
         <div class="mb-6">
          <button
            @click="reload"
             class=" w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-blue"> 
            reload
          </button>
        </div>
</template>

<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const CHARACTERS_QUERY = gql`
  query allPages {
    allPages {
      id
      title
      slug
      lang
      section_id
      published
      content
    }
  }
`;

   




/*


query Launches {
  launches {
    mission_name
    mission_id
    rocket {
      rocket_name
      rocket {
        company
        name
        mass {
          kg
        }
      }
    }
    launch_site {
      site_name
    }
    launch_date_local
  }
}



 */

export default {
  name: "HelloWorld",
  data() {
    return {
      id: null,
      count:0,
      slug:"",
      lang:"",
      section_id:"",
      published:"",
      title: "",
      content:"",
      //description:'',
      // image_url:'',
    };
  },
  created(){
     
  },
  methods:{
    reload(){
      location.reload();
    }
  },
  components: {},

  setup() {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
      result,
      loading,
      error,
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
