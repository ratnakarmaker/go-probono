"use strict";(self.webpackChunkgo_probono_web=self.webpackChunkgo_probono_web||[]).push([[536],{4536:(y,g,a)=>{a.r(g),a.d(g,{SearchResultModule:()=>T});var c=a(6895),t=a(4650),m=a(8944),l=a(646),p=a(4793),d=a(3573),o=a(9837);function _(i,r){if(1&i){const n=t.EpF();t.TgZ(0,"app-grid-cards",9),t.NdJ("state_change",function(e){t.CHM(n);const u=t.oxw();return t.KtG(u.goTo(e))}),t.qZA()}if(2&i){const n=t.oxw();t.Q6J("items",null==n.search_result?null:n.search_result[n.current_tab_id])("c_class","col-xl-4 col-md-6 col-sm-12 p-3 law")}}function h(i,r){if(1&i&&(t.TgZ(0,"div",12)(1,"div",13)(2,"div",14),t._uU(3),t.qZA(),t.TgZ(4,"div",15),t._uU(5),t.qZA()()()),2&i){const n=t.oxw(),s=n.index,e=n.$implicit;t.xp6(3),t.hij("Question ",s+1,": "),t.xp6(2),t.Oqu(e.question)}}function v(i,r){if(1&i&&(t.TgZ(0,"div",16)(1,"div",13)(2,"div",14),t._uU(3,"Answer: "),t.qZA(),t._UZ(4,"div",17),t.qZA()()),2&i){const n=t.oxw().$implicit;t.xp6(4),t.Q6J("innerHTML",n.answer,t.oJD)}}function f(i,r){1&i&&(t.ynx(0),t.TgZ(1,"ngb-panel"),t.YNc(2,h,6,2,"ng-template",10),t.YNc(3,v,5,1,"ng-template",11),t.qZA(),t.BQk())}let b=(()=>{class i{constructor(n,s,e){this.api=n,this.router=s,this.route=e,this.navs=[{id:"laws",title:"Law"},{id:"kyls",title:"Q/A"},{id:"lawyers",title:"Lawyers"},{id:"events",title:"Events"},{id:"teams",title:"Our Team"}],this.current_tab_id="laws"}ngOnInit(){this.getRouteParameters()}getRouteParameters(){this.route.queryParams.subscribe(n=>{this.search(n?.text)})}search(n){this.api.list("GLOBAL_SEARCH_API",{},n+"/").subscribe(s=>{this.search_result={laws:s?.laws?.map(e=>({...e,image_src:e?.thumbnail,title:e?.name,description:e?.headline})),kyls:s?.kyls?.map(e=>({...e,image_src:e?.thumbnail,title:e?.name,description:e?.headline})),lawyers:[],events:s?.events?.map(e=>({...e,image_src:e?.thumbnail,title:e?.name,description:e?.brief_description})),teams:s?.teams?.map(e=>({...e,image_src:e?.thumbnail,title:e?.name,text_position:"outside"}))}})}goTo({data:s}){switch(this.current_tab_id){case"laws":this.router.navigate([`lady-justice/main-laws/${s?.slug}`]);break;case"events":this.router.navigate([`events/${s?.slug}`]);break;case"teams":this.router.navigate([`team-members/${s?.slug}`])}}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(m.s),t.Y36(l.F0),t.Y36(l.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-landing"]],decls:9,vars:5,consts:[[1,"container","page-container","pb-5","pt-5"],[1,"row"],[1,"col-lg-3","col-md-4","col-sm-12"],[3,"items","key","keyChange"],[1,"col-lg-9","col-md-8","col-sm-12","result-container"],[3,"items","c_class","state_change",4,"ngIf"],[3,"closeOthers"],["lawListAcc","ngbAccordion"],[4,"ngFor","ngForOf"],[3,"items","c_class","state_change"],["ngbPanelTitle",""],["ngbPanelContent",""],[1,"container-fluid","p-0","question"],[1,"d-flex","flex-row","justify-content-start","align-items-start"],[1,"q-a-header"],[1,"q-a-content"],[1,"container-fluid","p-0","answer"],[1,"q-a-content",3,"innerHTML"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-navs",3),t.NdJ("keyChange",function(u){return s.current_tab_id=u}),t.qZA()(),t.TgZ(4,"div",4),t.YNc(5,_,1,2,"app-grid-cards",5),t.TgZ(6,"ngb-accordion",6,7),t.YNc(8,f,4,0,"ng-container",8),t.qZA()()()()),2&n&&(t.xp6(3),t.Q6J("items",s.navs)("key",s.current_tab_id),t.xp6(2),t.Q6J("ngIf","laws"===s.current_tab_id||"events"===s.current_tab_id||"teams"===s.current_tab_id),t.xp6(1),t.Q6J("closeOthers",!0),t.xp6(2),t.Q6J("ngForOf",null==s.search_result?null:s.search_result[s.current_tab_id]))},dependencies:[c.sg,c.O5,p.k,d.v,o.gY,o.Gk,o.Cu,o.gW],styles:[".law{height:250px}  .law .grid-content{z-index:1}.result-container[_ngcontent-%COMP%]{margin-top:-30px}"]}),i})();var w=a(1570);const C=[{path:"",component:b,title:""}];let T=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez,l.Bz.forChild(C),w.D,o.Gs]}),i})()}}]);