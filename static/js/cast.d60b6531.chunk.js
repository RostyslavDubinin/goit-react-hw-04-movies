(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{58:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return s}));var n=c(52),i=c(0),r=c(53),a=c(1);function s(t){var e=t.movieId,c=Object(i.useState)(null),s=Object(n.a)(c,2),h=s[0],o=s[1];return Object(i.useEffect)((function(){Object(r.a)(e).then((function(t){o(t.cast)}))}),[e]),h&&Object(a.jsx)("ul",{children:h.map((function(t){return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:t.name,width:"100",height:"150"}),Object(a.jsx)("h3",{children:t.name}),Object(a.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}}}]);
//# sourceMappingURL=cast.d60b6531.chunk.js.map