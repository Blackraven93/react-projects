(this.webpackJsonptypescript_react=this.webpackJsonptypescript_react||[]).push([[0],{61:function(n,e,t){"use strict";t.r(e);var o,c,r,i,a,l,s,d,u,h,b,p,j,x,f,m,g,O,v,C,y,k=t(0),w=t.n(k),D=t(23),B=t.n(D),S=t(17),q=t(7),L=t(13),_=t(4),F=t(10),I=t(6),P="https://api.coinpaprika.com/v1",z=function(){return fetch("".concat(P,"/coins")).then((function(n){return n.json()}))},A=function(n){return fetch("".concat(P,"/tickers/").concat(n)).then((function(n){return n.json()}))},Q=t(1),M=I.c.div(o||(o=Object(q.a)(["\n    height: 4vh;\n    background-color: ",";\n    color: ",";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 600;\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),T=function(n){var e=n.coinId,t=Object(F.useQuery)(["price",e],(function(){return A(e)})),o=t.isLoading,c=t.data;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(M,{children:o?"Loading...":"Precent Price : ".concat((null===c||void 0===c?void 0:c.quotes.USD.price)?Math.floor(1181*(null===c||void 0===c?void 0:c.quotes.USD.price)):0)}),Object(Q.jsx)(M,{children:"ATH Price : ".concat((null===c||void 0===c?void 0:c.quotes.USD.ath_price)?Math.floor(1181*(null===c||void 0===c?void 0:c.quotes.USD.ath_price)):0)})]})},U=t(28),E=t.n(U),H=function(n){var e=n.coinId,t=n.isDark,o=Object(F.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(P,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)})),c=o.isLoading,r=o.data;return Object(Q.jsxs)("div",{children:[c?"Loading chart...":Object(Q.jsx)(E.a,{type:"candlestick",series:[{name:"Open Price",data:function(n){return null===n||void 0===n?void 0:n.map((function(n){return[new Date(n.time_open).getTime(),[n.open,n.high,n.low,n.close]]}))}(r)}],options:{theme:{mode:t?"dark":"light"},chart:{height:700,width:300,background:"transparent",toolbar:{autoSelected:"pan",show:!1},zoom:{enabled:!1}},plotOptions:{candlestick:{colors:{upward:t?"#B5E5CF":"#3D5B59",downward:t?"#FCB5AC":"#B99095"}}},stroke:{curve:"smooth",width:2},yaxis:{show:!1},xaxis:{type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close}))},title:{text:"Open Time Chart",align:"left"},tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}}),c?"":Object(Q.jsx)(E.a,{type:"candlestick",series:[{name:"Open Price",data:function(n){return null===n||void 0===n?void 0:n.map((function(n){return[new Date(n.time_close).getTime(),[n.open,n.high,n.low,n.close]]}))}(r)}],options:{theme:{mode:t?"dark":"light"},chart:{height:700,width:500,background:"transparent",toolbar:{autoSelected:"pan",show:!1},zoom:{enabled:!1}},plotOptions:{candlestick:{colors:{upward:t?"#B5E5CF":"#3D5B59",downward:t?"#FCB5AC":"#B99095"}}},stroke:{curve:"smooth",width:2},yaxis:{show:!1},xaxis:{type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close}))},title:{text:"Close Time Chart",align:"left"},tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})]})},W=I.c.div(c||(c=Object(q.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin:0 auto;\n"]))),$=I.c.header(r||(r=Object(q.a)(["\n    height: 12vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 10px;\n"]))),J=I.c.h1(i||(i=Object(q.a)(["\n    color:",";\n    font-size: 48px;\n"])),(function(n){return n.theme.accentColor})),R=I.c.button(a||(a=Object(q.a)(["\n    width: 90px;\n    height: 4vh;\n    color:",";\n    background-color: ",";\n    border:0;\n    border-radius: 100px;\n    &:hover {\n        width: 100px;\n        height: 5vh;\n    }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.coinCardColor})),N=I.c.span(l||(l=Object(q.a)(["\n    display: block;\n    text-align: center;\n"]))),Y=I.c.div(s||(s=Object(q.a)(["\n  display: flex;\n  justify-content: space-between;\n  color:",";\n  background-color: ",";\n  padding: 10px 20px;\n  border-radius: 10px;\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.coinCardColor})),G=I.c.div(d||(d=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),K=I.c.p(u||(u=Object(q.a)(["\n  margin: 30px 0px;\n"]))),V=I.c.div(h||(h=Object(q.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),X=I.c.span(b||(b=Object(q.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  font-weight: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.theme.coinCardColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}),(function(n){return n.isActive&&n.theme.fontWeightBold})),Z=function(n){var e=n.isDark,t=Object(_.h)().coinId,o=Object(_.e)().state,c=(null===o||void 0===o||o.name,null===o||void 0===o||o.rank,Object(F.useQuery)(["info",t],(function(){return function(n){return fetch("".concat(P,"/coins/").concat(n)).then((function(n){return n.json()}))}(t)}))),r=c.isLoading,i=c.data,a=Object(F.useQuery)(["price",t],(function(){return A(t)})),l=a.isLoading,s=a.data,d=Object(_.f)("/:coinId/price"),u=Object(_.f)("/:coinId/chart"),h=r||l;return Object(Q.jsxs)(W,{children:[Object(Q.jsxs)($,{children:[Object(Q.jsx)(J,{children:(null===o||void 0===o?void 0:o.name)?o.name:h?"Loading...":null===i||void 0===i?void 0:i.name}),Object(Q.jsx)(R,{children:Object(Q.jsx)(L.b,{to:"/",children:" Home "})})]}),h?Object(Q.jsx)(N,{children:"Loading..."}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(Y,{children:[Object(Q.jsxs)(G,{children:[Object(Q.jsx)("span",{children:"Rank:"}),Object(Q.jsx)("span",{children:null===i||void 0===i?void 0:i.rank})]}),Object(Q.jsxs)(G,{children:[Object(Q.jsx)("span",{children:"Symbol:"}),Object(Q.jsxs)("span",{children:["$",null===i||void 0===i?void 0:i.symbol]})]}),Object(Q.jsxs)(G,{children:[Object(Q.jsx)("span",{children:"Open Source:"}),Object(Q.jsx)("span",{children:(null===i||void 0===i?void 0:i.open_source)?"Yes":"No"})]})]}),Object(Q.jsx)(K,{children:null===i||void 0===i?void 0:i.description}),Object(Q.jsxs)(Y,{children:[Object(Q.jsxs)(G,{children:[Object(Q.jsx)("span",{children:"Total Suply:"}),Object(Q.jsx)("span",{children:null===s||void 0===s?void 0:s.total_supply})]}),Object(Q.jsxs)(G,{children:[Object(Q.jsx)("span",{children:"Max Supply:"}),Object(Q.jsx)("span",{children:null===s||void 0===s?void 0:s.max_supply})]})]}),Object(Q.jsxs)(V,{children:[Object(Q.jsx)(X,{isActive:null!==u,children:Object(Q.jsx)(L.b,{to:"/".concat(t,"/chart"),children:"Chart"})}),Object(Q.jsx)(X,{isActive:null!==d,children:Object(Q.jsx)(L.b,{to:"/".concat(t,"/price"),children:"Price"})})]}),Object(Q.jsxs)(_.c,{children:[Object(Q.jsx)(_.a,{path:"price",element:Object(Q.jsx)(T,{coinId:t})}),Object(Q.jsx)(_.a,{path:"chart",element:Object(Q.jsx)(H,{coinId:t,isDark:e})})]})]})]})},nn=I.c.div(p||(p=Object(q.a)(["\n    padding: 0px 20px;\n    max-width: 480px;\n    margin:0 auto;\n"]))),en=I.c.header(j||(j=Object(q.a)(["\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),tn=I.c.button(x||(x=Object(q.a)(["\n    width: 90px;\n    height: 4vh;\n    color:",";\n    background-color: ",";\n    border:0;\n    border-radius: 100px;\n\n    &:focus {\n        cursor: pointer\n    }\n    &:hover {\n        width: 100px;\n        height: 5vh;\n    }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.coinCardColor})),on=I.c.ul(f||(f=Object(q.a)([""]))),cn=I.c.li(m||(m=Object(q.a)(["\n    background-color: ",";\n    color:",";\n    padding: 20px;\n    border-radius: 15px;\n    margin-bottom: 10px;\n    a {\n        display:flex;\n        align-items: center;\n        transition: all 0.3s ease-in;\n    }\n    &:hover {\n        a {\n            padding: 10px;\n            color: ",";\n            font-weight: bolder;\n        }\n    }\n"])),(function(n){return n.theme.coinCardColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),rn=I.c.h1(g||(g=Object(q.a)(["\n    color:",";\n    font-size: 48px;\n"])),(function(n){return n.theme.accentColor})),an=I.c.span(O||(O=Object(q.a)(["\n    display: block;\n    text-align: center;\n"]))),ln=I.c.img(v||(v=Object(q.a)(["\n    margin-right:10px;\n    width: 35px;\n    height: 35px;\n"]))),sn=function(n){var e=n.toggleDark,t=Object(F.useQuery)("allCoins",z),o=t.isLoading,c=t.data;return Object(Q.jsxs)(nn,{children:[Object(Q.jsxs)(en,{children:[Object(Q.jsx)(rn,{children:"Coins"}),Object(Q.jsx)(tn,{onClick:e,children:"Dark Mode"})]}),o?Object(Q.jsx)(an,{children:"Loading..."}):Object(Q.jsx)(on,{children:null===c||void 0===c?void 0:c.slice(0,100).map((function(n){return Object(Q.jsx)(cn,{children:Object(Q.jsxs)(L.b,{to:"/".concat(n.id),state:{name:n.name,rank:n.rank},children:[Object(Q.jsx)(ln,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},dn=function(n){var e=n.toggleDark,t=n.isDark;return Object(Q.jsx)(L.a,{basename:"/react-projects",children:Object(Q.jsxs)(_.c,{children:[Object(Q.jsx)(_.a,{path:"/",element:Object(Q.jsx)(sn,{toggleDark:e})}),Object(Q.jsx)(_.a,{path:"/:coinId/*",element:Object(Q.jsx)(Z,{isDark:t})})]})})},un=Object(I.b)(C||(C=Object(q.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\na {\n    text-decoration: none;\n}\n\n"]))),hn=t(41),bn={bgColor:"#222f3e",textColor:"#c8d6e5",accentColor:"#91f7dc",fontWeightBold:"bold",chartUpColor:"#FCB5AC",chartCloseColor:"#B5E5CF",coinCardColor:"#2d2d2d"},pn={bgColor:"#c8d6e5",textColor:"#2d2d2d",accentColor:"#10ac84",fontWeightBold:"bold",chartUpColor:"#3D5B59",chartCloseColor:"#B99095",coinCardColor:"#C8CBD0"},jn=Object(I.b)(y||(y=Object(q.a)(["\n  body {\n    background-color: ",";\n    color:",";\n    line-height: 1.2;\n  }\n\n  a {\n    color:inherit;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var xn=function(){var n=Object(k.useState)(!1),e=Object(S.a)(n,2),t=e[0],o=e[1];return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(I.a,{theme:t?bn:pn,children:[Object(Q.jsx)(un,{}),Object(Q.jsx)(jn,{}),Object(Q.jsx)(dn,{isDark:t,toggleDark:function(){return o((function(n){return!n}))}}),Object(Q.jsx)(hn.ReactQueryDevtools,{initialIsOpen:!0})]})})},fn=new F.QueryClient;B.a.render(Object(Q.jsx)(w.a.StrictMode,{children:Object(Q.jsx)(F.QueryClientProvider,{client:fn,children:Object(Q.jsx)(xn,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.09037fe0.chunk.js.map