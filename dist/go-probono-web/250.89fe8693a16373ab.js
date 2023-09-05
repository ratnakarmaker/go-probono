"use strict";(self.webpackChunkgo_probono_web=self.webpackChunkgo_probono_web||[]).push([[250],{7250:(q,u,s)=>{s.r(u),s.d(u,{LadyJusticeModule:()=>M});var h=s(2216),g=s(6895),t=s(4650),r=s(646),p=s(8944),w=s(3573);let f=(()=>{var a;class o{constructor(e,n,l){this.router=e,this.route=n,this.api=l,this.lawList=[],this.buttons=[{action:"description",icon:"eye",tooltip:"Law Description",class:"btn-primary"},{action:"laws",icon:"book",tooltip:"Q/A List",class:"btn-secondary"}]}ngOnInit(){this.getMainLaws()}buttonClicked({action:e,data:n}){switch(e){case"description":this.lawDescription(n);break;case"laws":this.lawListView(n)}}lawDescription(e){this.router.navigate([`../main-laws/${e?.slug}`],{relativeTo:this.route})}lawListView(e){this.router.navigate(["../law-list"],{relativeTo:this.route,queryParams:{law:e?.slug}})}advocateListView(e){this.router.navigate(["../../advocates"],{relativeTo:this.route,queryParams:{law:e?.slug}})}getMainLaws(){this.api.list("LAW_LIST_API").subscribe(e=>{this.lawList=e?.map(n=>({...n,image_src:n?.thumbnail,title:n?.name,description:n?.headline}))})}}return(a=o).\u0275fac=function(e){return new(e||a)(t.Y36(r.F0),t.Y36(r.gz),t.Y36(p.s))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-main-laws"]],decls:4,vars:3,consts:[[1,"container","page-container"],[1,"row"],[1,"col-12","main-laws"],[3,"items","c_class","buttons","state_change"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-grid-cards",3),t.NdJ("state_change",function(d){return n.buttonClicked(d)}),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("items",n.lawList)("c_class","col-xl-4 col-md-6 col-sm-12 p-3 law animation")("buttons",n.buttons))},dependencies:[w.v],styles:[".main-laws .law{height:350px}  .main-laws .law .grid-content{z-index:1}"]}),o})();var c=s(9837),L=s(2066);function v(a,o){if(1&a&&(t.TgZ(0,"div",13)(1,"div",14)(2,"div",15),t._uU(3),t.qZA(),t.TgZ(4,"div",16),t._uU(5),t.qZA()()()),2&a){const i=t.oxw(),e=i.index,n=i.$implicit;t.xp6(3),t.hij("Question ",e+1,": "),t.xp6(2),t.Oqu(n.question)}}function _(a,o){if(1&a&&(t.TgZ(0,"div",17)(1,"div",14)(2,"div",15),t._uU(3,"Answer: "),t.qZA(),t._UZ(4,"div",18),t.qZA()()),2&a){const i=t.oxw().$implicit;t.xp6(4),t.Q6J("innerHTML",i.answer,t.oJD)}}function b(a,o){1&a&&(t.ynx(0),t.TgZ(1,"ngb-panel"),t.YNc(2,v,6,2,"ng-template",11),t.YNc(3,_,5,1,"ng-template",12),t.qZA(),t.BQk())}let x=(()=>{var a;class o{constructor(e,n,l){this.api=e,this.router=n,this.route=l,this.page=10,this.actList=[],this.majorList=[],this.text_search="",this.law_search=0}ngOnInit(){this.routeParamSearchGet()}routeParamSearchGet(){this.route.queryParams.subscribe(e=>{this.text_search=e?.text??"",this.law_search=e?.law??0,console.log(e),this.getAllLaws()})}search(e){this.router.navigate([],{relativeTo:this.route,queryParams:{text:this.text_search,law:this.law_search}})}getAllLaws(){this.api.list("KNOW_YOUR_LAW_API",{text:this.text_search,slug:this.law_search}).subscribe(e=>{this.actList=e})}}return(a=o).\u0275fac=function(e){return new(e||a)(t.Y36(p.s),t.Y36(r.F0),t.Y36(r.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-law-list"]],decls:14,vars:3,consts:[[1,"container","page-container"],[1,"row"],[1,"col-12"],[3,"key","keyChange","search"],[1,"col-12","pb-3","law-list-accordion"],[1,"q-a-text"],[1,"q-a-btn"],[3,"closeOthers"],["lawListAcc","ngbAccordion"],[4,"ngFor","ngForOf"],[1,"col-12","law-list-pagination"],["ngbPanelTitle",""],["ngbPanelContent",""],[1,"container-fluid","p-0","question"],[1,"d-block","d-md-flex","flex-row","justify-content-start","align-items-start"],[1,"q-a-header","me-2"],[1,"q-a-content"],[1,"container-fluid","p-0","answer"],[1,"q-a-content",3,"innerHTML"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",1)(4,"div",2)(5,"app-search-box",3),t.NdJ("keyChange",function(d){return n.text_search=d})("search",function(){return n.search("text")}),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6),t._uU(9," Q/A "),t.qZA()(),t.TgZ(10,"ngb-accordion",7,8),t.YNc(12,b,4,0,"ng-container",9),t.qZA()(),t._UZ(13,"div",10),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("key",n.text_search),t.xp6(5),t.Q6J("closeOthers",!0),t.xp6(2),t.Q6J("ngForOf",n.actList))},dependencies:[g.sg,c.gY,c.Gk,c.Cu,c.gW,L.B],styles:[".law-list-accordion .q-a-text{padding-top:16px}  .law-list-accordion .q-a-text .q-a-btn{width:-moz-fit-content;width:fit-content;padding:8px 32px;color:#fff;background-color:green;border-radius:5px}  .law-list-accordion .accordion-item{border:none;padding:8px 0}  .law-list-accordion .accordion-item:last-child{padding:8px 0 0}  .law-list-accordion .accordion-item .question{font-size:16px;font-weight:700}  .law-list-accordion .accordion-item .answer{font-size:12px;font-weight:400}  .law-list-accordion .accordion-item .answer .q-a-header{font-size:16px}  .law-list-accordion .accordion-button{background-color:#fff;color:#a184d5;border-width:1px 1px 0 1px;border-style:solid;border-color:#000;display:flex;flex-flow:column nowrap;justify-content:center;align-items:flex-start;box-shadow:none;margin-bottom:0}  .law-list-accordion .accordion-button:focus{box-shadow:none}  .law-list-accordion .accordion-button:after{display:none}  .law-list-accordion .collapsed{background-color:#a184d5;color:#fff;border:1px solid #a184d5}  .law-list-accordion .accordion-body{border-width:0 1px 1px 1px;border-style:solid;border-color:#000}  .law-list-pagination .holder{display:flex;justify-content:center;align-items:center}  .law-list-pagination .holder .pagination .active{background-color:#a184d5;color:#fff}  .law-list-pagination .holder .pagination .page-link{color:#a184d5;background-color:#fff;cursor:pointer}"]}),o})();const y=function(a){return{law:a}};let m=(()=>{var a;class o{constructor(e,n,l){this.api=e,this.router=n,this.route=l}ngOnInit(){this.getDetails()}getDetails(){this.api.list("LAW_LIST_API",{},this.route.snapshot.paramMap.get("id")?this.route.snapshot.paramMap.get("id")+"/":"").subscribe(e=>{this.details=e})}}return(a=o).\u0275fac=function(e){return new(e||a)(t.Y36(p.s),t.Y36(r.F0),t.Y36(r.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-law-details"]],decls:12,vars:7,consts:[[1,"container","page-container","details-page"],[1,"row"],[1,"col-lg-4","col-md-6","col-sm-12"],[1,"details-img",3,"src"],[1,"col-lg-8","col-md-6","col-sm-12","details-content"],[1,"col-12","title","mb-4"],[1,"col-12","description",3,"innerHTML"],[1,"col-12"],[1,"btn","details-btn",3,"routerLink","queryParams"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",1)(6,"div",5),t._uU(7),t.qZA(),t._UZ(8,"div",6),t.TgZ(9,"div",7)(10,"button",8),t._uU(11," Know this law with lady justice "),t.qZA()()()()()()),2&e&&(t.xp6(3),t.Q6J("src",n.api.imagePath(null==n.details?null:n.details.thumbnail),t.LSH),t.xp6(4),t.Oqu(null==n.details?null:n.details.name),t.xp6(1),t.Q6J("innerHTML",null==n.details?null:n.details.description,t.oJD),t.xp6(2),t.Q6J("routerLink","../../law-list")("queryParams",t.VKq(5,y,null==n.details?null:n.details.slug)))},dependencies:[r.rH],styles:[".details-page[_ngcontent-%COMP%]   .details-img[_ngcontent-%COMP%]{width:100%;height:auto}.details-page[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#a184d5}.details-page[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .details-btn[_ngcontent-%COMP%]{background-color:#a184d5;color:#fff;padding:12px 24px}"]}),o})();var C=s(7124),T=s(1570),A=s(4793);const Z=[{path:"main-laws",component:f,title:"Major Laws"},{path:"law-list",component:x,title:"Laws"},{path:"main-laws/:id",component:m,title:""},{path:"law-list/:id",component:m,title:""},{path:"laws",component:(()=>{var a;class o{constructor(e,n,l){this.api=e,this.router=n,this.route=l,this.lawList=[]}ngOnInit(){this.getLaws()}getLaws(){this.api.list("LAW_LIST_API").subscribe(e=>{this.lawList=e?.map(n=>({...n,title:n?.name,id:n?.slug}))})}goTo(e){this.router.navigate(["../law-list"],{queryParams:{law:e?.id},relativeTo:this.route})}}return(a=o).\u0275fac=function(e){return new(e||a)(t.Y36(p.s),t.Y36(r.F0),t.Y36(r.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-laws"]],decls:4,vars:1,consts:[[1,"container","page-container"],[1,"row"],[1,"col-12"],[3,"items","search"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-navs",3),t.NdJ("search",function(d){return n.goTo(d)}),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("items",n.lawList))},dependencies:[A.k]}),o})(),title:""}];let M=(()=>{var a;class o{}return(a=o).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,r.Bz.forChild(Z),h.uH,c.Gs,C.W,T.D]}),o})()}}]);