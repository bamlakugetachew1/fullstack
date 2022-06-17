<script>
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import router from '../index.js' 
export default {
    data(){
       
        return{
             
              id1:0,
              title1:"",
              slug1:"",
              lang1:"",
              published1:"",
              slug:"",
              lang:"",
              title:"",
              published:"",
              section_id:"",
              content:""
        }
    },

    created() {
    this.id1 = this.$route.params.id;
    this.title1=this.$route.params.title;
      this.slug1=this.$route.params.slug;
        this.lang1=this.$route.params.lang;
          this.published1=this.$route.params.published;

          this.slug=this.$route.params.slug;
          this.title=this.$route.params.title;
          this.published=this.$route.params.published;
          this.lang=this.$route.params.lang;
          this.section_id=this.$route.params.section_id;
          this.content=this.$route.params.content;
          

          
  },
  setup() {
    
     
    const slug = ref('en');
    const lang = ref('en');
    const title = ref('vue js tutorials');
    const published= ref('2015');
    const section_id = ref('5');
    const content = ref('vue apollo graphql tutorials');

    const { mutate: updatePage } = useMutation(
      gql` mutation updatePage($id:ID!,$slug: String!,$lang: String!,$title: String!,$section_id: ID!,$published: String!,$content: JSON!){
    updatePage(id:$id,slug:$slug,lang:$lang,title:$title,section_id:$section_id,published:$published,content:$content){
    id
    title
  }
}  `,
      () => ({
        variables: {
          
          slug: slug.value,
          lang: lang.value,
          title:title.value,
          section_id:section_id.value,
          published:published.value,
          content:content.value
          /*
          slug:this.slug,
          lang:this.lang,
          title:this.title,
          section_id:this.section_id,
          published:this.published,
          content:this.content

          */
        },
      })
    );
       
    return {     
      updatePage,
    };
    
  },
  methods:{
    changeroute(){
        router.push('/service');
      }
  }
};
</script>
<template>
    <div class="grid grid-cols-3 gap-4">

<div>
  
    
     <div href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" v-bind:src="this.slug1" alt="imgs here">
    <div class="flex flex-col justify-between p-4 leading-normal">
                   
        <h3 class=" w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-blue">PUBLISHED <span class="mb-3 font-bold text-gray-700 dark:text-gray-400">{{this.published1}}</span>  </h3>          
        
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{this.title1}}</h5>
         <p class=" tracking-tight text-gray-900 dark:text-white">{{this.lang1}}</p>
    </div>
</div>
 </div>







        <div>

   
 <div class="container mx-auto border-solid  border-2 border-brown-600 ...">
  <div class="max-w-xl p-5 mx-auto my-10 bg-blue rounded-md shadow-sm"> 
    
    <div>
      <div class="mb-6">
          <label for="slug" class=" block mb-2 text-sm text-gray-600"
            >img url</label>
          <input v-model="slug"
            placeholder="Enter the valid url of page here"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
           
             <div class="mb-6">
          <label for="title" class="block mb-2 text-sm text-gray-600"
            >title</label
          >

          <textarea v-model="title"
            
            placeholder="title"
            class="text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          ></textarea>
        </div>
        <div class="mb-6">
          <label for="published" class="block mb-2 text-sm text-gray-600"
            >published</label
          >
          <input v-model="published"
            
            placeholder="Enter published year here"
            required
            class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        
        </div>
   
        <div class="mb-6">
          <label for="lang" class="block mb-2 text-sm text-gray-600"
            >discription</label
          >

          <textarea v-model="lang"
            
            placeholder=" write Your discription hear"
            class="text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          ></textarea>
        </div>
           
             <div class="mb-6">
          <label for="title" class="block mb-2 text-sm text-gray-600"
            ></label>
        
          <textarea v-model="section_id"
            
            placeholder=" write Your section_id"
            class=" hidden text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          ></textarea>
        </div>
      
           <div class="mb-6">
          <label for="content" class="block mb-2 text-sm text-gray-600"
            ></label
          >

          <textarea v-model="content"
            
            placeholder=" write Your content"
            class="hidden  text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          ></textarea>
        </div>
       <div class="mb-6">
          <button
            @click="updatePage({id:this.id1,slug:this.slug,lang:this.lang,title:this.title,published:this.published,section_id:this.section_id,content:this.content})"
             class=" w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-blue"> 
           EDIT PAGE
         {{id1}}
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

     <div>
  
    
     <div href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" v-bind:src="this.slug" alt="imgs here">
    <div class="flex flex-col justify-between p-4 leading-normal">
                   
        <h3 class=" w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-blue">PUBLISHED <span class="mb-3 font-bold text-gray-700 dark:text-gray-400">{{this.published}}</span>  </h3>          
        
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{this.title}}</h5>
         <p class=" tracking-tight text-gray-900 dark:text-white">{{this.lang}}</p>
    </div>
</div>
 </div>




 </div>
    
</template>