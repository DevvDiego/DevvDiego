import{s as Y,n as U,f as Q}from"../chunks/scheduler.V7bLW0bx.js";import{S as $,i as ee,g,s as E,m as F,h as p,j as w,c as A,f as d,n as J,k as n,a as j,y as o,o as W,z as L,A as V,r as q,x as D,u as G,v as P,d as Z,t as z,w as O}from"../chunks/index.xMywei_0.js";const te=""+new URL("../assets/whoami.Z09124Ha.png",import.meta.url).href,ae=""+new URL("../assets/draw-app.TwjJqm-a.png",import.meta.url).href;function X(u){let e,t,r;return{c(){e=g("figure"),t=g("img"),this.h()},l(i){e=p(i,"FIGURE",{});var a=w(e);t=p(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(d),this.h()},h(){Q(t.src,r=u[0])||n(t,"src",r),n(t,"alt",u[2]),n(t,"class","min-h-36 object-cover")},m(i,a){j(i,e,a),o(e,t)},p(i,a){a&1&&!Q(t.src,r=i[0])&&n(t,"src",r),a&4&&n(t,"alt",i[2])},d(i){i&&d(e)}}}function le(u){let e;return{c(){e=F(u[3])},l(t){e=J(t,u[3])},m(t,r){j(t,e,r)},p(t,r){r&8&&W(e,t[3])},d(t){t&&d(e)}}}function se(u){let e,t,r,i,a,c,m;return{c(){e=g("a"),t=g("span"),r=F(u[3]),i=E(),a=L("svg"),c=L("path"),m=L("path"),this.h()},l(s){e=p(s,"A",{href:!0,class:!0});var f=w(e);t=p(f,"SPAN",{});var v=w(t);r=J(v,u[3]),v.forEach(d),i=A(f),a=V(f,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var l=w(a);c=V(l,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),w(c).forEach(d),m=V(l,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),w(m).forEach(d),l.forEach(d),f.forEach(d),this.h()},h(){n(c,"fill-rule","evenodd"),n(c,"d","M12.795 6.375a.625.625 0 0 0-.625-.625H3.875A1.875 1.875 0 0 0 2 7.625v12.5A1.875 1.875 0 0 0 3.875 22h12.5a1.875 1.875 0 0 0 1.875-1.875V11.83a.624.624 0 1 0-1.25 0v8.295a.624.624 0 0 1-.625.625h-12.5a.625.625 0 0 1-.625-.625v-12.5A.625.625 0 0 1 3.875 7h8.295a.625.625 0 0 0 .625-.625Z"),n(c,"clip-rule","evenodd"),n(m,"fill-rule","evenodd"),n(m,"d","M22 2.625A.625.625 0 0 0 21.375 2h-6.25a.625.625 0 1 0 0 1.25h4.741L9.682 13.432a.626.626 0 1 0 .885.886L20.75 4.134v4.741a.625.625 0 1 0 1.25 0v-6.25Z"),n(m,"clip-rule","evenodd"),n(a,"class","w-5 h-5 absolute -right-7 top-[2px]"),n(a,"fill","currentColor"),n(a,"viewBox","0 0 24 24"),n(a,"xmlns","http://www.w3.org/2000/svg"),n(e,"href",u[1]),n(e,"class","relative flex items-center gap-3")},m(s,f){j(s,e,f),o(e,t),o(t,r),o(e,i),o(e,a),o(a,c),o(a,m)},p(s,f){f&8&&W(r,s[3]),f&2&&n(e,"href",s[1])},d(s){s&&d(e)}}}function re(u){let e,t,r,i,a,c,m,s=u[0].length>3&&X(u);function f(h,_){return h[1].length>3?se:le}let v=f(u),l=v(u);return{c(){e=g("div"),s&&s.c(),t=E(),r=g("div"),i=g("h2"),l.c(),a=E(),c=g("p"),m=F(u[4]),this.h()},l(h){e=p(h,"DIV",{class:!0});var _=w(e);s&&s.l(_),t=A(_),r=p(_,"DIV",{class:!0});var b=w(r);i=p(b,"H2",{class:!0});var k=w(i);l.l(k),k.forEach(d),a=A(b),c=p(b,"P",{});var S=w(c);m=J(S,u[4]),S.forEach(d),b.forEach(d),_.forEach(d),this.h()},h(){n(i,"class","card-title dark:text-base-700"),n(r,"class","card-body pt-6 p-2"),n(e,"class","card w-11/12 "+u[5]()+" max-w-80 p-6 bg-base-300 shadow-2xl")},m(h,_){j(h,e,_),s&&s.m(e,null),o(e,t),o(e,r),o(r,i),l.m(i,null),o(r,a),o(r,c),o(c,m)},p(h,[_]){h[0].length>3?s?s.p(h,_):(s=X(h),s.c(),s.m(e,t)):s&&(s.d(1),s=null),v===(v=f(h))&&l?l.p(h,_):(l.d(1),l=v(h),l&&(l.c(),l.m(i,null))),_&16&&W(m,h[4])},i:U,o:U,d(h){h&&d(e),s&&s.d(),l.d()}}}function ne(u,e,t){let{type:r=""}=e,{img:i=""}=e,{link:a=""}=e,{alt:c="unknown"}=e,{title:m="Title"}=e,{desc:s="Little description for a card"}=e,{techArr:f=[]}=e;function v(){switch(r){case"normal":return"min-h-96";case"tiny":return"min-h-22";default:return"min-h-96"}}return u.$$set=l=>{"type"in l&&t(6,r=l.type),"img"in l&&t(0,i=l.img),"link"in l&&t(1,a=l.link),"alt"in l&&t(2,c=l.alt),"title"in l&&t(3,m=l.title),"desc"in l&&t(4,s=l.desc),"techArr"in l&&t(7,f=l.techArr)},[i,a,c,m,s,v,r,f]}class R extends ${constructor(e){super(),ee(this,e,ne,re,Y,{type:6,img:0,link:1,alt:2,title:3,desc:4,techArr:7})}}function ie(u){let e,t,r=`<div class="mt-16 hero-content"><div><h1 class="text-5xl font-bold">I&#39;m Diego Varela</h1> <p class="pt-6 sm:w-7/12 ">Backend developer that likes to solve the day to day problems using code.
                    <br/>
                    Interested in the Internet of Things and software architecture</p> <span class="text-xs sm:text-sm text-gray-500">&quot;<i>Be better than better and automate the 5 minute manual task</i>&quot;</span> <div class="m-auto mt-24 w-7 h-7 animate-bounce"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.48 3.12a.6.6 0 0 1 .6.6v14.152l3.775-3.777a.6.6 0 1 1 .85.85l-4.8 4.8a.601.601 0 0 1-.85 0l-4.8-4.8a.6.6 0 1 1 .85-.85l3.775 3.777V3.72a.6.6 0 0 1 .6-.6Z" clip-rule="evenodd"></path></svg></div></div></div>`,i,a,c,m="Main projects",s,f,v,l,h,_,b,k,S="Side projects",H,I,C,B;return v=new R({props:{img:te,alt:"whoami service",title:"Whoami",link:"https://findwhoami.infinityfreeapp.com",desc:"Service that uses NFC wearables to identify users medical data with a short response time."}}),h=new R({props:{img:ae,alt:"draw app",title:"SketchIt",link:"https://devvdiego.github.io/SketchIt/",desc:"A drawing app that has all the basic tools to make simple drawings."}}),C=new R({props:{type:"tiny",title:"Bomber game",link:"https://devvdiego.github.io/BomberGame/",desc:'A prototype project based of the play store game "Atomic Bomber".'}}),{c(){e=g("main"),t=g("section"),t.innerHTML=r,i=E(),a=g("section"),c=g("h1"),c.textContent=m,s=E(),f=g("div"),q(v.$$.fragment),l=E(),q(h.$$.fragment),_=E(),b=g("section"),k=g("h1"),k.textContent=S,H=E(),I=g("div"),q(C.$$.fragment),this.h()},l(x){e=p(x,"MAIN",{});var y=w(e);t=p(y,"SECTION",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-kwg1t2"&&(t.innerHTML=r),i=A(y),a=p(y,"SECTION",{class:!0});var M=w(a);c=p(M,"H1",{id:!0,class:!0,"data-svelte-h":!0}),D(c)!=="svelte-1lg2hfy"&&(c.textContent=m),s=A(M),f=p(M,"DIV",{class:!0});var N=w(f);G(v.$$.fragment,N),l=A(N),G(h.$$.fragment,N),N.forEach(d),M.forEach(d),_=A(y),b=p(y,"SECTION",{class:!0});var T=w(b);k=p(T,"H1",{class:!0,"data-svelte-h":!0}),D(k)!=="svelte-wmpczu"&&(k.textContent=S),H=A(T),I=p(T,"DIV",{class:!0});var K=w(I);G(C.$$.fragment,K),K.forEach(d),T.forEach(d),y.forEach(d),this.h()},h(){n(t,"class","hero min-h-screen bg-base-100"),n(c,"id","projects"),n(c,"class","text-3xl font-bold text-center mb-12"),n(f,"class","flex gap-12 items-center justify-center flex-row flex-wrap"),n(a,"class","w-full my-12 "),n(k,"class","text-3xl font-bold text-center mb-12"),n(I,"class","w-11/12 m-auto flex gap-12 items-center justify-center flex-row flex-wrap"),n(b,"class","w-full my-24 mt-32")},m(x,y){j(x,e,y),o(e,t),o(e,i),o(e,a),o(a,c),o(a,s),o(a,f),P(v,f,null),o(f,l),P(h,f,null),o(e,_),o(e,b),o(b,k),o(b,H),o(b,I),P(C,I,null),B=!0},p:U,i(x){B||(Z(v.$$.fragment,x),Z(h.$$.fragment,x),Z(C.$$.fragment,x),B=!0)},o(x){z(v.$$.fragment,x),z(h.$$.fragment,x),z(C.$$.fragment,x),B=!1},d(x){x&&d(e),O(v),O(h),O(C)}}}class fe extends ${constructor(e){super(),ee(this,e,null,ie,Y,{})}}export{fe as component};