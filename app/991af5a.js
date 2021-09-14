(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{504:function(t,e,r){var n=r(505),h={};for(var l in n)n.hasOwnProperty(l)&&(h[n[l]]=l);var o=t.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var c in o)if(o.hasOwnProperty(c)){if(!("channels"in o[c]))throw new Error("missing channels property: "+c);if(!("labels"in o[c]))throw new Error("missing channel labels property: "+c);if(o[c].labels.length!==o[c].channels)throw new Error("channel and label counts mismatch: "+c);var f=o[c].channels,v=o[c].labels;delete o[c].channels,delete o[c].labels,Object.defineProperty(o[c],"channels",{value:f}),Object.defineProperty(o[c],"labels",{value:v})}o.rgb.hsl=function(t){var e,r,n=t[0]/255,g=t[1]/255,b=t[2]/255,h=Math.min(n,g,b),l=Math.max(n,g,b),o=l-h;return l===h?e=0:n===l?e=(g-b)/o:g===l?e=2+(b-n)/o:b===l&&(e=4+(n-g)/o),(e=Math.min(60*e,360))<0&&(e+=360),r=(h+l)/2,[e,100*(l===h?0:r<=.5?o/(l+h):o/(2-l-h)),100*r]},o.rgb.hsv=function(t){var e,r,n,h,s,l=t[0]/255,g=t[1]/255,b=t[2]/255,o=Math.max(l,g,b),c=o-Math.min(l,g,b),f=function(t){return(o-t)/6/c+.5};return 0===c?h=s=0:(s=c/o,e=f(l),r=f(g),n=f(b),l===o?h=n-r:g===o?h=1/3+e-n:b===o&&(h=2/3+r-e),h<0?h+=1:h>1&&(h-=1)),[360*h,100*s,100*o]},o.rgb.hwb=function(t){var e=t[0],g=t[1],b=t[2];return[o.rgb.hsl(t)[0],100*(1/255*Math.min(e,Math.min(g,b))),100*(b=1-1/255*Math.max(e,Math.max(g,b)))]},o.rgb.cmyk=function(t){var e,r=t[0]/255,g=t[1]/255,b=t[2]/255;return[100*((1-r-(e=Math.min(1-r,1-g,1-b)))/(1-e)||0),100*((1-g-e)/(1-e)||0),100*((1-b-e)/(1-e)||0),100*e]},o.rgb.keyword=function(t){var e=h[t];if(e)return e;var r,l,o,c=1/0;for(var f in n)if(n.hasOwnProperty(f)){var v=n[f],d=(l=t,o=v,Math.pow(l[0]-o[0],2)+Math.pow(l[1]-o[1],2)+Math.pow(l[2]-o[2],2));d<c&&(c=d,r=f)}return r},o.keyword.rgb=function(t){return n[t]},o.rgb.xyz=function(t){var e=t[0]/255,g=t[1]/255,b=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(g=g>.04045?Math.pow((g+.055)/1.055,2.4):g/12.92)+.1805*(b=b>.04045?Math.pow((b+.055)/1.055,2.4):b/12.92)),100*(.2126*e+.7152*g+.0722*b),100*(.0193*e+.1192*g+.9505*b)]},o.rgb.lab=function(t){var e=o.rgb.xyz(t),r=e[0],n=e[1],h=e[2];return n/=100,h/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(h=h>.008856?Math.pow(h,1/3):7.787*h+16/116))]},o.hsl.rgb=function(t){var e,r,n,h,l,o=t[0]/360,s=t[1]/100,c=t[2]/100;if(0===s)return[l=255*c,l,l];e=2*c-(r=c<.5?c*(1+s):c+s-c*s),h=[0,0,0];for(var i=0;i<3;i++)(n=o+1/3*-(i-1))<0&&n++,n>1&&n--,l=6*n<1?e+6*(r-e)*n:2*n<1?r:3*n<2?e+(r-e)*(2/3-n)*6:e,h[i]=255*l;return h},o.hsl.hsv=function(t){var e=t[0],s=t[1]/100,r=t[2]/100,n=s,h=Math.max(r,.01);return s*=(r*=2)<=1?r:2-r,n*=h<=1?h:2-h,[e,100*(0===r?2*n/(h+n):2*s/(r+s)),100*((r+s)/2)]},o.hsv.rgb=function(t){var e=t[0]/60,s=t[1]/100,r=t[2]/100,n=Math.floor(e)%6,h=e-Math.floor(e),p=255*r*(1-s),q=255*r*(1-s*h),l=255*r*(1-s*(1-h));switch(r*=255,n){case 0:return[r,l,p];case 1:return[q,r,p];case 2:return[p,r,l];case 3:return[p,q,r];case 4:return[l,p,r];case 5:return[r,p,q]}},o.hsv.hsl=function(t){var e,r,n,h=t[0],s=t[1]/100,l=t[2]/100,o=Math.max(l,.01);return n=(2-s)*l,r=s*o,[h,100*(r=(r/=(e=(2-s)*o)<=1?e:2-e)||0),100*(n/=2)]},o.hwb.rgb=function(t){var i,e,r,n,h,g,b,l=t[0]/360,o=t[1]/100,c=t[2]/100,f=o+c;switch(f>1&&(o/=f,c/=f),r=6*l-(i=Math.floor(6*l)),0!=(1&i)&&(r=1-r),n=o+r*((e=1-c)-o),i){default:case 6:case 0:h=e,g=n,b=o;break;case 1:h=n,g=e,b=o;break;case 2:h=o,g=e,b=n;break;case 3:h=o,g=n,b=e;break;case 4:h=n,g=o,b=e;break;case 5:h=e,g=o,b=n}return[255*h,255*g,255*b]},o.cmyk.rgb=function(t){var e=t[0]/100,r=t[1]/100,n=t[2]/100,h=t[3]/100;return[255*(1-Math.min(1,e*(1-h)+h)),255*(1-Math.min(1,r*(1-h)+h)),255*(1-Math.min(1,n*(1-h)+h))]},o.xyz.rgb=function(t){var e,g,b,r=t[0]/100,n=t[1]/100,h=t[2]/100;return g=-.9689*r+1.8758*n+.0415*h,b=.0557*r+-.204*n+1.057*h,e=(e=3.2406*r+-1.5372*n+-.4986*h)>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,g=g>.0031308?1.055*Math.pow(g,1/2.4)-.055:12.92*g,b=b>.0031308?1.055*Math.pow(b,1/2.4)-.055:12.92*b,[255*(e=Math.min(Math.max(0,e),1)),255*(g=Math.min(Math.max(0,g),1)),255*(b=Math.min(Math.max(0,b),1))]},o.xyz.lab=function(t){var e=t[0],r=t[1],n=t[2];return r/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(e-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},o.lab.xyz=function(t){var e,r,n,h=t[0];e=t[1]/500+(r=(h+16)/116),n=r-t[2]/200;var l=Math.pow(r,3),o=Math.pow(e,3),c=Math.pow(n,3);return r=l>.008856?l:(r-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,n=c>.008856?c:(n-16/116)/7.787,[e*=95.047,r*=100,n*=108.883]},o.lab.lch=function(t){var e,r=t[0],a=t[1],b=t[2];return(e=360*Math.atan2(b,a)/2/Math.PI)<0&&(e+=360),[r,Math.sqrt(a*a+b*b),e]},o.lch.lab=function(t){var hr,e=t[0],r=t[1];return hr=t[2]/360*2*Math.PI,[e,r*Math.cos(hr),r*Math.sin(hr)]},o.rgb.ansi16=function(t){var e=t[0],g=t[1],b=t[2],r=1 in arguments?arguments[1]:o.rgb.hsv(t)[2];if(0===(r=Math.round(r/50)))return 30;var n=30+(Math.round(b/255)<<2|Math.round(g/255)<<1|Math.round(e/255));return 2===r&&(n+=60),n},o.hsv.ansi16=function(t){return o.rgb.ansi16(o.hsv.rgb(t),t[2])},o.rgb.ansi256=function(t){var e=t[0],g=t[1],b=t[2];return e===g&&g===b?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(g/255*5)+Math.round(b/255*5)},o.ansi16.rgb=function(t){var e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),[e=e/10.5*255,e,e];var r=.5*(1+~~(t>50));return[(1&e)*r*255,(e>>1&1)*r*255,(e>>2&1)*r*255]},o.ansi256.rgb=function(t){if(t>=232){var e=10*(t-232)+8;return[e,e,e]}var r;return t-=16,[Math.floor(t/36)/5*255,Math.floor((r=t%36)/6)/5*255,r%6/5*255]},o.rgb.hex=function(t){var e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},o.hex.rgb=function(t){var e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var r=e[0];3===e[0].length&&(r=r.split("").map((function(t){return t+t})).join(""));var n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},o.rgb.hcg=function(t){var e,r=t[0]/255,g=t[1]/255,b=t[2]/255,n=Math.max(Math.max(r,g),b),h=Math.min(Math.min(r,g),b),l=n-h;return e=l<=0?0:n===r?(g-b)/l%6:n===g?2+(b-r)/l:4+(r-g)/l+4,e/=6,[360*(e%=1),100*l,100*(l<1?h/(1-l):0)]},o.hsl.hcg=function(t){var s=t[1]/100,e=t[2]/100,r=1,n=0;return(r=e<.5?2*s*e:2*s*(1-e))<1&&(n=(e-.5*r)/(1-r)),[t[0],100*r,100*n]},o.hsv.hcg=function(t){var s=t[1]/100,e=t[2]/100,r=s*e,n=0;return r<1&&(n=(e-r)/(1-r)),[t[0],100*r,100*n]},o.hcg.rgb=function(t){var e=t[0]/360,r=t[1]/100,g=t[2]/100;if(0===r)return[255*g,255*g,255*g];var n,h=[0,0,0],l=e%1*6,o=l%1,c=1-o;switch(Math.floor(l)){case 0:h[0]=1,h[1]=o,h[2]=0;break;case 1:h[0]=c,h[1]=1,h[2]=0;break;case 2:h[0]=0,h[1]=1,h[2]=o;break;case 3:h[0]=0,h[1]=c,h[2]=1;break;case 4:h[0]=o,h[1]=0,h[2]=1;break;default:h[0]=1,h[1]=0,h[2]=c}return n=(1-r)*g,[255*(r*h[0]+n),255*(r*h[1]+n),255*(r*h[2]+n)]},o.hcg.hsv=function(t){var e=t[1]/100,r=e+t[2]/100*(1-e),n=0;return r>0&&(n=e/r),[t[0],100*n,100*r]},o.hcg.hsl=function(t){var e=t[1]/100,r=t[2]/100*(1-e)+.5*e,s=0;return r>0&&r<.5?s=e/(2*r):r>=.5&&r<1&&(s=e/(2*(1-r))),[t[0],100*s,100*r]},o.hcg.hwb=function(t){var e=t[1]/100,r=e+t[2]/100*(1-e);return[t[0],100*(r-e),100*(1-r)]},o.hwb.hcg=function(t){var e=t[1]/100,r=1-t[2]/100,n=r-e,g=0;return n<1&&(g=(r-n)/(1-n)),[t[0],100*n,100*g]},o.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},o.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},o.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},o.gray.hsl=o.gray.hsv=function(t){return[0,0,t[0]]},o.gray.hwb=function(t){return[0,100,t[0]]},o.gray.cmyk=function(t){return[0,0,0,t[0]]},o.gray.lab=function(t){return[t[0],0,0]},o.gray.hex=function(t){var e=255&Math.round(t[0]/100*255),r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(r.length)+r},o.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}},505:function(t,e,r){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},897:function(t,e,r){var n,h=r(898),l=r(899),o=r(900),c=r(905),f="http://www.w3.org/2000/svg";function v(t,e,i,r,svg){var h=e/2,l=document.createElementNS(f,"rect");l.setAttributeNS(null,"x","0"),l.setAttributeNS(null,"y","0"),l.setAttributeNS(null,"width",e),l.setAttributeNS(null,"height",e);var o=n.random(),c=2*Math.PI*o,v=e/r*n.random()+i*e/r,m="translate("+Math.cos(c)*v+" "+Math.sin(c)*v+")"+" "+("rotate("+(360*o+180*n.random()).toFixed(1)+" "+h+" "+h+")");l.setAttributeNS(null,"transform",m);var y=d(t);l.setAttributeNS(null,"fill",y),svg.appendChild(l)}function d(t){n.random();var e=Math.floor(t.length*n.random());return t.splice(e,1)[0]}t.exports=function(t,e){n=new h(e);var r=function(t,e){var r=30*e.random()-15;return t.map((function(t){var e=o(t);return e.rotate(r),e.hexString()}))}(c.slice(),n),m=l(t,d(r)).container,svg=document.createElementNS(f,"svg");svg.setAttributeNS(null,"x","0"),svg.setAttributeNS(null,"y","0"),svg.setAttributeNS(null,"width",t),svg.setAttributeNS(null,"height",t),m.appendChild(svg);for(var i=0;i<3;i++)v(r,t,i,3,svg);return m}},898:function(t,e){var r=function(t){null==t&&(t=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,t.constructor==Array?this.init_by_array(t,t.length):this.init_seed(t)};r.prototype.init_seed=function(s){for(this.mt[0]=s>>>0,this.mti=1;this.mti<this.N;this.mti++){s=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&s)>>>16)<<16)+1812433253*(65535&s)+this.mti,this.mt[this.mti]>>>=0}},r.prototype.init_by_array=function(t,e){var i,r,n;for(this.init_seed(19650218),i=1,r=0,n=this.N>e?this.N:e;n;n--){var s=this.mt[i-1]^this.mt[i-1]>>>30;this.mt[i]=(this.mt[i]^(1664525*((4294901760&s)>>>16)<<16)+1664525*(65535&s))+t[r]+r,this.mt[i]>>>=0,r++,++i>=this.N&&(this.mt[0]=this.mt[this.N-1],i=1),r>=e&&(r=0)}for(n=this.N-1;n;n--){s=this.mt[i-1]^this.mt[i-1]>>>30;this.mt[i]=(this.mt[i]^(1566083941*((4294901760&s)>>>16)<<16)+1566083941*(65535&s))-i,this.mt[i]>>>=0,++i>=this.N&&(this.mt[0]=this.mt[this.N-1],i=1)}this.mt[0]=2147483648},r.prototype.random_int=function(){var t,e=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var r;for(this.mti==this.N+1&&this.init_seed(5489),r=0;r<this.N-this.M;r++)t=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+this.M]^t>>>1^e[1&t];for(;r<this.N-1;r++)t=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+(this.M-this.N)]^t>>>1^e[1&t];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^e[1&t],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0},r.prototype.random_int31=function(){return this.random_int()>>>1},r.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},r.prototype.random=function(){return this.random_int()*(1/4294967296)},r.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},r.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)},t.exports=r},899:function(t,e){t.exports=function(t,e){var r=document.createElement("div");return r.style.borderRadius="50px",r.style.overflow="hidden",r.style.padding="0px",r.style.margin="0px",r.style.width=t+"px",r.style.height=t+"px",r.style.display="inline-block",r.style.background=e,{container:r}}},900:function(t,e,r){var n=r(901),h=r(902),l=r(904),o=function(t){if(t instanceof o)return t;if(!(this instanceof o))return new o(t);var e;if(this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},"string"==typeof t)if(e=l.getRgba(t))this.setValues("rgb",e);else if(e=l.getHsla(t))this.setValues("hsl",e);else{if(!(e=l.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(void 0!==(e=t).r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};o.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){return 1!==this.values.alpha?this.values.hwb.concat([this.values.alpha]):this.values.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){return this.values.rgb.concat([this.values.alpha])},rgbaArrayNormalized:function(){for(var t=this.values.rgb,e=[],i=0;i<3;i++)e[i]=t[i]/255;return e.push(this.values.alpha),e},hslaArray:function(){return this.values.hsl.concat([this.values.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return l.hexString(this.values.rgb)},rgbString:function(){return l.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return l.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return l.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return l.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return l.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return l.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return l.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){return this.values.rgb[0]<<16|this.values.rgb[1]<<8|this.values.rgb[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var r=t[i]/255;e[i]=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),r=t.luminosity();return e>r?(e+.05)/(r+.05):(r+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],i=0;i<3;i++)t[i]=255-this.values.rgb[i];return this.setValues("rgb",t),this},lighten:function(t){return this.values.hsl[2]+=this.values.hsl[2]*t,this.setValues("hsl",this.values.hsl),this},darken:function(t){return this.values.hsl[2]-=this.values.hsl[2]*t,this.setValues("hsl",this.values.hsl),this},saturate:function(t){return this.values.hsl[1]+=this.values.hsl[1]*t,this.setValues("hsl",this.values.hsl),this},desaturate:function(t){return this.values.hsl[1]-=this.values.hsl[1]*t,this.setValues("hsl",this.values.hsl),this},whiten:function(t){return this.values.hwb[1]+=this.values.hwb[1]*t,this.setValues("hwb",this.values.hwb),this},blacken:function(t){return this.values.hwb[2]+=this.values.hwb[2]*t,this.setValues("hwb",this.values.hwb),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){return this.setValues("alpha",this.values.alpha-this.values.alpha*t),this},opaquer:function(t){return this.setValues("alpha",this.values.alpha+this.values.alpha*t),this},rotate:function(t){var e=this.values.hsl[0];return e=(e=(e+t)%360)<0?360+e:e,this.values.hsl[0]=e,this.setValues("hsl",this.values.hsl),this},mix:function(t,e){var r=this,n=t,p=void 0===e?.5:e,h=2*p-1,a=r.alpha()-n.alpha(),l=((h*a==-1?h:(h+a)/(1+h*a))+1)/2,o=1-l;return this.rgb(l*r.red()+o*n.red(),l*r.green()+o*n.green(),l*r.blue()+o*n.blue()).alpha(r.alpha()*p+n.alpha()*(1-p))},toJSON:function(){return this.rgb()},clone:function(){var col=new o;return col.values=n(this.values),col}},o.prototype.getValues=function(t){for(var e={},i=0;i<t.length;i++)e[t.charAt(i)]=this.values[t][i];return 1!==this.values.alpha&&(e.a=this.values.alpha),e},o.prototype.setValues=function(t,e){var i,r,n={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},l={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o=1;if("alpha"===t)o=e;else if(e.length)this.values[t]=e.slice(0,t.length),o=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)this.values[t][i]=e[t.charAt(i)];o=e.a}else if(void 0!==e[n[t][0]]){var c=n[t];for(i=0;i<t.length;i++)this.values[t][i]=e[c[i]];o=e.alpha}if(this.values.alpha=Math.max(0,Math.min(1,void 0===o?this.values.alpha:o)),"alpha"===t)return!1;for(i=0;i<t.length;i++)r=Math.max(0,Math.min(l[t][i],this.values[t][i])),this.values[t][i]=Math.round(r);for(var f in n)for(f!==t&&(this.values[f]=h[t][f](this.values[t])),i=0;i<f.length;i++)r=Math.max(0,Math.min(l[f][i],this.values[f][i])),this.values[f][i]=Math.round(r);return!0},o.prototype.setSpace=function(t,e){var r=e[0];return void 0===r?this.getValues(t):("number"==typeof r&&(r=Array.prototype.slice.call(e)),this.setValues(t,r),this)},o.prototype.setChannel=function(t,e,r){return void 0===r?this.values[t][e]:(r===this.values[t][e]||(this.values[t][e]=r,this.setValues(t,this.values[t])),this)},t.exports=o},901:function(t,e,r){(function(e){var r=function(){"use strict";function t(r,h,l,o){"object"==typeof h&&(l=h.depth,o=h.prototype,h.filter,h=h.circular);var c=[],f=[],v=void 0!==e;return void 0===h&&(h=!0),void 0===l&&(l=1/0),function r(l,d){if(null===l)return null;if(0==d)return l;var m,y;if("object"!=typeof l)return l;if(t.__isArray(l))m=[];else if(t.__isRegExp(l))m=new RegExp(l.source,n(l)),l.lastIndex&&(m.lastIndex=l.lastIndex);else if(t.__isDate(l))m=new Date(l.getTime());else{if(v&&e.isBuffer(l))return m=e.allocUnsafe?e.allocUnsafe(l.length):new e(l.length),l.copy(m),m;void 0===o?(y=Object.getPrototypeOf(l),m=Object.create(y)):(m=Object.create(o),y=o)}if(h){var w=c.indexOf(l);if(-1!=w)return f[w];c.push(l),f.push(m)}for(var i in l){var M;y&&(M=Object.getOwnPropertyDescriptor(y,i)),M&&null==M.set||(m[i]=r(l[i],d-1))}return m}(r,l)}function r(t){return Object.prototype.toString.call(t)}function n(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return t.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},t.__objToStr=r,t.__isDate=function(t){return"object"==typeof t&&"[object Date]"===r(t)},t.__isArray=function(t){return"object"==typeof t&&"[object Array]"===r(t)},t.__isRegExp=function(t){return"object"==typeof t&&"[object RegExp]"===r(t)},t.__getRegExpFlags=n,t}();t.exports&&(t.exports=r)}).call(this,r(212).Buffer)},902:function(t,e,r){var n=r(504),h=r(903),l={};Object.keys(n).forEach((function(t){l[t]={},Object.defineProperty(l[t],"channels",{value:n[t].channels}),Object.defineProperty(l[t],"labels",{value:n[t].labels});var e=h(t);Object.keys(e).forEach((function(r){var n=e[r];l[t][r]=function(t){var e=function(e){if(null==e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var r=t(e);if("object"==typeof r)for(var n=r.length,i=0;i<n;i++)r[i]=Math.round(r[i]);return r};return"conversion"in t&&(e.conversion=t.conversion),e}(n),l[t][r].raw=function(t){var e=function(e){return null==e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(n)}))})),t.exports=l},903:function(t,e,r){var n=r(504);function h(t){var e=function(){for(var t={},e=Object.keys(n),r=e.length,i=0;i<r;i++)t[e[i]]={distance:-1,parent:null};return t}(),r=[t];for(e[t].distance=0;r.length;)for(var h=r.pop(),l=Object.keys(n[h]),o=l.length,i=0;i<o;i++){var c=l[i],f=e[c];-1===f.distance&&(f.distance=e[h].distance+1,f.parent=h,r.unshift(c))}return e}function link(t,e){return function(r){return e(t(r))}}function l(t,e){for(var path=[e[t].parent,t],r=n[e[t].parent][t],h=e[t].parent;e[h].parent;)path.unshift(e[h].parent),r=link(n[e[h].parent][h],r),h=e[h].parent;return r.conversion=path,r}t.exports=function(t){for(var e=h(t),r={},n=Object.keys(e),o=n.length,i=0;i<o;i++){var c=n[i];null!==e[c].parent&&(r[c]=l(c,e))}return r}},904:function(t,e,r){var n=r(505);function h(t){if(t){var e=[0,0,0],a=1,r=t.match(/^#([a-fA-F0-9]{3})$/);if(r){r=r[1];for(var i=0;i<e.length;i++)e[i]=parseInt(r[i]+r[i],16)}else if(r=t.match(/^#([a-fA-F0-9]{6})$/)){r=r[1];for(i=0;i<e.length;i++)e[i]=parseInt(r.slice(2*i,2*i+2),16)}else if(r=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(i=0;i<e.length;i++)e[i]=parseInt(r[i+1]);a=parseFloat(r[4])}else if(r=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(i=0;i<e.length;i++)e[i]=Math.round(2.55*parseFloat(r[i+1]));a=parseFloat(r[4])}else if(r=t.match(/(\D+)/)){if("transparent"==r[1])return[0,0,0,0];if(!(e=n[r[1]]))return}for(i=0;i<e.length;i++)e[i]=d(e[i],0,255);return a=a||0==a?d(a,0,1):1,e[3]=a,e}}function l(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var r=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(r)?1:r,0,1)]}}}function o(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var r=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(r)?1:r,0,1)]}}}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function f(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function v(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function d(t,e,r){return Math.min(Math.max(e,t),r)}function m(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}t.exports={getRgba:h,getHsla:l,getRgb:function(t){var e=h(t);return e&&e.slice(0,3)},getHsl:function(t){var e=l(t);return e&&e.slice(0,3)},getHwb:o,getAlpha:function(t){var e=h(t);if(e)return e[3];if(e=l(t))return e[3];if(e=o(t))return e[3]},hexString:function(t){return"#"+m(t[0])+m(t[1])+m(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return c(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:c,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return f(t,e);var r=Math.round(t[0]/255*100),g=Math.round(t[1]/255*100),b=Math.round(t[2]/255*100);return"rgb("+r+"%, "+g+"%, "+b+"%)"},percentaString:f,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return v(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:v,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return y[t.slice(0,3)]}};var y={};for(var w in n)y[n[w]]=w},905:function(t,e){t.exports=["#01888C","#FC7500","#034F5D","#F73F01","#FC1960","#C7144C","#F3C100","#1598F2","#2465E1","#F19E02"]}}]);