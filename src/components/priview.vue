<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>

 <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" v-bind:src="myimage" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
                   
        <h3 class=" w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-blue">PUBLISHED <span class="mb-3 font-bold text-gray-700 dark:text-gray-400">{{this.published1}}</span>  </h3>          
        
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{this.title1}}</h5>
         <p class=" tracking-tight text-gray-900 dark:text-white">{{this.lang1}}</p>
    </div>
</a>
 
</template>

<script>
//{{result.allPages[id1+1].title}}
//   result.allPages[id1+1].lang
//v-for="url in result.getAllPages"
// v-bind:src="space.image_url"
//      v-for="(image, index) in campaigns[0].images"
/*
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
query  allPages{
  allPages{
    id,
    title,
    published,
    lang,
    slug,
    content,
    section_id


   
    }


}  
`
 */

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
  name: 'HelloWorld',
  data(){
      return{
        myimage:'',
        lang:'',
        published:'',
        id1:0,
       title:'',
       id:null,
       id2:'',
       slug:'',
       content:'',
       section_id:'',
       lang1:'',
       published1:'',
       title1:'',
       
      //description:'',
      //image_url:'',
    
      }
  },
  components:{
    
  }
,
    created() {
            this.id1 = this.$route.params.id;
            //this.id2=this.result.allPages[this.id1-1].title;
            //https://tailwindui.com/img/og-image.png
            //this.myimage= "https://www.tutorialsplane.com/wp-content/uploads/2018/02/27867786_1714460465242017_6847995972742989230_n.jpg";
            this.myimage=this.$route.params.slug;
            this.title1=this.$route.params.title;
            this.lang1=this.$route.params.lang;
            this.published1=this.$route.params.published;
        },
  
  methods:{
  
    getid(){
        console.log((this.$route.params.id)-1)
    }
  },
    /*
  setup () {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
      result,
      loading, 
      error
    }
  },
  */

}
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
img {
  width: 300px;
  height: auto;
}
</style>