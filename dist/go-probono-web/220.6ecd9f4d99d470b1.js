"use strict";(self.webpackChunkgo_probono_web=self.webpackChunkgo_probono_web||[]).push([[220],{220:(et,_,c)=>{c.r(_),c.d(_,{UserProfileModule:()=>W});var s=c(6895),t=c(4650),g=c(8944),r=c(433);let C=(()=>{var o;class l{constructor(){this.c_id="",this.label="",this.placeholder="",this.type="",this.controlChange=new t.vpe}ngOnChanges(n){n?.control?.currentValue&&(this.control instanceof r.TO?(this.inp_val=this.control.value,this.control?.valueChanges?.subscribe(e=>{this.inp_val=e})):this.inp_val=this.control)}changeVal(n){this.control instanceof r.TO&&this.control.setValue(n?.target?.value),this.controlChange.emit(n?.target?.value)}}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-input"]],inputs:{c_id:"c_id",label:"label",placeholder:"placeholder",type:"type",control:"control"},outputs:{controlChange:"controlChange"},features:[t.TTD],decls:5,vars:6,consts:[[1,"form-group"],[1,"input-label",3,"for"],[1,"form-control","input-field",3,"type","id","ngModel","placeholder","ngModelChange","input"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.qZA(),t.TgZ(3,"input",2),t.NdJ("ngModelChange",function(p){return e.inp_val=p})("input",function(p){return e.changeVal(p)}),t.qZA(),t._UZ(4,"div"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("for",e.c_id),t.xp6(1),t.Oqu(e.label),t.xp6(1),t.Q6J("type",e.type)("id",e.c_id)("ngModel",e.inp_val)("placeholder",e.placeholder))},dependencies:[r.Fj,r.JJ,r.On],styles:[".form-group[_ngcontent-%COMP%]{padding:0 0 12px}.form-group[_ngcontent-%COMP%]   .input-label[_ngcontent-%COMP%]{font-weight:700;font-weight:600;font-size:26px;margin:0 0 4px}.form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{border:2px solid #858585;border-radius:5px;padding:20px}.form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus{box-shadow:none;border:1px solid #A184D5}.form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus   .input-label[_ngcontent-%COMP%]{color:#a184d5}.form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus-visible{box-shadow:none;border:1px solid #A184D5}.form-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus-visible   .input-label[_ngcontent-%COMP%]{color:#a184d5}"]}),l})();function M(o,l){if(1&o&&(t.TgZ(0,"option",5),t._uU(1),t.qZA()),2&o){const i=l.$implicit;t.Q6J("value",null==i?null:i.opt_key),t.xp6(1),t.Oqu(null==i?null:i.opt_text)}}let O=(()=>{var o;class l{constructor(){this.c_id="",this.label="",this.placeholder="",this.items=[],this.controlChange=new t.vpe}ngOnChanges(n){n?.control?.currentValue&&(this.control instanceof r.TO?(this.sel_val=this.control.value,this.control?.valueChanges?.subscribe(e=>{this.sel_val=e})):this.sel_val=this.control)}changeVal(n){this.control instanceof r.TO&&this.control.setValue(n?.target?.value),this.controlChange.emit(n?.target?.value)}}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-select"]],inputs:{c_id:"c_id",label:"label",placeholder:"placeholder",items:"items",control:"control"},outputs:{controlChange:"controlChange"},features:[t.TTD],decls:7,vars:6,consts:[[1,"form-group"],[1,"select-label",3,"for"],[1,"form-select","select-field",3,"id","ngModel","ngModelChange","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.qZA(),t.TgZ(3,"select",2),t.NdJ("ngModelChange",function(p){return e.sel_val=p})("change",function(p){return e.changeVal(p)}),t.TgZ(4,"option",3),t._uU(5),t.qZA(),t.YNc(6,M,2,2,"option",4),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("for",e.c_id),t.xp6(1),t.Oqu(e.label),t.xp6(1),t.Q6J("id",e.c_id)("ngModel",e.sel_val),t.xp6(2),t.Oqu(e.placeholder),t.xp6(1),t.Q6J("ngForOf",e.items))},dependencies:[s.sg,r.YN,r.Kr,r.EJ,r.JJ,r.On],styles:[".form-group[_ngcontent-%COMP%]{padding:0 0 12px}.form-group[_ngcontent-%COMP%]   .select-label[_ngcontent-%COMP%]{font-weight:700;font-weight:600;font-size:26px;margin:0 0 4px}.form-group[_ngcontent-%COMP%]   .select-field[_ngcontent-%COMP%]{border:2px solid #858585;border-radius:5px;padding:20px}.form-group[_ngcontent-%COMP%]   .select-field[_ngcontent-%COMP%]:focus{box-shadow:none;border:1px solid #A184D5}.form-group[_ngcontent-%COMP%]   .select-field[_ngcontent-%COMP%]:focus   .select-label[_ngcontent-%COMP%]{color:#a184d5}.form-group[_ngcontent-%COMP%]   .select-field[_ngcontent-%COMP%]:focus-visible{box-shadow:none;border:1px solid #A184D5}.form-group[_ngcontent-%COMP%]   .select-field[_ngcontent-%COMP%]:focus-visible   .select-label[_ngcontent-%COMP%]{color:#a184d5}"]}),l})(),b=(()=>{var o;class l{constructor(n,e){this.fb=n,this.api=e,this.genderList=[{opt_key:"Male",opt_text:"Male"},{opt_key:"Female",opt_text:"Female"},{opt_key:"Transgender",opt_text:"Transgender"}],this.c_change=new t.vpe,this.dataForm=n.group({name:[""],email:[""],gender:[""],street_address:[""],mobile:[""],apartment:[""],city:[""],country:[""],dob:[""],password:[""],latitude:[""],longitude:[""]})}ngOnChanges(n){n?.profile?.currentValue&&this.dataForm.patchValue(this.profile)}ngOnInit(){}save(){this.api.post("PROFILE_UPDATE_API",this.dataForm.value).subscribe(n=>{n?.success&&this.back()})}back(){this.c_change.emit()}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(g.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-profile"]],inputs:{profile:"profile"},outputs:{c_change:"c_change"},features:[t.TTD],decls:28,vars:40,consts:[[1,"container-fluid","p-5","profile-edit"],[1,"d-flex","justify-content-between","align-items-center"],[1,"header"],[1,"profile-basic-info"],[1,"col-12"],[1,"row",3,"formGroup","submit"],[1,"col-md-6"],[3,"control","type","label","c_id","placeholder"],[3,"control","label","c_id","placeholder","items"],[1,"col-md-12"],[3,"control","label","c_id","placeholder"],[1,"col-12","d-flex","justify-content-start","align-items-center","mt-3"],[1,"btn","cancel","px-4","me-3"],["type","submit",1,"btn","btn-primary","save","px-4"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"Edit Profile"),t.qZA(),t._UZ(4,"div",3),t.qZA(),t.TgZ(5,"div",4)(6,"form",5),t.NdJ("submit",function(){return e.save()}),t.TgZ(7,"div",6),t._UZ(8,"app-input",7),t.qZA(),t.TgZ(9,"div",6),t._UZ(10,"app-select",8),t.qZA(),t.TgZ(11,"div",9),t._UZ(12,"app-input",7),t.qZA(),t.TgZ(13,"div",9),t._UZ(14,"app-input",7),t.qZA(),t.TgZ(15,"div",9),t._UZ(16,"app-input",7),t.qZA(),t.TgZ(17,"div",6),t._UZ(18,"app-select",10),t.qZA(),t.TgZ(19,"div",6),t._UZ(20,"app-input",7),t.qZA(),t.TgZ(21,"div",9),t._UZ(22,"app-input",7),t.qZA(),t.TgZ(23,"div",11)(24,"button",12),t._uU(25,"Cancel"),t.qZA(),t.TgZ(26,"button",13),t._uU(27,"Save"),t.qZA()()()()()),2&n&&(t.xp6(6),t.Q6J("formGroup",e.dataForm),t.xp6(2),t.Q6J("control",e.dataForm.get("name"))("type","text")("label","Name")("c_id","name")("placeholder","Enter Name"),t.xp6(2),t.Q6J("control",e.dataForm.get("gender"))("label","Gender")("c_id","gender")("placeholder","Select Gender")("items",e.genderList),t.xp6(2),t.Q6J("control",e.dataForm.get("email"))("type","text")("label","Email")("c_id","email")("placeholder","Enter Email"),t.xp6(2),t.Q6J("control",e.dataForm.get("street_address"))("type","text")("label","Address")("c_id","street_address")("placeholder","Enter Address"),t.xp6(2),t.Q6J("control",e.dataForm.get("mobile"))("type","text")("label","Contact Number")("c_id","mobile")("placeholder","Enter Contact Number"),t.xp6(2),t.Q6J("control",e.dataForm.get("city"))("label","City")("c_id","city")("placeholder","Select City"),t.xp6(2),t.Q6J("control",e.dataForm.get("dob"))("type","date")("label","Date of Birth")("c_id","dob")("placeholder","Enter Contact Number"),t.xp6(2),t.Q6J("control",e.dataForm.get("password"))("type","password")("label","Password")("c_id","password")("placeholder","Enter Contact Number"))},dependencies:[r._Y,r.JL,r.sg,C,O],styles:[".profile-edit[_ngcontent-%COMP%]{box-shadow:0 0 15px #00000040}.profile-edit[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:45px;font-weight:700}.profile-edit[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;border:16px solid rgba(6,1,180,.1490196078)}.profile-edit[_ngcontent-%COMP%]   .profile-basic-info[_ngcontent-%COMP%]{position:relative;width:auto}.profile-edit[_ngcontent-%COMP%]   .img-upload[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;background-color:#702fa0;border-radius:50%;padding:9px;border:1px solid white}.profile-edit[_ngcontent-%COMP%]   .imgUpload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.profile-edit[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{background-color:#686195;color:#fff}.profile-edit[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{border:1px solid #686195;color:#6f2fa1}"]}),l})();function P(o,l){if(1&o&&(t.ynx(0),t._UZ(1,"img",14),t.BQk()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("src",i.api.imagePath(null==i.profile?null:i.profile.image),t.LSH)}}function v(o,l){1&o&&t._UZ(0,"img",15)}let Z=(()=>{var o;class l{constructor(n){this.api=n,this.c_change=new t.vpe}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(g.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-profile"]],inputs:{profile:"profile"},outputs:{c_change:"c_change"},decls:57,vars:9,consts:[[1,"container-fluid","p-0","profile-view"],[1,"row","pt-3","pb-5"],[1,"col-12","d-flex","justify-content-center","align-items-center","mb-5"],[1,"header"],[1,"col-md-4","col-sm-12","img-section"],[1,"row"],[1,"profile-basic-info"],[4,"ngIf","ngIfElse"],["noImage",""],[1,"col-12","name","mt-3"],[1,"col-12","phone","mt-2"],[1,"col-12","d-flex","justify-content-center"],[1,"btn","btn-primary","update-btn",3,"click"],[1,"col-md-8","col-sm-12","data-section"],[1,"profile-pic",3,"src"],["src","assets/icon/plus-chara.jpg",1,"profile-pic"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4,"Account Information"),t.qZA()(),t.TgZ(5,"div",4)(6,"div",5)(7,"div",6),t.YNc(8,P,2,1,"ng-container",7),t.YNc(9,v,1,0,"ng-template",null,8,t.W1O),t.qZA(),t.TgZ(11,"div",9)(12,"h2"),t._uU(13),t.qZA()(),t.TgZ(14,"div",10)(15,"p"),t._uU(16),t.qZA()(),t.TgZ(17,"div",11)(18,"button",12),t.NdJ("click",function(){return e.c_change.emit()}),t._uU(19," Edit Profile "),t.qZA()()()(),t.TgZ(20,"div",13)(21,"div",5)(22,"table")(23,"tr")(24,"th"),t._uU(25,"Full Name:"),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.qZA()(),t.TgZ(28,"tr")(29,"th"),t._uU(30,"Email:"),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.qZA()(),t.TgZ(33,"tr")(34,"th"),t._uU(35,"Address:"),t.qZA(),t.TgZ(36,"td"),t._uU(37),t.qZA()(),t.TgZ(38,"tr")(39,"th"),t._uU(40,"Contact Number:"),t.qZA(),t.TgZ(41,"td"),t._uU(42),t.qZA()(),t.TgZ(43,"tr")(44,"th"),t._uU(45,"Gender:"),t.qZA(),t.TgZ(46,"td"),t._uU(47),t.qZA()(),t.TgZ(48,"tr")(49,"th"),t._uU(50,"District :"),t.qZA(),t.TgZ(51,"td"),t._uU(52,"Gazipur"),t.qZA()(),t.TgZ(53,"tr")(54,"th"),t._uU(55,"Date of Birth :"),t.qZA(),t._UZ(56,"td"),t.qZA()()()()()()),2&n){const a=t.MAs(10);t.xp6(8),t.Q6J("ngIf",null==e.profile?null:e.profile.image)("ngIfElse",a),t.xp6(5),t.hij(" ",(null==e.profile?null:e.profile.name)||"Full Name",""),t.xp6(3),t.Oqu((null==e.profile?null:e.profile.mobile)||"01XXXXXXXXX"),t.xp6(11),t.Oqu(null==e.profile?null:e.profile.name),t.xp6(5),t.Oqu(null==e.profile?null:e.profile.email),t.xp6(5),t.Oqu(null==e.profile?null:e.profile.street_address),t.xp6(5),t.Oqu(null==e.profile?null:e.profile.mobile),t.xp6(5),t.Oqu(null==e.profile?null:e.profile.gender)}},dependencies:[s.O5],styles:['.profile-view[_ngcontent-%COMP%]{box-shadow:0 0 10px 4px #d6d6d6}.profile-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#6f2fa1}.profile-view[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]:after{content:"";background-color:#686195;display:flex;width:300px;height:2px;position:absolute;margin-left:-40px}.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{width:143px;height:143px;border-radius:50%;border:16px solid #686195}.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   .profile-basic-info[_ngcontent-%COMP%]{margin:0 auto;position:relative;width:auto}.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   .img-upload[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;background-color:#686195;border-radius:50%;padding:13px;border:1px solid white}.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;font-weight:700;text-align:center;color:#000}.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{font-size:30px;font-weight:400;text-align:center;color:#000}.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   .update-btn[_ngcontent-%COMP%]{padding:10px 69px}.profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]{border-left:3px solid #686195;padding:0 0 0 10%}.profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:60px}.profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#000;width:30%}.profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#858585}']}),l})();function x(o,l){if(1&o){const i=t.EpF();t.TgZ(0,"app-edit-profile",1),t.NdJ("c_change",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.swapState("view"))}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("profile",i.profile)}}function y(o,l){if(1&o){const i=t.EpF();t.TgZ(0,"app-view-profile",1),t.NdJ("c_change",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.swapState("edit"))}),t.qZA()}if(2&o){const i=t.oxw();t.Q6J("profile",i.profile)}}let w=(()=>{var o;class l{constructor(n){this.api=n,this.profile_state="view"}ngOnInit(){this.getProfile()}getProfile(){this.api.list("PROFILE_API").subscribe(n=>{this.profile=n})}swapState(n){this.profile_state=n,this.getProfile()}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(g.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile"]],decls:2,vars:2,consts:[[3,"profile","c_change",4,"ngIf"],[3,"profile","c_change"]],template:function(n,e){1&n&&(t.YNc(0,x,1,1,"app-edit-profile",0),t.YNc(1,y,1,1,"app-view-profile",0)),2&n&&(t.Q6J("ngIf","edit"===e.profile_state),t.xp6(1),t.Q6J("ngIf","view"===e.profile_state))},dependencies:[s.O5,b,Z]}),l})();var d=c(646),T=c(6578),A=c(4793);const q=function(o){return{bg:o}};let U=(()=>{var o;class l{constructor(n,e,a){this.router=n,this.route=e,this.storage=a,this.navs=[{id:1,title:"Profile"},{id:2,title:"My Appointments"},{id:3,title:"Call History"},{id:4,title:"Logout"}],this.current_nav_id=1}routeChange(){switch(this.current_nav_id){case 1:this.router.navigate(["user"]);break;case 2:this.router.navigate(["appointments"],{relativeTo:this.route});break;case 3:this.router.navigate(["call-history"],{relativeTo:this.route});break;case 4:this.storage.clearStorage(),this.router.navigate([""])}}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(d.F0),t.Y36(d.gz),t.Y36(T.V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-landing"]],decls:7,vars:5,consts:[[1,"row","w-100"],[1,"col-lg-3","col-md-4","col-sm-12"],[3,"items","key","keyChange","search"],[1,"col-lg-9","col-md-8","col-sm-12","result-container",3,"ngClass"]],template:function(n,e){1&n&&(t.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"app-navs",2),t.NdJ("keyChange",function(p){return e.current_nav_id=p})("search",function(){return e.routeChange()}),t.qZA()(),t.TgZ(4,"div",3)(5,"div"),t._UZ(6,"router-outlet"),t.qZA()()()()),2&n&&(t.xp6(3),t.Q6J("items",e.navs)("key",e.current_nav_id),t.xp6(1),t.Q6J("ngClass",t.VKq(3,q,"/profile/appointments"==e.router.url)))},dependencies:[s.mk,d.lC,A.k],styles:[".result-container[_ngcontent-%COMP%]{padding:40px}.bg[_ngcontent-%COMP%]{background-color:#f1f2fa}  .nav-container{height:100%}"]}),l})();var J=c(1570);function F(o,l){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",7),t.qZA(),t.TgZ(5,"td",8),t._uU(6),t.qZA(),t.TgZ(7,"td",8),t._uU(8),t.qZA(),t.TgZ(9,"td",8),t._uU(10),t.qZA(),t.TgZ(11,"td",8),t._uU(12),t.qZA()()),2&o){const i=l.$implicit,n=l.index,e=t.oxw();t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Q6J("src",e.api.imagePath(null==i||null==i.lawyer?null:i.lawyer.image),t.LSH),t.xp6(2),t.Oqu(null==i||null==i.lawyer?null:i.lawyer.name),t.xp6(2),t.Oqu(null==i||null==i.lawyer?null:i.lawyer.mobile),t.xp6(2),t.Oqu(null==i?null:i.chosen_date),t.xp6(2),t.Oqu(null==i?null:i.status)}}let k=(()=>{var o;class l{constructor(n,e,a){this.api=n,this.router=e,this.route=a,this.appointmentList=[]}ngOnInit(){this.getAppointmentList()}getAppointmentList(){this.api.list("USER_APPOINTMENT_API").subscribe(n=>{this.appointmentList=n})}details(n){this.router.navigate([`${n?.id}`],{relativeTo:this.route})}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(g.s),t.Y36(d.F0),t.Y36(d.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-appointments"]],decls:22,vars:1,consts:[[1,"container","page-container","my-appointment"],[1,"row"],[1,"text-white","text-center"],[1,"dataTable","table-responsive"],[1,"table"],[1,"text-center"],[4,"ngFor","ngForOf"],["alt","",1,"userAvatar",3,"src"],[1,"dataItem"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Appointment List"),t.qZA(),t.TgZ(4,"div",3)(5,"table",4)(6,"thead")(7,"tr")(8,"th"),t._uU(9,"Sl"),t.qZA(),t.TgZ(10,"th",5),t._uU(11,"Profile"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Lawyer"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Phone no"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Chosen Date"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Status"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,F,13,6,"tr",6),t.qZA()()()()()),2&n&&(t.xp6(21),t.Q6J("ngForOf",e.appointmentList))},dependencies:[s.sg],styles:[".my-appointment[_ngcontent-%COMP%]{box-shadow:0 0 10px #00000040;background:#686195;border-radius:5px;padding:57px 150px}.my-appointment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px;font-weight:500;text-decoration:underline;text-underline-offset:20px}.my-appointment[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{margin-top:62px}.my-appointment[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{color:#fff}.my-appointment[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .userAvatar[_ngcontent-%COMP%]{height:55px;width:55px;border-radius:100px;display:block;margin:0 auto}.my-appointment[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .dataItem[_ngcontent-%COMP%]{vertical-align:middle}.my-appointment[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:16px;font-weight:500;border-radius:6px;border:none;padding:6px 14px;color:#6f2fa1;display:block;margin:0 auto}"]}),l})();function L(o,l){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()),2&o){const i=l.$implicit;t.xp6(2),t.Oqu(null==i?null:i.received_by),t.xp6(2),t.Oqu(t.xi3(5,4,null==i?null:i.created_at,"d MMMM y")),t.xp6(3),t.hij("",null==i?null:i.minutes," minutes"),t.xp6(2),t.Oqu(null==i?null:i.comments)}}let N=(()=>{var o;class l{constructor(n){this.api=n,this.callHistory=[]}ngOnInit(){this.getCallHistory()}getCallHistory(){this.api.list("CALL_HISTORY_API").subscribe(n=>{this.callHistory=n})}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(g.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-call-history"]],decls:19,vars:1,consts:[[1,"container","paymentHistoryTable","page-container"],[1,"row","mainBody","p-5"],[1,"heading"],[1,"text-white","text-center"],[1,"dataTable"],[1,"table","table-bordered","text-center"],[4,"ngFor","ngForOf"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Call History"),t.qZA()(),t.TgZ(5,"div",4)(6,"table",5)(7,"thead")(8,"tr")(9,"th"),t._uU(10,"Received By"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Date"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Duration"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Comments"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,L,10,7,"tr",6),t.qZA()()()()()),2&n&&(t.xp6(18),t.Q6J("ngForOf",e.callHistory))},dependencies:[s.sg,s.uU],styles:[".paymentHistoryTable[_ngcontent-%COMP%]{margin-top:28px}.paymentHistoryTable[_ngcontent-%COMP%]   .mainBody[_ngcontent-%COMP%]{background:#686195;box-shadow:0 0 10px #00000040;border-radius:5px;display:flex;justify-content:center}.paymentHistoryTable[_ngcontent-%COMP%]   .mainBody[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{width:70%;text-align:center}.paymentHistoryTable[_ngcontent-%COMP%]   .mainBody[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px;font-weight:500;text-decoration:underline;text-underline-offset:20px}.paymentHistoryTable[_ngcontent-%COMP%]   .mainBody[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{margin-top:30px;font-size:24px;font-weight:400}.paymentHistoryTable[_ngcontent-%COMP%]   .mainBody[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]{margin-top:31px}.paymentHistoryTable[_ngcontent-%COMP%]   .mainBody[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{color:#fff}.paymentHistoryTable[_ngcontent-%COMP%]   .mainBody[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .userAvatar[_ngcontent-%COMP%]{height:55px;width:55px;border-radius:100px;display:block;margin:0 auto}.paymentHistoryTable[_ngcontent-%COMP%]   .mainBody[_ngcontent-%COMP%]   .dataTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:16px;font-weight:500;border-radius:6px;border:none;padding:6px 14px;color:#6f2fa1;display:block;margin:0 auto}"]}),l})();var Q=c(7124),S=c(2216);const I=["autocomplete_input"],E=["autocomplete_options"];function H(o,l){if(1&o){const i=t.EpF();t.TgZ(0,"div",12),t.NdJ("click",function(){const a=t.CHM(i).$implicit,p=t.oxw();return t.KtG(p.setValue(a))}),t._uU(1),t._UZ(2,"fa-icon",13),t.qZA()}if(2&o){const i=l.$implicit,n=t.oxw();t.xp6(1),t.hij(" ",null==i?null:i[n.view_control]," ")}}function Y(o,l){if(1&o){const i=t.EpF();t.ynx(0),t.TgZ(1,"label",15)(2,"input",16),t.NdJ("input",function(){t.CHM(i);const e=t.oxw().$implicit,a=t.oxw();return t.KtG(a.setValue(e))}),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA()(),t.BQk()}if(2&o){const i=t.oxw(),n=i.index,e=i.$implicit,a=t.oxw();t.xp6(1),t.Q6J("for",n+"_option"),t.xp6(1),t.Q6J("id",n+"_option")("checked",!!a.input_values.has((null==e?null:e[a.value_control])+"")),t.xp6(2),t.hij(" ",null==e?null:e[a.view_control]," ")}}function D(o,l){if(1&o&&(t.ynx(0),t.YNc(1,Y,5,4,"ng-container",14),t.BQk()),2&o){const i=l.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.optionShower(i))}}let B=(()=>{var o;class l{constructor(){this.control=null,this.id="",this.label="",this.dataList=[],this.value_control="",this.view_control="",this.input_field=null,this.select_options=null,this.controlChange=new t.vpe,this.search_text="",this.input_values=new Map,this.option_class="hide-option",this.selected_list=[]}onGlobalClick(n){this.option_class=this.input_field?.nativeElement?.contains(n?.target)||this.select_options?.nativeElement?.contains(n?.target)?"show-option":"hide-option"}optionShower(n){return!this.search_text||n?.[this.view_control]?.toLowerCase()?.includes(this.search_text.toLowerCase())}setValue(n){this.input_values.has(`${n?.[this.value_control]}`)?this.input_values.delete(`${n?.[this.value_control]}`):this.input_values.set(`${n?.[this.value_control]}`,n),this.selected_list=Array.from(this.input_values.values()),this.control instanceof r.TO?this.control.setValue(Array.from(this.input_values.keys())):this.controlChange.emit(Array.from(this.input_values.keys()))}clearAll(){this.input_values.clear(),this.selected_list=[],this.control instanceof r.TO?this.control.setValue([]):this.controlChange.emit([])}}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-multi-select"]],viewQuery:function(n,e){if(1&n&&(t.Gf(I,5),t.Gf(E,5)),2&n){let a;t.iGM(a=t.CRH())&&(e.input_field=a.first),t.iGM(a=t.CRH())&&(e.select_options=a.first)}},hostBindings:function(n,e){1&n&&t.NdJ("click",function(p){return e.onGlobalClick(p)},!1,t.evT)},inputs:{control:"control",id:"id",label:"label",dataList:"dataList",value_control:"value_control",view_control:"view_control"},outputs:{controlChange:"controlChange"},decls:13,vars:8,consts:[[1,"form-group","autocomplete-form"],[3,"for"],[1,"full-box"],[1,"multi-select",3,"click"],["autocomplete_input",""],["class","single-select",3,"click",4,"ngFor","ngForOf"],["type","text","placeholder","Enter search text","autocomplete","off",1,"search-field",3,"ngModel","id","ngModelChange"],[1,"clear-field"],["icon","xmark",3,"click"],[1,"option-holder",3,"id","ngClass"],["autocomplete_options",""],[4,"ngFor","ngForOf"],[1,"single-select",3,"click"],["icon","xmark"],[4,"ngIf"],[1,"single-option",3,"for"],["type","checkbox",1,"me-2",3,"id","checked","input"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"label",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2)(4,"div",3,4),t.NdJ("click",function(){return null==e.input_field?null:e.input_field.nativeElement.focus()}),t.YNc(6,H,3,1,"div",5),t.TgZ(7,"input",6),t.NdJ("ngModelChange",function(p){return e.search_text=p}),t.qZA()(),t.TgZ(8,"div",7)(9,"fa-icon",8),t.NdJ("click",function(){return e.clearAll()}),t.qZA()()(),t.TgZ(10,"div",9,10),t.YNc(12,D,2,1,"ng-container",11),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("for",e.id),t.xp6(1),t.Oqu(e.label),t.xp6(4),t.Q6J("ngForOf",e.selected_list),t.xp6(1),t.Q6J("ngModel",e.search_text)("id","custom-autocomplete-input"+e.id),t.xp6(3),t.Q6J("id","custom-autocomplete-options"+e.id)("ngClass",e.option_class),t.xp6(2),t.Q6J("ngForOf",e.dataList))},dependencies:[s.mk,s.sg,s.O5,S.BN,r.Fj,r.JJ,r.On],styles:[".autocomplete-form[_ngcontent-%COMP%]{position:relative}.autocomplete-form[_ngcontent-%COMP%]   .full-box[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;border:1px solid black}.autocomplete-form[_ngcontent-%COMP%]   .full-box[_ngcontent-%COMP%]   .clear-field[_ngcontent-%COMP%]{width:20px;height:20px;display:flex;justify-content:center;align-items:center;padding-top:4px;cursor:pointer}.autocomplete-form[_ngcontent-%COMP%]   .full-box[_ngcontent-%COMP%]   .multi-select[_ngcontent-%COMP%]{width:95%;display:flex;justify-content:flex-start;flex-flow:row wrap;align-items:flex-start;cursor:text}.autocomplete-form[_ngcontent-%COMP%]   .full-box[_ngcontent-%COMP%]   .multi-select[_ngcontent-%COMP%]   .single-select[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;min-width:50px;border:1px solid black;margin:4px 2px;border-radius:12px;padding:0 6px;cursor:pointer}.autocomplete-form[_ngcontent-%COMP%]   .full-box[_ngcontent-%COMP%]   .multi-select[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{min-width:35%;max-width:100%;border:none;height:34px}.autocomplete-form[_ngcontent-%COMP%]   .full-box[_ngcontent-%COMP%]   .multi-select[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]:focus-visible{outline:none}.autocomplete-form[_ngcontent-%COMP%]   .option-holder[_ngcontent-%COMP%]{max-height:160px;position:absolute;z-index:1;width:100%;background-color:#fff;box-shadow:0 5px 5px 3px #999;overflow-y:auto;overflow-x:hidden;z-index:10000;cursor:pointer}.autocomplete-form[_ngcontent-%COMP%]   .option-holder[_ngcontent-%COMP%]   .single-option[_ngcontent-%COMP%]{padding:4px 8px;display:flex;justify-content:flex-start;align-items:center}.autocomplete-form[_ngcontent-%COMP%]   .option-holder[_ngcontent-%COMP%]   .single-option[_ngcontent-%COMP%]:hover{background-color:#00f;color:#fff}.autocomplete-form[_ngcontent-%COMP%]   .option-holder[_ngcontent-%COMP%]   .single-option[_ngcontent-%COMP%]:last-child{border:none}.autocomplete-form[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]{display:block}.autocomplete-form[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]{display:none}"]}),l})();function V(o,l){if(1&o&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&o){const i=l.$implicit;t.Q6J("value",null==i?null:i.slug),t.xp6(1),t.Oqu(null==i?null:i.name)}}function z(o,l){if(1&o&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&o){const i=l.$implicit;t.Q6J("value",null==i?null:i.slug),t.xp6(1),t.Oqu(null==i?null:i.name)}}function G(o,l){if(1&o&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&o){const i=l.$implicit;t.Q6J("value",null==i?null:i.slug),t.xp6(1),t.Oqu(null==i?null:i.name)}}function X(o,l){if(1&o&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&o){const i=l.$implicit;t.Q6J("value",null==i?null:i.id),t.xp6(1),t.hij(" ",null==i?null:i.name," ")}}const j=function(o){return{color:o}};function R(o,l){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2,"Chosen Date:"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA()()),2&o){const i=t.oxw();t.xp6(4),t.Oqu(t.xi3(5,1,null==i.appointment?null:i.appointment.chosen_date,"d MMMM y"))}}const K=[{path:"",component:U,title:"",children:[{path:"",component:w,title:"Profile"},{path:"appointments",component:k,title:"Appointments"},{path:"call-history",component:N,title:"Call History"}]},{path:"make-appointment",component:(()=>{var o;class l{constructor(n,e){this.api=n,this.fb=e,this.divisionList=[],this.districtList=[],this.thanaList=[],this.lawyerTypeList=[],this.lawyerList=[],this.msg={},this.subscriptions=[],this.dataForm=e.group({lawyer:[""],message:[""],start_date:[""],end_date:[""]}),this.searchForm=e.group({division:[""],district:new r.NI({value:"",disabled:!0}),thana:new r.NI({value:"",disabled:!0}),lawyer_type:[[]]})}ngOnInit(){this.formDependency(),this.getZones(),this.getLawyerList("",[]),this.getLawyerCategories()}formDependency(){let n=this.searchForm.get("division"),e=this.searchForm.get("district"),a=this.searchForm.get("thana"),p=this.searchForm.get("lawyer_type"),m=n?.valueChanges.subscribe(u=>{a?.setValue(""),a?.disable(),u?(e?.enable(),this.getZones("district",u)):(e?.setValue(""),e?.disable())}),f=e?.valueChanges.subscribe(u=>{u?(a?.enable(),this.getZones("thana",u)):(a?.setValue(""),a?.disable())}),h=a?.valueChanges.subscribe(u=>{u&&this.getLawyerList(u,[])});p?.valueChanges.subscribe(u=>{u&&this.getLawyerList("",u)}),m&&this.subscriptions.push(m),f&&this.subscriptions.push(f),h&&this.subscriptions.push(h)}getZones(n,e){let a=this.api.list("ZONE_API",{},e??"").subscribe(p=>{"district"===n?this.districtList=p:"thana"===n?this.thanaList=p:this.divisionList=p});this.subscriptions.push(a)}getLawyerCategories(){let n=this.api.list("LAWYER_LIST_API",{},"categories/").subscribe(e=>{this.lawyerTypeList=e});this.subscriptions.push(n)}getLawyerList(n,e){n||(n=this.searchForm.value?.thana),e?.length||(e=this.searchForm.value?.lawyer_type),this.api.list("LAWYER_LIST_API",{...n?{area_slug:n}:{},...e?{expertise:e?.reduce((a,p)=>`${a&&a+","}${p}`,"")}:{}}).subscribe(a=>{this.lawyerList=a})}makeAppointment(){let n=this.searchForm.value?.lawyer_type;this.api.post("APPOINTMENT_API",{...this.dataForm.value,...n?.length?{expertise:n?.reduce((e,a)=>`${e&&e+","}${a}`,"")}:{}},{},"add/").subscribe(e=>{this.msg=e})}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(g.s),t.Y36(r.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-make-appointment"]],decls:61,vars:16,consts:[[1,"container","page-container","pt-3"],[1,"row"],[1,"col-12","text-center","title"],[1,"row",3,"formGroup"],[1,"col-md-6","col-sm-12"],[1,"form-group"],["for","division"],["id","division","formControlName","division",1,"form-select"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","district"],["id","district","formControlName","district",1,"form-select"],["for","thana"],["id","thana","formControlName","thana",1,"form-select"],[3,"control","dataList","id","label","value_control","view_control"],[1,"row",3,"formGroup","submit"],[1,"col-md-6","col-12","pb-2"],["for","lawyer"],["id","lawyer","formControlName","lawyer",1,"form-select"],[1,"col-md-12","col-12","pb-2"],["for","message"],["id","message","formControlName","message",1,"form-control"],[1,"col-12","col-md-6","pb-2"],["for","start_date"],["id","start_date","type","date","formControlName","start_date",1,"form-control"],["for","end_date"],["id","end_date","type","date","formControlName","end_date",1,"form-control"],[1,"col-12"],[3,"ngStyle"],[1,"col-12","pb-2"],["type","submit",1,"btn","btn-primary"],[3,"value"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3," Make an Appointment "),t.qZA()(),t.TgZ(4,"form",3)(5,"div",4)(6,"div",5)(7,"label",6),t._uU(8,"Division"),t.qZA(),t.TgZ(9,"select",7)(10,"option",8),t._uU(11,"Select Division"),t.qZA(),t.YNc(12,V,2,2,"option",9),t.qZA()()(),t.TgZ(13,"div",4)(14,"div",5)(15,"label",10),t._uU(16,"District"),t.qZA(),t.TgZ(17,"select",11)(18,"option",8),t._uU(19,"Select District"),t.qZA(),t.YNc(20,z,2,2,"option",9),t.qZA()()(),t.TgZ(21,"div",4)(22,"div",5)(23,"label",12),t._uU(24,"Thana"),t.qZA(),t.TgZ(25,"select",13)(26,"option",8),t._uU(27,"Select Thana"),t.qZA(),t.YNc(28,G,2,2,"option",9),t.qZA()()(),t.TgZ(29,"div",4),t._UZ(30,"app-multi-select",14),t.qZA()(),t.TgZ(31,"form",15),t.NdJ("submit",function(){return e.makeAppointment()}),t.TgZ(32,"div",16)(33,"div",5)(34,"label",17),t._uU(35,"Lawyer"),t.qZA(),t.TgZ(36,"select",18)(37,"option",8),t._uU(38,"Select Lawyer"),t.qZA(),t.YNc(39,X,2,2,"option",9),t.qZA()()(),t.TgZ(40,"div",19)(41,"div",5)(42,"label",20),t._uU(43,"Message"),t.qZA(),t._UZ(44,"textarea",21),t.qZA()(),t.TgZ(45,"div",22)(46,"div",5)(47,"label",23),t._uU(48,"Start Date"),t.qZA(),t._UZ(49,"input",24),t.qZA()(),t.TgZ(50,"div",22)(51,"div",5)(52,"label",25),t._uU(53,"End Date"),t.qZA(),t._UZ(54,"input",26),t.qZA()(),t.TgZ(55,"div",27)(56,"span",28),t._uU(57),t.qZA()(),t.TgZ(58,"div",29)(59,"button",30),t._uU(60," Confirm "),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("formGroup",e.searchForm),t.xp6(8),t.Q6J("ngForOf",e.divisionList),t.xp6(8),t.Q6J("ngForOf",e.districtList),t.xp6(8),t.Q6J("ngForOf",e.thanaList),t.xp6(2),t.Q6J("control",e.searchForm.get("lawyer_type"))("dataList",e.lawyerTypeList)("id","lawyer_type")("label","Lawyer Type")("value_control","id")("view_control","name"),t.xp6(1),t.Q6J("formGroup",e.dataForm),t.xp6(8),t.Q6J("ngForOf",e.lawyerList),t.xp6(17),t.Q6J("ngStyle",t.VKq(14,j,null!=e.msg&&e.msg.success?"green":"red")),t.xp6(1),t.Oqu(null==e.msg?null:e.msg.message))},dependencies:[s.sg,s.PC,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.sg,r.u,B],styles:[".title[_ngcontent-%COMP%]{color:#6f2fa1}"]}),l})(),title:"Make Appointment"},{path:"appointments/:id",component:(()=>{var o;class l{constructor(n,e,a){this.api=n,this.route=e,this.router=a,this.chosenDate=""}ngOnInit(){this.getAppointment()}getAppointment(){this.api.list("APPOINTMENT_LIST_API",{},this.route.snapshot.paramMap.get("id")??"").subscribe(n=>{this.appointment=n,this.chosenDate=n?.chosen_date})}changeStatus(n){this.api.post("APPOINTMENT_STATUS_CHANGE_API",{appointment_id:this.appointment?.id,status:n,chosen_date:this.chosenDate}).subscribe(e=>{console.log(e)})}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(g.s),t.Y36(d.gz),t.Y36(d.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-appointment-details"]],decls:37,vars:15,consts:[[1,"container"],[1,"mt-5","profile-view","text-white","page-container","mb-4"],[1,"row","w-100","pt-3","pb-5"],[1,"col-md-3","col-sm-12","mt-5","img-section"],[1,"profile-pic",3,"src"],[1,"text-white"],[1,"col-md-9","col-sm-12","data-section"],[1,"row"],[4,"ngIf"],[1,"row","appointmentMessage"],[1,"ps-0","text-white"],[1,"msgCard","bg-white",3,"innerHTML"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.TgZ(5,"h2",5),t._uU(6),t.qZA()(),t.TgZ(7,"div",6)(8,"div",7)(9,"table",5)(10,"tr")(11,"th"),t._uU(12,"Full Name:"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()(),t.TgZ(15,"tr")(16,"th"),t._uU(17,"Email:"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA()(),t.TgZ(20,"tr")(21,"th"),t._uU(22,"Contact Number:"),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA()(),t.TgZ(25,"tr")(26,"th"),t._uU(27,"Date Range :"),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.ALo(30,"date"),t.ALo(31,"date"),t.qZA()(),t.YNc(32,R,6,4,"tr",8),t.qZA()()()(),t.TgZ(33,"div",9)(34,"p",10),t._uU(35,"Message:"),t.qZA(),t._UZ(36,"div",11),t.qZA()()()),2&n&&(t.xp6(4),t.Q6J("src",e.api.imagePath(null==e.appointment||null==e.appointment.customer?null:e.appointment.customer.customer_pic),t.LSH),t.xp6(2),t.Oqu(null==e.appointment||null==e.appointment.customer?null:e.appointment.customer.name),t.xp6(8),t.Oqu(null==e.appointment||null==e.appointment.customer?null:e.appointment.customer.name),t.xp6(5),t.Oqu(null==e.appointment||null==e.appointment.customer?null:e.appointment.customer.email),t.xp6(5),t.Oqu(null==e.appointment||null==e.appointment.customer?null:e.appointment.customer.mobile),t.xp6(5),t.AsE("",t.xi3(30,9,null==e.appointment?null:e.appointment.start_date,"d MMMM y")," to ",t.xi3(31,12,null==e.appointment?null:e.appointment.end_date,"d MMMM y"),""),t.xp6(3),t.Q6J("ngIf","approved"!==(null==e.appointment?null:e.appointment.status)||"due"!==(null==e.appointment?null:e.appointment.status)),t.xp6(4),t.Q6J("innerHTML",null==e.appointment?null:e.appointment.message,t.oJD))},dependencies:[s.O5,s.uU],styles:[".profile-view[_ngcontent-%COMP%]{box-shadow:0 0 10px 4px #d6d6d6;background-color:#686195;border-radius:10px;padding:57px 150px}.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{width:143px;height:143px;border-radius:50%}@media only screen and (max-width: 767px){.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{width:100px;height:100px;display:none}}.profile-view[_ngcontent-%COMP%]   .img-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;font-weight:700}.profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]{border-left:3px solid #fff;padding:0 0 0 10%}.profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:60px}.profile-view[_ngcontent-%COMP%]   .data-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{width:30%}.profile-view[_ngcontent-%COMP%]   .appointmentMessage[_ngcontent-%COMP%]   .msgCard[_ngcontent-%COMP%]{padding:38px 22px;background-color:#fff;color:#000}.profile-view[_ngcontent-%COMP%]   .appointmentMessage[_ngcontent-%COMP%]   .msgCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;color:#000}.profile-view[_ngcontent-%COMP%]   .appointmentMessage[_ngcontent-%COMP%]   .appointmentBootom[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{border:2px solid #858585;border-radius:5px;padding:20px}.profile-view[_ngcontent-%COMP%]   .appointmentMessage[_ngcontent-%COMP%]   .appointmentBootom[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus{box-shadow:none;border:1px solid #686195}.profile-view[_ngcontent-%COMP%]   .appointmentMessage[_ngcontent-%COMP%]   .appointmentBootom[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus-visible{box-shadow:none;border:1px solid #686195}.profile-view[_ngcontent-%COMP%]   .appointmentMessage[_ngcontent-%COMP%]   .appointmentBootom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;font-size:24px;padding:15px 90px}"]}),l})(),title:"Appointment Details"}];let W=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,d.Bz.forChild(K),J.D,r.u5,r.UX,Q.W]}),l})()}}]);