"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1581],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),h=n,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5310:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(5773),n=r(808),o=r(7378),i=r(8944),l=r(5642),s=r(1652),d=r(3772),u=r(6206),p=r(4246);const c=["className","component"];var h=r(544);const m=function(e={}){const{defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:h,styleFunctionSx:m=s.Z}=e,y=(0,l.ZP)("div")(m);return o.forwardRef((function(e,o){const l=(0,u.Z)(t),s=(0,d.Z)(e),{className:m,component:g="div"}=s,b=(0,n.Z)(s,c);return(0,p.jsx)(y,(0,a.Z)({as:g,ref:o,className:(0,i.Z)(m,h?h(r):r),theme:l},b))}))}({defaultTheme:(0,r(2905).Z)(),defaultClassName:"MuiBox-root",generateClassName:h.Z.generate}),y=m},2750:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(808),n=r(5773),o=r(7378),i=r(8944),l=r(3772),s=r(2267),d=r(2709),u=r(2399),p=r(1640),c=r(6749);function h(e){return(0,c.Z)("MuiTypography",e)}(0,r(4124).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(4246);const y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTypography"}),o=(e=>f[e]||e)(r.color),d=(0,l.Z)((0,n.Z)({},r,{color:o})),{align:c="inherit",className:k,component:v,gutterBottom:x=!1,noWrap:w=!1,paragraph:T=!1,variant:Z="body1",variantMapping:D=b}=d,O=(0,a.Z)(d,y),P=(0,n.Z)({},d,{align:c,color:o,className:k,component:v,gutterBottom:x,noWrap:w,paragraph:T,variant:Z,variantMapping:D}),C=v||(T?"p":D[Z]||b[Z])||"span",M=(e=>{const{align:t,gutterBottom:r,noWrap:a,paragraph:n,variant:o,classes:i}=e,l={root:["root",o,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,h,i)})(P);return(0,m.jsx)(g,(0,n.Z)({as:C,ref:t,ownerState:P,className:(0,i.Z)(M.root,k)},O))}))},1640:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r(9490).Z},6003:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(5310),n=r(6769),o=r(8948),i=r(7378);const l=e=>{const{colorMode:t}=(0,n.If)();let r="inherit";e.lightBg&&"dark"!==t&&(r=e.lightBg),e.darkBg&&"dark"===t&&(r=e.darkBg);let l={};return e.sx&&(l={backgroundColor:r,m:"auto",display:"flex",...l,...e.sx}),i.createElement(a.Z,{component:"img",sx:l,src:(0,o.Z)(e.img)})}},4848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var a=r(5773),n=(r(7378),r(5318)),o=r(6003),i=r(2750),l=r(4384),s=r(1884);const d={sidebar_position:10,slug:".",title:"Overview"},u=void 0,p={unversionedId:"feed/publisher/overview",id:"feed/publisher/overview",title:"Overview",description:"# publish.switchboard.xyz",source:"@site/docs/feed/publisher/overview.mdx",sourceDirName:"feed/publisher",slug:"/feed/publisher/",permalink:"/feed/publisher/",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:".",title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Directory",permalink:"/feed/directory"},next:{title:"Architecture",permalink:"/randomness/"}},c={},h=[{value:"Connect",id:"connect",level:2},{value:"Directory",id:"directory",level:2},{value:"Checkout",id:"checkout",level:2},{value:"Lease",id:"lease",level:3},{value:"Account Creation",id:"account-creation",level:3},{value:"My Feeds",id:"my-feeds",level:2}],m={toc:h};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{variant:"h4",mdxType:"Typography"},(0,n.kt)(s.Z,{to:"https://publish.switchboard.xyz/",mdxType:"Link"},"# publish.switchboard.xyz")),(0,n.kt)("p",null,"The publisher site is a decentralized marketplace that allows anyone to build a data feed and deploy it on-chain. The site includes a directory of pre-defined feeds from popular sources such as FTX, Coinbase, or any permissionless Serum market. The publisher site streamlines the on-chain workflow and allows a user to configure a data feed from a convenient UI."),(0,n.kt)("h2",{id:"connect"},"Connect"),(0,n.kt)(l.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,n.kt)(l.ZP,{item:!0,md:4,mdxType:"Grid"},(0,n.kt)(o.Z,{img:"/img/publisher/Connect_Wallet.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,n.kt)(l.ZP,{item:!0,md:6,mdxType:"Grid"},(0,n.kt)(i.Z,{mdxType:"Typography"},"The publisher site contains a ",(0,n.kt)("i",null,"Connect Wallet")," button in the top right corner that allows you to connect your web wallet to Devnet or Mainnet."),(0,n.kt)("br",null),(0,n.kt)(i.Z,{mdxType:"Typography"},"The publisher site currently supports the following wallets:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"https://phantom.app/",target:"_blank"},"Phantom")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"https://slope.finance/",target:"_blank"},"Slope")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"https://wallet.coin98.com/",target:"_blank"},"Coin98")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"https://solflare.com/",target:"_blank"},"Solflare")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"https://www.sollet.io/",target:"_blank"},"Sollet"))))),(0,n.kt)("h2",{id:"directory"},"Directory"),(0,n.kt)("p",null,"The publisher site includes some pre-defined sources to help developers publish data feeds. Pre-defined sources can be added to your basket by selecting them in the directory, from there you can toggle individual data sources to meet your on-chain needs."),(0,n.kt)(o.Z,{img:"/img/publisher/Landing_Page.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"}),(0,n.kt)("h2",{id:"checkout"},"Checkout"),(0,n.kt)("p",null,"During checkout, the publisher will create the necessary accounts for your data feed."),(0,n.kt)("h3",{id:"lease"},"Lease"),(0,n.kt)(l.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,n.kt)(l.ZP,{item:!0,md:5,sm:12,mdxType:"Grid"},(0,n.kt)("b",null,(0,n.kt)("u",null,"Automatic Updates")),(0,n.kt)(i.Z,{mdxType:"Typography"},"The ",(0,n.kt)("i",null,"Enable automatic updates")," checkbox determines whether your data feed will be added to a crank. A crank allows data feeds to be updated at regular intervals. Event based feeds should uncheck this box."),(0,n.kt)("br",null),(0,n.kt)("b",null,(0,n.kt)("u",null,"Update Interval")),(0,n.kt)(i.Z,{mdxType:"Typography"},"The update interval lets you configure how often and how long a data feed should be updated for. This derives the total cost deposited into the lease contract escrow account, which is used to fund oracles each time a feed is updated. You can extend or terminate a lease at anytime."),(0,n.kt)("br",null)),(0,n.kt)(l.ZP,{item:!0,md:6,mdxType:"Grid"},(0,n.kt)(o.Z,{img:"/img/publisher/Lease_Contract_Modal.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:5},mdxType:"MarkdownImage"}))),(0,n.kt)("h3",{id:"account-creation"},"Account Creation"),(0,n.kt)(l.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,n.kt)(l.ZP,{item:!0,md:6,order:{xs:2,md:1},mdxType:"Grid"},(0,n.kt)(o.Z,{img:"/img/publisher/Account_Creation.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,n.kt)(l.ZP,{item:!0,md:6,order:{xs:1,md:2},mdxType:"Grid"},(0,n.kt)(i.Z,{mdxType:"Typography"},"The ",(0,n.kt)("i",null,"Account Creation")," modal gives you a summary of your balance changes before any on-chain transactions occur. Once you have verified the total cost, hit ",(0,n.kt)("i",null,"Create Feed")," to submit the transactions."),(0,n.kt)("br",null),(0,n.kt)(i.Z,{mdxType:"Typography"},"After the accounts have been created, you will be redirected to the My Feeds page to view your newly created data feeds."),(0,n.kt)("br",null),(0,n.kt)(i.Z,{mdxType:"Typography"},"By default, data feeds are added to the permissionless queue, where they can begin updating immediately. Data feeds can be upgraded to the permissioned queue by submitting a request to the Switchboard DAO."))),(0,n.kt)("h2",{id:"my-feeds"},"My Feeds"),(0,n.kt)("p",null,"The My Feeds page shows you a list of active data feeds associated with your wallet."),(0,n.kt)(o.Z,{img:"/img/publisher/My_Feeds.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"The publisher site lets you manage your on-chain feeds and currently lets you:"),(0,n.kt)(l.ZP,{container:!0,spacing:3,justifyContent:"space-around",mdxType:"Grid"},(0,n.kt)(l.ZP,{item:!0,md:3,order:{xs:2,md:1},mdxType:"Grid"},(0,n.kt)(o.Z,{img:"/img/publisher/My_Feeds_Actions.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,n.kt)(l.ZP,{item:!0,md:7,order:{xs:1,md:2},mdxType:"Grid"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,"View Feed Details: ")," View the Aggregator configuration such as current accepted result, oracle batch size, and associated Job account public keys."),(0,n.kt)("li",null,(0,n.kt)("b",null,"View In Explorer: ")," View the Aggregator in Switchboard's explorer."),(0,n.kt)("li",null,(0,n.kt)("b",null,"Track Feed History: ")," Optionally, add an"," ",(0,n.kt)(s.Z,{to:"/feed#history-buffer",mdxType:"Link"},"aggregator history buffer")," to track the last N recorded samples."),(0,n.kt)("li",null,(0,n.kt)("b",null,"Extend Lease: ")," Deposit funds in the feeds lease contract."),(0,n.kt)("li",null,(0,n.kt)("b",null,"Terminate Lease: ")," Withdraw remaining funds from a feeds lease contract and if present, remove it from its crank.")))))}y.isMDXComponent=!0}}]);