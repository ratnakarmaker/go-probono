"use strict";(self.webpackChunkgo_probono_web=self.webpackChunkgo_probono_web||[]).push([[592],{4205:(P,p,i)=>{i.d(p,{n:()=>o});var t=i(4650),u=i(8944),l=i(6895),g=i(9837),m=i(2216);function C(e,r){if(1&e&&t._UZ(0,"fa-icon",14),2&e){const n=t.oxw().$implicit;t.Q6J("icon",null==n?null:n.icon)}}function O(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){const f=t.CHM(n).$implicit,h=t.oxw(2);return t.KtG(h.selected.emit(f))}),t.YNc(1,C,1,1,"fa-icon",13),t._uU(2),t.qZA()}if(2&e){const n=r.$implicit;let c;t.Q6J("ngClass",null==n?null:n.class)("ngbTooltip",null==n?null:n.tooltip),t.xp6(1),t.Q6J("ngIf",null==n?null:n.icon),t.xp6(1),t.hij(" ",null!==(c=null==n?null:n.text)&&void 0!==c?c:""," ")}}function M(e,r){if(1&e&&(t.ynx(0),t._UZ(1,"div",4),t.TgZ(2,"div",5)(3,"div",6),t._uU(4),t.qZA(),t.TgZ(5,"div",7),t._uU(6),t.qZA(),t.TgZ(7,"div",8),t._UZ(8,"span",9),t.qZA(),t.TgZ(9,"div",10),t.YNc(10,O,3,4,"button",11),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(4),t.Oqu(null==n.item?null:n.item.title),t.xp6(2),t.Oqu(null==n.item?null:n.item.subtitle),t.xp6(2),t.Q6J("innerHTML",null==n.item?null:n.item.description,t.oJD),t.xp6(2),t.Q6J("ngForOf",n.buttons)}}function s(e,r){if(1&e&&(t.TgZ(0,"span",18),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.hij(" ",n," ")}}function d(e,r){if(1&e&&(t.TgZ(0,"div",15)(1,"span",16),t._uU(2),t.qZA(),t.YNc(3,s,2,1,"span",17),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(null==n.item?null:n.item.title),t.xp6(1),t.Q6J("ngForOf",null==n.item?null:n.item.subtitles)}}const a=function(e){return{"background-image":e}};let o=(()=>{var e;class r{constructor(c){this.api=c,this.buttons=[],this.c_class="",this.text_position="inside",this.selected=new t.vpe}}return(e=r).\u0275fac=function(c){return new(c||e)(t.Y36(u.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-custom-card"]],inputs:{item:"item",buttons:"buttons",c_class:"c_class",text_position:"text_position"},outputs:{selected:"selected"},decls:4,vars:6,consts:[[2,"width","100% !important",3,"ngClass","click"],[1,"grid-card",3,"ngStyle"],[4,"ngIf"],["class","card-additional",4,"ngIf"],[1,"grid-spacer"],[1,"grid-content","pt-3","pb-lg-3","pb-md-1","pb-sm-0"],[1,"title","text-center"],[1,"subtitle","text-center","mt-lg-3","mt-md-1","mt-sm-0"],[1,"description","text-center","mt-lg-3","mt-md-1","mt-sm-0"],[1,"content",3,"innerHTML"],[1,"actions","d-flex","justify-content-around","align-items-center","ps-4","pe-4","pb-2","mt-3"],["class","btn",3,"ngClass","ngbTooltip","click",4,"ngFor","ngForOf"],[1,"btn",3,"ngClass","ngbTooltip","click"],[3,"icon",4,"ngIf"],[3,"icon"],[1,"card-additional"],[1,"title"],["class","subtitle",4,"ngFor","ngForOf"],[1,"subtitle"]],template:function(c,_){1&c&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return _.buttons.length?"":_.selected.emit({})}),t.TgZ(1,"div",1),t.YNc(2,M,11,4,"ng-container",2),t.qZA(),t.YNc(3,d,4,2,"div",3),t.qZA()),2&c&&(t.Q6J("ngClass",_.c_class),t.xp6(1),t.Q6J("ngStyle",t.VKq(4,a,"url("+_.api.imagePath(null==_.item?null:_.item.image_src)+")")),t.xp6(1),t.Q6J("ngIf","inside"===_.text_position),t.xp6(1),t.Q6J("ngIf","outside"===_.text_position))},dependencies:[l.mk,l.sg,l.O5,l.PC,g._L,m.BN],styles:[".grid-card[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:5px;box-shadow:0 0 10px 3px #b4b4b4;overflow:hidden;position:relative;background-position:center;background-size:cover;background-repeat:no-repeat;display:block}.grid-card[_ngcontent-%COMP%]   .grid-spacer[_ngcontent-%COMP%]{height:0%;white-space:nowrap;width:100%;transition-duration:1s}.grid-card[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]{height:100%;width:100%;background:rgba(92,117,148,.95);color:#fff;transition-duration:1s;display:flex;flex-flow:column nowrap;justify-content:space-around;align-items:stretch}.grid-card[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{white-space:nowrap;font-size:16px;font-weight:700}.grid-card[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:15px}.grid-card[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{height:45%;padding:4px}@media screen and (max-width: 767px){.grid-card[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{height:100%}}.grid-card[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:80%;overflow:hidden;display:block;font-size:14px}.grid-card[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-right:10%;text-align:end;cursor:pointer}.animation[_ngcontent-%COMP%]:hover   .grid-spacer[_ngcontent-%COMP%]{height:20%;margin-bottom:0}.animation[_ngcontent-%COMP%]:hover   .grid-content[_ngcontent-%COMP%]{background-color:#686195}.animation[_ngcontent-%COMP%]   .grid-spacer[_ngcontent-%COMP%]{height:100%;white-space:nowrap;width:100%;margin-bottom:-60px;transition-duration:1s}.animation[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]{display:block;height:100%;width:100%;background-color:#686195;color:#fff;transition-duration:1s}.animation[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{white-space:nowrap;font-size:16px;font-weight:700}.animation[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:15px}.animation[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{height:40%;padding:4px}.animation[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:80%;overflow:hidden;display:block;font-size:14px}.animation[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-right:10%;text-align:end;cursor:pointer}.card-additional[_ngcontent-%COMP%]{padding-top:8px;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center}.card-additional[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.card-additional[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:15px}"]}),r})()},3573:(P,p,i)=>{i.d(p,{v:()=>M});var t=i(4650),u=i(7579),l=i(8944),g=i(6895),m=i(4205);const C=function(){return{selected:!0}};function O(s,d){if(1&s){const a=t.EpF();t.TgZ(0,"div",3)(1,"app-custom-card",4),t.NdJ("selected",function(e){const n=t.CHM(a).$implicit,c=t.oxw();return t.KtG(c.state_change.emit({action:null==e?null:e.action,data:n}))}),t.qZA()()}if(2&s){const a=d.$implicit,o=t.oxw();let e;t.Tol(o.c_class),t.Q6J("ngClass",t.DdM(8,C)),t.xp6(1),t.Q6J("item",a)("buttons",o.buttons)("c_class",o.c_class)("text_position",null!==(e=null==a?null:a.text_position)&&void 0!==e?e:"inside")}}let M=(()=>{var s;class d{constructor(o){this.api=o,this.items=[],this.c_class="",this.buttons=[],this.key=null,this.keyChange=new t.vpe,this.reset=new u.x,this.state_change=new t.vpe}ngOnChanges(o){}}return(s=d).\u0275fac=function(o){return new(o||s)(t.Y36(l.s))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-grid-cards"]],inputs:{items:"items",c_class:"c_class",buttons:"buttons",key:"key",reset:"reset"},outputs:{keyChange:"keyChange",state_change:"state_change"},features:[t.TTD],decls:3,vars:1,consts:[[1,"container-fluid","p-0"],[1,"row"],[3,"ngClass","class",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"item","buttons","c_class","text_position","selected"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,O,2,9,"div",2),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",e.items))},dependencies:[g.mk,g.sg,m.n]}),d})()}}]);