(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3678)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,r=i(4941).Z,o=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,s=e.src,c=e.sizes,h=e.unoptimized,p=void 0!==h&&h,x=e.priority,S=void 0!==x&&x,N=e.loading,k=e.lazyRoot,E=e.lazyBoundary,I=e.className,L=e.quality,O=e.width,R=e.height,C=e.style,P=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,H=e.placeholder,D=void 0===H?"empty":H,W=e.blurDataURL,B=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=d.useContext(g.ImageConfigContext),V=d.useMemo(function(){var e=v||Z||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:i})},[Z]),T=c?"responsive":"intrinsic";"layout"in B&&(B.layout&&(T=B.layout),delete B.layout);var U=z;if("loader"in B){if(B.loader){var F=B.loader;U=function(e){e.config;var t=l(e,["config"]);return F(t)}}delete B.loader}var G="";if(function(e){var t;return"object"==typeof e&&(w(e)||void 0!==e.src)}(s)){var Q=w(s)?s.default:s;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(W=W||Q.blurDataURL,G=Q.src,(!T||"fill"!==T)&&(R=R||Q.height,O=O||Q.width,!Q.height||!Q.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}s="string"==typeof s?s:G;var J=!S&&("lazy"===N||void 0===N);(s.startsWith("data:")||s.startsWith("blob:"))&&(p=!0,J=!1),b.has(s)&&(J=!1),V.unoptimized&&(p=!0);var X=r(d.useState(!1),2),K=X[0],Y=X[1],$=r(m.useIntersection({rootRef:void 0===k?null:k,rootMargin:E||"200px",disabled:!J}),3),ee=$[0],et=$[1],ei=$[2],en=!J||et,er={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,es=j(O),ec=j(R),el=j(L),ed=Object.assign({},C,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q}),eu="blur"!==D||K?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===T)er.display="block",er.position="absolute",er.top=0,er.left=0,er.bottom=0,er.right=0;else if(void 0!==es&&void 0!==ec){var ef=ec/es,em=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===T?(er.display="block",er.position="relative",ea=!0,eo.paddingTop=em):"intrinsic"===T?(er.display="inline-block",er.position="relative",er.maxWidth="100%",ea=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===T&&(er.display="inline-block",er.position="relative",er.width=es,er.height=ec)}var eg={src:y,srcSet:void 0,sizes:void 0};en&&(eg=_({config:V,src:s,unoptimized:p,layout:T,width:es,quality:el,sizes:c,loader:U}));var eh=s,ep="imagesizes";ep="imageSizes";var ev=(n(i={},"imageSrcSet",eg.srcSet),n(i,ep,eg.sizes),n(i,"crossOrigin",B.crossOrigin),i),eb=d.default.useLayoutEffect,ey=d.useRef(M),ex=d.useRef(s);d.useEffect(function(){ey.current=M},[M]),eb(function(){ex.current!==s&&(ei(),ex.current=s)},[ei,s]);var ew=a({isLazy:J,imgAttributes:eg,heightInt:ec,widthInt:es,qualityInt:el,layout:T,className:I,imgStyle:ed,blurStyle:eu,loading:N,config:V,unoptimized:p,placeholder:D,loader:U,srcString:eh,onLoadingCompleteRef:ey,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:c},B);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:er},ea?d.default.createElement("span",{style:eo},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(A,Object.assign({},ew))),S?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+eg.src+eg.srcSet+eg.sizes,rel:"preload",as:"image",href:eg.srcSet?void 0:eg.src},ev))):null)};var a=i(6495).Z,s=i(2648).Z,c=i(1598).Z,l=i(7273).Z,d=c(i(7294)),u=s(i(5443)),f=i(9309),m=i(7190),g=i(9977);i(3794);var h=i(2392);function p(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://res.cloudinary.com/",loader:"cloudinary",dangerouslyAllowSVG:!1,unoptimized:!0},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(p(i))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,r=e.width,o=["f_auto","c_limit","w_"+r,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(o).concat(p(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(e){return void 0!==e.default}function _(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,s=e.quality,c=e.sizes,l=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var l,d,u=.01*(d=Math).min.apply(d,o(c));return{widths:a.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,r,c),u=d.widths,f=d.kind,m=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map(function(e,n){return"".concat(l({config:t,src:i,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:l({config:t,src:i,quality:s,width:u[m]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function z(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=x.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function S(e,t,i,n,r,o){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}}))}var A=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,r=e.layout,o=e.className,s=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,m=e.loading,g=e.srcString,h=e.config,p=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,x=e.setIntersection,w=e.onLoad,j=e.onError,z=(e.isVisible,e.noscriptSizes),A=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=u?"lazy":m,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":r,className:o,style:a({},s,c),ref:d.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&S(e,g,r,f,b,y)},[x,g,r,f,b,y,]),onLoad:function(e){S(e.currentTarget,g,r,f,b,y),w&&w(e)},onError:function(e){"blur"===f&&y(!0),j&&j(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,_({config:h,src:g,unoptimized:p,layout:r,width:i,quality:n,sizes:z,loader:v}),{decoding:"async","data-nimg":r,style:s,className:o,loading:m}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,l=e.rootMargin,d=e.disabled||!a,u=n(r.useState(!1),2),f=u[0],m=u[1],g=n(r.useState(null),2),h=g[0],p=g[1];return r.useEffect(function(){if(a){if(!d&&!f&&h&&h.tagName){var e,t,n,r,u,g,p;return t=function(e){return e&&m(e)},u=(r=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===i.root&&e.margin===i.margin});if(n&&(t=s.get(n)))return t;var r=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:r},c.push(i),s.set(i,t),t}(n={root:null==i?void 0:i.current,rootMargin:l})).id,g=r.observer,(p=r.elements).set(h,t),g.observe(h),function(){if(p.delete(h),g.unobserve(h),0===p.size){g.disconnect(),s.delete(u);var e=c.findIndex(function(e){return e.root===u.root&&e.margin===u.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var v=o.requestIdleCallback(function(){return m(!0)});return function(){return o.cancelIdleCallback(v)}}},[h,d,l,i,f]),[p,f,r.useCallback(function(){m(!1)},[])]};var r=i(7294),o=i(9311),a="function"==typeof IntersectionObserver,s=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3678:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n=i(5893),r=i(9008),o=i.n(r),a=i(5675),s=i.n(a),c=i(214),l=i.n(c);function d(){return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:l().main,children:[(0,n.jsxs)("h1",{className:l().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:l().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:l().code,children:"pages/index.js"})]}),(0,n.jsxs)("div",{className:l().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:l().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:l().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:l().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:l().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:l().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:l().logo,children:(0,n.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);