"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9244],{5318:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(7378);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(t),u=s,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return t?n.createElement(h,i(i({ref:a},p),{},{components:t})):n.createElement(h,i({ref:a},p))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5310:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(5773),s=t(808),r=t(7378),i=t(8944),o=t(5642),l=t(1652),m=t(3772),p=t(6206),c=t(4246);const d=["className","component"];var u=t(544);const h=function(e={}){const{defaultTheme:a,defaultClassName:t="MuiBox-root",generateClassName:u,styleFunctionSx:h=l.Z}=e,k=(0,o.ZP)("div")(h);return r.forwardRef((function(e,r){const o=(0,p.Z)(a),l=(0,m.Z)(e),{className:h,component:N="div"}=l,g=(0,s.Z)(l,d);return(0,c.jsx)(k,(0,n.Z)({as:N,ref:r,className:(0,i.Z)(h,u?u(t):t),theme:o},g))}))}({defaultTheme:(0,t(2905).Z)(),defaultClassName:"MuiBox-root",generateClassName:u.Z.generate}),k=h},6003:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(5310),s=t(6769),r=t(8948),i=t(7378);const o=e=>{const{colorMode:a}=(0,s.If)();let t="inherit";e.lightBg&&"dark"!==a&&(t=e.lightBg),e.darkBg&&"dark"===a&&(t=e.darkBg);let o={};return e.sx&&(o={backgroundColor:t,m:"auto",display:"flex",...o,...e.sx}),i.createElement(n.Z,{component:"img",sx:o,src:(0,r.Z)(e.img)})}},8527:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var n=t(5773),s=(t(7378),t(5318)),r=t(6003),i=t(4384);t(1884);const o={sidebar_position:1,slug:".",title:"Architecture"},l="Data Feed Architecture",m={unversionedId:"feed/architecture",id:"feed/architecture",title:"Architecture",description:"An aggregator or data feed is what on-chain developers use when building smart contracts. A data feed is a collection of jobs that get aggregated to produce a single, deterministic result. Typically the first task in a job will fetch external data with subsequent tasks responsible for parsing the response and transforming the value into a single data type, like an integer or decimal.",source:"@site/docs/feed/architecture.mdx",sourceDirName:"feed",slug:"/feed/",permalink:"/feed/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/oracle/operator/monitoring"},next:{title:"Feed Operator",permalink:"/feed/operator"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Job Definitions",id:"job-definitions",level:2},{value:"Job Weights",id:"job-weights",level:3},{value:"Lease Contract",id:"lease-contract",level:3},{value:"Requesting Updates",id:"requesting-updates",level:2},{value:"Periodic Updates",id:"periodic-updates",level:3},{value:"Data Feed Cost",id:"data-feed-cost",level:2},{value:"Variance Threshold",id:"variance-threshold",level:3},{value:"History Buffer",id:"history-buffer",level:2},{value:"Update Lifecycle",id:"update-lifecycle",level:2},{value:"Update Request",id:"update-request",level:3},{value:"Oracle Execution",id:"oracle-execution",level:3},{value:"Oracle Consensus",id:"oracle-consensus",level:3},{value:"Data Feed Composability",id:"data-feed-composability",level:2},{value:"More Information",id:"more-information",level:2}],d={toc:c};function u(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"data-feed-architecture"},"Data Feed Architecture"),(0,s.kt)("p",null,"An aggregator or data feed is what on-chain developers use when building smart contracts. A data feed is a collection of jobs that get aggregated to produce a single, deterministic result. Typically the first task in a job will fetch external data with subsequent tasks responsible for parsing the response and transforming the value into a single data type, like an integer or decimal."),(0,s.kt)("p",null,"When an oracle is assigned to process a data feed update, the oracle executes the defined jobs, computes the weighted median of the job responses, and publishes the result on-chain. If sufficient oracles respond, the on-chain program computes the final result as the median of the assigned oracle responses."),(0,s.kt)("p",null,"Data feeds published on Solana are public and there is no mechanism to prevent other users from reading and consuming the data. Because of this, Switchboard, by default, treats feeds as public utilities allowing anyone to contribute. This is by design as data feeds should be community controlled. If a program is relying on an oracle and the lease expires, any user is allowed to extend the lease, push on a crank, and keep the feed updating, but only if the feed config allows it. Switchboard envisions data feeds being community governed by the protocols supporting them. As a feed grows in popularity and is used across protocols, the feed maintenance cost can be spread across the protocols to reduce the economic burden on a single entity."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)(i.ZP,{container:!0,spacing:3,mdxType:"Grid"},(0,s.kt)(i.ZP,{item:!0,md:4,sm:12,order:{xs:2,sm:1},mdxType:"Grid"},(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("b",null,"Aggregator: "),"Contains the data feed configuration, dictating how data feed updates get requested, updated, and resolved on-chain."),(0,s.kt)("li",null,(0,s.kt)("b",null,"Job Account: "),"Stores the blueprints for how data is fetched off-chain for a particular data source."),(0,s.kt)("li",null,(0,s.kt)("b",null,"Permission Account: "),"Permits a data feed to join an oracle queue."),(0,s.kt)("li",null,(0,s.kt)("b",null,"Lease Contract: "),"Pre-funded escrow contract to reward oracles for their work."),(0,s.kt)("li",null,(0,s.kt)("b",null,"Crank: "),"Optional, owned by the queue and allows a data feed to be updated at a regular interval."),(0,s.kt)("li",null,(0,s.kt)("b",null,"History Buffer: "),"Optional, allows a feed to store the last N values."))),(0,s.kt)(i.ZP,{item:!0,md:8,sx:12,order:{xs:1,sm:2},mdxType:"Grid"},(0,s.kt)(r.Z,{img:"/img/feeds/Aggregator_Accounts.png",sx:{display:"flex"},mdxType:"MarkdownImage"}))),(0,s.kt)("hr",null),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"See ",(0,s.kt)("a",{parentName:"p",href:"/idl/accounts/AggregatorAccountData"},"/idl/accounts/AggregatorAccountData")," for the full list of an AggregatorAccount's configuration parameters."))),(0,s.kt)("h2",{id:"job-definitions"},"Job Definitions"),(0,s.kt)("p",null,"An Aggregator Account stores a collection of Job Account public keys along with the hashes of the job definitions. This is to prevent malicious RPC nodes from providing incorrect task definitions to oracles before fulfillment."),(0,s.kt)("p",null,"A Job Account is a collection of ",(0,s.kt)("a",{parentName:"p",href:"/api/tasks"},"Switchboard Tasks")," that get executed by an oracle sequentially. Each Job Account typically corresponds to a single data source. A data feed requires at least one job account and at most 16 job accounts. Switchboard Job Accounts can be used to source data from:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"HTTP endpoints, public or private",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"msup"}),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"^{[1]}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.888em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span"}),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mopen mtight"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose mtight"},"]")))))))))))))),(0,s.kt)("li",{parentName:"ul"},"Websockets"),(0,s.kt)("li",{parentName:"ul"},"On-Chain data from Solana, Ethereum, etc",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Anchor programs"),(0,s.kt)("li",{parentName:"ul"},"JupiterSwap"),(0,s.kt)("li",{parentName:"ul"},"Uniswap"),(0,s.kt)("li",{parentName:"ul"},"SushiSwap"),(0,s.kt)("li",{parentName:"ul"},"Saber"),(0,s.kt)("li",{parentName:"ul"},"... and more")))),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mrow",{parentName:"msup"}),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"^{[1]}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.888em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span"}),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mopen mtight"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose mtight"},"]")))))))))))))," Endpoints requiring an API key require a ",(0,s.kt)("a",{parentName:"p",href:"/queue/private-queues"},"Private Queue")," to prevent leaking the API key on-chain"),(0,s.kt)("h3",{id:"job-weights"},"Job Weights"),(0,s.kt)("p",null,"A data feed can assign job weights to a job account which will be used when the oracle calculates the median across the job responses. This is useful to weight data sources by some metric such as liquidity or a reliability score."),(0,s.kt)("p",null,"It is ",(0,s.kt)("strong",{parentName:"p"},"strongly")," recommended to utilize job weights as ",(0,s.kt)("em",{parentName:"p"},"not all data sources are created equally"),"."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Currently the only way to set a job weight is to remove and re-add the job account to a feed."))),(0,s.kt)("h3",{id:"lease-contract"},"Lease Contract"),(0,s.kt)("p",null,"The LeaseContract is a pre-funded escrow account to reward oracles for fulfilling update request. The LeaseContract has a pre-specified ",(0,s.kt)("inlineCode",{parentName:"p"},"lease.withdrawAuthority")," which is the only wallet allowed to withdraw funds from the lease escrow. Any user is able to contribute to a LeaseContract and keep the feed updating."),(0,s.kt)("p",null,"When a new openRound is successfully requested for a data feed, the user who requested it is transferred ",(0,s.kt)("inlineCode",{parentName:"p"},"queue.reward")," tokens from the feeds LeaseContract. This is to incentivize users and crank turners to keep feeds updating based on a feeds config."),(0,s.kt)("p",null,"When a data feed result is accepted on-chain by a batch of oracles, the oracle rewards, as specified by ",(0,s.kt)("inlineCode",{parentName:"p"},"queue.reward"),", are automatically deducted from the ",(0,s.kt)("inlineCode",{parentName:"p"},"lease.escrow")," and transferred to an ",(0,s.kt)("inlineCode",{parentName:"p"},"oracle.tokenAccount"),"."),(0,s.kt)("h2",{id:"requesting-updates"},"Requesting Updates"),(0,s.kt)("p",null,"A feed is updated when someone calls ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregatorOpenRound")," on-chain. If openRound is called before ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregator.minUpdateDelaySeconds")," have elapsed, the openRound call will fail and the user will forfeit their transaction fees. If successful, the user is rewarded for keeping the feed updating."),(0,s.kt)("h3",{id:"periodic-updates"},"Periodic Updates"),(0,s.kt)("p",null,"Any data feed permitted to request updates on a queue is also permitted to join a queue's existing Crank, ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregator.crankPubkey"),". A Crank is the scheduling mechanism behind feeds that allow them to be periodically updated. The Crank is a buffer account that stores a collection of aggregator public keys, ordered by their next available update, with some level of jitter added to prevent a predictable oracle allocation cycle"),(0,s.kt)("p",null,"When a feeds Lease Contract is low on funds, it is automatically removed from the crank and must be manually repushed upon refunding the LeaseContract."),(0,s.kt)("p",null,"A feed can set ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregator.disableCrank")," to prevent being pushed onto a Crank and draining it's lease."),(0,s.kt)("h2",{id:"data-feed-cost"},"Data Feed Cost"),(0,s.kt)("p",null,"Each data feed update cost can be calculated by the following equation:"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"P"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"U"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"e"))),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"S"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mrow",{parentName:"msub"},(0,s.kt)("mi",{parentName:"mrow"},"q"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"R"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"w"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"d")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T_{costPerUpdate}=(1 + numSuccess) \xd7 T_{queueReward}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"cos"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"tP"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"er"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"U"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ccess"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"q"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"R"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02691em"}},"w"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,s.kt)("span",{parentName:"span"}))))))))))),(0,s.kt)("p",null,"where,"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"T")," is the raw token amount in base units (",(0,s.kt)("em",{parentName:"li"},"Ex: lamports or satoshis"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"em"},"+1"))," is to reward the update requester for keeping the feed updating"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"numSuccess")," is the number of successful oracle responses, which will always be between ",(0,s.kt)("inlineCode",{parentName:"li"},"[aggregator.minOracleResults, aggregator.oracleRequestBatchSize]")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"queue.reward")," is the queue's set oracle reward")),(0,s.kt)("p",null,"If an update round fails to receive ",(0,s.kt)("inlineCode",{parentName:"p"},"minOracleResults"),", only the update requester receives funds from the lease escrow."),(0,s.kt)("h3",{id:"variance-threshold"},"Variance Threshold"),(0,s.kt)("p",null,"A feed can set an ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregator.varianceThreshold")," to instruct an oracle to skip reporting a value on-chain if the percentage change between the current result and the ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregator.previousConfirmedRoundResult")," is not exceeded. This is a cost saving tool to conserve lease cost during low volatility."),(0,s.kt)("p",null,"A feeds ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregator.forceReportPeriod")," is the compliment and instructs an oracle to always report a result if ",(0,s.kt)("inlineCode",{parentName:"p"},"aggregator.forceReportPeriod")," seconds have elapsed since the last successful confirmed round. This can be thought of as the maximum allowable staleness for a feed."),(0,s.kt)("p",null,"The two settings above can greatly increase the lifespan of a feed's lease but also makes it difficult to estimate the remaining time on a lease."),(0,s.kt)("p",null,"Check out ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/packages/lease-observer"},"@switchboard-xyz/lease-observer")," to get PagerDuty alerts when a lease crosses a low balance threshold."),(0,s.kt)("h2",{id:"history-buffer"},"History Buffer"),(0,s.kt)("p",null,"A history buffer account stores a set number of accepted results for an aggregator, and given Solana\u2019s maximum account size of 10MB, the maximum number of samples a single history buffer can support is ~350,000 samples. An aggregator can only have a single history buffer associated with it."),(0,s.kt)("p",null,"A history buffer has a static account size when it is initialized, equal to: ",(0,s.kt)("inlineCode",{parentName:"p"},"12 Bytes + (28 Bytes \xd7 Num Samples)"),". Each time an aggregator value is updated on-chain, the associated history buffer is shifted to the right, and the last value is dropped."),(0,s.kt)("p",null,"This feature allows Switchboard tasks to parse a history buffer and perform a set of calculations, such as the TwapTask. This allows feeds to reference other feeds and perform complex calculations based on historical samples."),(0,s.kt)("h2",{id:"update-lifecycle"},"Update Lifecycle"),(0,s.kt)("p",null,"Let's walk through what the feed update lifecycle looks like."),(0,s.kt)("h3",{id:"update-request"},"Update Request"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Any user calls ",(0,s.kt)("a",{parentName:"li",href:"/idl/instructions/aggregatorOpenRound"},"aggregatorOpenRound"),", either manually or via a crank turn"),(0,s.kt)("li",{parentName:"ul"},"sbv2 program checks if ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.minUpdateDelaySeconds")," have passed since the last openRound call"),(0,s.kt)("li",{parentName:"ul"},"sbv2 program checks if a LeaseContract has enough funds to reward the oracles for the next round"),(0,s.kt)("li",{parentName:"ul"},"sbv2 program assigns the next ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.oracleRequestBatchSize")," oracles to the update request and emits an ",(0,s.kt)("a",{parentName:"li",href:"/idl/events/AggregatorOpenRoundEvent"},"AggregatorOpenRoundEvent"))),(0,s.kt)("h3",{id:"oracle-execution"},"Oracle Execution"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Oracle watches the chain for an ",(0,s.kt)("a",{parentName:"li",href:"/idl/events/AggregatorOpenRoundEvent"},"AggregatorOpenRoundEvent")," with the oracle's public key assigned to the update"),(0,s.kt)("li",{parentName:"ul"},"Oracle fetches the feed and job account definitions from its RPC Provider"),(0,s.kt)("li",{parentName:"ul"},"Oracle verifies the job account definitions match the feeds ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.jobHashes")),(0,s.kt)("li",{parentName:"ul"},"Oracle executes the job definitions in parallel"),(0,s.kt)("li",{parentName:"ul"},"When an oracle receives ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.minJobResults"),", it calculates the weighted median based on the feeds ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.jobWeights"),". Note, this is not enforced on-chain and is purely up to the oracle to respect"),(0,s.kt)("li",{parentName:"ul"},"If a feed has configured a ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.varianceThreshold")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.forceReportPeriod")," has not elapsed, the oracle calculates the percentage change between its calculated result and the previous confirmed round. If it does not exceed the feeds ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.varianceThreshold"),", the oracle drops the update request and waits for new update request"),(0,s.kt)("li",{parentName:"ul"},"If a feeds configuration dictate a new on-chain result, the oracle submits an ",(0,s.kt)("a",{parentName:"li",href:"https://docs.switchboard.xyz/idl/instructions/aggregatorSaveResult"},"aggregatorSaveResult")," transaction")),(0,s.kt)("h3",{id:"oracle-consensus"},"Oracle Consensus"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"sbv2 program waits for ",(0,s.kt)("inlineCode",{parentName:"li"},"aggregator.minOracleResults")," to be submitted by the assigned oracles"),(0,s.kt)("li",{parentName:"ul"},"When sufficient oracle responses, the sbv2 program computes the accepted value from the median of the oracle responses"),(0,s.kt)("li",{parentName:"ul"},"If a feed has a history buffer account, the accepted result is pushed onto the buffer"),(0,s.kt)("li",{parentName:"ul"},"Oracles that responded within ",(0,s.kt)("inlineCode",{parentName:"li"},"queue.varianceToleranceMultiplier")," are rewarded ",(0,s.kt)("inlineCode",{parentName:"li"},"queue.reward")," from the feed's LeaseContract"),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"queue.slashingEnabled"),", oracles that responded outside the ",(0,s.kt)("inlineCode",{parentName:"li"},"queue.varianceToleranceMultiplier")," are slashed ",(0,s.kt)("inlineCode",{parentName:"li"},"queue.reward")," tokens from it's ",(0,s.kt)("inlineCode",{parentName:"li"},"oracle.tokenAccount")," and transferred to the feed's ",(0,s.kt)("inlineCode",{parentName:"li"},"lease.escrow")),(0,s.kt)("li",{parentName:"ul"},"If additional oracle responses are submitted after a value has been accepted, the median is recalculated based on the new response set, oracle rewards are redistributed, and the history buffer value is updated")),(0,s.kt)("h2",{id:"data-feed-composability"},"Data Feed Composability"),(0,s.kt)("p",null,"Data feeds may reference other data feeds and build upon each other. It is ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"strongly"))," recommended that you own any feed that you reference in case of downstream impacts out of your control. While anyone can extend another feeds lease, a lease owner can always withdraw any lease funds and prevent future updates."),(0,s.kt)("p",null,"As an example, you could construct the following feed definition:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a Switchboard feed that sources SOL/USD prices from a variety of exchanges, each weighted by their 7d volume, along with a history buffer"),(0,s.kt)("li",{parentName:"ul"},"Create a Switchboard feed that uses an OracleTask to fetch the Pyth SOL/USD price every 10 seconds, along with a history buffer"),(0,s.kt)("li",{parentName:"ul"},"Create a Switchboard feed that uses an OracleTask to fetch the Chainlink SOL/USD price every 10 seconds, along with a history buffer"),(0,s.kt)("li",{parentName:"ul"},"Finally, create a Switchboard feed that calculates the 1min TWAP of each source above and returns the median of the results")),(0,s.kt)("p",null,"This is just a small window into how Switchboard feeds can build on each other and let the downstream consumer configure their feeds to meet their own use cases."),(0,s.kt)("h2",{id:"more-information"},"More Information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/api/tasks"},"/api/tasks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/idl/accounts/AggregatorAccountData"},"/idl/accounts/AggregatorAccountData")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/idl/accounts/CrankAccountData"},"/idl/accounts/CrankAccountData")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/idl/accounts/AggregatorHistoryBuffer"},"/idl/accounts/AggregatorHistoryBuffer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/idl/accounts/PermissionAccountData"},"/idl/accounts/PermissionAccountData")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/idl/accounts/JobAccountData"},"/idl/accounts/JobAccountData")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/idl/accounts/LeaseAccountData"},"/idl/accounts/LeaseAccountData")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/packages/feed-parser"},"feed-parser Typescript Example")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/packages/feed-walkthrough"},"feed-walkthrough Typescript Example"))))}u.isMDXComponent=!0}}]);