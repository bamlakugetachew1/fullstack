(function(){"use strict";var e={5424:function(e,t,o){var r=o(9242),i=o(3396),l=o(1209),n=o(8085),s=o(1999),a=o(678);const d={class:"text-4xl dark:text-white"};function u(e,t,o,r,l,n){return(0,i.wg)(),(0,i.iD)("h1",d,"BUILDPAGES")}var c={name:"Home",data(){return{count:"this is test from plus messangers"}}},g=o(89);const h=(0,g.Z)(c,[["render",u]]);var b=h;const p=(0,i._)("h1",{class:"text-black text-lg font-medium mr-2 px-2.5"},"are you sure to delete this page?",-1);function m(e,t,o,r,l,n){return(0,i.wg)(),(0,i.iD)(i.HY,null,[p,(0,i._)("button",{onClick:t[0]||(t[0]=e=>r.removePage({id:this.id1})),class:"w-1000 hover:bg-red-800 ... px-10 py-4 text-white bg-red-500 rounded-md focus:bg-indigo-600 focus:outline-blue"},"DELETE")],64)}var f=o(8833),x={data(){return{id1:0,val:0}},components:{},created(){this.id1=this.$route.params.id},methods:{getid(){},deletepage(){this.$apollo.mutate({mutation:f.ZP`  mutation  removePage($id:ID!)

          removePage(id:$id) {
            id
            title
            }
        
      }
      }`,variables:{id:this.id1}})}},setup(){const{mutate:e}=(0,l.Db)(f.ZP`
      mutation removePage($id:ID!) {
        removePage(id: $id) {
          id
          title
        }
      }
    `);return{removePage:e}}};const w=(0,g.Z)(x,[["render",m]]);var y=w,v=o(7139);const _={class:"grid grid-cols-2 gap-4"},k={class:"container mx-auto border-solid border-2 border-brown-600 ..."},$={class:"max-w-xl p-5 mx-auto my-10 bg-blue rounded-md shadow-sm"},P={class:"mb-6"},D=(0,i._)("label",{for:"slug",class:"block mb-2 text-sm text-gray-600"},"img url",-1),H={class:"mb-6"},U=(0,i._)("label",{for:"title",class:"block mb-2 text-sm text-gray-600"},"title",-1),S={class:"mb-6"},E=(0,i._)("label",{for:"lang",class:"block mb-2 text-sm text-gray-600"},"published",-1),q={class:"mb-6"},j=(0,i._)("label",{for:"published",class:"block mb-2 text-sm text-gray-600"},"discription",-1),O={class:"mb-6"},z=(0,i._)("label",{for:"title",class:"block mb-2 text-sm text-gray-600"},null,-1),I={class:"mb-6"},A=(0,i._)("label",{for:"content",class:"block mb-2 text-sm text-gray-600"},null,-1),V={class:"mb-6"},Z={class:"mb-6"},C={href:"#",class:"flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"},W=["src"],Y={class:"flex flex-col justify-between p-4 leading-normal"},L={class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"},B=(0,i.Uk)("PUBLISHED "),G={class:"mb-3 font-bold text-gray-700 dark:text-gray-400"},T={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},J={class:"tracking-tight text-gray-900 dark:text-white"};function K(e,t,o,l,n,s){return(0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("div",null,[(0,i._)("div",k,[(0,i._)("div",$,[(0,i._)("div",null,[(0,i._)("div",P,[D,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.slug=e),placeholder:"Enter the valid url of page here",required:"",class:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"},null,512),[[r.nr,n.slug]])]),(0,i._)("div",H,[U,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.title=e),placeholder:"title",class:"text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300",required:""},null,512),[[r.nr,n.title]])]),(0,i._)("div",S,[E,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.published=e),placeholder:"Enter published year here",required:"",class:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"},null,512),[[r.nr,n.published]])])]),(0,i._)("div",q,[j,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>n.lang=e),placeholder:" write Your discription year",class:"text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300",required:""},null,512),[[r.nr,n.lang]])]),(0,i._)("div",O,[z,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[4]||(t[4]=e=>n.section_id=e),placeholder:" write Your section_id",class:"hidden text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300",required:""},null,512),[[r.nr,n.section_id]])]),(0,i._)("div",I,[A,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>n.content=e),placeholder:" write Your content",class:"hidden text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300",required:""},null,512),[[r.nr,n.content]])]),(0,i._)("div",V,[(0,i._)("button",{onClick:t[6]||(t[6]=e=>l.createPage({slug:this.slug,lang:this.lang,title:this.title,section_id:this.section_id,published:this.published,content:this.content})),class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"}," ADD PAGE ")]),(0,i._)("div",Z,[(0,i._)("button",{onClick:t[7]||(t[7]=(...e)=>s.changeroute&&s.changeroute(...e)),class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"}," BACK TO PAGES ")])])])]),(0,i._)("div",null,[(0,i._)("div",C,[(0,i._)("img",{class:"object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:this.slug,alt:"imgs here"},null,8,W),(0,i._)("div",Y,[(0,i._)("h3",L,[B,(0,i._)("span",G,(0,v.zw)(this.published),1)]),(0,i._)("h5",T,(0,v.zw)(this.title),1),(0,i._)("p",J,(0,v.zw)(this.lang),1)])])])])}var M=o(4870),N={data(){return{slug:"",lang:"",title:"",published:"",section_id:"",content:""}},setup(){const e=(0,M.iH)("en"),t=(0,M.iH)("en"),o=(0,M.iH)("vue js tutorials"),r=(0,M.iH)("2015"),i=(0,M.iH)("5"),n=(0,M.iH)("vue apollo graphql tutorials"),{mutate:s}=(0,l.Db)(f.ZP` mutation createPage($slug: String!,$lang: String!,$title: String!,$section_id: ID!,$published: String!,$content: JSON!){
    createPage(slug:$slug,lang:$lang,title:$title,section_id:$section_id,published:$published,content:$content){
    id
    title
  }
}  `,(()=>({variables:{slug:e.value,lang:t.value,title:o.value,section_id:i.value,published:r.value,content:n.value}})));return{createPage:s}},methods:{changeroute(){ft.push("service")}}};const R=(0,g.Z)(N,[["render",K]]);var F=R;const Q=e=>((0,i.dD)("data-v-f029ef96"),e=e(),(0,i.Cn)(),e),X={key:0},ee={key:1},te={class:"p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},oe={href:"#"},re={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},ie=Q((()=>(0,i._)("p",{class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},null,-1))),le={class:"bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"},ne=(0,i.Uk)("priview"),se={class:"bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"},ae=(0,i.Uk)("delete"),de={class:"bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"},ue=(0,i.Uk)("edit"),ce=Q((()=>(0,i._)("div",null,null,-1))),ge={class:"mb-6"};function he(e,t,o,r,l,n){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r.error?((0,i.wg)(),(0,i.iD)("p",X,"Something went wrong...")):(0,i.kq)("",!0),r.loading?((0,i.wg)(),(0,i.iD)("p",ee,"Loading...")):((0,i.wg)(!0),(0,i.iD)(i.HY,{key:2},(0,i.Ko)(r.result.allPages,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("div",te,[(0,i._)("a",oe,[(0,i._)("h5",re,(0,v.zw)(e.title),1)]),ie,(0,i._)("span",le,[(0,i.Wm)(s,{to:{name:"priview",params:{id:e.id,title:e.title,slug:e.slug,lang:e.lang,published:e.published,section_id:this.section_id,content:this.content}}},{default:(0,i.w5)((()=>[ne])),_:2},1032,["to"])]),(0,i._)("span",se,[(0,i.Wm)(s,{to:{name:"About",params:{id:e.id}}},{default:(0,i.w5)((()=>[ae])),_:2},1032,["to"])]),(0,i._)("span",de,[(0,i.Wm)(s,{to:{name:"edit",params:{id:e.id,title:e.title,slug:e.slug,lang:e.lang,published:e.published,section_id:this.section_id,content:this.content}}},{default:(0,i.w5)((()=>[ue])),_:2},1032,["to"])])])])))),128)),ce,(0,i._)("div",ge,[(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>n.reload&&n.reload(...e)),class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"}," reload ")])],64)}const be=f.ZP`
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
`;var pe={name:"HelloWorld",data(){return{id:null,count:0,slug:"",lang:"",section_id:"",published:"",title:"",content:""}},created(){},methods:{reload(){location.reload()}},components:{},setup(){const{result:e,loading:t,error:o}=(0,l.aM)(be);return{result:e,loading:t,error:o}}};const me=(0,g.Z)(pe,[["render",he],["__scopeId","data-v-f029ef96"]]);var fe=me;const xe={key:0},we={key:1},ye={href:"#",class:"flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"},ve=["src"],_e={class:"flex flex-col justify-between p-4 leading-normal"},ke={class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"},$e=(0,i.Uk)("PUBLISHED "),Pe={class:"mb-3 font-bold text-gray-700 dark:text-gray-400"},De={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},He={class:"tracking-tight text-gray-900 dark:text-white"};function Ue(e,t,o,r,l,n){return(0,i.wg)(),(0,i.iD)(i.HY,null,[e.error?((0,i.wg)(),(0,i.iD)("p",xe,"Something went wrong...")):(0,i.kq)("",!0),e.loading?((0,i.wg)(),(0,i.iD)("p",we,"Loading...")):(0,i.kq)("",!0),(0,i._)("a",ye,[(0,i._)("img",{class:"object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:l.myimage,alt:""},null,8,ve),(0,i._)("div",_e,[(0,i._)("h3",ke,[$e,(0,i._)("span",Pe,(0,v.zw)(this.published1),1)]),(0,i._)("h5",De,(0,v.zw)(this.title1),1),(0,i._)("p",He,(0,v.zw)(this.lang1),1)])])],64)}var Se={name:"HelloWorld",data(){return{myimage:"",lang:"",published:"",id1:0,title:"",id:null,id2:"",slug:"",content:"",section_id:"",lang1:"",published1:"",title1:""}},components:{},created(){this.id1=this.$route.params.id,this.myimage=this.$route.params.slug,this.title1=this.$route.params.title,this.lang1=this.$route.params.lang,this.published1=this.$route.params.published},methods:{getid(){console.log(this.$route.params.id-1)}}};const Ee=(0,g.Z)(Se,[["render",Ue],["__scopeId","data-v-0ed1e712"]]);var qe=Ee;const je={class:"grid grid-cols-3 gap-4"},Oe={href:"#",class:"flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"},ze=["src"],Ie={class:"flex flex-col justify-between p-4 leading-normal"},Ae={class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"},Ve=(0,i.Uk)("PUBLISHED "),Ze={class:"mb-3 font-bold text-gray-700 dark:text-gray-400"},Ce={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},We={class:"tracking-tight text-gray-900 dark:text-white"},Ye={class:"container mx-auto border-solid border-2 border-brown-600 ..."},Le={class:"max-w-xl p-5 mx-auto my-10 bg-blue rounded-md shadow-sm"},Be={class:"mb-6"},Ge=(0,i._)("label",{for:"slug",class:"block mb-2 text-sm text-gray-600"},"img url",-1),Te={class:"mb-6"},Je=(0,i._)("label",{for:"title",class:"block mb-2 text-sm text-gray-600"},"title",-1),Ke={class:"mb-6"},Me=(0,i._)("label",{for:"published",class:"block mb-2 text-sm text-gray-600"},"published",-1),Ne={class:"mb-6"},Re=(0,i._)("label",{for:"lang",class:"block mb-2 text-sm text-gray-600"},"discription",-1),Fe={class:"mb-6"},Qe=(0,i._)("label",{for:"title",class:"block mb-2 text-sm text-gray-600"},null,-1),Xe={class:"mb-6"},et=(0,i._)("label",{for:"content",class:"block mb-2 text-sm text-gray-600"},null,-1),tt={class:"mb-6"},ot={class:"mb-6"},rt={href:"#",class:"flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"},it=["src"],lt={class:"flex flex-col justify-between p-4 leading-normal"},nt={class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"},st=(0,i.Uk)("PUBLISHED "),at={class:"mb-3 font-bold text-gray-700 dark:text-gray-400"},dt={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},ut={class:"tracking-tight text-gray-900 dark:text-white"};function ct(e,t,o,l,n,s){return(0,i.wg)(),(0,i.iD)("div",je,[(0,i._)("div",null,[(0,i._)("div",Oe,[(0,i._)("img",{class:"object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:this.slug1,alt:"imgs here"},null,8,ze),(0,i._)("div",Ie,[(0,i._)("h3",Ae,[Ve,(0,i._)("span",Ze,(0,v.zw)(this.published1),1)]),(0,i._)("h5",Ce,(0,v.zw)(this.title1),1),(0,i._)("p",We,(0,v.zw)(this.lang1),1)])])]),(0,i._)("div",null,[(0,i._)("div",Ye,[(0,i._)("div",Le,[(0,i._)("div",null,[(0,i._)("div",Be,[Ge,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.slug=e),placeholder:"Enter the valid url of page here",required:"",class:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"},null,512),[[r.nr,n.slug]])]),(0,i._)("div",Te,[Je,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.title=e),placeholder:"title",class:"text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300",required:""},null,512),[[r.nr,n.title]])]),(0,i._)("div",Ke,[Me,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.published=e),placeholder:"Enter published year here",required:"",class:"w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"},null,512),[[r.nr,n.published]])])]),(0,i._)("div",Ne,[Re,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>n.lang=e),placeholder:" write Your discription hear",class:"text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300",required:""},null,512),[[r.nr,n.lang]])]),(0,i._)("div",Fe,[Qe,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[4]||(t[4]=e=>n.section_id=e),placeholder:" write Your section_id",class:"hidden text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300",required:""},null,512),[[r.nr,n.section_id]])]),(0,i._)("div",Xe,[et,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>n.content=e),placeholder:" write Your content",class:"hidden text-slate-500 group-hover:text-white text-sm w-full px-3 py-20 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300",required:""},null,512),[[r.nr,n.content]])]),(0,i._)("div",tt,[(0,i._)("button",{onClick:t[6]||(t[6]=e=>l.updatePage({id:this.id1,slug:this.slug,lang:this.lang,title:this.title,published:this.published,section_id:this.section_id,content:this.content})),class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"}," EDIT PAGE "+(0,v.zw)(n.id1),1)]),(0,i._)("div",ot,[(0,i._)("button",{onClick:t[7]||(t[7]=(...e)=>s.changeroute&&s.changeroute(...e)),class:"w-1000 hover:bg-sky-800 ... px-10 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-blue"}," BACK TO PAGES ")])])])]),(0,i._)("div",null,[(0,i._)("div",rt,[(0,i._)("img",{class:"object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:this.slug,alt:"imgs here"},null,8,it),(0,i._)("div",lt,[(0,i._)("h3",nt,[st,(0,i._)("span",at,(0,v.zw)(this.published),1)]),(0,i._)("h5",dt,(0,v.zw)(this.title),1),(0,i._)("p",ut,(0,v.zw)(this.lang),1)])])])])}var gt={data(){return{id1:0,title1:"",slug1:"",lang1:"",published1:"",slug:"",lang:"",title:"",published:"",section_id:"",content:""}},created(){this.id1=this.$route.params.id,this.title1=this.$route.params.title,this.slug1=this.$route.params.slug,this.lang1=this.$route.params.lang,this.published1=this.$route.params.published,this.slug=this.$route.params.slug,this.title=this.$route.params.title,this.published=this.$route.params.published,this.lang=this.$route.params.lang,this.section_id=this.$route.params.section_id,this.content=this.$route.params.content},setup(){const e=(0,M.iH)("en"),t=(0,M.iH)("en"),o=(0,M.iH)("vue js tutorials"),r=(0,M.iH)("2015"),i=(0,M.iH)("5"),n=(0,M.iH)("vue apollo graphql tutorials"),{mutate:s}=(0,l.Db)(f.ZP` mutation updatePage($id:ID!,$slug: String!,$lang: String!,$title: String!,$section_id: ID!,$published: String!,$content: JSON!){
    updatePage(id:$id,slug:$slug,lang:$lang,title:$title,section_id:$section_id,published:$published,content:$content){
    id
    title
  }
}  `,(()=>({variables:{slug:e.value,lang:t.value,title:o.value,section_id:i.value,published:r.value,content:n.value}})));return{updatePage:s}},methods:{changeroute(){ft.push("/service")}}};const ht=(0,g.Z)(gt,[["render",ct]]);var bt=ht;const pt=[{path:"/",name:"Home",component:b},{path:"/edit/:id",name:"edit",component:bt},{path:"/about/:id",name:"About",component:y},{path:"/compose",name:"compose",component:F},{path:"/service",name:"service",component:fe},{path:"/priview/:id",name:"priview",component:qe}],mt=(0,a.p7)({history:(0,a.PO)(),routes:pt});var ft=mt;const xt={class:"max-w-6xl mx-auto px-4"},wt={class:"flex justify-between"},yt={class:"flex space-x-7"},vt=(0,i._)("h3",{class:"text-lg font-medium"},"PAGE BUILDERS",-1),_t={id:"nav",class:"pt-6 flex justify-around font-bold"},kt=(0,i.Uk)("Home"),$t=(0,i.Uk)("list"),Pt=(0,i.Uk)("compose");function Dt(e,t,o,r,l,n){const s=(0,i.up)("router-link"),a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",xt,[(0,i._)("div",wt,[(0,i._)("div",yt,[vt,(0,i._)("div",_t,[(0,i.Wm)(s,{to:"/",class:"py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"},{default:(0,i.w5)((()=>[kt])),_:1}),(0,i.Wm)(s,{to:"/service",class:"py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"},{default:(0,i.w5)((()=>[$t])),_:1}),(0,i.Wm)(s,{to:"/compose",class:"py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"},{default:(0,i.w5)((()=>[Pt])),_:1})])])])]),(0,i.Wm)(a)],64)}var Ht={name:"App",components:{},methods:{createwebsocket(){var e=new WebSocket("wss://192.168.137.94:8080");e.onopen=function(t){console.log('WebSocket Opened. Sending "Hello"'),e.send("Hello"),console.log(t)},e.onmessage=function(e){console.log("Received:",e.data)}}}};const Ut=(0,g.Z)(Ht,[["render",Dt]]);var St=Ut;const Et=new n.h,qt=new s.f({cache:Et,uri:"https://fullstackhahu.herokuapp.com/graphql"}),jt=(0,r.ri)({setup(){(0,i.JJ)(l.Gk,qt)},render:()=>(0,i.h)(St)});jt.use(ft).mount("#app")}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,r,i,l){if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],l=e[u][2];for(var s=!0,a=0;a<r.length;a++)(!1&l||n>=l)&&Object.keys(o.O).every((function(e){return o.O[e](r[a])}))?r.splice(a--,1):(s=!1,l<n&&(n=l));if(s){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,i,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,l,n=r[0],s=r[1],a=r[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(a)var u=a(o)}for(t&&t(r);d<n.length;d++)l=n[d],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(5424)}));r=o.O(r)})();
//# sourceMappingURL=app.fdb6fc72.js.map