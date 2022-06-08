"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7066,6027],{5318:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return d}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,N=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return a?n.createElement(N,m(m({ref:t},o),{},{components:a})):n.createElement(N,m({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var p=2;p<s;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1672:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(5773),r=a(808),s=(a(7378),a(5318)),m=["components"],i={},l=void 0,p={unversionedId:"types/OracleMetrics",id:"types/OracleMetrics",title:"OracleMetrics",description:"| Field | Type | Description |",source:"@site/idl/types/OracleMetrics.md",sourceDirName:"types",slug:"/types/OracleMetrics",permalink:"/idl/types/OracleMetrics",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lanes",permalink:"/idl/types/Lanes"},next:{title:"OracleResponseType",permalink:"/idl/types/OracleResponseType"}},o={},c=[],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"consecutiveSuccess"),(0,s.kt)("td",{parentName:"tr",align:null},"u64"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of consecutive successful update request")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"consecutiveError"),(0,s.kt)("td",{parentName:"tr",align:null},"u64"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in an error")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"consecutiveDisagreement"),(0,s.kt)("td",{parentName:"tr",align:null},"u64"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in a disagreement with the accepted median result")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"consecutiveLateResponse"),(0,s.kt)("td",{parentName:"tr",align:null},"u64"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that were posted on-chain late and not included in an accepted result")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"consecutiveFailure"),(0,s.kt)("td",{parentName:"tr",align:null},"u64"),(0,s.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in a failure")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"totalSuccess"),(0,s.kt)("td",{parentName:"tr",align:null},"u128"),(0,s.kt)("td",{parentName:"tr",align:null},"Total number of successful update request")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"totalError"),(0,s.kt)("td",{parentName:"tr",align:null},"u128"),(0,s.kt)("td",{parentName:"tr",align:null},"Total number of update request that resulted in an error")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"totalDisagreement"),(0,s.kt)("td",{parentName:"tr",align:null},"u128"),(0,s.kt)("td",{parentName:"tr",align:null},"Total number of update request that resulted in a disagreement with the accepted median result")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"totalLateResponse"),(0,s.kt)("td",{parentName:"tr",align:null},"u128"),(0,s.kt)("td",{parentName:"tr",align:null},"Total number of update request that were posted on-chain late and not included in an accepted result")))))}d.isMDXComponent=!0},4802:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var n=a(5773),r=a(808),s=(a(7378),a(5318)),m=a(1672),i=["components"],l={sidebar_position:1,slug:".",title:"Architecture"},p="Oracle Architecture",o={unversionedId:"oracle/architecture",id:"oracle/architecture",title:"Architecture",description:"A Switchboard oracle is a Node.js container that sits between the Solana blockchain and the internet and waits for update requests from an oracle queue. An oracle queue assigns updates to oracles in a round robin fashion.",source:"@site/docs/oracle/architecture.mdx",sourceDirName:"oracle",slug:"/oracle/",permalink:"/oracle/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Private Queues",permalink:"/queue/private-queues"},next:{title:"Requirements",permalink:"/oracle/operator/"}},c={},u=[{value:"Staking",id:"staking",level:2},{value:"Heartbeat",id:"heartbeat",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Cost &amp; Reward Estimations",id:"cost--reward-estimations",level:2},{value:"More Information",id:"more-information",level:2}],d={toc:u};function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"oracle-architecture"},"Oracle Architecture"),(0,s.kt)("p",null,"A Switchboard oracle is a Node.js container that sits between the Solana blockchain and the internet and waits for update requests from an oracle queue. An oracle queue assigns updates to oracles in a round robin fashion."),(0,s.kt)("p",null,"An oracle account is a program derived address (PDA) between the oracle queue it\u2019s being initialized for, as well as the oracles staking wallet. Before an oracle is granted permissions to use a queue, it must transfer the minimum stake amount, set by the queue, to its staking wallet."),(0,s.kt)("h2",{id:"staking"},"Staking"),(0,s.kt)("p",null,"An oracle is required to transfer ",(0,s.kt)("inlineCode",{parentName:"p"},"queue.minStake")," tokens to its staking wallet, ",(0,s.kt)("inlineCode",{parentName:"p"},"oracle.tokenAccount"),", before being granted queue permissions. The minStake acts as an insurance policy to entice honest oracle behavior."),(0,s.kt)("h2",{id:"heartbeat"},"Heartbeat"),(0,s.kt)("p",null,"An oracle is required to heartbeat on-chain in order to join the queue and be assigned update request. An oracle must heartbeat before the queue's specified ",(0,s.kt)("inlineCode",{parentName:"p"},"queue.oracleTimeout")," or it will be removed from the queue by the queue's garbage collector."),(0,s.kt)("h2",{id:"metrics"},"Metrics"),(0,s.kt)("p",null,"The oracle also tracks its performance, ",(0,s.kt)("inlineCode",{parentName:"p"},"oracle.metrics"),"."),(0,s.kt)(m.default,{mdxType:"OracleMetrics"}),(0,s.kt)("h2",{id:"cost--reward-estimations"},"Cost & Reward Estimations"),(0,s.kt)("p",null,"An oracle is required to submit an ",(0,s.kt)("a",{parentName:"p",href:"/idl/instructions/aggregatorSaveResult"},"aggregatorSaveResult")," transaction each time it updates a feed, which incurs a cost of 5000 lamports. This fee is set by the Solana network and is subject to change."),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"U"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"q"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"w"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d"))),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"5000")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T_{perUpdate}=T_{queueReward} - 5000")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"er"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"U"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"q"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"R"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5000")))))),(0,s.kt)("p",null,"where,"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"T")," is the raw token amount in base units (",(0,s.kt)("em",{parentName:"li"},"Ex: lamports or satoshis"),")")),(0,s.kt)("p",null,"To estimate an oracles cost basis, you will need to know a queue's capacity (Oracles, Feeds, VRFs) and the average number of update request an oracle is assigned over a given time period."),(0,s.kt)("p",null,"You will also need to factor in the oracle's heartbeat cost, which is 5000 lamports each. The number of heartbeats is dependent on its ",(0,s.kt)("inlineCode",{parentName:"p"},"queue.oracleTimeout"),", which determines how often an oracle is required to heartbeat."),(0,s.kt)("h2",{id:"more-information"},"More Information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/idl/accounts/OracleAccountData"},"/idl/accounts/OracleAccountData"))))}N.isMDXComponent=!0}}]);