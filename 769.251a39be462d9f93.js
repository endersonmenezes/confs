"use strict";(self.webpackChunkconf=self.webpackChunkconf||[]).push([[769],{4769:(k,p,c)=>{c.r(p),c.d(p,{EventFeatureSpeakerModule:()=>b});var i=c(6895),n=c(8256);let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[i.ez]}),e})();var m=c(8691),u=c(8645),f=c(1481);let g=(()=>{class e{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustHtml((0,u.TU)(t))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(f.H7,16))},e.\u0275pipe=n.Yjl({name:"html",type:e,pure:!0}),e})();function C(e,o){if(1&e&&(n.ynx(0),n._UZ(1,"p",1),n.ALo(2,"html"),n.BQk()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("innerHTML",n.lcZ(2,1,t.card.note),n.oJD)}}const s=["orange","blue","purple","green"];let j=(()=>{class e{constructor(){this.color=s[parseInt(String(Math.random()*s.length),10)]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["confs-project-column-card"]],hostVars:1,hostBindings:function(t,r){2&t&&n.uIk("class",r.color)},inputs:{card:"card",color:"color"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"innerHTML"]],template:function(t,r){1&t&&n.YNc(0,C,3,3,"ng-container",0),2&t&&n.Q6J("ngIf",r.card)},dependencies:[i.O5,g],styles:['confs-project-column-card h2,   confs-project-column-card h3{font-weight:600}  confs-project-column-card h2:first-child{margin:12px 0 0}  confs-project-column-card h2+h3{margin:0;font-weight:400}[_nghost-%COMP%]{--border-width: 3px;flex:1;display:flex;flex-direction:column;position:relative;padding:12px 24px;background:rgb(var(--card-background-color));border-radius:var(--border-width)}[_nghost-%COMP%] > p[_ngcontent-%COMP%]:first-child{margin-top:0}[_nghost-%COMP%] > p[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]   p[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] + h3[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]:after{z-index:-1;content:"";position:absolute;top:calc(-1 * var(--border-width));left:calc(-1 * var(--border-width));height:calc(100% + var(--border-width) * 2);width:calc(100% + var(--border-width) * 2);border-radius:calc(2 * var(--border-width));animation:animatedgradient 3s ease alternate infinite;background:linear-gradient(60deg,#36cc69,#4bffb3,#2dc27a);background-size:300% 300%}.green[_nghost-%COMP%]:after{background:linear-gradient(60deg,#36cc69,#4bffb3,#2dc27a)}.orange[_nghost-%COMP%]:after{background:linear-gradient(60deg,#f3c481,#c18630,#fbc16f,#d98a1a)}.blue[_nghost-%COMP%]:after{background:linear-gradient(60deg,#307cc1,#6fd9fb,#1a2dd9)}.purple[_nghost-%COMP%]:after{background:linear-gradient(60deg,#b287ff,#8c4bff,#c54bff)}@keyframes animatedgradient{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}']}),e})();function x(e,o){1&e&&n._UZ(0,"confs-project-column-card",1),2&e&&n.Q6J("card",o.$implicit)}const v=c(6009).Bz.forChild([{path:"",component:(()=>{class e{constructor(t,r){this.projectFacade=t,this.speakersId=r}ngOnInit(){this.projectFacade.loadProjectColumnCards(this.speakersId)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(m.J),n.Y36("speakers.id"))},e.\u0275cmp=n.Xpm({type:e,selectors:[["confs-event-speakers"]],decls:4,vars:3,consts:[[3,"card",4,"ngFor","ngForOf"],[3,"card"]],template:function(t,r){1&t&&(n.TgZ(0,"h1"),n._uU(1,"Palestras"),n.qZA(),n.YNc(2,x,1,1,"confs-project-column-card",0),n.ALo(3,"async")),2&t&&(n.xp6(2),n.Q6J("ngForOf",n.lcZ(3,1,r.projectFacade.cards$)))},dependencies:[i.sg,j,i.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-flow:row wrap;column-gap:36px;max-width:1024px}"],changeDetection:0}),e})()}]);let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[i.ez,l,v]}),e})()}}]);