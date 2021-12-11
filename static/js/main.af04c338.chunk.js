(this.webpackJsonptypescript_react=this.webpackJsonptypescript_react||[]).push([[0],{61:function(n,e,t){"use strict";t.r(e);var c,o,i,r,a,s,l,d,b,j,h,u,p,x,O,f,g,m,v,y=t(0),k=t.n(y),w=t(23),C=t.n(w),L=t(7),I=t(13),q=t(4),S=t(10),Q="https://api.coinpaprika.com/v1",z=function(){return fetch("".concat(Q,"/coins")).then((function(n){return n.json()}))},P=function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(Q,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))},_=t(1),A=function(n){var e=n.coinId,t=Object(S.useQuery)(["ohlcv",e],(function(){return P(e)}));t.isLoading,t.data;return Object(_.jsx)("h1",{children:"Price"})},B=t(37),M=t.n(B),T=function(n){var e=n.coinId,t=Object(S.useQuery)(["ohlcv",e],(function(){return P(e)})),c=t.isLoading,o=t.data;return Object(_.jsx)("div",{children:c?"Loading chart...":Object(_.jsx)(M.a,{type:"line",series:[{name:"Price",data:null===o||void 0===o?void 0:o.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===o||void 0===o?void 0:o.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})},F=t(6),D=F.c.div(c||(c=Object(L.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin:0 auto;\n"]))),H=F.c.header(o||(o=Object(L.a)(["\n    height: 12vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 10px;\n"]))),J=F.c.h1(i||(i=Object(L.a)(["\n    color:",";\n    font-size: 48px;\n"])),(function(n){return n.theme.accentColor})),R=F.c.button(r||(r=Object(L.a)(["\n    width: 15%;\n    height: 5vh;\n    color:",";\n    background-color: rgba(0, 0, 0, 0.5);\n    border:0;\n    border-radius: 100px;\n    &:hover {\n        width: 16%;\n        height: 6vh;\n    }\n"])),(function(n){return n.theme.textColor})),W=F.c.span(a||(a=Object(L.a)(["\n    display: block;\n    text-align: center;\n"]))),$=F.c.div(s||(s=Object(L.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),E=F.c.div(l||(l=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),N=F.c.p(d||(d=Object(L.a)(["\n  margin: 30px 0px;\n"]))),Y=F.c.div(b||(b=Object(L.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),G=F.c.span(j||(j=Object(L.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  font-weight: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}),(function(n){return n.isActive&&n.theme.fontWeightBold})),K=function(){var n=Object(q.h)().coinId,e=Object(q.e)().state,t=(null===e||void 0===e||e.name,null===e||void 0===e||e.rank,Object(S.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(Q,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)}))),c=t.isLoading,o=t.data,i=Object(S.useQuery)(["price",n],(function(){return function(n){return fetch("".concat(Q,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,a=i.data,s=Object(q.f)("/:coinId/price"),l=Object(q.f)("/:coinId/chart"),d=c||r;return Object(_.jsxs)(D,{children:[Object(_.jsxs)(H,{children:[Object(_.jsx)(J,{children:(null===e||void 0===e?void 0:e.name)?e.name:d?"Loading...":null===o||void 0===o?void 0:o.name}),Object(_.jsx)(R,{children:Object(_.jsx)(I.b,{to:"/",children:" Home "})})]}),d?Object(_.jsx)(W,{children:"Loading..."}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)($,{children:[Object(_.jsxs)(E,{children:[Object(_.jsx)("span",{children:"Rank:"}),Object(_.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(_.jsxs)(E,{children:[Object(_.jsx)("span",{children:"Symbol:"}),Object(_.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(_.jsxs)(E,{children:[Object(_.jsx)("span",{children:"Open Source:"}),Object(_.jsx)("span",{children:(null===o||void 0===o?void 0:o.open_source)?"Yes":"No"})]})]}),Object(_.jsx)(N,{children:null===o||void 0===o?void 0:o.description}),Object(_.jsxs)($,{children:[Object(_.jsxs)(E,{children:[Object(_.jsx)("span",{children:"Total Suply:"}),Object(_.jsx)("span",{children:null===a||void 0===a?void 0:a.total_supply})]}),Object(_.jsxs)(E,{children:[Object(_.jsx)("span",{children:"Max Supply:"}),Object(_.jsx)("span",{children:null===a||void 0===a?void 0:a.max_supply})]})]}),Object(_.jsxs)(Y,{children:[Object(_.jsx)(G,{isActive:null!==l,children:Object(_.jsx)(I.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(_.jsx)(G,{isActive:null!==s,children:Object(_.jsx)(I.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(_.jsxs)(q.c,{children:[Object(_.jsx)(q.a,{path:"price",element:Object(_.jsx)(A,{coinId:n})}),Object(_.jsx)(q.a,{path:"chart",element:Object(_.jsx)(T,{coinId:n})})]})]})]})},U=F.c.div(h||(h=Object(L.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin:0 auto;\n"]))),V=F.c.header(u||(u=Object(L.a)(["\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),X=F.c.ul(p||(p=Object(L.a)([""]))),Z=F.c.li(x||(x=Object(L.a)(["\n    background-color: white;\n    color:",";\n    padding: 20px;\n    border-radius: 15px;\n    margin-bottom: 10px;\n    a {\n        display:flex;\n        align-items: center;\n        transition: all 0.3s ease-in;\n    }\n    &:hover {\n        a {\n            padding: 10px;\n            color: ",";\n            font-weight: bolder;\n        }\n    }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),nn=F.c.h1(O||(O=Object(L.a)(["\n    color:",";\n    font-size: 48px;\n"])),(function(n){return n.theme.accentColor})),en=F.c.span(f||(f=Object(L.a)(["\n    display: block;\n    text-align: center;\n"]))),tn=F.c.img(g||(g=Object(L.a)(["\n    margin-right:10px;\n    width: 35px;\n    height: 35px;\n"]))),cn=function(){var n=Object(S.useQuery)("allCoins",z),e=n.isLoading,t=n.data;return Object(_.jsxs)(U,{children:[Object(_.jsx)(V,{children:Object(_.jsx)(nn,{children:"Coins"})}),e?Object(_.jsx)(en,{children:"Loading..."}):Object(_.jsx)(X,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(_.jsx)(Z,{children:Object(_.jsxs)(I.b,{to:"/".concat(n.id),state:{name:n.name,rank:n.rank},children:[Object(_.jsx)(tn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},on=function(){return Object(_.jsx)(I.a,{basename:"/react-projects",children:Object(_.jsxs)(q.c,{children:[Object(_.jsx)(q.a,{path:"/",element:Object(_.jsx)(cn,{})}),Object(_.jsx)(q.a,{path:"/:coinId/*",element:Object(_.jsx)(K,{})})]})})},rn=Object(F.b)(m||(m=Object(L.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\na {\n    text-decoration: none;\n}\n\n"]))),an=t(41),sn=Object(F.b)(v||(v=Object(L.a)(["\n  body {\n    background-color: ",";\n    color:",";\n    line-height: 1.2;\n  }\n\n  a {\n    color:inherit;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var ln=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(rn,{}),Object(_.jsx)(sn,{}),Object(_.jsx)(on,{}),Object(_.jsx)(an.ReactQueryDevtools,{initialIsOpen:!0})]})},dn=new S.QueryClient;C.a.render(Object(_.jsx)(k.a.StrictMode,{children:Object(_.jsx)(S.QueryClientProvider,{client:dn,children:Object(_.jsx)(F.a,{theme:{bgColor:"#222f3e",textColor:"#c8d6e5",accentColor:"#10ac84",fontWeightBold:"bold"},children:Object(_.jsx)(ln,{})})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.af04c338.chunk.js.map