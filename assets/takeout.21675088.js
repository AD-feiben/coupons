import{i as e}from"./index.697f7641.js";import{d as s,D as a,c as i,t,e as n,b as o,F as c,u as l,v as r,x as p,g as d,y as m,f}from"./vendor.dc559a67.js";var _=[{name:"饿了么外卖",icon:"/img/ele.svg",url:"https://dwz.cn/pCd6tnHm"},{name:"饿了么外卖",icon:"/img/ele.svg",url:"https://tb.ele.me/wow/alsc/mod/3ba3e78bb37a220f352e6799?e=1&open_type=miniapp&inviterId=d55be93"},{name:"饿了么生鲜",icon:"/img/ele.svg",url:"https://dwz.cn/EAWo4Ikr"},{name:"美团外卖",icon:"/img/mt.svg",url:"https://dwz.cn/QHwAv5J6"},{name:"美团生鲜",icon:"/img/mt.svg",url:"https://dwz.cn/uyusbfx8"},{name:"美团团购",icon:"/img/mt.svg",url:"https://dwz.cn/AFekMNIH"},{name:"美团酒店",icon:"/img/mt.svg",url:"https://dwz.cn/nU7gOQv4"},{name:"肯德基优惠",icon:"/img/kfc.svg",url:"https://dwz.cn/4FXce7Kp"},{name:"电影优惠",icon:"/img/dy.svg",url:"https://dwz.cn/YX11hTU9"}],u=s({props:{msg:{type:String,default:""}},setup:()=>({openOfficial:()=>{e?location.href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyMDQyNTc3OA==&subscene=0#wechat_redirect":a.confirm({title:"请在微信内打开",showCancelButton:!1,confirmButtonColor:"#1989fa"})}})});const g=l();r("data-v-5aa8a269");const v={key:0,class:"official-tip"},w=o("div",{class:"wx_profile_card_bd"},[o("div",{class:"wx_profile weui-flex"},[o("div",{class:"wx_profile_hd"},[o("img",{class:"wx_profile_avatar",src:"/img/avatar.png",alt:"前端develop"})]),o("div",{class:"wx_profile_bd weui-flex weui-flex__item"},[o("div",{class:"weui-flex__item"},[o("strong",{class:"wx_profile_nickname"},"前端develop"),o("div",{class:"wx_profile_desc"},"技术分享，Not only front-end!"),o("div",{class:"wx_profile_tips"},[o("span",{class:"wx_profile_tips_meta"},"35篇原创内容")])]),o("i",{class:"weui-icon-arrow"})])])],-1),x=o("div",{class:"wx_profile_card_ft"},"公众号",-1);p();const h=g(((e,s,a,l,r,p)=>(d(),i(c,null,[e.msg?(d(),i("p",v,t(e.msg),1)):n("",!0),o("div",{class:"appmsg_card_context wx_profile_card js_wx_profile_card","data-id":"MzIyMDQyNTc3OA==","data-isban":"0","data-index":"0",onClick:s[1]||(s[1]=(...s)=>e.openOfficial&&e.openOfficial(...s))},[w,x])],64))));u.render=h,u.__scopeId="data-v-5aa8a269";var b=s({name:"Takeout",components:{profile:u},setup:()=>({coupons:_})});const y={class:"takeout-page"},k={class:"takeout-list"};b.render=function(e,s,a,n,l,r){const p=f("profile");return d(),i("div",y,[o("ul",k,[(d(!0),i(c,null,m(e.coupons,((e,s)=>(d(),i("li",{key:s,class:"coupon-item"},[o("a",{href:e.url,rel:"noopener noreferrer",target:"__blank"},[o("img",{src:e.icon},null,8,["src"]),o("p",null,t(e.name),1)],8,["href"])])))),128))]),o(p,{msg:"更多外卖红包，请关注微信公众号"})])};export default b;