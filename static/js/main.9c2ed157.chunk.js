(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{336:function(e,t,n){},338:function(e,t,n){e.exports=n.p+"static/media/logo.08d204cb.png"},340:function(e,t,n){e.exports=n(963)},430:function(e,t,n){},528:function(e,t,n){var a={"(":"left parenthesis",")":"right parenthesis","[":"open bracket","]":"close bracket","\\{":"left brace","\\}":"right brace","\\lvert":"open vertical bar","\\rvert":"close vertical bar","|":"vertical bar","\\uparrow":"up arrow","\\Uparrow":"up arrow","\\downarrow":"down arrow","\\Downarrow":"down arrow","\\updownarrow":"up down arrow","\\leftarrow":"left arrow","\\Leftarrow":"left arrow","\\rightarrow":"right arrow","\\Rightarrow":"right arrow","\\langle":"open angle","\\rangle":"close angle","\\lfloor":"open floor","\\rfloor":"close floor","\\int":"integral","\\intop":"integral","\\lim":"limit","\\ln":"natural log","\\log":"log","\\sin":"sine","\\cos":"cosine","\\tan":"tangent","\\cot":"cotangent","\\sum":"sum","/":"slash",",":"comma",".":"point","-":"negative","+":"plus","~":"tilde",":":"colon","?":"question mark","'":"apostrophe","\\%":"percent"," ":"space","\\ ":"space","\\$":"dollar sign","\\angle":"angle","\\degree":"degree","\\circ":"circle","\\vec":"vector","\\triangle":"triangle","\\pi":"pi","\\prime":"prime","\\infty":"infinity","\\alpha":"alpha","\\beta":"beta","\\gamma":"gamma","\\omega":"omega","\\theta":"theta","\\sigma":"sigma","\\lambda":"lambda","\\tau":"tau","\\Delta":"delta","\\delta":"delta","\\mu":"mu","\\rho":"rho","\\nabla":"del","\\ell":"ell","\\ldots":"dots"},r={"\\prime":"prime","\\degree":"degree","\\circ":"degree"},o={"|":"open vertical bar",".":""},i={"|":"close vertical bar",".":""},c={"+":"plus","-":"minus","\\pm":"plus minus","\\cdot":"dot","*":"times","/":"divided by","\\times":"times","\\div":"divided by","\\circ":"circle","\\bullet":"bullet"},u={"=":"equals","\\approx":"approximately equals","\\neq":"does not equal","\\ne":"does not equal","\\geq":"is greater than or equal to","\\ge":"is greater than or equal to","\\leq":"is less than or equal to","\\le":"is less than or equal to",">":"is greater than","<":"is less than","\\leftarrow":"left arrow","\\Leftarrow":"left arrow","\\rightarrow":"right arrow","\\Rightarrow":"right arrow",":":"colon"},s=function(e,t,n){if(e){var r;if((r="open"===t?e in o?o[e]:a[e]||e:"close"===t?e in i?i[e]:a[e]||e:"bin"===t?c[e]||e:"rel"===t?u[e]||e:a[e]||e)===e&&!/^\w+$/.test(e))throw new Error("KaTeX a11y "+t+" string not found: "+e);/^\d+$/.test(r)&&n.length>0&&/^\d+$/.test(n[n.length-1])?n[n.length-1]+=r:r&&n.push(r)}},l=function(e,t){var n=[];e.push(n),t(n)},h={accent:function(e,t){l(t,function(t){p(e.value.base,t),t.push("with"),p(e.value.accent,t),t.push("on top")})},bin:function(e,t){s(e.value,"bin",t)},close:function(e,t){s(e.value,"close",t)},color:function(e,t){var n=e.value.color.replace(/katex-/,"");l(t,function(t){t.push("start color "+n),p(e.value.value,t),t.push("end color "+n)})},delimsizing:function(e,t){e.value.value&&"."!==e.value.value&&s(e.value.value,"normal",t)},genfrac:function(e,t){l(t,function(t){e.value.hasBarLine?(t.push("start fraction"),s(e.value.leftDelim,"open",t),p(e.value.numer,t),t.push("divided by"),p(e.value.denom,t),s(e.value.rightDelim,"close",t),t.push("end fraction")):(t.push("start binomial"),s(e.value.leftDelim,"open",t),p(e.value.numer,t),t.push("over"),p(e.value.denom,t),s(e.value.rightDelim,"close",t),t.push("end binomial"))})},katex:function(e,t){t.push("KaTeX")},leftright:function(e,t){l(t,function(t){s(e.value.left,"open",t),p(e.value.body,t),s(e.value.right,"close",t)})},llap:function(e,t){p(e.value.body,t)},mathord:function(e,t){p(e.value,t)},op:function(e,t){s(e.value.body,"normal",t)},open:function(e,t){s(e.value,"open",t)},ordgroup:function(e,t){p(e.value,t)},overline:function(e,t){l(t,function(t){t.push("start overline"),p(e.value.body,t),t.push("end overline")})},phantom:function(e,t){t.push("empty space")},punct:function(e,t){s(e.value,"punct",t)},rel:function(e,t){s(e.value,"rel",t)},rlap:function(e,t){p(e.value.body,t)},rule:function(e,t){t.push("rule")},sizing:function(e,t){p(e.value.value,t)},spacing:function(e,t){t.push("space")},styling:function(e,t){p(e.value.value,t)},sqrt:function(e,t){l(t,function(t){e.value.index&&(t.push("root"),t.push("start index"),p(e.value.index,t),t.push("end index")),t.push("square root of"),p(e.value.body,t),t.push("end square root")})},supsub:function(e,t){e.value.base&&p(e.value.base,t),e.value.sub&&l(t,function(t){t.push("start subscript"),p(e.value.sub,t),t.push("end subscript")});var n=e.value.sup;if(n){var a=r[n],o=n.value;!a&&o&&(a="object"===typeof o&&1===o.length?r[o[0].value]:r[o]),l(t,function(t){a?t.push(a):(t.push("start superscript"),p(e.value.sup,t),t.push("end superscript"))})}},text:function(e,t){"string"!==typeof e.value?p(e.value.body,t):s(e,"normal",t)},textord:function(e,t){p(e.value,t)}},p=function e(t,n){if(n=n||[],"string"===typeof t)s(t,"normal",n);else if(t.constructor===Array)for(var a=0;a<t.length;a++)e(t[a],n);else{if(!(t.type&&t.type in h))throw new Error("KaTeX a11y un-recognized type: "+t.type);h[t.type](t,n)}return n},g=function(e){return katex.__parse(e)};e.exports={render:function(e,t){var n=g(e);!function e(t,n){for(var a=n.ownerDocument,r=0;r<t.length;r++){var o=t[r];if(r>0&&n.appendChild(a.createTextNode(", ")),"string"===typeof o)n.appendChild(a.createTextNode(o));else{var i=a.createElement("span");n.appendChild(i),e(o,i)}}}(p(n),t)},renderString:function(e){var t=g(e);return function e(t){var n=[];return t.forEach(function(t){Array.isArray(t)?n=n.concat(e(t)):n.push(t)}),n}(p(t)).join(", ")},parseMath:g}},61:function(e,t){var n={isOperator:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"OperatorNode"===e.type&&"unaryMinus"!==e.fn&&"*+-/^".includes(e.op)&&(!t||e.op===t)},isParenthesis:function(e){return"ParenthesisNode"===e.type},isUnaryMinus:function(e){return"OperatorNode"===e.type&&"unaryMinus"===e.fn},isFunction:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"FunctionNode"===e.type&&(!t||e.fn.name===t)},isSymbol:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"SymbolNode"===e.type||!(!t||!n.isUnaryMinus(e))&&n.isSymbol(e.args[0],!1)},isConstant:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"ConstantNode"===e.type||!(!t||!n.isUnaryMinus(e))&&(!!n.isConstant(e.args[0],!1)&&parseFloat(e.args[0].value)>=0)},isConstantFraction:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!!n.isOperator(e,"/")&&e.args.every(function(e){return n.isConstant(e,t)})},isConstantOrConstantFraction:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!n.isConstant(e,t)&&!n.isConstantFraction(e,t))},isIntegerFraction:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!n.isConstantFraction(e,t))return!1;var a=e.args[0],r=e.args[1];return t&&(n.isUnaryMinus(a)&&(a=a.args[0]),n.isUnaryMinus(r)&&(r=r.args[0])),Number.isInteger(parseFloat(a.value))&&Number.isInteger(parseFloat(r.value))}};e.exports=n},90:function(e,t,n){function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var o=n(526),i=n(3),c=n(148),u=n(51),s=n(527),l=n(528),h=[],p=[],g=!1,f=function(e,t){h.push(e),p.push(t),g||(g=!0,setTimeout(d,0))},T=function(e){if("undefined"!==typeof MathJax)e();else{if("undefined"===typeof Khan||!Khan.mathJaxLoaded)throw new Error("MathJax wasn't loaded before it was needed by <TeX/>");Khan.mathJaxLoaded.then(e)}},d=function(){T(function(){MathJax.Hub.Queue(function(){var e=MathJax.Hub.elementScripts;MathJax.Hub.elementScripts=function(e){return h};try{return MathJax.Hub.Process(null,function(){var e,t=a(p);try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(n){t.e(n)}finally{t.f()}h=[],p=[],g=!1})}catch(t){throw t}finally{MathJax.Hub.elementScripts=e}})})},m={border:0,clip:"rect(0,0,0,0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"},E=s({propTypes:{children:u.node,onClick:u.func,onRender:u.func,style:u.any},mixins:[o],getDefaultProps:function(){return{onRender:function(){},onClick:null}},componentDidMount:function(){var e=this;if(this._root=c.findDOMNode(this),this.refs.katex.childElementCount>0)this.props.onRender(this._root);else{var t=this.props.children;this.setScriptText(t),f(this.script,function(){return e.props.onRender(e._root)})}},componentDidUpdate:function(e,t){var n=this;if(this.refs.katex.childElementCount>0)return this.script&&T(function(){var e=MathJax.Hub.getJaxFor(n.script);e&&e.Remove()}),void this.props.onRender();var a=this.props.children;this.script?T(function(){MathJax.Hub.Queue(function(){var e=MathJax.Hub.getJaxFor(n.script);if(e)return e.Text(a,n.props.onRender);n.setScriptText(a),f(n.script,n.props.onRender)})}):(this.setScriptText(a),f(this.script,this.props.onRender))},componentWillUnmount:function(){var e=this;this.script&&T(function(){var t=MathJax.Hub.getJaxFor(e.script);t&&t.Remove()})},setScriptText:function(e){this.script||(this.script=document.createElement("script"),this.script.type="math/tex",c.findDOMNode(this.refs.mathjax).appendChild(this.script)),"text"in this.script?this.script.text=e:this.script.textContent=e},render:function(){var e=null;try{e={__html:katex.renderToString(this.props.children)}}catch(n){if(n.__proto__!==katex.ParseError.prototype)throw n}var t=null;if(e)try{t={__html:l.renderString(this.props.children)}}catch(n){}return i.createElement("span",{style:this.props.style,onClick:this.props.onClick},i.createElement("span",{ref:"mathjax"}),i.createElement("span",{ref:"katex",dangerouslySetInnerHTML:e,"aria-hidden":!!e&&!!t}),i.createElement("span",{dangerouslySetInnerHTML:t,style:m}))}});e.exports=E},91:function(e,t){var n=function(e){return"".concat(e.leftNode.toTex()," ").concat(e.comparator," ").concat(e.rightNode.toTex())};e.exports={oldNode:function(e){return e.oldNode?e.oldNode.toTex():n(e.oldEquation)},newNode:function(e){return e.newNode?e.newNode.toTex():n(e.newEquation)}}},959:function(e,t,n){},961:function(e,t,n){},963:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(148),i=n.n(o),c=(n(430),n(56)),u=n(57),s=n(59),l=n(58),h=n(60),p=n(337),g=n.n(p),f=n(338),T=n.n(f),d=n(339),m=n.n(d),E=n(90),v=n.n(E),_=n(0),y=n.n(_),O=n(91),N=n.n(O),C=(n(336),n(92)),I=n(61),M=n.n(I),x={changeFormatFunctionMap:{}},F={"+":"Combine","-":"Combine","*":"Multiply","/":"Divide"},S={"=":"equal to",">":"greater than",">=":"greater than or equal to","<":"less than","<=":"less than or equal to"};function R(e){return e.filter(function(e){return e.changeGroup})}function b(e){if(e.oldNode)return R(e.oldNode);if(e.oldEquation){var t=R(e.oldEquation.leftNode),n=R(e.oldEquation.rightNode);return[].concat(Object(C.a)(t),Object(C.a)(n))}return null}function A(e){if(e.newNode)return R(e.newNode);if(e.newEquation){var t=R(e.newEquation.leftNode),n=R(e.newEquation.rightNode);return[].concat(Object(C.a)(t),Object(C.a)(n))}return null}function w(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.forEach(function(e){e.changeGroup=void 0});var n=e.map(function(e){return e.toTex()});return t||(n=Object(C.a)(new Set(n))),0===n.length?"":1===n.length?n[0]:"".concat(n.slice(0,-1).join(", ")," \\text{ and } ").concat(n.slice(-1))}x.formatChange=function(e){if(!(e.changeType in x.changeFormatFunctionMap))return console.error(e.changeType+" does not have a change function!"),e.changeType;var t=(0,x.changeFormatFunctionMap[e.changeType])(e);return t||"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.ABSOLUTE_VALUE]=function(e){var t=b(e);if(1!==t.length)return null;var n=t[0];if(!M.a.isFunction(n,"abs"))return null;var a=n.args[0].toTex();return"\\text{Take the absolute value of } ".concat(a)},x.changeFormatFunctionMap[_.ChangeTypes.ADD_COEFFICIENT_OF_ONE]=function(e){var t=b(e),n=A(e);if(0===t.length||n.length!==t.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.ADD_EXPONENT_OF_ONE]=function(e){var t=b(e),n=A(e);if(0===t.length||n.length!==t.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.ADD_FRACTIONS]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=t[0];if(!M.a.isOperator(a)||"+"!==a.op||a.args.length>3)return null;var r=w(a.args,!0),o=n[0].toTex();return"\\text{Add } ".concat(r," \\text{ to get } ").concat(o)},x.changeFormatFunctionMap[_.ChangeTypes.ADD_NUMERATORS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.ADD_POLYNOMIAL_TERMS]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=t[0];if(!M.a.isOperator(a)||"+"!==a.op)return null;var r=w(a.args,!0),o=n[0].toTex();return"\\text{Add } ".concat(r," \\text{ to get } ").concat(o)},x.changeFormatFunctionMap[_.ChangeTypes.ADD_TO_BOTH_SIDES]=function(e){var t=A(e);if(2!==t.length)return null;var n=t[0].toTex();return"\\text{Add } ".concat(n," \\text{ to both sides}")},x.changeFormatFunctionMap[_.ChangeTypes.BREAK_UP_FRACTION]=function(e){var t=b(e);if(1!==t.length)return null;var n=w(t);return"\\text{Break up the fraction } ".concat(n)},x.changeFormatFunctionMap[_.ChangeTypes.CANCEL_EXPONENT]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.CANCEL_EXPONENT_AND_ROOT]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.CANCEL_MINUSES]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.CANCEL_ROOT]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.CANCEL_TERMS]=function(e){var t=b(e);if(1!==t.length)return null;var n=w(t);return"\\text{Cancel } ".concat(n," \\text{ from the numerator and denominator}")},x.changeFormatFunctionMap[_.ChangeTypes.COLLECT_AND_COMBINE_LIKE_TERMS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.COLLECT_EXPONENTS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.COLLECT_LIKE_TERMS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.COMBINE_NUMERATORS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.COMBINE_UNDER_ROOT]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.COMMON_DENOMINATOR]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.CONVERT_INTEGER_TO_FRACTION]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Change } ".concat(a," \\text{ to } ").concat(r," \\text{ so that it has a shared denominator}")},x.changeFormatFunctionMap[_.ChangeTypes.CONVERT_MULTIPLICATION_TO_EXPONENT]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.DISTRIBUTE]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.DISTRIBUTE_NEGATIVE_ONE]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.DISTRIBUTE_NTH_ROOT]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.DIVIDE_FRACTION_FOR_ADDITION]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Divide } ".concat(a," \\text{ so it's in the decimal form } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.DIVIDE_FROM_BOTH_SIDES]=function(e){var t=A(e);if(2!==t.length)return null;var n=t[0].toTex();return"\\text{Divide both sides by } ".concat(n)},x.changeFormatFunctionMap[_.ChangeTypes.DIVISION_BY_NEGATIVE_ONE]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"".concat(a," \\text{ divided by -1 is } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.DIVISION_BY_ONE]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"".concat(a," \\text{ divided by 1 is } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.EVALUATE_DISTRIBUTED_NTH_ROOT]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.FACTOR_INTO_PRIMES]=function(e){var t=b(e),n=A(e);if(1!==t.length||n.length<t.length||n.length>5)return null;var a=w(t),r=w(n);return"\\text{Factor } ".concat(a," \\text{ into its prime factors: } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.GROUP_COEFFICIENTS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.GROUP_TERMS_BY_ROOT]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_BOTH_SIDES_BY_INVERSE_FRACTION]=function(e){var t=A(e);if(2!==t.length)return null;var n=t[0].toTex();return"\\text{Multiply both sides by the inverse } ".concat(n)},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_BOTH_SIDES_BY_NEGATIVE_ONE]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_BY_INVERSE]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t,!0),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_BY_ZERO]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_COEFFICIENTS]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=t[0];if(!M.a.isOperator(a)||"*"!==a.op)return null;var r=w(t,!0),o=n[0].toTex();return"\\text{Multiply the coefficients } ".concat(r," \\text{ to get } ").concat(o)},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_DENOMINATORS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_FRACTIONS]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=t[0];if(!M.a.isOperator(a)||"*"!==a.op)return null;var r=w(a.args,!0),o=n[0].toTex();return"\\text{Multiply } ".concat(r," \\text{ to get } ").concat(o)},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_NUMERATORS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_POLYNOMIAL_TERMS]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=t[0];if(!M.a.isOperator(a)||"*"!==a.op)return null;var r=w(a.args,!0),o=n[0].toTex();return"\\text{Multiply } ".concat(r," \\text{ to get } ").concat(o)},x.changeFormatFunctionMap[_.ChangeTypes.MULTIPLY_TO_BOTH_SIDES]=function(e){var t=A(e);if(2!==t.length)return null;var n=t[0].toTex();return"\\text{Multiply both sides by } ".concat(n)},x.changeFormatFunctionMap[_.ChangeTypes.NO_CHANGE]=function(){return null},x.changeFormatFunctionMap[_.ChangeTypes.NTH_ROOT_VALUE]=function(e){var t=b(e);if(1!==t.length)return null;var n=w(t);return"\\text{Take the root of } ".concat(n)},x.changeFormatFunctionMap[_.ChangeTypes.REARRANGE_COEFF]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.REDUCE_EXPONENT_BY_ZERO]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.REDUCE_ZERO_NUMERATOR]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.REMOVE_ADDING_ZERO]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.REMOVE_EXPONENT_BY_ONE]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.REMOVE_MULTIPLYING_BY_NEGATIVE_ONE]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.REMOVE_MULTIPLYING_BY_ONE]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.RESOLVE_DOUBLE_MINUS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.SIMPLIFY_ARITHMETIC]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=t[0];if(!M.a.isOperator(a)||-1==="+-*/^".indexOf(a.op))return null;var r=w(a.args,!0),o=n[0].toTex();return"\\text{".concat(F[a.op]," } ").concat(r," \\text{ to get } ").concat(o)},x.changeFormatFunctionMap[_.ChangeTypes.SIMPLIFY_DIVISION]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.SIMPLIFY_FRACTION]=function(e){var t=b(e),n=A(e);if(1!==t.length||1!==n.length)return null;var a=w(t),r=w(n);return"\\text{Simplify } ".concat(a," \\text{ to } ").concat(r)},x.changeFormatFunctionMap[_.ChangeTypes.SIMPLIFY_LEFT_SIDE]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.SIMPLIFY_RIGHT_SIDE]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.SIMPLIFY_SIGNS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.SIMPLIFY_TERMS]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.STATEMENT_IS_FALSE]=function(e){var t=e.newEquation.comparator;return"\\text{The left side is not ".concat(S[t]," the right side}")},x.changeFormatFunctionMap[_.ChangeTypes.STATEMENT_IS_TRUE]=function(e){var t=e.newEquation.comparator;return"\\text{The left side is ".concat(S[t]," the right side}")},x.changeFormatFunctionMap[_.ChangeTypes.SUBTRACT_FROM_BOTH_SIDES]=function(e){var t=A(e);if(2!==t.length)return null;var n=t[0].toTex();return"\\text{Subtract } ".concat(n," \\text{ from both sides}")},x.changeFormatFunctionMap[_.ChangeTypes.SWAP_SIDES]=function(e){return"\\text{".concat(x.ChangeText[e.changeType],"}")},x.changeFormatFunctionMap[_.ChangeTypes.UNARY_MINUS_TO_NEGATIVE_ONE]=function(e){var t=b(e),n=A(e);if(0===t.length||n.length!==t.length)return null;var a=w(t),r=w(n);return"\\text{Rewrite } ".concat(a," \\text{ as } ").concat(r)},x.ChangeText={ABSOLUTE_VALUE:"Take the absolute value",ADD_COEFFICIENT_OF_ONE:"Rewrite term to have a coefficient of 1",ADD_EXPONENT_OF_ONE:"Rewrite term to have an exponent of 1",ADD_FRACTIONS:"Add the fractions together",ADD_NUMERATORS:"Add the terms in the numerator",ADD_POLYNOMIAL_TERMS:"Add the polynomial terms together",ADD_TO_BOTH_SIDES:"Add the term to both sides",BREAK_UP_FRACTION:"Break up the fraction",CANCEL_EXPONENT:"Cancel the exponent",CANCEL_EXPONENT_AND_ROOT:"Cancel the exponent and the root",CANCEL_MINUSES:"Cancel the negatives in the numerator and denominator",CANCEL_ROOT:"Cancel the root",CANCEL_TERMS:"Cancel like terms in the numerator and denominator",COLLECT_AND_COMBINE_LIKE_TERMS:"Collect and combine like terms",COLLECT_EXPONENTS:"Collect the exponents",COLLECT_LIKE_TERMS:"Identify the like terms and group them together",COMBINE_NUMERATORS:"Combine the numerators with a shared denominator",COMMON_DENOMINATOR:"Multiply the terms so they share a common denominator",COMBINE_UNDER_ROOT:"Combine terms with the same root",CONVERT_INTEGER_TO_FRACTION:"Change the number to a fraction with the same denominator",CONVERT_MULTIPLICATION_TO_EXPONENT:"Change repeatedly multiplying a term to an exponent",DISTRIBUTE:"Distribute into the parentheses",DISTRIBUTE_NEGATIVE_ONE:"Distribute -1 into the parentheses",DISTRIBUTE_NTH_ROOT:"Distribute the root into each term",DIVIDE_FRACTION_FOR_ADDITION:"Divide any fractions to convert it to decimal form",DIVIDE_FROM_BOTH_SIDES:"Divide the term from both sides",DIVISION_BY_NEGATIVE_ONE:"Rewrite any term divided by -1 as the negative of the term",DIVISION_BY_ONE:"Rewrite any term divided by 1 as just the term",EVALUATE_DISTRIBUTED_NTH_ROOT:"Take the root of all the terms",FACTOR_INTO_PRIMES:"Factor the number into its prime factors",GROUP_COEFFICIENTS:"Group the coefficients together",GROUP_TERMS_BY_ROOT:"Group repeating factors",MULTIPLY_BOTH_SIDES_BY_INVERSE_FRACTION:"Multiply both sides by the inverse of the fraction",MULTIPLY_BOTH_SIDES_BY_NEGATIVE_ONE:"Multiply both sides by -1",MULTIPLY_BY_INVERSE:"Rewrite division as multiplication by the inverse",MULTIPLY_BY_ZERO:"Rewrite any term multiplied by 0 as 0",MULTIPLY_COEFFICIENTS:"Multiply the coefficients together",MULTIPLY_DENOMINATORS:"Multiply the terms in the denominators",MULTIPLY_FRACTIONS:"Multiply the fractions together",MULTIPLY_NUMERATORS:"Multiply the terms in the numerators",MULTIPLY_POLYNOMIAL_TERMS:"Multiply the polynomial terms together",MULTIPLY_TO_BOTH_SIDES:"Multiply the term to both sides",NTH_ROOT_VALUE:"Take the root of the number",NO_CHANGE:"No change",REARRANGE_COEFF:"Move the coefficient to the front of the term",REDUCE_ZERO_NUMERATOR:"Rewrite zero divided by anything as zero",REMOVE_EXPONENT_BY_ONE:"Rewrite any term to the power of 1 as itself",REDUCE_EXPONENT_BY_ZERO:"Rewrite any term to the power of 0 as 1",REMOVE_ADDING_ZERO:"Remove zero when adding",REMOVE_MULTIPLYING_BY_NEGATIVE_ONE:"Rewrite any term multiplied by -1 as the negative of the term",REMOVE_MULTIPLYING_BY_ONE:"Rewrite any term multiplied 1 as just the term",RESOLVE_DOUBLE_MINUS:"Change subtracting a negative to addition",SIMPLIFY_ARITHMETIC:"Evaluate the arithmetic",SIMPLIFY_DIVISION:"Rewrite the chain of division",SIMPLIFY_FRACTION:"Simplify by dividing the top and bottom by the greatest common denominator",SIMPLIFY_LEFT_SIDE:"Simplify the left hand side",SIMPLIFY_RIGHT_SIDE:"Simplify the right hand side",SIMPLIFY_SIGNS:"Move the negative sign to the numerator",SIMPLIFY_TERMS:"Simplify after distributing",STATEMENT_IS_FALSE:"The statement is False",STATEMENT_IS_TRUE:"The statement is True",SUBTRACT_FROM_BOTH_SIDES:"Subtract the term from both sides",SWAP_SIDES:"Swap sides",UNARY_MINUS_TO_NEGATIVE_ONE:"Rewrite minus as a coefficient of -1"};var L=x,D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={substepsExpanded:!1},n.toggleSubsteps=function(){var e=n.state.substepsExpanded;n.setState({substepsExpanded:!e})},n.renderStep=function(e){return r.a.createElement("div",{className:"step latex"},r.a.createElement("div",null,r.a.createElement(v.a,null,N.a.newNode(e))))},n.renderSubsteps=function(e){var a=e.substeps;return 0===a.length?null:r.a.createElement("div",{className:"substeps"},r.a.createElement("div",{className:"latex"},r.a.createElement(v.a,null,N.a.oldNode(a[0]))),a.map(function(e,a){return r.a.createElement(t,{step:e,key:n.props.index+a.toString()})}))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.step,t=this.state.substepsExpanded,n=r.a.createElement("div",{onClick:this.toggleSubsteps},r.a.createElement("div",{className:"toggleSubsteps"},this.state.substepsExpanded?"\u25bc":"\u25ba"," substeps"));return r.a.createElement("div",{key:N.a.oldNode(e)},r.a.createElement("div",{className:"changeDescription"},r.a.createElement(v.a,null,L.formatChange(e))),e.substeps.length>0&&n,t&&this.renderSubsteps(e),this.renderStep(e))}}]),t}(a.Component),U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderSteps=function(e){var t=e.map(function(e,t){return r.a.createElement(D,{step:e,key:t})});return r.a.createElement("div",null,r.a.createElement("div",{className:"latex"},r.a.createElement(v.a,null,N.a.oldNode(e[0]))),t)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"isEquation",value:function(e){var t=!1;return["<=",">=","=","<",">"].forEach(function(n){e.includes(n)&&(t=!0)}),t}},{key:"render",value:function(){var e=this.props.input,t=this.isEquation(e)?y.a.solveEquation(e):y.a.simplifyExpression(e);return 0===t.length?r.a.createElement("div",{className:"error"},"No steps for this input :( ",r.a.createElement("br",null),r.a.createElement("br",null),"This is probably because either: ",r.a.createElement("br",null),"1. We don't support this math",r.a.createElement("br",null),"2. This is already simplified/solved",r.a.createElement("br",null),"3. We had trouble parsing your input"):r.a.createElement("div",{className:"steps"},this.renderSteps(t))}}]),t}(a.Component),P=(n(959),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={mathString:"2x + 4 + 5x + 4"},n.onMathStringChange=function(e,t){n.setState({mathString:t})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"demo"},r.a.createElement("div",{className:"input"},r.a.createElement("span",{className:"yourInput"},"Your input"),r.a.createElement(m.a,{name:"mathString",value:this.state.mathString,onChange:this.onMathStringChange,underlineFocusStyle:{borderColor:"#1d84ff"}})),r.a.createElement("div",{className:"stepsTitle"},"Steps"),r.a.createElement(U,{input:this.state.mathString}))}}]),t}(a.Component)),Y=(n(961),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:T.a,className:"App-logo",alt:"logo"}),r.a.createElement("h2",null,"A step by step math solver"),r.a.createElement("div",{className:"urls"},r.a.createElement("a",{className:"source-code-url",href:"https://github.com/socraticorg/mathsteps/"},"mathsteps on GitHub"),r.a.createElement("a",{className:"source-code-url",href:"https://github.com/evykassirer/mathsteps-website/"},"this demo on GitHub"))),r.a.createElement(P,null),r.a.createElement("a",{className:"socratic",href:"http://socratic.org"},"Thanks to  Socratic")))}}]),t}(a.Component)),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(Y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/agarra",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/agarra","/service-worker.js");B?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):k(e)})}}()}},[[340,2,1]]]);
//# sourceMappingURL=main.9c2ed157.chunk.js.map