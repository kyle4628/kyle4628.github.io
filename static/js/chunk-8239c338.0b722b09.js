(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8239c338"],{1293:function(e,t,a){},"1cc6":function(e,t,a){"use strict";var i=a("1293"),n=a.n(i);n.a},2423:function(e,t,a){"use strict";a.d(t,"i",(function(){return n})),a.d(t,"f",(function(){return r})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return l})),a.d(t,"h",(function(){return u})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return m})),a.d(t,"j",(function(){return p})),a.d(t,"k",(function(){return f}));var i=a("b775");function n(e){return Object(i["a"])({url:"/vue-element-admin/article/update",method:"post",data:e,headers:{Authorization:"Bearer "+localStorage.getItem("token"),user_id:localStorage.getItem("user_id")}})}function r(){return Object(i["a"])({url:"/query/get_tag_list",method:"post",baseURL:"https://fuenml.azurewebsites.net/",headers:{Authorization:"Bearer "+localStorage.getItem("token")}})}function s(){return Object(i["a"])({url:"/query/get_place_info",method:"post",baseURL:"https://fuenml.azurewebsites.net/",headers:{Authorization:"Bearer "+localStorage.getItem("token"),user_id:localStorage.getItem("user_id")}})}function o(){return Object(i["a"])({url:"/query/get_place_selection",method:"post",baseURL:"https://fuenml.azurewebsites.net/"})}function l(){return Object(i["a"])({url:"/query/get_tag_selection",method:"post",baseURL:"https://fuenml.azurewebsites.net/"})}function u(){return Object(i["a"])({url:"/query/get_place_list",method:"post",baseURL:"https://fuenml.azurewebsites.net/",headers:{Authorization:"Bearer "+localStorage.getItem("token"),user_id:localStorage.getItem("user_id")}})}function c(e){return Object(i["a"])({url:"/auth/register",method:"post",data:e,baseURL:"https://fuenml.azurewebsites.net/"})}function d(e){return Object(i["a"])({url:"/user/modify_place_tag",method:"post",data:e,baseURL:"https://fuenml.azurewebsites.net/",headers:{session_id:1}})}function m(e){return Object(i["a"])({url:"/user/create_list",method:"post",data:e,baseURL:"https://fuenml.azurewebsites.net/",headers:{session_id:1}})}function p(e){return Object(i["a"])({url:"/query/update_member",method:"post",data:e,baseURL:"https://fuenml.azurewebsites.net/"})}function f(e){return Object(i["a"])({url:"/query/update_placelist",method:"post",data:e,baseURL:"https://fuenml.azurewebsites.net/",headers:{Authorization:"Bearer "+localStorage.getItem("token"),user_id:localStorage.getItem("user_id")}})}},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,a){var i=o(),n=e-i,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var o=Math.easeInOutQuad(u,i,n,t);s(o),u<t?r(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(a("1cc6"),a("2877")),m=Object(d["a"])(c,i,n,!1,null,"f3b72548",null);t["a"]=m.exports},6724:function(e,t,a){"use strict";a("8d41");var i="@@wavesContext";function n(e,t){function a(a){var i=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),r=n.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),n.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=a:e[i]={removeHandle:a},a}var r={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},s=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;t["a"]=r},"8d41":function(e,t,a){},e507a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" "+e._s(e.$t("member.add"))+" ")]),a("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(t){e.tableKey=e.tableKey+1}},model:{value:e.showReviewer,callback:function(t){e.showReviewer=t},expression:"showReviewer"}},[e._v(" "+e._s(e.$t("member.reviewer"))+" ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:e.$t("member.id"),prop:"id",align:"center",width:"90","class-name":e.getSortClass("id")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.id))])]}}])}),a("el-table-column",{attrs:{label:e.$t("member.name"),width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.name))])]}}])}),a("el-table-column",{attrs:{label:e.$t("member.email"),"min-width":"170px"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",{staticClass:"link-type",on:{click:function(t){return e.handleUpdate(i)}}},[e._v(e._s(i.email))])]}}])}),e.showReviewer?a("el-table-column",{attrs:{label:e.$t("member.password"),width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",{staticStyle:{color:"red"}},[e._v(e._s(i.password))])]}}],null,!1,2077549782)}):e._e(),a("el-table-column",{attrs:{label:e.$t("member.created"),align:"center",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.createdTime))])]}}])}),a("el-table-column",{attrs:{label:e.$t("member.updated"),align:"center",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.updatedTime))])]}}])}),a("el-table-column",{attrs:{label:e.$t("member.authority"),"class-name":"status-col",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-tag",{attrs:{type:e._f("statusFilter")(i.authority)}},[a("span",[e._v(e._s(e.authorityText[i.authority].name))])])]}}])}),a("el-table-column",{attrs:{label:e.$t("member.actions"),align:"center",width:"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row,n=t.$index;return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v(" "+e._s(e.$t("member.edit"))+" ")]),e.showReviewer?a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDelete(i,n)}}},[e._v(" "+e._s(e.$t("member.delete"))+" ")]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getUserList}}),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},["create"===e.dialogStatus?a("el-button",{staticStyle:{opacity:"0"},attrs:{type:"success",plain:""},on:{click:e.demoTemp}},[e._v("Demo")]):e._e(),a("el-form",{ref:"dataForm",staticStyle:{width:"280px","margin-left":"20px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"90px"}},[a("el-form-item",{attrs:{label:e.$t("member.name"),prop:"name"}},[a("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),"create"===e.dialogStatus?a("el-form-item",{attrs:{label:e.$t("member.email"),prop:"email"}},[a("el-input",{model:{value:e.temp.email,callback:function(t){e.$set(e.temp,"email",t)},expression:"temp.email"}})],1):e._e(),a("el-form-item",{attrs:{label:e.$t("member.password"),prop:"password"}},[a("el-input",{model:{value:e.temp.password,callback:function(t){e.$set(e.temp,"password",t)},expression:"temp.password"}})],1),"update"===e.dialogStatus?a("el-form-item",{attrs:{label:e.$t("member.authority"),prop:"authority"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.authority,callback:function(t){e.$set(e.temp,"authority",t)},expression:"temp.authority"}},e._l(e.setOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),2===e.temp.authority?a("el-button",{attrs:{type:"danger",plain:""},on:{click:e.handleSendEmail}},[e._v("Send Email")]):e._e()],1):e._e(),"update"===e.dialogStatus?a("el-form-item",{attrs:{label:e.$t("member.created")}},[a("el-input",{attrs:{disabled:""},model:{value:e.temp.createdTime,callback:function(t){e.$set(e.temp,"createdTime",t)},expression:"temp.createdTime"}})],1):e._e(),"update"===e.dialogStatus?a("el-form-item",{attrs:{label:e.$t("member.updated")}},[a("el-input",{attrs:{disabled:""},model:{value:e.temp.updatedTime,callback:function(t){e.$set(e.temp,"updatedTime",t)},expression:"temp.updatedTime"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" "+e._s(e.$t("table.cancel"))+" ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(" "+e._s(e.$t("table.confirm"))+" ")])],1)],1)],1)},n=[],r=(a("c740"),a("a434"),a("b0c0"),a("2423")),s=a("c24f"),o=a("6724"),l=a("333d"),u={name:"Members",components:{Pagination:l["a"]},directives:{waves:o["a"]},filters:{statusFilter:function(e){var t={0:"success",1:"primary",2:"danger"};return t[e]}},data:function(){return{tableKey:0,list:null,total:0,sendEmailobj:{toEmail:null},listLoading:!0,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"},sortOptions:[{label:this.$t("common.idAscending"),key:"+id"},{label:this.$t("common.idDescending"),key:"-id"}],showReviewer:!1,temp:{id:void 0,name:"",email:"",password:"",authority:"",createdTime:"",updatedTime:""},createModel:{name:"",email:"",password:""},dialogFormVisible:!1,dialogStatus:""}},computed:{textMap:function(){var e={update:this.$t("member.edit"),create:this.$t("member.add")};return e},authorityText:function(){var e={0:{name:this.$t("member.administrator")},1:{name:this.$t("member.normal")},2:{name:this.$t("member.blackList")}};return e},rules:function(){var e={name:[{required:!0,message:this.$t("member.nameRule"),trigger:"blur"}],email:[{required:!0,message:this.$t("member.passwordRule"),trigger:"blur"}],password:[{required:!0,message:this.$t("member.passwordRule"),trigger:"blur"}],authority:[{required:!0,message:this.$t("member.authorityRule"),trigger:"change"}]};return e},setOptions:function(){var e=[{value:0,label:this.$t("member.administrator")},{value:1,label:this.$t("member.normal")},{value:2,label:this.$t("member.blackList")}];return e}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;Object(s["i"])().then((function(t){e.list=t.data,e.total=t.total+222,e.listLoading=!1,setTimeout((function(){e.listLoading=!1}),2e3)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,name:"",email:"",password:"",authority:"",createdTime:"",updatedTime:""}},demoTemp:function(){this.temp.name="Mike",this.temp.email="Mike@khito.co",this.temp.password="Mike1234"},resetCreateModel:function(){this.createModel={username:"",email:"",password:""}},handleCreate:function(){var e=this;this.resetTemp(),this.resetCreateModel(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){e.createModel.username=e.temp.name,e.createModel.email=e.temp.email,e.createModel.password=e.temp.password,e.temp.id=e.total+1;var a=new Date,i=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),n=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();e.temp.createdTime=i+" "+n,e.temp.authority=1,e.$confirm(e.$t("member.createCheck"),"提示",{confirmButtonText:e.$t("member.confirm"),cancelButtonText:e.$t("member.cancel"),type:"warning"}).then((function(){Object(r["b"])(e.createModel).then((function(t){1===t.status?(e.list.push(e.temp),e.getUserList(),e.$notify({title:"成功",message:t.msg,type:"success",duration:2e3}),e.dialogFormVisible=!1):e.$notify({title:"失敗",message:t.msg,type:"danger",duration:2e3})}))})).catch((function(){e.dialogFormVisible=!1}))}}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);Object(r["j"])(a).then((function(){var t=e.list.findIndex((function(t){return t.id===e.temp.id}));e.list.splice(t,1,e.temp),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}),e.getUserList()}))}}))},handleDelete:function(e,t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),this.list.splice(t,1)},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"},handleSendEmail:function(){var e=this;this.sendEmailobj.toEmail=this.temp.email,Object(s["j"])(this.sendEmailobj).then((function(t){1===t.status?e.$notify({title:"成功",message:"寄信成功",type:"success",duration:2e3}):e.$notify.error({title:"失敗",message:"非有效信箱",type:"fail",duration:2e3})}))}}},c=u,d=a("2877"),m=Object(d["a"])(c,i,n,!1,null,null,null);t["default"]=m.exports}}]);