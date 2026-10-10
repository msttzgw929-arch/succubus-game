(()=>{var ah=1,Ml=2,gi=3,Fi=0,St=1,Vs=2;var Ws=2;var Qi=100;var Va=204,Wa=205;var Sl=0,Qh=1,eu=2,Ni=0,tu=1,iu=2,nu=3,ru=4,su=5,au=6,ou=7;var oh=300,Rn=301,Cn=302,Xa=303,ja=304,Xs=306,nr=1e3,rr=1001,qa=1002,Ht=1003,lu=1004;var br=1005;var kt=1006,aa=1007;var Di=1008;var Mi=1009,lh=1010,ch=1011,sr=1012,bl=1013,nn=1014,xi=1015,gr=1016,wl=1017,Tl=1018,Pn=1020,hh=35902,uh=1021,dh=1022,$t=1023,ph=1024,mh=1025,ar=1026,Ln=1027,fh=1028,El=1029,gh=1030,Al=1031;var Rl=1033,is=33776,ns=33777,rs=33778,ss=33779,Ya=35840,Za=35841,Ja=35842,Ka=35843,$a=36196,Qa=37492,eo=37496,to=37808,io=37809,no=37810,ro=37811,so=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,po=37819,mo=37820,fo=37821,as=36492,go=36494,vo=36495,vh=36283,_o=36284,xo=36285,yo=36286;var cs=2300,Mo=2301,oa=2302,nc=2400,rc=2401,sc=2402;var Ui="",zt="srgb",zi="srgb-linear",Cl="display-p3",js="display-p3-linear",hs="linear",Je="srgb",us="rec709",ds="p3";var ln=7680;var _h=515;var So=35044;var ac="300 es",In=2e3,ps=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var os=Math.PI/180,bo=180/Math.PI;function yi(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(yt[255&r]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]+"-"+yt[255&e]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[63&t|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[255&i]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function cu(r,e){return(r%e+e)%e}function la(r,e,t){return(1-t)*r+t*e}function si(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var ie=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],x=n[0],g=n[3],f=n[6],_=n[1],v=n[4],y=n[7],w=n[2],E=n[5],A=n[8];return s[0]=a*x+o*_+l*w,s[3]=a*g+o*v+l*E,s[6]=a*f+o*y+l*A,s[1]=c*x+h*_+u*w,s[4]=c*g+h*v+u*E,s[7]=c*f+h*y+u*A,s[2]=d*x+p*_+m*w,s[5]=d*g+p*v+m*E,s[8]=d*f+p*y+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+i*d+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ca=new De;function xh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ms(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hu(){let r=ms("canvas");return r.style.display="block",r}var oc={};function ls(r){r in oc||(oc[r]=!0,console.warn(r))}var lc=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cc=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wn={[zi]:{transfer:hs,primaries:us,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[zt]:{transfer:Je,primaries:us,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[js]:{transfer:hs,primaries:ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(cc),fromReference:r=>r.applyMatrix3(lc)},[Cl]:{transfer:Je,primaries:ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(cc),fromReference:r=>r.applyMatrix3(lc).convertLinearToSRGB()}},uu=new Set([zi,js]),Ve={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!uu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=Wn[e].toReference;return(0,Wn[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Wn[r].primaries},getTransfer:function(r){return r===Ui?hs:Wn[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Wn[e].luminanceCoefficients)}};function En(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function ha(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var cn,wo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cn===void 0&&(cn=ms("canvas")),cn.width=e.width,cn.height=e.height;let i=cn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ms("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*En(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*En(t[i]/255)):t[i]=En(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},du=0,fs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(ua(n[a].image)):s.push(ua(n[a]))}else s=ua(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function ua(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pu=0,Et=class r extends Bi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=$t,l=Mi,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=yi(),this.name="",this.source=new fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Et.DEFAULT_IMAGE=null,Et.DEFAULT_MAPPING=oh,Et.DEFAULT_ANISOTROPY=1;var Ye=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(p+1)/2,w=(f+1)/2,E=(h+d)/4,A=(u+x)/4,O=(m+g)/4;return v>y&&v>w?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=E/i,s=A/i):y>w?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=E/n,s=O/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=A/s,n=O/s),this.set(i,n,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},To=class extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Et(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends To{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},gs=class extends Et{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Eo=class extends Et{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=x);if(u!==x||l!==d||c!==p||h!==m){let g=1-o,f=l*d+c*p+h*m+u*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let w=Math.sqrt(v),E=Math.atan2(w,f*_);g=Math.sin(g*E)/w,o=Math.sin(o*E)/w}let y=o*_;if(l=l*g+d*y,c=c*g+p*y,h=h*g+m*y,u=u*g+x*y,g===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new T,hc=new ai,oi=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xn),Tr.subVectors(this.max,Xn),hn.subVectors(e.a,Xn),un.subVectors(e.b,Xn),dn.subVectors(e.c,Xn),Ai.subVectors(un,hn),Ri.subVectors(dn,un),ji.subVectors(hn,dn);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-ji.z,ji.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,ji.z,0,-ji.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-ji.y,ji.x,0];return!!pa(t,hn,un,dn,Tr)&&(t=[1,0,0,0,1,0,0,0,1],!!pa(t,hn,un,dn,Tr)&&(Er.crossVectors(Ai,Ri),t=[Er.x,Er.y,Er.z],pa(t,hn,un,dn,Tr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Zt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new T,new T,new T,new T,new T,new T,new T,new T],Zt=new T,wr=new oi,hn=new T,un=new T,dn=new T,Ai=new T,Ri=new T,ji=new T,Xn=new T,Tr=new T,Er=new T,qi=new T;function pa(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){qi.fromArray(r,s);let o=n.x*Math.abs(qi.x)+n.y*Math.abs(qi.y)+n.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var mu=new oi,jn=new T,ma=new T,li=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mu.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jn.subVectors(e,this.center);let t=jn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(jn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jn.copy(e.center).add(ma)),this.expandByPoint(jn.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new T,fa=new T,Ar=new T,Ci=new T,ga=new T,Rr=new T,va=new T,Un=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){fa.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(fa);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ar),o=Ci.dot(this.direction),l=-Ci.dot(Ar),c=Ci.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(fa).addScaledVector(Ar,d),p}intersectSphere(e,t){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),n=di.dot(di)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,n,s){ga.subVectors(t,e),Rr.subVectors(i,e),va.crossVectors(ga,Rr);let a,o=this.direction.dot(va);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ci.subVectors(this.origin,e);let l=a*this.direction.dot(Rr.crossVectors(Ci,Rr));if(l<0)return null;let c=a*this.direction.dot(ga.cross(Ci));if(c<0||l+c>o)return null;let h=-a*Ci.dot(va);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class r{constructor(e,t,i,n,s,a,o,l,c,h,u,d,p,m,x,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,p,m,x,g)}set(e,t,i,n,s,a,o,l,c,h,u,d,p,m,x,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/pn.setFromMatrixColumn(e,0).length(),s=1/pn.setFromMatrixColumn(e,1).length(),a=1/pn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fu,e,gu)}lookAt(e,t,i){let n=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Pi.crossVectors(i,It),Pi.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Pi.crossVectors(i,It)),Pi.normalize(),Cr.crossVectors(It,Pi),n[0]=Pi.x,n[4]=Cr.x,n[8]=It.x,n[1]=Pi.y,n[5]=Cr.y,n[9]=It.y,n[2]=Pi.z,n[6]=Cr.z,n[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],x=i[6],g=i[10],f=i[14],_=i[3],v=i[7],y=i[11],w=i[15],E=n[0],A=n[4],O=n[8],U=n[12],B=n[1],H=n[5],k=n[9],j=n[13],G=n[2],q=n[6],$=n[10],se=n[14],ae=n[3],ce=n[7],xe=n[11],ee=n[15];return s[0]=a*E+o*B+l*G+c*ae,s[4]=a*A+o*H+l*q+c*ce,s[8]=a*O+o*k+l*$+c*xe,s[12]=a*U+o*j+l*se+c*ee,s[1]=h*E+u*B+d*G+p*ae,s[5]=h*A+u*H+d*q+p*ce,s[9]=h*O+u*k+d*$+p*xe,s[13]=h*U+u*j+d*se+p*ee,s[2]=m*E+x*B+g*G+f*ae,s[6]=m*A+x*H+g*q+f*ce,s[10]=m*O+x*k+g*$+f*xe,s[14]=m*U+x*j+g*se+f*ee,s[3]=_*E+v*B+y*G+w*ae,s[7]=_*A+v*H+y*q+w*ce,s[11]=_*O+v*k+y*$+w*xe,s[15]=_*U+v*j+y*se+w*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],x=e[13],g=e[14],f=e[15],_=u*g*c-x*d*c+x*l*p-o*g*p-u*l*f+o*d*f,v=m*d*c-h*g*c-m*l*p+a*g*p+h*l*f-a*d*f,y=h*x*c-m*u*c+m*o*p-a*x*p-h*o*f+a*u*f,w=m*u*l-h*x*l-m*o*d+a*x*d+h*o*g-a*u*g,E=t*_+i*v+n*y+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=_*A,e[1]=(x*d*s-u*g*s-x*n*p+i*g*p+u*n*f-i*d*f)*A,e[2]=(o*g*s-x*l*s+x*n*c-i*g*c-o*n*f+i*l*f)*A,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*p-i*l*p)*A,e[4]=v*A,e[5]=(h*g*s-m*d*s+m*n*p-t*g*p-h*n*f+t*d*f)*A,e[6]=(m*l*s-a*g*s-m*n*c+t*g*c+a*n*f-t*l*f)*A,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*p+t*l*p)*A,e[8]=y*A,e[9]=(m*u*s-h*x*s-m*i*p+t*x*p+h*i*f-t*u*f)*A,e[10]=(a*x*s-m*o*s+m*i*c-t*x*c-a*i*f+t*o*f)*A,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*A,e[12]=w*A,e[13]=(h*x*n-m*u*n+m*i*d-t*x*d-h*i*g+t*u*g)*A,e[14]=(m*o*n-a*x*n-m*i*l+t*x*l+a*i*g-t*o*g)*A,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*A,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,x=a*h,g=a*u,f=o*u,_=l*c,v=l*h,y=l*u,w=i.x,E=i.y,A=i.z;return n[0]=(1-(x+f))*w,n[1]=(p+y)*w,n[2]=(m-v)*w,n[3]=0,n[4]=(p-y)*E,n[5]=(1-(d+f))*E,n[6]=(g+_)*E,n[7]=0,n[8]=(m+v)*A,n[9]=(g-_)*A,n[10]=(1-(d+x))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=pn.set(n[0],n[1],n[2]).length(),a=pn.set(n[4],n[5],n[6]).length(),o=pn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Jt.copy(this);let l=1/s,c=1/a,h=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=c,Jt.elements[5]*=c,Jt.elements[6]*=c,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,m;if(o===In)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==ps)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,p=(i+n)*h,m,x;if(o===In)m=(a+s)*u,x=-2*u;else{if(o!==ps)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,x=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},pn=new T,Jt=new Pe,fu=new T(0,0,0),gu=new T(1,1,1),Pi=new T,Cr=new T,It=new T,uc=new Pe,dc=new ai,ci=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},vu=0,pc=new T,mn=new ai,pi=new Pe,Pr=new T,qn=new T,_u=new T,xu=new ai,mc=new T(1,0,0),fc=new T(0,1,0),gc=new T(0,0,1),vc={type:"added"},yu={type:"removed"},fn={type:"childadded",child:null},_a={type:"childremoved",child:null},_t=class r extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new ci,i=new ai,n=new T(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Pe},normalMatrix:{value:new De}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(gc,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(qn,Pr,this.up):pi.lookAt(Pr,qn,this.up),this.quaternion.setFromRotationMatrix(pi),n&&(pi.extractRotation(n.matrixWorld),mn.setFromRotationMatrix(pi),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vc),fn.child=e,this.dispatchEvent(fn),fn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yu),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vc),fn.child=e,this.dispatchEvent(fn),fn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qn,e,_u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qn,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};_t.DEFAULT_UP=new T(0,1,0),_t.DEFAULT_MATRIX_AUTO_UPDATE=!0,_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=new T,mi=new T,xa=new T,fi=new T,gn=new T,vn=new T,_c=new T,ya=new T,Ma=new T,Sa=new T,ba=new Ye,wa=new Ye,Ta=new Ye,_i=class r{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Kt.subVectors(e,t),n.cross(Kt);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Kt.subVectors(n,t),mi.subVectors(i,t),xa.subVectors(e,t);let a=Kt.dot(Kt),o=Kt.dot(mi),l=Kt.dot(xa),c=mi.dot(mi),h=mi.dot(xa),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,fi)!==null&&fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return ba.setScalar(0),wa.setScalar(0),Ta.setScalar(0),ba.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(ba,s.x),a.addScaledVector(wa,s.y),a.addScaledVector(Ta,s.z),a}static isFrontFacing(e,t,i,n){return Kt.subVectors(i,t),mi.subVectors(e,t),Kt.cross(mi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),.5*Kt.cross(mi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;gn.subVectors(n,i),vn.subVectors(s,i),ya.subVectors(e,i);let l=gn.dot(ya),c=vn.dot(ya);if(l<=0&&c<=0)return t.copy(i);Ma.subVectors(e,n);let h=gn.dot(Ma),u=vn.dot(Ma);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(gn,a);Sa.subVectors(e,s);let p=gn.dot(Sa),m=vn.dot(Sa);if(m>=0&&p<=m)return t.copy(s);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(vn,o);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return _c.subVectors(s,n),o=(u-h)/(u-h+(p-m)),t.copy(n).addScaledVector(_c,o);let f=1/(g+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(gn,a).addScaledVector(vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Ea(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Re=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=cu(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ea(a,s,e+1/3),this.g=Ea(a,s,e),this.b=Ea(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,n),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=yh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ve.fromWorkingColorSpace(Mt.copy(this),e),65536*Math.round(vt(255*Mt.r,0,255))+256*Math.round(vt(255*Mt.g,0,255))+Math.round(vt(255*Mt.b,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(Mt.copy(this),t);let i=Mt.r,n=Mt.g,s=Mt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=zt){Ve.fromWorkingColorSpace(Mt.copy(this),e);let t=Mt.r,i=Mt.g,n=Mt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Lr);let i=la(Li.h,Lr.h,t),n=la(Li.s,Lr.s,t),s=la(Li.l,Lr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new Re;Re.NAMES=yh;var Mu=0,bi=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=1,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ln,this.stencilZFail=ln,this.stencilZPass=ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ln&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ln&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ln&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wi=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bp=Su();function Su(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var ot=new T,Ir=new ie,lt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=So,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),e}};var _s=class extends lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xs=class extends lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Le=class extends lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},bu=0,Bt=new Pe,Aa=new _t,_n=new T,Ut=new oi,Yn=new oi,mt=new T,Qe=class r extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?xs:_s)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_n).negate(),this.translate(_n.x,_n.y,_n.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){let i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Yn.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ut.min,Yn.min),Ut.expandByPoint(mt),mt.addVectors(Ut.max,Yn.max),Ut.expandByPoint(mt)):(Ut.expandByPoint(Yn.min),Ut.expandByPoint(Yn.max))}Ut.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mt.fromBufferAttribute(o,c),l&&(_n.fromBufferAttribute(e,c),mt.add(_n)),n=Math.max(n,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new T,l[O]=new T;let c=new T,h=new T,u=new T,d=new ie,p=new ie,m=new ie,x=new T,g=new T;function f(O,U,B){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,U),u.fromBufferAttribute(i,B),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,U),m.fromBufferAttribute(s,B),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let H=1/(p.x*m.y-m.x*p.y);isFinite(H)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(H),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(H),o[O].add(x),o[U].add(x),o[B].add(x),l[O].add(g),l[U].add(g),l[B].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let O=0,U=_.length;O<U;++O){let B=_[O],H=B.start;for(let k=H,j=H+B.count;k<j;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new T,y=new T,w=new T,E=new T;function A(O){w.fromBufferAttribute(n,O),E.copy(w);let U=o[O];v.copy(U),v.sub(w.multiplyScalar(w.dot(U))).normalize(),y.crossVectors(E,U);let B=y.dot(l[O])<0?-1:1;a.setXYZW(O,v.x,v.y,v.z,B)}for(let O=0,U=_.length;O<U;++O){let B=_[O],H=B.start;for(let k=H,j=H+B.count;k<j;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new lt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let x=0,g=l.length;x<g;x++){p=o.isInterleavedBufferAttribute?l[x]*o.data.stride+o.offset:l[x]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new lt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xc=new Pe,Yi=new Un,Ur=new li,yc=new T,Dr=new T,Nr=new T,Or=new T,Ra=new T,Fr=new T,Mc=new T,Br=new T,We=class extends _t{constructor(e=new Qe,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Ra.fromBufferAttribute(u,e),a?Fr.addScaledVector(Ra,h):Fr.addScaledVector(Ra.sub(t),h))}t.add(Fr)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),Ur.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Ur,yc)===null||Yi.origin.distanceToSquared(yc)>(e.far-e.near)**2))return;xc.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(xc),i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Yi)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex];for(let _=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));_<v;_+=3)n=zr(this,f,e,i,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);m<x;m+=3)n=zr(this,a,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],f=a[g.materialIndex];for(let _=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));_<v;_+=3)n=zr(this,f,e,i,c,h,u,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);m<x;m+=3)n=zr(this,a,e,i,c,h,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}};function zr(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Dr),r.getVertexPosition(l,Nr),r.getVertexPosition(c,Or);let h=(function(u,d,p,m,x,g,f,_){let v;if(v=d.side===St?m.intersectTriangle(f,g,x,!0,_):m.intersectTriangle(x,g,f,d.side===Fi,_),v===null)return null;Br.copy(_),Br.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(Br);return y<p.near||y>p.far?null:{distance:y,point:Br.clone(),object:u}})(r,e,t,i,Dr,Nr,Or,Mc);if(h){let u=new T;_i.getBarycoord(Mc,Dr,Nr,Or,u),n&&(h.uv=_i.getInterpolatedAttribute(n,o,l,c,u,new ie)),s&&(h.uv1=_i.getInterpolatedAttribute(s,o,l,c,u,new ie)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new T,materialIndex:0};_i.getNormal(Dr,Nr,Or,d.normal),h.face=d,h.barycoord=u}return h}var ei=class r extends Qe{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(x,g,f,_,v,y,w,E,A,O,U){let B=y/A,H=w/O,k=y/2,j=w/2,G=E/2,q=A+1,$=O+1,se=0,ae=0,ce=new T;for(let xe=0;xe<$;xe++){let ee=xe*H-j;for(let ne=0;ne<q;ne++){let me=ne*B-k;ce[x]=me*_,ce[g]=ee*v,ce[f]=G,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[g]=0,ce[f]=E>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(ne/A),u.push(1-xe/O),se+=1}}for(let xe=0;xe<O;xe++)for(let ee=0;ee<A;ee++){let ne=d+ee+q*xe,me=d+ee+q*(xe+1),ue=d+(ee+1)+q*(xe+1),C=d+(ee+1)+q*xe;l.push(ne,me,C),l.push(me,ue,C),ae+=6}o.addGroup(p,ae,U),p+=ae,d+=se}m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Dn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function wt(r){let e={};for(let t=0;t<r.length;t++){let i=Dn(r[t]);for(let n in i)e[n]=i[n]}return e}function Mh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var wu={clone:Dn,merge:wt},At=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},or=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new T,Sc=new ie,bc=new ie,Tt=class extends or{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*bo*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*os*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*bo*Math.atan(Math.tan(.5*os*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Sc,bc),t.subVectors(bc,Sc)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*os*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xn=-90,Ao=class extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Tt(xn,1,e,t);n.layers=this.layers,this.add(n);let s=new Tt(xn,1,e,t);s.layers=this.layers,this.add(s);let a=new Tt(xn,1,e,t);a.layers=this.layers,this.add(a);let o=new Tt(xn,1,e,t);o.layers=this.layers,this.add(o);let l=new Tt(xn,1,e,t);l.layers=this.layers,this.add(l);let c=new Tt(xn,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==ps)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},ys=class extends Et{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Rn,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ro=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ys(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ei(5,5,5),s=new At({name:"CubemapFromEquirect",uniforms:Dn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:St,blending:0});s.uniforms.tEquirect.value=t;let a=new We(n,s),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=kt),new Ao(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Ca=new T,Tu=new T,Eu=new De,vi=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ca.subVectors(i,t).cross(Tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ca),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Eu.getNormalMatrix(e),n=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new li,kr=new T,Nn=class{constructor(e=new vi,t=new vi,i=new vi,n=new vi,s=new vi,a=new vi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],m=n[9],x=n[10],g=n[11],f=n[12],_=n[13],v=n[14],y=n[15];if(i[0].setComponents(l-s,d-c,g-p,y-f).normalize(),i[1].setComponents(l+s,d+c,g+p,y+f).normalize(),i[2].setComponents(l+a,d+h,g+m,y+_).normalize(),i[3].setComponents(l-a,d-h,g-m,y-_).normalize(),i[4].setComponents(l-o,d-u,g-x,y-v).normalize(),t===In)i[5].setComponents(l+o,d+u,g+x,y+v).normalize();else{if(t!==ps)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,x,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(kr.x=n.normal.x>0?e.max.x:e.min.x,kr.y=n.normal.y>0?e.max.y:e.min.y,kr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sh(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Au(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(r.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var Vt=class r extends Qe{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){let _=f*d-a;for(let v=0;v<c;v++){let y=v*u-s;m.push(y,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let v=_+c*f,y=_+c*(f+1),w=_+1+c*(f+1),E=_+1+c*f;p.push(v,y,E),p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ri={basic:{uniforms:wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:wt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:wt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:wt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:wt([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:wt([le.lights,le.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};ri.physical={uniforms:wt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Hr={r:0,b:0,g:0},Ji=new ci,Ru=new Pe;function Cu(r,e,t,i,n,s,a){let o=new Re(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(g){let f=g.isScene===!0?g.background:null;return f&&f.isTexture&&(f=(g.backgroundBlurriness>0?t:e).get(f)),f}function x(g,f){g.getRGB(Hr,Mh(r)),i.buffers.color.setClear(Hr.r,Hr.g,Hr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(g,f=1){o.set(g),h=f,x(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,x(o,h)},render:function(g){let f=!1,_=m(g);_===null?x(o,h):_&&_.isColor&&(x(_,1),f=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||f)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(g,f){let _=m(f);_&&(_.isCubeTexture||_.mapping===Xs)?(c===void 0&&(c=new We(new ei(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Dn(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ji.copy(f.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ru.makeRotationFromEuler(Ji)),c.material.toneMapped=Ve.getTransfer(_.colorSpace)!==Je,u===_&&d===_.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new We(new Vt(2,2),new At({name:"BackgroundMaterial",uniforms:Dn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(_.colorSpace)!==Je,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function Pu(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=c(null),s=n,a=!1;function o(f){return r.bindVertexArray(f)}function l(f){return r.deleteVertexArray(f)}function c(f){let _=[],v=[],y=[];for(let w=0;w<t;w++)_[w]=0,v[w]=0,y[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:v,attributeDivisors:y,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let _=0,v=f.length;_<v;_++)f[_]=0}function u(f){d(f,0)}function d(f,_){let v=s.newAttributes,y=s.enabledAttributes,w=s.attributeDivisors;v[f]=1,y[f]===0&&(r.enableVertexAttribArray(f),y[f]=1),w[f]!==_&&(r.vertexAttribDivisor(f,_),w[f]=_)}function p(){let f=s.newAttributes,_=s.enabledAttributes;for(let v=0,y=_.length;v<y;v++)_[v]!==f[v]&&(r.disableVertexAttribArray(v),_[v]=0)}function m(f,_,v,y,w,E,A){A===!0?r.vertexAttribIPointer(f,_,v,w,E):r.vertexAttribPointer(f,_,v,y,w,E)}function x(){g(),a=!0,s!==n&&(s=n,o(s.object))}function g(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(f,_,v,y,w){let E=!1,A=(function(O,U,B){let H=B.wireframe===!0,k=i[O.id];k===void 0&&(k={},i[O.id]=k);let j=k[U.id];j===void 0&&(j={},k[U.id]=j);let G=j[H];return G===void 0&&(G=c(r.createVertexArray()),j[H]=G),G})(y,v,_);s!==A&&(s=A,o(s.object)),E=(function(O,U,B,H){let k=s.attributes,j=U.attributes,G=0,q=B.getAttributes();for(let $ in q)if(q[$].location>=0){let se=k[$],ae=j[$];if(ae===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),se===void 0||se.attribute!==ae||ae&&se.data!==ae.data)return!0;G++}return s.attributesNum!==G||s.index!==H})(f,y,v,w),E&&(function(O,U,B,H){let k={},j=U.attributes,G=0,q=B.getAttributes();for(let $ in q)if(q[$].location>=0){let se=j[$];se===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(se=O.instanceColor));let ae={};ae.attribute=se,se&&se.data&&(ae.data=se.data),k[$]=ae,G++}s.attributes=k,s.attributesNum=G,s.index=H})(f,y,v,w),w!==null&&e.update(w,r.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(O,U,B,H){h();let k=H.attributes,j=B.getAttributes(),G=U.defaultAttributeValues;for(let q in j){let $=j[q];if($.location>=0){let se=k[q];if(se===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){let ae=se.normalized,ce=se.itemSize,xe=e.get(se);if(xe===void 0)continue;let ee=xe.buffer,ne=xe.type,me=xe.bytesPerElement,ue=ne===r.INT||ne===r.UNSIGNED_INT||se.gpuType===bl;if(se.isInterleavedBufferAttribute){let C=se.data,M=C.stride,N=se.offset;if(C.isInstancedInterleavedBuffer){for(let V=0;V<$.locationSize;V++)d($.location+V,C.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let V=0;V<$.locationSize;V++)u($.location+V);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let V=0;V<$.locationSize;V++)m($.location+V,ce/$.locationSize,ne,ae,M*me,(N+ce/$.locationSize*V)*me,ue)}else{if(se.isInstancedBufferAttribute){for(let C=0;C<$.locationSize;C++)d($.location+C,se.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let C=0;C<$.locationSize;C++)u($.location+C);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let C=0;C<$.locationSize;C++)m($.location+C,ce/$.locationSize,ne,ae,ce*me,ce/$.locationSize*C*me,ue)}}else if(G!==void 0){let ae=G[q];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv($.location,ae);break;case 3:r.vertexAttrib3fv($.location,ae);break;case 4:r.vertexAttrib4fv($.location,ae);break;default:r.vertexAttrib1fv($.location,ae)}}}}p()})(f,_,v,y),w!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:x,resetDefaultState:g,dispose:function(){x();for(let f in i){let _=i[f];for(let v in _){let y=_[v];for(let w in y)l(y[w].object),delete y[w];delete _[v]}delete i[f]}},releaseStatesOfGeometry:function(f){if(i[f.id]===void 0)return;let _=i[f.id];for(let v in _){let y=_[v];for(let w in y)l(y[w].object),delete y[w];delete _[v]}delete i[f.id]},releaseStatesOfProgram:function(f){for(let _ in i){let v=i[_];if(v[f.id]===void 0)continue;let y=v[f.id];for(let w in y)l(y[w].object),delete y[w];delete v[f.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Lu(r,e,t){let i;function n(s,a,o){o!==0&&(r.drawArraysInstanced(i,s,a,o),t.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){r.drawArrays(i,s,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)n(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u];for(let u=0;u<l.length;u++)t.update(h,i,l[u])}}}function Iu(r,e,t,i){let n;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){let d=e.get("EXT_clip_control");d.clipControlEXT(d.LOWER_LEFT_EXT,d.ZERO_TO_ONE_EXT)}let h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:s,textureFormatReadable:function(d){return d===$t||i.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Mi&&i.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==xi&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Uu(r){let e=this,t=null,i=0,n=!1,s=!1,a=new vi,o=new De,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,x=null;if(m!==0){if(x=l.value,p!==!0||x===null){let g=d+4*m,f=u.matrixWorldInverse;o.getNormalMatrix(f),(x===null||x.length<g)&&(x=new Float32Array(g));for(let _=0,v=d;_!==m;++_,v+=4)a.copy(h[_]).applyMatrix4(f,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,x}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||n;return n=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,x=h.clipShadows,g=r.get(h);if(!n||p===null||p.length===0||s&&!x)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let f=s?0:i,_=4*f,v=g.clippingState||null;l.value=v,v=c(p,u,_,d);for(let y=0;y!==_;++y)v[y]=t[y];g.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=f}}}function Du(r){let e=new WeakMap;function t(n,s){return s===Xa?n.mapping=Rn:s===ja&&(n.mapping=Cn),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===Xa||s===ja){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Ro(a.height);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Ms=class extends or{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wc=[.125,.215,.35,.446,.526,.582],Zn=20,Pa=new Ms,Tc=new Re,La=null,Ia=0,Ua=0,Da=!1,$i=(1+Math.sqrt(5))/2,yn=1/$i,Ec=[new T(-$i,yn,0),new T($i,yn,0),new T(-yn,0,$i),new T(yn,0,$i),new T(0,$i,-yn),new T(0,$i,yn),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Ss=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Ia,Ua),this._renderer.xr.enabled=Da,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rn||e.mapping===Cn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:gr,format:$t,colorSpace:zi,depthBuffer:!1},n=Ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+wc.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>a-4?m=wc[d-a+4-1]:d===0&&(m=0),c.push(m);let x=1/(p-2),g=-x,f=1+x,_=[g,g,f,g,f,f,g,g,f,f,g,f],v=6,y=6,w=3,E=2,A=1,O=new Float32Array(w*y*v),U=new Float32Array(E*y*v),B=new Float32Array(A*y*v);for(let k=0;k<v;k++){let j=k%3*2/3-1,G=k>2?0:-1,q=[j,G,0,j+2/3,G,0,j+2/3,G+1,0,j,G,0,j+2/3,G+1,0,j,G+1,0];O.set(q,w*y*k),U.set(_,E*y*k);let $=[k,k,k,k,k,k];B.set($,A*y*k)}let H=new Qe;H.setAttribute("position",new lt(O,w)),H.setAttribute("uv",new lt(U,E)),H.setAttribute("faceIndex",new lt(B,A)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Zn),h=new T(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return n}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,i,n){let s=new Tt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Tc),l.toneMapping=Ni,l.autoClear=!1;let u=new wi({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),d=new We(new ei,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Tc),p=!0);for(let x=0;x<6;x++){let g=x%3;g===0?(s.up.set(0,a[x],0),s.lookAt(o[x],0,0)):g===1?(s.up.set(0,0,a[x]),s.lookAt(0,o[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,o[x]));let f=this._cubeSize;Gr(n,g*f,x>2?f:0,f,f),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Rn||e.mapping===Cn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Gr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Pa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ec[(n-s-1)%Ec.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new We(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,x=isFinite(s)?1+Math.floor(3*m):Zn;x>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let g=[],f=0;for(let y=0;y<Zn;++y){let w=y/m,E=Math.exp(-w*w/2);g.push(E),y===0?f+=E:y<x&&(f+=2*E)}for(let y=0;y<g.length;y++)g[y]=g[y]/f;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-i;let v=this._sizeLods[n];Gr(t,3*v*(n>_-4?n-_+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Pa)}};function Ac(r,e,t){let i=new Si(r,e,t);return i.texture.mapping=Xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Rc(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cc(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nu(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Xa||s===ja,o=s===Rn||s===Cn;if(a||o){let l=e.get(n),c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new Ss(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Ss(r)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Ou(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ls("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Fu(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let x=h.array;d=h.version;for(let g=0,f=x.length;g<f;g+=3){let _=x[g+0],v=x[g+1],y=x[g+2];c.push(_,v,v,y,y,_)}}else{if(u===void 0)return;{let x=u.array;d=u.version;for(let g=0,f=x.length/3-1;g<f;g+=3){let _=g+0,v=g+1,y=g+2;c.push(_,v,v,y,y,_)}}}let p=new(xh(c)?xs:_s)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Bu(r,e,t){let i,n,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(i,l,n,o*s,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(i,l,n,o*s),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p];for(let p=0;p<h.length;p++)t.update(d,i,h[p])}}}function zu(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function ku(r,e,t){let i=new WeakMap,n=new Ye;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let O=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),m===!0&&(_=3);let v=a.attributes.position.count*_,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*y*4*h),E=new gs(w,v,y,h);E.type=xi,E.needsUpdate=!0;let A=4*_;for(let U=0;U<h;U++){let B=x[U],H=g[U],k=f[U],j=v*y*4*U;for(let G=0;G<B.count;G++){let q=G*A;d===!0&&(n.fromBufferAttribute(B,G),w[j+q+0]=n.x,w[j+q+1]=n.y,w[j+q+2]=n.z,w[j+q+3]=0),p===!0&&(n.fromBufferAttribute(H,G),w[j+q+4]=n.x,w[j+q+5]=n.y,w[j+q+6]=n.z,w[j+q+7]=0),m===!0&&(n.fromBufferAttribute(k,G),w[j+q+8]=n.x,w[j+q+9]=n.y,w[j+q+10]=n.z,w[j+q+11]=k.itemSize===4?n.w:1)}}u={count:h,texture:E,size:new ie(v,y)},i.set(a,u),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function Hu(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var bs=class extends Et{constructor(e,t,i,n,s,a,o,l,c,h=1026){if(h!==ar&&h!==Ln)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=nn),i===void 0&&h===Ln&&(i=Pn),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},bh=new Et,Pc=new bs(1,1),wh=new gs,Th=new Eo,Eh=new ys,Lc=[],Ic=[],Uc=new Float32Array(16),Dc=new Float32Array(9),Nc=new Float32Array(4);function Bn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Lc[n];if(s===void 0&&(s=new Float32Array(n),Lc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function qs(r,e){let t=Ic[e];t===void 0&&(t=new Int32Array(e),Ic[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Gu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Vu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function Wu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function Xu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function ju(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Nc.set(i),r.uniformMatrix2fv(this.addr,!1,Nc),ht(t,i)}}function qu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Dc.set(i),r.uniformMatrix3fv(this.addr,!1,Dc),ht(t,i)}}function Yu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Uc.set(i),r.uniformMatrix4fv(this.addr,!1,Uc),ht(t,i)}}function Zu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ju(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function Ku(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function $u(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function Qu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ed(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function td(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function id(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function nd(r,e,t){let i=this.cache,n=t.allocateTextureUnit(),s;i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),this.type===r.SAMPLER_2D_SHADOW?(Pc.compareFunction=_h,s=Pc):s=bh,t.setTexture2D(e||s,n)}function rd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Th,n)}function sd(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Eh,n)}function ad(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||wh,n)}function od(r,e){r.uniform1fv(this.addr,e)}function ld(r,e){let t=Bn(e,this.size,2);r.uniform2fv(this.addr,t)}function cd(r,e){let t=Bn(e,this.size,3);r.uniform3fv(this.addr,t)}function hd(r,e){let t=Bn(e,this.size,4);r.uniform4fv(this.addr,t)}function ud(r,e){let t=Bn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dd(r,e){let t=Bn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pd(r,e){let t=Bn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function md(r,e){r.uniform1iv(this.addr,e)}function fd(r,e){r.uniform2iv(this.addr,e)}function gd(r,e){r.uniform3iv(this.addr,e)}function vd(r,e){r.uniform4iv(this.addr,e)}function _d(r,e){r.uniform1uiv(this.addr,e)}function xd(r,e){r.uniform2uiv(this.addr,e)}function yd(r,e){r.uniform3uiv(this.addr,e)}function Md(r,e){r.uniform4uiv(this.addr,e)}function Sd(r,e,t){let i=this.cache,n=e.length,s=qs(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||bh,s[a])}function bd(r,e,t){let i=this.cache,n=e.length,s=qs(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Th,s[a])}function wd(r,e,t){let i=this.cache,n=e.length,s=qs(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Eh,s[a])}function Td(r,e,t){let i=this.cache,n=e.length,s=qs(t,n);ct(i,s)||(r.uniform1iv(this.addr,s),ht(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||wh,s[a])}var Co=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(n){switch(n){case 5126:return Gu;case 35664:return Vu;case 35665:return Wu;case 35666:return Xu;case 35674:return ju;case 35675:return qu;case 35676:return Yu;case 5124:case 35670:return Zu;case 35667:case 35671:return Ju;case 35668:case 35672:return Ku;case 35669:case 35673:return $u;case 5125:return Qu;case 36294:return ed;case 36295:return td;case 36296:return id;case 35678:case 36198:case 36298:case 36306:case 35682:return nd;case 35679:case 36299:case 36307:return rd;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return ad}})(t.type)}},Po=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(n){switch(n){case 5126:return od;case 35664:return ld;case 35665:return cd;case 35666:return hd;case 35674:return ud;case 35675:return dd;case 35676:return pd;case 5124:case 35670:return md;case 35667:case 35671:return fd;case 35668:case 35672:return gd;case 35669:case 35673:return vd;case 5125:return _d;case 36294:return xd;case 36295:return yd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Sd;case 35679:case 36299:case 36307:return bd;case 35680:case 36300:case 36308:case 36293:return wd;case 36289:case 36303:case 36311:case 36292:return Td}})(t.type)}},Lo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Na=/(\w+)(\])?(\[|\.)?/g;function Oc(r,e){r.seq.push(e),r.map[e.id]=e}function Ed(r,e,t){let i=r.name,n=i.length;for(Na.lastIndex=0;;){let s=Na.exec(i),a=Na.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){Oc(t,c===void 0?new Co(o,r,e):new Po(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Lo(o),Oc(t,h)),t=h}}}var An=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Ed(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Fc(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var Ad=37297,Rd=0;function Bc(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return n}function Cd(r,e){let t=(function(i){let n=Ve.getPrimaries(Ve.workingColorSpace),s=Ve.getPrimaries(i),a;switch(n===s?a="":n===ds&&s===us?a="LinearDisplayP3ToLinearSRGB":n===us&&s===ds&&(a="LinearSRGBToLinearDisplayP3"),i){case zi:case js:return[a,"LinearTransferOETF"];case zt:case Cl:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}})(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pd(r,e){let t;switch(e){case tu:t="Linear";break;case iu:t="Reinhard";break;case nu:t="Cineon";break;case ru:t="ACESFilmic";break;case au:t="AgX";break;case ou:t="Neutral";break;case su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vr=new T;function Ld(){return Ve.getLuminanceCoefficients(Vr),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Vr.x.toFixed(4)}, ${Vr.y.toFixed(4)}, ${Vr.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jn(r){return r!==""}function zc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Id=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(r){return r.replace(Id,Dd)}var Ud=new Map;function Dd(r,e){let t=Ue[e];if(t===void 0){let i=Ud.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Io(t)}var Nd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(r){return r.replace(Nd,Od)}function Od(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Gc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fd(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(H){let k="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===ah?k="SHADOWMAP_TYPE_PCF":H.shadowMapType===Ml?k="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===gi&&(k="SHADOWMAP_TYPE_VSM"),k})(t),c=(function(H){let k="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case Rn:case Cn:k="ENVMAP_TYPE_CUBE";break;case Xs:k="ENVMAP_TYPE_CUBE_UV"}return k})(t),h=(function(H){let k="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===Cn&&(k="ENVMAP_MODE_REFRACTION"),k})(t),u=(function(H){let k="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case Sl:k="ENVMAP_BLENDING_MULTIPLY";break;case Qh:k="ENVMAP_BLENDING_MIX";break;case eu:k="ENVMAP_BLENDING_ADD"}return k})(t),d=(function(H){let k=H.envMapCubeUVHeight;if(k===null)return null;let j=Math.log2(k)-2,G=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:G,maxMip:j}})(t),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jn).join(`
`)})(t),m=(function(H){let k=[];for(let j in H){let G=H[j];G!==!1&&k.push("#define "+j+" "+G)}return k.join(`
`)})(s),x=n.createProgram(),g,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Jn).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Jn).join(`
`),f.length>0&&(f+=`
`)):(g=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),f=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Pd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Cd("linearToOutputTexel",t.outputColorSpace),Ld(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jn).join(`
`)),a=Io(a),a=zc(a,t),a=kc(a,t),o=Io(o),o=zc(o,t),o=kc(o,t),a=Hc(a),o=Hc(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=_+g+a,y=_+f+o,w=Fc(n,n.VERTEX_SHADER,v),E=Fc(n,n.FRAGMENT_SHADER,y);function A(H){if(r.debug.checkShaderErrors){let k=n.getProgramInfoLog(x).trim(),j=n.getShaderInfoLog(w).trim(),G=n.getShaderInfoLog(E).trim(),q=!0,$=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,w,E);else{let se=Bc(n,w,"vertex"),ae=Bc(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+k+`
`+se+`
`+ae)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):j!==""&&G!==""||($=!1);$&&(H.diagnostics={runnable:q,programLog:k,vertexShader:{log:j,prefix:g},fragmentShader:{log:G,prefix:f}})}n.deleteShader(w),n.deleteShader(E),O=new An(n,x),U=(function(k,j){let G={},q=k.getProgramParameter(j,k.ACTIVE_ATTRIBUTES);for(let $=0;$<q;$++){let se=k.getActiveAttrib(j,$),ae=se.name,ce=1;se.type===k.FLOAT_MAT2&&(ce=2),se.type===k.FLOAT_MAT3&&(ce=3),se.type===k.FLOAT_MAT4&&(ce=4),G[ae]={type:se.type,location:k.getAttribLocation(j,ae),locationSize:ce}}return G})(n,x)}let O,U;n.attachShader(x,w),n.attachShader(x,E),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x),this.getUniforms=function(){return O===void 0&&A(this),O},this.getAttributes=function(){return U===void 0&&A(this),U};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=n.getProgramParameter(x,Ad)),B},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rd++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var Bd=0,Uo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Do(e),t.set(e,i)),i}},Do=class{constructor(e){this.id=Bd++,this.code=e,this.usedTimes=0}};function zd(r,e,t,i,n,s,a){let o=new vs,l=new Uo,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.reverseDepthBuffer,p=n.vertexTextures,m=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,_,v,y,w){let E=y.fog,A=w.geometry,O=f.isMeshStandardMaterial?y.environment:null,U=(f.isMeshStandardMaterial?t:e).get(f.envMap||O),B=U&&U.mapping===Xs?U.image.height:null,H=x[f.type];f.precision!==null&&(m=n.getMaxPrecision(f.precision),m!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",m,"instead."));let k=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,j=k!==void 0?k.length:0,G,q,$,se,ae=0;if(A.morphAttributes.position!==void 0&&(ae=1),A.morphAttributes.normal!==void 0&&(ae=2),A.morphAttributes.color!==void 0&&(ae=3),H){let Gn=ri[H];G=Gn.vertexShader,q=Gn.fragmentShader}else G=f.vertexShader,q=f.fragmentShader,l.update(f),$=l.getVertexShaderID(f),se=l.getFragmentShaderID(f);let ce=r.getRenderTarget(),xe=w.isInstancedMesh===!0,ee=w.isBatchedMesh===!0,ne=!!f.map,me=!!f.matcap,ue=!!U,C=!!f.aoMap,M=!!f.lightMap,N=!!f.bumpMap,V=!!f.normalMap,R=!!f.displacementMap,P=!!f.emissiveMap,S=!!f.metalnessMap,I=!!f.roughnessMap,L=f.anisotropy>0,Z=f.clearcoat>0,F=f.dispersion>0,J=f.iridescence>0,te=f.sheen>0,K=f.transmission>0,he=L&&!!f.anisotropyMap,pe=Z&&!!f.clearcoatMap,fe=Z&&!!f.clearcoatNormalMap,Ee=Z&&!!f.clearcoatRoughnessMap,Fe=J&&!!f.iridescenceMap,Oe=J&&!!f.iridescenceThicknessMap,ye=te&&!!f.sheenColorMap,ke=te&&!!f.sheenRoughnessMap,Xe=!!f.specularMap,tt=!!f.specularColorMap,ve=!!f.specularIntensityMap,Be=K&&!!f.transmissionMap,je=K&&!!f.thicknessMap,xr=!!f.gradientMap,on=!!f.alphaMap,Lt=f.alphaTest>0,hi=!!f.alphaHash,Hi=!!f.extensions,D=Ni;f.toneMapped&&(ce!==null&&ce.isXRRenderTarget!==!0||(D=r.toneMapping));let Gi={shaderID:H,shaderType:f.type,shaderName:f.name,vertexShader:G,fragmentShader:q,defines:f.defines,customVertexShaderID:$,customFragmentShaderID:se,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:m,batching:ee,batchingColor:ee&&w._colorsTexture!==null,instancing:xe,instancingColor:xe&&w.instanceColor!==null,instancingMorph:xe&&w.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:zi,alphaToCoverage:!!f.alphaToCoverage,map:ne,matcap:me,envMap:ue,envMapMode:ue&&U.mapping,envMapCubeUVHeight:B,aoMap:C,lightMap:M,bumpMap:N,normalMap:V,displacementMap:p&&R,emissiveMap:P,normalMapObjectSpace:V&&f.normalMapType===1,normalMapTangentSpace:V&&f.normalMapType===0,metalnessMap:S,roughnessMap:I,anisotropy:L,anisotropyMap:he,clearcoat:Z,clearcoatMap:pe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:F,iridescence:J,iridescenceMap:Fe,iridescenceThicknessMap:Oe,sheen:te,sheenColorMap:ye,sheenRoughnessMap:ke,specularMap:Xe,specularColorMap:tt,specularIntensityMap:ve,transmission:K,transmissionMap:Be,thicknessMap:je,gradientMap:xr,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:on,alphaTest:Lt,alphaHash:hi,combine:f.combine,mapUv:ne&&g(f.map.channel),aoMapUv:C&&g(f.aoMap.channel),lightMapUv:M&&g(f.lightMap.channel),bumpMapUv:N&&g(f.bumpMap.channel),normalMapUv:V&&g(f.normalMap.channel),displacementMapUv:R&&g(f.displacementMap.channel),emissiveMapUv:P&&g(f.emissiveMap.channel),metalnessMapUv:S&&g(f.metalnessMap.channel),roughnessMapUv:I&&g(f.roughnessMap.channel),anisotropyMapUv:he&&g(f.anisotropyMap.channel),clearcoatMapUv:pe&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(f.sheenRoughnessMap.channel),specularMapUv:Xe&&g(f.specularMap.channel),specularColorMapUv:tt&&g(f.specularColorMap.channel),specularIntensityMapUv:ve&&g(f.specularIntensityMap.channel),transmissionMapUv:Be&&g(f.transmissionMap.channel),thicknessMapUv:je&&g(f.thicknessMap.channel),alphaMapUv:on&&g(f.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(V||L),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!A.attributes.uv&&(ne||on),fog:!!E,useFog:f.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ae,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:D,decodeVideoTexture:ne&&f.map.isVideoTexture===!0&&Ve.getTransfer(f.map.colorSpace)===Je,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===St,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Hi&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Hi&&f.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Gi.vertexUv1s=c.has(1),Gi.vertexUv2s=c.has(2),Gi.vertexUv3s=c.has(3),c.clear(),Gi},getProgramCacheKey:function(f){let _=[];if(f.shaderID?_.push(f.shaderID):(_.push(f.customVertexShaderID),_.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)_.push(v),_.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(_,f),(function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),v.push(o.mask)})(_,f),_.push(r.outputColorSpace)),_.push(f.customProgramCacheKey),_.join()},getUniforms:function(f){let _=x[f.type],v;if(_){let y=ri[_];v=wu.clone(y.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,_){let v;for(let y=0,w=h.length;y<w;y++){let E=h[y];if(E.cacheKey===_){v=E,++v.usedTimes;break}}return v===void 0&&(v=new Fd(r,_,f,s),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes==0){let _=h.indexOf(f);h[_]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function kd(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Hd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wc(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Hd),i.length>1&&i.sort(o||Vc),n.length>1&&n.sort(o||Vc)}}}function Gd(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Wc,r.set(e,[n])):t>=i.length?(n=new Wc,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Vd(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Re};break;case"SpotLight":t={position:new T,direction:new T,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}var Wd=0;function Xd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jd(r){let e=new Vd,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new T);let n=new T,s=new Pe,a=new Pe;return{setup:function(o){let l=0,c=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let u=0,d=0,p=0,m=0,x=0,g=0,f=0,_=0,v=0,y=0,w=0;o.sort(Xd);for(let A=0,O=o.length;A<O;A++){let U=o[A],B=U.color,H=U.intensity,k=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)l+=B.r*H,c+=B.g*H,h+=B.b*H;else if(U.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(U.sh.coefficients[G],H);w++}else if(U.isDirectionalLight){let G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let q=U.shadow,$=t.get(U);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,i.directionalShadow[u]=$,i.directionalShadowMap[u]=j,i.directionalShadowMatrix[u]=U.shadow.matrix,g++}i.directional[u]=G,u++}else if(U.isSpotLight){let G=e.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(B).multiplyScalar(H),G.distance=k,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,i.spot[p]=G;let q=U.shadow;if(U.map&&(i.spotLightMap[v]=U.map,v++,q.updateMatrices(U),U.castShadow&&y++),i.spotLightMatrix[p]=q.matrix,U.castShadow){let $=t.get(U);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,i.spotShadow[p]=$,i.spotShadowMap[p]=j,_++}p++}else if(U.isRectAreaLight){let G=e.get(U);G.color.copy(B).multiplyScalar(H),G.halfWidth.set(.5*U.width,0,0),G.halfHeight.set(0,.5*U.height,0),i.rectArea[m]=G,m++}else if(U.isPointLight){let G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){let q=U.shadow,$=t.get(U);$.shadowIntensity=q.intensity,$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,$.shadowCameraNear=q.camera.near,$.shadowCameraFar=q.camera.far,i.pointShadow[d]=$,i.pointShadowMap[d]=j,i.pointShadowMatrix[d]=U.shadow.matrix,f++}i.point[d]=G,d++}else if(U.isHemisphereLight){let G=e.get(U);G.skyColor.copy(U.color).multiplyScalar(H),G.groundColor.copy(U.groundColor).multiplyScalar(H),i.hemi[x]=G,x++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let E=i.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===m&&E.hemiLength===x&&E.numDirectionalShadows===g&&E.numPointShadows===f&&E.numSpotShadows===_&&E.numSpotMaps===v&&E.numLightProbes===w||(i.directional.length=u,i.spot.length=p,i.rectArea.length=m,i.point.length=d,i.hemi.length=x,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=f,i.pointShadowMap.length=f,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=f,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=w,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=m,E.hemiLength=x,E.numDirectionalShadows=g,E.numPointShadows=f,E.numSpotShadows=_,E.numSpotMaps=v,E.numLightProbes=w,i.version=Wd++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let x=0,g=o.length;x<g;x++){let f=o[x];if(f.isDirectionalLight){let _=i.directional[c];_.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),c++}else if(f.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(f.matrixWorld),n.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),u++}else if(f.isRectAreaLight){let _=i.rectArea[d];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(f.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(.5*f.width,0,0),_.halfHeight.set(0,.5*f.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(f.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(m),h++}else if(f.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(f.matrixWorld),_.direction.transformDirection(m),p++}}},state:i}}function Xc(r){let e=new jd(r),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){n.camera=s,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){i.push(s)}}}function qd(r){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),s;return n===void 0?(s=new Xc(r),e.set(t,[s])):i>=n.length?(s=new Xc(r),n.push(s)):s=n[i],s},dispose:function(){e=new WeakMap}}}var No=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yd(r,e,t){let i=new Nn,n=new ie,s=new ie,a=new Ye,o=new No({depthPacking:3201}),l=new Oo,c={},h=t.maxTextureSize,u={[Fi]:St,[St]:Fi,2:2},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Qe;m.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new We(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let f=this.type;function _(E,A){let O=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,O,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,O,p,x,null)}function v(E,A,O,U){let B=null,H=O.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(H!==void 0)B=H;else if(B=O.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=B.uuid,j=A.uuid,G=c[k];G===void 0&&(G={},c[k]=G);let q=G[j];q===void 0&&(q=B.clone(),G[j]=q,A.addEventListener("dispose",w)),B=q}return B.visible=A.visible,B.wireframe=A.wireframe,B.side=U===gi?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],B.alphaMap=A.alphaMap,B.alphaTest=A.alphaTest,B.map=A.map,B.clipShadows=A.clipShadows,B.clippingPlanes=A.clippingPlanes,B.clipIntersection=A.clipIntersection,B.displacementMap=A.displacementMap,B.displacementScale=A.displacementScale,B.displacementBias=A.displacementBias,B.wireframeLinewidth=A.wireframeLinewidth,B.linewidth=A.linewidth,O.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(r.properties.get(B).light=O),B}function y(E,A,O,U,B){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&B===gi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld);let k=e.update(E),j=E.material;if(Array.isArray(j)){let G=k.groups;for(let q=0,$=G.length;q<$;q++){let se=G[q],ae=j[se.materialIndex];if(ae&&ae.visible){let ce=v(E,ae,U,B);E.onBeforeShadow(r,E,A,O,k,ce,se),r.renderBufferDirect(O,null,k,ce,E,se),E.onAfterShadow(r,E,A,O,k,ce,se)}}}else if(j.visible){let G=v(E,j,U,B);E.onBeforeShadow(r,E,A,O,k,G,null),r.renderBufferDirect(O,null,k,G,E,null),E.onAfterShadow(r,E,A,O,k,G,null)}}let H=E.children;for(let k=0,j=H.length;k<j;k++)y(H[k],A,O,U,B)}function w(E){E.target.removeEventListener("dispose",w);for(let A in c){let O=c[A],U=E.target.uuid;U in O&&(O[U].dispose(),delete O[U])}}this.render=function(E,A,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let U=r.getRenderTarget(),B=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),k=r.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let j=f!==gi&&this.type===gi,G=f===gi&&this.type!==gi;for(let q=0,$=E.length;q<$;q++){let se=E[q],ae=se.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;n.copy(ae.mapSize);let ce=ae.getFrameExtents();if(n.multiply(ce),s.copy(ae.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ce.x),n.x=s.x*ce.x,ae.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ce.y),n.y=s.y*ce.y,ae.mapSize.y=s.y)),ae.map===null||j===!0||G===!0){let ee=this.type!==gi?{minFilter:Ht,magFilter:Ht}:{};ae.map!==null&&ae.map.dispose(),ae.map=new Si(n.x,n.y,ee),ae.map.texture.name=se.name+".shadowMap",ae.camera.updateProjectionMatrix()}r.setRenderTarget(ae.map),r.clear();let xe=ae.getViewportCount();for(let ee=0;ee<xe;ee++){let ne=ae.getViewport(ee);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),k.viewport(a),ae.updateMatrices(se,ee),i=ae.getFrustum(),y(A,O,ae.camera,se,this.type)}ae.isPointLightShadow!==!0&&this.type===gi&&_(ae,O),ae.needsUpdate=!1}f=this.type,g.needsUpdate=!1,r.setRenderTarget(U,B,H)}}var Zd={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Jd(r){let e=new function(){let S=!1,I=new Ye,L=null,Z=new Ye(0,0,0,0);return{setMask:function(F){L===F||S||(r.colorMask(F,F,F,F),L=F)},setLocked:function(F){S=F},setClear:function(F,J,te,K,he){he===!0&&(F*=K,J*=K,te*=K),I.set(F,J,te,K),Z.equals(I)===!1&&(r.clearColor(F,J,te,K),Z.copy(I))},reset:function(){S=!1,L=null,Z.set(-1,0,0,0)}}},t=new function(){let S=!1,I=!1,L=null,Z=null,F=null;return{setReversed:function(J){I=J},setTest:function(J){J?me(r.DEPTH_TEST):ue(r.DEPTH_TEST)},setMask:function(J){L===J||S||(r.depthMask(J),L=J)},setFunc:function(J){if(I&&(J=Zd[J]),Z!==J){switch(J){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}Z=J}},setLocked:function(J){S=J},setClear:function(J){F!==J&&(r.clearDepth(J),F=J)},reset:function(){S=!1,L=null,Z=null,F=null}}},i=new function(){let S=!1,I=null,L=null,Z=null,F=null,J=null,te=null,K=null,he=null;return{setTest:function(pe){S||(pe?me(r.STENCIL_TEST):ue(r.STENCIL_TEST))},setMask:function(pe){I===pe||S||(r.stencilMask(pe),I=pe)},setFunc:function(pe,fe,Ee){L===pe&&Z===fe&&F===Ee||(r.stencilFunc(pe,fe,Ee),L=pe,Z=fe,F=Ee)},setOp:function(pe,fe,Ee){J===pe&&te===fe&&K===Ee||(r.stencilOp(pe,fe,Ee),J=pe,te=fe,K=Ee)},setLocked:function(pe){S=pe},setClear:function(pe){he!==pe&&(r.clearStencil(pe),he=pe)},reset:function(){S=!1,I=null,L=null,Z=null,F=null,J=null,te=null,K=null,he=null}}},n=new WeakMap,s=new WeakMap,a={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,m=null,x=null,g=null,f=null,_=null,v=new Re(0,0,0),y=0,w=!1,E=null,A=null,O=null,U=null,B=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=j>=2);let q=null,$={},se=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),ce=new Ye().fromArray(se),xe=new Ye().fromArray(ae);function ee(S,I,L,Z){let F=new Uint8Array(4),J=r.createTexture();r.bindTexture(S,J),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<L;te++)S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY?r.texImage3D(I,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,F):r.texImage2D(I+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,F);return J}let ne={};function me(S){a[S]!==!0&&(r.enable(S),a[S]=!0)}function ue(S){a[S]!==!1&&(r.disable(S),a[S]=!1)}ne[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),e.setClear(0,0,0,1),t.setClear(1),i.setClear(0),me(r.DEPTH_TEST),t.setFunc(3),V(!1),R(1),me(r.CULL_FACE),N(0);let C={[Qi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};C[103]=r.MIN,C[104]=r.MAX;let M={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Va]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Wa]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function N(S,I,L,Z,F,J,te,K,he,pe){if(S!==0){if(u===!1&&(me(r.BLEND),u=!0),S===5)F=F||I,J=J||L,te=te||Z,I===p&&F===g||(r.blendEquationSeparate(C[I],C[F]),p=I,g=F),L===m&&Z===x&&J===f&&te===_||(r.blendFuncSeparate(M[L],M[Z],M[J],M[te]),m=L,x=Z,f=J,_=te),K.equals(v)!==!1&&he===y||(r.blendColor(K.r,K.g,K.b,he),v.copy(K),y=he),d=S,w=!1;else if(S!==d||pe!==w){if(p===Qi&&g===Qi||(r.blendEquation(r.FUNC_ADD),p=Qi,g=Qi),pe)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}m=null,x=null,f=null,_=null,v.set(0,0,0),y=0,d=S,w=pe}}else u===!0&&(ue(r.BLEND),u=!1)}function V(S){E!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),E=S)}function R(S){S!==0?(me(r.CULL_FACE),S!==A&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ue(r.CULL_FACE),A=S}function P(S,I,L){S?(me(r.POLYGON_OFFSET_FILL),U===I&&B===L||(r.polygonOffset(I,L),U=I,B=L)):ue(r.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:t,stencil:i},enable:me,disable:ue,bindFramebuffer:function(S,I){return o[S]!==I&&(r.bindFramebuffer(S,I),o[S]=I,S===r.DRAW_FRAMEBUFFER&&(o[r.FRAMEBUFFER]=I),S===r.FRAMEBUFFER&&(o[r.DRAW_FRAMEBUFFER]=I),!0)},drawBuffers:function(S,I){let L=c,Z=!1;if(S){L=l.get(I),L===void 0&&(L=[],l.set(I,L));let F=S.textures;if(L.length!==F.length||L[0]!==r.COLOR_ATTACHMENT0){for(let J=0,te=F.length;J<te;J++)L[J]=r.COLOR_ATTACHMENT0+J;L.length=F.length,Z=!0}}else L[0]!==r.BACK&&(L[0]=r.BACK,Z=!0);Z&&r.drawBuffers(L)},useProgram:function(S){return h!==S&&(r.useProgram(S),h=S,!0)},setBlending:N,setMaterial:function(S,I){S.side===2?ue(r.CULL_FACE):me(r.CULL_FACE);let L=S.side===St;I&&(L=!L),V(L),S.blending===1&&S.transparent===!1?N(0):N(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),t.setFunc(S.depthFunc),t.setTest(S.depthTest),t.setMask(S.depthWrite),e.setMask(S.colorWrite);let Z=S.stencilWrite;i.setTest(Z),Z&&(i.setMask(S.stencilWriteMask),i.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),i.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),P(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):ue(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:R,setLineWidth:function(S){S!==O&&(k&&r.lineWidth(S),O=S)},setPolygonOffset:P,setScissorTest:function(S){S?me(r.SCISSOR_TEST):ue(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+H-1),q!==S&&(r.activeTexture(S),q=S)},bindTexture:function(S,I,L){L===void 0&&(L=q===null?r.TEXTURE0+H-1:q);let Z=$[L];Z===void 0&&(Z={type:void 0,texture:void 0},$[L]=Z),Z.type===S&&Z.texture===I||(q!==L&&(r.activeTexture(L),q=L),r.bindTexture(S,I||ne[S]),Z.type=S,Z.texture=I)},unbindTexture:function(){let S=$[q];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,I){let L=s.get(I);L===void 0&&(L=new WeakMap,s.set(I,L));let Z=L.get(S);Z===void 0&&(Z=r.getUniformBlockIndex(I,S.name),L.set(S,Z))},uniformBlockBinding:function(S,I){let L=s.get(I).get(S);n.get(I)!==L&&(r.uniformBlockBinding(I,L,S.__bindingPointIndex),n.set(I,L))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){ce.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),ce.copy(S))},viewport:function(S){xe.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),xe.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),a={},q=null,$={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,m=null,x=null,g=null,f=null,_=null,v=new Re(0,0,0),y=0,w=!1,E=null,A=null,O=null,U=null,B=null,ce.set(0,0,r.canvas.width,r.canvas.height),xe.set(0,0,r.canvas.width,r.canvas.height),e.reset(),t.reset(),i.reset()}}}function jc(r,e,t,i){let n=(function(s){switch(s){case Mi:case lh:return{byteLength:1,components:1};case sr:case ch:case gr:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case nn:case bl:case xi:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(i);switch(t){case uh:case ph:return r*e;case mh:return r*e*2;case fh:case El:return r*e/n.components*n.byteLength;case gh:case Al:return r*e*2/n.components*n.byteLength;case dh:return r*e*3/n.components*n.byteLength;case $t:case Rl:return r*e*4/n.components*n.byteLength;case is:case ns:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Za:case Ka:return Math.max(r,16)*Math.max(e,8)/4;case Ya:case Ja:return Math.max(r,8)*Math.max(e,8)/2;case $a:case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case co:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ho:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case po:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case mo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case as:case go:case vo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case vh:case _o:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xo:case yo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kd(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return p?new OffscreenCanvas(C,M):ms("canvas")}function x(C,M,N){let V=1,R=ue(C);if((R.width>N||R.height>N)&&(V=N/Math.max(R.width,R.height)),V<1){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let P=Math.floor(V*R.width),S=Math.floor(V*R.height);u===void 0&&(u=m(P,S));let I=M?m(P,S):u;return I.width=P,I.height=S,I.getContext("2d").drawImage(C,0,0,P,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+P+"x"+S+")."),I}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),C}return C}function g(C){return C.generateMipmaps&&C.minFilter!==Ht&&C.minFilter!==kt}function f(C){r.generateMipmap(C)}function _(C,M,N,V,R=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let P=M;if(M===r.RED&&(N===r.FLOAT&&(P=r.R32F),N===r.HALF_FLOAT&&(P=r.R16F),N===r.UNSIGNED_BYTE&&(P=r.R8)),M===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(P=r.R8UI),N===r.UNSIGNED_SHORT&&(P=r.R16UI),N===r.UNSIGNED_INT&&(P=r.R32UI),N===r.BYTE&&(P=r.R8I),N===r.SHORT&&(P=r.R16I),N===r.INT&&(P=r.R32I)),M===r.RG&&(N===r.FLOAT&&(P=r.RG32F),N===r.HALF_FLOAT&&(P=r.RG16F),N===r.UNSIGNED_BYTE&&(P=r.RG8)),M===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(P=r.RG8UI),N===r.UNSIGNED_SHORT&&(P=r.RG16UI),N===r.UNSIGNED_INT&&(P=r.RG32UI),N===r.BYTE&&(P=r.RG8I),N===r.SHORT&&(P=r.RG16I),N===r.INT&&(P=r.RG32I)),M===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(P=r.RGB8UI),N===r.UNSIGNED_SHORT&&(P=r.RGB16UI),N===r.UNSIGNED_INT&&(P=r.RGB32UI),N===r.BYTE&&(P=r.RGB8I),N===r.SHORT&&(P=r.RGB16I),N===r.INT&&(P=r.RGB32I)),M===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(P=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(P=r.RGBA16UI),N===r.UNSIGNED_INT&&(P=r.RGBA32UI),N===r.BYTE&&(P=r.RGBA8I),N===r.SHORT&&(P=r.RGBA16I),N===r.INT&&(P=r.RGBA32I)),M===r.RGB&&N===r.UNSIGNED_INT_5_9_9_9_REV&&(P=r.RGB9_E5),M===r.RGBA){let S=R?hs:Ve.getTransfer(V);N===r.FLOAT&&(P=r.RGBA32F),N===r.HALF_FLOAT&&(P=r.RGBA16F),N===r.UNSIGNED_BYTE&&(P=S===Je?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(P=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(P=r.RGB5_A1)}return P!==r.R16F&&P!==r.R32F&&P!==r.RG16F&&P!==r.RG32F&&P!==r.RGBA16F&&P!==r.RGBA32F||e.get("EXT_color_buffer_float"),P}function v(C,M){let N;return C?M===null||M===nn||M===Pn?N=r.DEPTH24_STENCIL8:M===xi?N=r.DEPTH32F_STENCIL8:M===sr&&(N=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===nn||M===Pn?N=r.DEPTH_COMPONENT24:M===xi?N=r.DEPTH_COMPONENT32F:M===sr&&(N=r.DEPTH_COMPONENT16),N}function y(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==kt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){let M=C.target;M.removeEventListener("dispose",w),(function(N){let V=i.get(N);if(V.__webglInit===void 0)return;let R=N.source,P=d.get(R);if(P){let S=P[V.__cacheKey];S.usedTimes--,S.usedTimes===0&&A(N),Object.keys(P).length===0&&d.delete(R)}i.remove(N)})(M),M.isVideoTexture&&h.delete(M)}function E(C){let M=C.target;M.removeEventListener("dispose",E),(function(N){let V=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(V.__webglFramebuffer[P]))for(let S=0;S<V.__webglFramebuffer[P].length;S++)r.deleteFramebuffer(V.__webglFramebuffer[P][S]);else r.deleteFramebuffer(V.__webglFramebuffer[P]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[P])}else{if(Array.isArray(V.__webglFramebuffer))for(let P=0;P<V.__webglFramebuffer.length;P++)r.deleteFramebuffer(V.__webglFramebuffer[P]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let P=0;P<V.__webglColorRenderbuffer.length;P++)V.__webglColorRenderbuffer[P]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[P]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let R=N.textures;for(let P=0,S=R.length;P<S;P++){let I=i.get(R[P]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),i.remove(R[P])}i.remove(N)})(M)}function A(C){let M=i.get(C);r.deleteTexture(M.__webglTexture);let N=C.source;delete d.get(N)[M.__cacheKey],a.memory.textures--}let O=0;function U(C,M){let N=i.get(C);if(C.isVideoTexture&&(function(V){let R=a.render.frame;h.get(V)!==R&&(h.set(V,R),V.update())})(C),C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){let V=C.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(V.complete!==!1)return void q(N,C,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+M)}let B={[nr]:r.REPEAT,[rr]:r.CLAMP_TO_EDGE,[qa]:r.MIRRORED_REPEAT},H={[Ht]:r.NEAREST,[lu]:r.NEAREST_MIPMAP_NEAREST,[br]:r.NEAREST_MIPMAP_LINEAR,[kt]:r.LINEAR,[aa]:r.LINEAR_MIPMAP_NEAREST,[Di]:r.LINEAR_MIPMAP_LINEAR},k={512:r.NEVER,519:r.ALWAYS,513:r.LESS,[_h]:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function j(C,M){if(M.type!==xi||e.has("OES_texture_float_linear")!==!1||M.magFilter!==kt&&M.magFilter!==aa&&M.magFilter!==br&&M.magFilter!==Di&&M.minFilter!==kt&&M.minFilter!==aa&&M.minFilter!==br&&M.minFilter!==Di||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,B[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,B[M.wrapT]),C!==r.TEXTURE_3D&&C!==r.TEXTURE_2D_ARRAY||r.texParameteri(C,r.TEXTURE_WRAP_R,B[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,H[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,k[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ht||M.minFilter!==br&&M.minFilter!==Di||M.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function G(C,M){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));let V=M.source,R=d.get(V);R===void 0&&(R={},d.set(V,R));let P=(function(S){let I=[];return I.push(S.wrapS),I.push(S.wrapT),I.push(S.wrapR||0),I.push(S.magFilter),I.push(S.minFilter),I.push(S.anisotropy),I.push(S.internalFormat),I.push(S.format),I.push(S.type),I.push(S.generateMipmaps),I.push(S.premultiplyAlpha),I.push(S.flipY),I.push(S.unpackAlignment),I.push(S.colorSpace),I.join()})(M);if(P!==C.__cacheKey){R[P]===void 0&&(R[P]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),R[P].usedTimes++;let S=R[C.__cacheKey];S!==void 0&&(R[C.__cacheKey].usedTimes--,S.usedTimes===0&&A(M)),C.__cacheKey=P,C.__webglTexture=R[P].texture}return N}function q(C,M,N){let V=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=r.TEXTURE_3D);let R=G(C,M),P=M.source;t.bindTexture(V,C.__webglTexture,r.TEXTURE0+N);let S=i.get(P);if(P.version!==S.__version||R===!0){t.activeTexture(r.TEXTURE0+N);let I=Ve.getPrimaries(Ve.workingColorSpace),L=M.colorSpace===Ui?null:Ve.getPrimaries(M.colorSpace),Z=M.colorSpace===Ui||I===L?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let F=x(M.image,!1,n.maxTextureSize);F=me(M,F);let J=s.convert(M.format,M.colorSpace),te=s.convert(M.type),K,he=_(M.internalFormat,J,te,M.colorSpace,M.isVideoTexture);j(V,M);let pe=M.mipmaps,fe=M.isVideoTexture!==!0,Ee=S.__version===void 0||R===!0,Fe=P.dataReady,Oe=y(M,F);if(M.isDepthTexture)he=v(M.format===Ln,M.type),Ee&&(fe?t.texStorage2D(r.TEXTURE_2D,1,he,F.width,F.height):t.texImage2D(r.TEXTURE_2D,0,he,F.width,F.height,0,J,te,null));else if(M.isDataTexture)if(pe.length>0){fe&&Ee&&t.texStorage2D(r.TEXTURE_2D,Oe,he,pe[0].width,pe[0].height);for(let ye=0,ke=pe.length;ye<ke;ye++)K=pe[ye],fe?Fe&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,K.width,K.height,J,te,K.data):t.texImage2D(r.TEXTURE_2D,ye,he,K.width,K.height,0,J,te,K.data);M.generateMipmaps=!1}else fe?(Ee&&t.texStorage2D(r.TEXTURE_2D,Oe,he,F.width,F.height),Fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,F.width,F.height,J,te,F.data)):t.texImage2D(r.TEXTURE_2D,0,he,F.width,F.height,0,J,te,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,he,pe[0].width,pe[0].height,F.depth);for(let ye=0,ke=pe.length;ye<ke;ye++)if(K=pe[ye],M.format!==$t)if(J!==null)if(fe){if(Fe)if(M.layerUpdates.size>0){let Xe=jc(K.width,K.height,M.format,M.type);for(let tt of M.layerUpdates){let ve=K.data.subarray(tt*Xe/K.data.BYTES_PER_ELEMENT,(tt+1)*Xe/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,tt,K.width,K.height,1,J,ve,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,K.width,K.height,F.depth,J,K.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,he,K.width,K.height,F.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,K.width,K.height,F.depth,J,te,K.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,he,K.width,K.height,F.depth,0,J,te,K.data)}else{fe&&Ee&&t.texStorage2D(r.TEXTURE_2D,Oe,he,pe[0].width,pe[0].height);for(let ye=0,ke=pe.length;ye<ke;ye++)K=pe[ye],M.format!==$t?J!==null?fe?Fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,K.width,K.height,J,K.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,he,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Fe&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,K.width,K.height,J,te,K.data):t.texImage2D(r.TEXTURE_2D,ye,he,K.width,K.height,0,J,te,K.data)}else if(M.isDataArrayTexture)if(fe){if(Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,he,F.width,F.height,F.depth),Fe)if(M.layerUpdates.size>0){let ye=jc(F.width,F.height,M.format,M.type);for(let ke of M.layerUpdates){let Xe=F.data.subarray(ke*ye/F.data.BYTES_PER_ELEMENT,(ke+1)*ye/F.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ke,F.width,F.height,1,J,te,Xe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,J,te,F.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,F.width,F.height,F.depth,0,J,te,F.data);else if(M.isData3DTexture)fe?(Ee&&t.texStorage3D(r.TEXTURE_3D,Oe,he,F.width,F.height,F.depth),Fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,J,te,F.data)):t.texImage3D(r.TEXTURE_3D,0,he,F.width,F.height,F.depth,0,J,te,F.data);else if(M.isFramebufferTexture){if(Ee)if(fe)t.texStorage2D(r.TEXTURE_2D,Oe,he,F.width,F.height);else{let ye=F.width,ke=F.height;for(let Xe=0;Xe<Oe;Xe++)t.texImage2D(r.TEXTURE_2D,Xe,he,ye,ke,0,J,te,null),ye>>=1,ke>>=1}}else if(pe.length>0){if(fe&&Ee){let ye=ue(pe[0]);t.texStorage2D(r.TEXTURE_2D,Oe,he,ye.width,ye.height)}for(let ye=0,ke=pe.length;ye<ke;ye++)K=pe[ye],fe?Fe&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,J,te,K):t.texImage2D(r.TEXTURE_2D,ye,he,J,te,K);M.generateMipmaps=!1}else if(fe){if(Ee){let ye=ue(F);t.texStorage2D(r.TEXTURE_2D,Oe,he,ye.width,ye.height)}Fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,J,te,F)}else t.texImage2D(r.TEXTURE_2D,0,he,J,te,F);g(M)&&f(V),S.__version=P.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $(C,M,N,V,R,P){let S=s.convert(N.format,N.colorSpace),I=s.convert(N.type),L=_(N.internalFormat,S,I,N.colorSpace);if(!i.get(M).__hasExternalTextures){let Z=Math.max(1,M.width>>P),F=Math.max(1,M.height>>P);R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY?t.texImage3D(R,P,L,Z,F,M.depth,0,S,I,null):t.texImage2D(R,P,L,Z,F,0,S,I,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ne(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,R,i.get(N).__webglTexture,0,ee(M)):(R===r.TEXTURE_2D||R>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,R,i.get(N).__webglTexture,P),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(C,M,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){let V=M.depthTexture,R=V&&V.isDepthTexture?V.type:null,P=v(M.stencilBuffer,R),S=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=ee(M);ne(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I,P,M.width,M.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I,P,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,P,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,S,r.RENDERBUFFER,C)}else{let V=M.textures;for(let R=0;R<V.length;R++){let P=V[R],S=s.convert(P.format,P.colorSpace),I=s.convert(P.type),L=_(P.internalFormat,S,I,P.colorSpace),Z=ee(M);N&&ne(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,L,M.width,M.height):ne(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,L,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,L,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(C){let M=i.get(C),N=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){let R=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",R)};V.addEventListener("dispose",R),M.__depthDisposeCallback=R}M.__boundDepthTexture=V}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");(function(V,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,V),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(R.depthTexture).__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),U(R.depthTexture,0);let P=i.get(R.depthTexture).__webglTexture,S=ee(R);if(R.depthTexture.format===ar)ne(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0,S):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,P,0);else{if(R.depthTexture.format!==Ln)throw new Error("Unknown depthTexture format");ne(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0,S):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,P,0)}})(M.__webglFramebuffer,C)}else if(N){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=r.createRenderbuffer(),se(M.__webglDepthbuffer[V],C,!1);else{let R=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=M.__webglDepthbuffer[V];r.bindRenderbuffer(r.RENDERBUFFER,P),r.framebufferRenderbuffer(r.FRAMEBUFFER,R,r.RENDERBUFFER,P)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),se(M.__webglDepthbuffer,C,!1);else{let V=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,R=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,R),r.framebufferRenderbuffer(r.FRAMEBUFFER,V,r.RENDERBUFFER,R)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let ce=[],xe=[];function ee(C){return Math.min(n.maxSamples,C.samples)}function ne(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(C,M){let N=C.colorSpace,V=C.format,R=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==zi&&N!==Ui&&(Ve.getTransfer(N)===Je?V===$t&&R===Mi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=function(){let C=O;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),O+=1,C},this.resetTextureUnits=function(){O=0},this.setTexture2D=U,this.setTexture2DArray=function(C,M){let N=i.get(C);C.version>0&&N.__version!==C.version?q(N,C,M):t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+M)},this.setTexture3D=function(C,M){let N=i.get(C);C.version>0&&N.__version!==C.version?q(N,C,M):t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+M)},this.setTextureCube=function(C,M){let N=i.get(C);C.version>0&&N.__version!==C.version?(function(V,R,P){if(R.image.length!==6)return;let S=G(V,R),I=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+P);let L=i.get(I);if(I.version!==L.__version||S===!0){t.activeTexture(r.TEXTURE0+P);let Z=Ve.getPrimaries(Ve.workingColorSpace),F=R.colorSpace===Ui?null:Ve.getPrimaries(R.colorSpace),J=R.colorSpace===Ui||Z===F?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let te=R.isCompressedTexture||R.image[0].isCompressedTexture,K=R.image[0]&&R.image[0].isDataTexture,he=[];for(let ve=0;ve<6;ve++)he[ve]=te||K?K?R.image[ve].image:R.image[ve]:x(R.image[ve],!0,n.maxCubemapSize),he[ve]=me(R,he[ve]);let pe=he[0],fe=s.convert(R.format,R.colorSpace),Ee=s.convert(R.type),Fe=_(R.internalFormat,fe,Ee,R.colorSpace),Oe=R.isVideoTexture!==!0,ye=L.__version===void 0||S===!0,ke=I.dataReady,Xe,tt=y(R,pe);if(j(r.TEXTURE_CUBE_MAP,R),te){Oe&&ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Fe,pe.width,pe.height);for(let ve=0;ve<6;ve++){Xe=he[ve].mipmaps;for(let Be=0;Be<Xe.length;Be++){let je=Xe[Be];R.format!==$t?fe!==null?Oe?ke&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,je.width,je.height,fe,je.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,Fe,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,je.width,je.height,fe,Ee,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,Fe,je.width,je.height,0,fe,Ee,je.data)}}}else{if(Xe=R.mipmaps,Oe&&ye){Xe.length>0&&tt++;let ve=ue(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Fe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(K){Oe?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,he[ve].width,he[ve].height,fe,Ee,he[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Fe,he[ve].width,he[ve].height,0,fe,Ee,he[ve].data);for(let Be=0;Be<Xe.length;Be++){let je=Xe[Be].image[ve].image;Oe?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,je.width,je.height,fe,Ee,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,Fe,je.width,je.height,0,fe,Ee,je.data)}}else{Oe?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,fe,Ee,he[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Fe,fe,Ee,he[ve]);for(let Be=0;Be<Xe.length;Be++){let je=Xe[Be];Oe?ke&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,fe,Ee,je.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,Fe,fe,Ee,je.image[ve])}}}g(R)&&f(r.TEXTURE_CUBE_MAP),L.__version=I.version,R.onUpdate&&R.onUpdate(R)}V.__version=R.version})(N,C,M):t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+M)},this.rebindTextures=function(C,M,N){let V=i.get(C);M!==void 0&&$(V.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&ae(C)},this.setupRenderTarget=function(C){let M=C.texture,N=i.get(C),V=i.get(M);C.addEventListener("dispose",E);let R=C.textures,P=C.isWebGLCubeRenderTarget===!0,S=R.length>1;if(S||(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=M.version,a.memory.textures++),P){N.__webglFramebuffer=[];for(let I=0;I<6;I++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[I]=[];for(let L=0;L<M.mipmaps.length;L++)N.__webglFramebuffer[I][L]=r.createFramebuffer()}else N.__webglFramebuffer[I]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let I=0;I<M.mipmaps.length;I++)N.__webglFramebuffer[I]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(S)for(let I=0,L=R.length;I<L;I++){let Z=i.get(R[I]);Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ne(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let I=0;I<R.length;I++){let L=R[I];N.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[I]);let Z=s.convert(L.format,L.colorSpace),F=s.convert(L.type),J=_(L.internalFormat,Z,F,L.colorSpace,C.isXRRenderTarget===!0),te=ee(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,J,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+I,r.RENDERBUFFER,N.__webglColorRenderbuffer[I])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),se(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(P){t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),j(r.TEXTURE_CUBE_MAP,M);for(let I=0;I<6;I++)if(M.mipmaps&&M.mipmaps.length>0)for(let L=0;L<M.mipmaps.length;L++)$(N.__webglFramebuffer[I][L],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,L);else $(N.__webglFramebuffer[I],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);g(M)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let I=0,L=R.length;I<L;I++){let Z=R[I],F=i.get(Z);t.bindTexture(r.TEXTURE_2D,F.__webglTexture),j(r.TEXTURE_2D,Z),$(N.__webglFramebuffer,C,Z,r.COLOR_ATTACHMENT0+I,r.TEXTURE_2D,0),g(Z)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let I=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(I=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(I,V.__webglTexture),j(I,M),M.mipmaps&&M.mipmaps.length>0)for(let L=0;L<M.mipmaps.length;L++)$(N.__webglFramebuffer[L],C,M,r.COLOR_ATTACHMENT0,I,L);else $(N.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,I,0);g(M)&&f(I),t.unbindTexture()}C.depthBuffer&&ae(C)},this.updateRenderTargetMipmap=function(C){let M=C.textures;for(let N=0,V=M.length;N<V;N++){let R=M[N];if(g(R)){let P=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,S=i.get(R).__webglTexture;t.bindTexture(P,S),f(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(C.samples>0){if(ne(C)===!1){let M=C.textures,N=C.width,V=C.height,R=r.COLOR_BUFFER_BIT,P=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,S=i.get(C),I=M.length>1;if(I)for(let L=0;L<M.length;L++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let L=0;L<M.length;L++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(R|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(R|=r.STENCIL_BUFFER_BIT)),I){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,S.__webglColorRenderbuffer[L]);let Z=i.get(M[L]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Z,0)}r.blitFramebuffer(0,0,N,V,0,0,N,V,R,r.NEAREST),l===!0&&(ce.length=0,xe.length=0,ce.push(r.COLOR_ATTACHMENT0+L),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ce.push(P),xe.push(P),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),I)for(let L=0;L<M.length;L++){t.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.RENDERBUFFER,S.__webglColorRenderbuffer[L]);let Z=i.get(M[L]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+L,r.TEXTURE_2D,Z,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ne}function $d(r,e){return{convert:function(t,i=""){let n,s=Ve.getTransfer(i);if(t===Mi)return r.UNSIGNED_BYTE;if(t===wl)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Tl)return r.UNSIGNED_SHORT_5_5_5_1;if(t===hh)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===lh)return r.BYTE;if(t===ch)return r.SHORT;if(t===sr)return r.UNSIGNED_SHORT;if(t===bl)return r.INT;if(t===nn)return r.UNSIGNED_INT;if(t===xi)return r.FLOAT;if(t===gr)return r.HALF_FLOAT;if(t===uh)return r.ALPHA;if(t===dh)return r.RGB;if(t===$t)return r.RGBA;if(t===ph)return r.LUMINANCE;if(t===mh)return r.LUMINANCE_ALPHA;if(t===ar)return r.DEPTH_COMPONENT;if(t===Ln)return r.DEPTH_STENCIL;if(t===fh)return r.RED;if(t===El)return r.RED_INTEGER;if(t===gh)return r.RG;if(t===Al)return r.RG_INTEGER;if(t===Rl)return r.RGBA_INTEGER;if(t===is||t===ns||t===rs||t===ss)if(s===Je){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===is)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ns)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===rs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ss)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===is)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ns)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===rs)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ss)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ya||t===Za||t===Ja||t===Ka){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===Ya)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Za)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ja)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ka)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===$a||t===Qa||t===eo){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===$a||t===Qa)return s===Je?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===eo)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===to||t===io||t===no||t===ro||t===so||t===ao||t===oo||t===lo||t===co||t===ho||t===uo||t===po||t===mo||t===fo){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===to)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===io)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===no)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ro)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===so)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ao)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===oo)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===lo)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===co)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ho)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===uo)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===po)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===mo)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===fo)return s===Je?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===as||t===go||t===vo){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===as)return s===Je?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===go)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===vo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===vh||t===_o||t===xo||t===yo){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===as)return n.COMPRESSED_RED_RGTC1_EXT;if(t===_o)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===xo)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===yo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Pn?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Fo=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Gt=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qd={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Bo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new Et;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new At({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zo=class extends Bi{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,x=new Bo,g=t.getContextAttributes(),f=null,_=null,v=[],y=[],w=new ie,E=null,A=new Tt;A.layers.enable(1),A.viewport=new Ye;let O=new Tt;O.layers.enable(2),O.viewport=new Ye;let U=[A,O],B=new Fo;B.layers.enable(1),B.layers.enable(2);let H=null,k=null;function j(ee){let ne=y.indexOf(ee.inputSource);if(ne===-1)return;let me=v[ne];me!==void 0&&(me.update(ee.inputSource,ee.frame,c||a),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function G(){n.removeEventListener("select",j),n.removeEventListener("selectstart",j),n.removeEventListener("selectend",j),n.removeEventListener("squeeze",j),n.removeEventListener("squeezestart",j),n.removeEventListener("squeezeend",j),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",q);for(let ee=0;ee<v.length;ee++){let ne=y[ee];ne!==null&&(y[ee]=null,v[ee].disconnect(ne))}H=null,k=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,n=null,_=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}function q(ee){for(let ne=0;ne<ee.removed.length;ne++){let me=ee.removed[ne],ue=y.indexOf(me);ue>=0&&(y[ue]=null,v[ue].disconnect(me))}for(let ne=0;ne<ee.added.length;ne++){let me=ee.added[ne],ue=y.indexOf(me);if(ue===-1){for(let M=0;M<v.length;M++){if(M>=y.length){y.push(me),ue=M;break}if(y[M]===null){y[M]=me,ue=M;break}}if(ue===-1)break}let C=v[ue];C&&C.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ne=v[ee];return ne===void 0&&(ne=new er,v[ee]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(ee){let ne=v[ee];return ne===void 0&&(ne=new er,v[ee]=ne),ne.getGripSpace()},this.getHand=function(ee){let ne=v[ee];return ne===void 0&&(ne=new er,v[ee]=ne),ne.getHandSpace()},this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",j),n.addEventListener("selectstart",j),n.addEventListener("selectend",j),n.addEventListener("squeeze",j),n.addEventListener("squeezestart",j),n.addEventListener("squeezeend",j),n.addEventListener("end",G),n.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),n.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Si(p.framebufferWidth,p.framebufferHeight,{format:$t,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,me=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Ln:ar,me=g.stencil?Pn:nn);let C={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(C),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Si(d.textureWidth,d.textureHeight,{format:$t,type:Mi,depthTexture:new bs(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),xe.setContext(n),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let $=new T,se=new T;function ae(ee,ne){ne===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ne.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;let ne=ee.near,me=ee.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(me=x.depthFar)),B.near=O.near=A.near=ne,B.far=O.far=A.far=me,H===B.near&&k===B.far||(n.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,k=B.far);let ue=ee.parent,C=B.cameras;ae(B,ue);for(let M=0;M<C.length;M++)ae(C[M],ue);C.length===2?(function(M,N,V){$.setFromMatrixPosition(N.matrixWorld),se.setFromMatrixPosition(V.matrixWorld);let R=$.distanceTo(se),P=N.projectionMatrix.elements,S=V.projectionMatrix.elements,I=P[14]/(P[10]-1),L=P[14]/(P[10]+1),Z=(P[9]+1)/P[5],F=(P[9]-1)/P[5],J=(P[8]-1)/P[0],te=(S[8]+1)/S[0],K=I*J,he=I*te,pe=R/(-J+te),fe=pe*-J;if(N.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(fe),M.translateZ(pe),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),P[10]===-1)M.projectionMatrix.copy(N.projectionMatrix),M.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Ee=I+pe,Fe=L+pe,Oe=K-fe,ye=he+(R-fe),ke=Z*L/Fe*Ee,Xe=F*L/Fe*Ee;M.projectionMatrix.makePerspective(Oe,ye,ke,Xe,Ee,Fe),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}})(B,A,O):B.projectionMatrix.copy(A.projectionMatrix),(function(M,N,V){V===null?M.matrix.copy(N.matrixWorld):(M.matrix.copy(V.matrixWorld),M.matrix.invert(),M.matrix.multiply(N.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(N.projectionMatrix),M.projectionMatrixInverse.copy(N.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*bo*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(ee,B,ue)},this.getCamera=function(){return B},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)};let ce=null,xe=new Sh;xe.setAnimationLoop((function(ee,ne){if(h=ne.getViewerPose(c||a),m=ne,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;me.length!==B.cameras.length&&(B.cameras.length=0,ue=!0);for(let M=0;M<me.length;M++){let N=me[M],V=null;if(p!==null)V=p.getViewport(N);else{let P=u.getViewSubImage(d,N);V=P.viewport,M===0&&(e.setRenderTargetTextures(_,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let R=U[M];R===void 0&&(R=new Tt,R.layers.enable(M),R.viewport=new Ye,U[M]=R),R.matrix.fromArray(N.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(N.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(V.x,V.y,V.width,V.height),M===0&&(B.matrix.copy(R.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ue===!0&&B.cameras.push(R)}let C=n.enabledFeatures;if(C&&C.includes("depth-sensing")){let M=u.getDepthInformation(me[0]);M&&M.isValid&&M.texture&&x.init(e,M,n.renderState)}}for(let me=0;me<v.length;me++){let ue=y[me],C=v[me];ue!==null&&C!==void 0&&C.update(ue,ne,c||a)}ce&&ce(ee,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null})),this.setAnimationLoop=function(ee){ce=ee},this.dispose=function(){}}},Ki=new ci,ep=new Pe;function tp(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===St&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===St&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,Ki.copy(l),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),n.envMapRotation.value.setFromMatrix4(ep.makeRotationFromEuler(Ki)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap&&(n.lightMap.value=s.lightMap,n.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,n.lightMapTransform)),s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Mh(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(n,s)):s.isMeshPhongMaterial?(i(n,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(n,s)):s.isMeshStandardMaterial?(i(n,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(n,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===St&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(n,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(n,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function ip(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let x=u.value,g=d+"_"+p;if(m[g]===void 0)return m[g]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let f=m[g];if(typeof x=="number"||typeof x=="boolean"){if(f!==x)return m[g]=x,!0}else if(f.equals(x)===!1)return f.copy(x),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&((function(g){let f=g.uniforms,_=0,v=16;for(let w=0,E=f.length;w<E;w++){let A=Array.isArray(f[w])?f[w]:[f[w]];for(let O=0,U=A.length;O<U;O++){let B=A[O],H=Array.isArray(B.value)?B.value:[B.value];for(let k=0,j=H.length;k<j;k++){let G=c(H[k]),q=_%v,$=q%G.boundary,se=q+$;_+=$,se!==0&&v-se<G.storage&&(_+=v-se),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=G.storage}}}let y=_%v;y>0&&(_+=v-y),g.__size=_,g.__cache={}})(u),p=(function(g){let f=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=f;let _=r.createBuffer(),v=g.__size,y=g.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,v,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,f,_),_})(u),n[u.id]=p,u.addEventListener("dispose",h));let m=d.program;i.updateUBOMapping(u,m);let x=e.render.frame;s[u.id]!==x&&((function(g){let f=n[g.id],_=g.uniforms,v=g.__cache;r.bindBuffer(r.UNIFORM_BUFFER,f);for(let y=0,w=_.length;y<w;y++){let E=Array.isArray(_[y])?_[y]:[_[y]];for(let A=0,O=E.length;A<O;A++){let U=E[A];if(l(U,y,A,v)===!0){let B=U.__offset,H=Array.isArray(U.value)?U.value:[U.value],k=0;for(let j=0;j<H.length;j++){let G=H[j],q=c(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,B+k,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=x)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}var ws=class{constructor(e={}){let{canvas:t=hu(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let p=new Uint32Array(4),m=new Int32Array(4),x=null,g=null,f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Ni,this.toneMappingExposure=1;let v=this,y=!1,w=0,E=0,A=null,O=-1,U=null,B=new Ye,H=new Ye,k=null,j=new Re(0),G=0,q=t.width,$=t.height,se=1,ae=null,ce=null,xe=new Ye(0,0,q,$),ee=new Ye(0,0,q,$),ne=!1,me=new Nn,ue=!1,C=!1,M=new Pe,N=new Pe,V=new T,R=new Ye,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function I(){return A===null?se:1}let L,Z,F,J,te,K,he,pe,fe,Ee,Fe,Oe,ye,ke,Xe,tt,ve,Be,je,xr,on,Lt,hi,Hi,D=i;function Gi(b,z){return t.getContext(b,z)}try{let b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Hl,!1),t.addEventListener("webglcontextrestored",Gl,!1),t.addEventListener("webglcontextcreationerror",Vl,!1),D===null){let z="webgl2";if(D=Gi(z,b),D===null)throw Gi(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function Gn(){L=new Ou(D),L.init(),Lt=new $d(D,L),Z=new Iu(D,L,e,Lt),F=new Jd(D),Z.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),J=new zu(D),te=new kd,K=new Kd(D,L,F,te,Z,Lt,J),he=new Du(v),pe=new Nu(v),fe=new Au(D),hi=new Pu(D,fe),Ee=new Fu(D,fe,J,hi),Fe=new Hu(D,Ee,fe,J),je=new ku(D,Z,K),tt=new Uu(te),Oe=new zd(v,he,pe,L,Z,hi,tt),ye=new tp(v,te),ke=new Gd,Xe=new qd(L),Be=new Cu(v,he,pe,F,Fe,d,l),ve=new Yd(v,Fe,Z),Hi=new ip(D,J,Z,F),xr=new Lu(D,L,J),on=new Bu(D,L,J),J.programs=Oe.programs,v.capabilities=Z,v.extensions=L,v.properties=te,v.renderLists=ke,v.shadowMap=ve,v.state=F,v.info=J}Gn();let dt=new zo(v,D);function Hl(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Gl(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let b=J.autoReset,z=ve.enabled,X=ve.autoUpdate,Q=ve.needsUpdate,W=ve.type;Gn(),J.autoReset=b,ve.enabled=z,ve.autoUpdate=X,ve.needsUpdate=Q,ve.type=W}function Vl(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Wl(b){let z=b.target;z.removeEventListener("dispose",Wl),(function(X){(function(Q){let W=te.get(Q).programs;W!==void 0&&(W.forEach((function(re){Oe.releaseProgram(re)})),Q.isShaderMaterial&&Oe.releaseShaderCache(Q))})(X),te.remove(X)})(z)}function Xl(b,z,X){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=St,b.needsUpdate=!0,Mr(b,z,X),b.side=Fi,b.needsUpdate=!0,Mr(b,z,X),b.side=2):Mr(b,z,X)}this.xr=dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=L.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=L.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(b){b!==void 0&&(se=b,this.setSize(q,$,!1))},this.getSize=function(b){return b.set(q,$)},this.setSize=function(b,z,X=!0){dt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(q=b,$=z,t.width=Math.floor(b*se),t.height=Math.floor(z*se),X===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z))},this.getDrawingBufferSize=function(b){return b.set(q*se,$*se).floor()},this.setDrawingBufferSize=function(b,z,X){q=b,$=z,se=X,t.width=Math.floor(b*X),t.height=Math.floor(z*X),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,z,X,Q){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,z,X,Q),F.viewport(B.copy(xe).multiplyScalar(se).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,z,X,Q){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,z,X,Q),F.scissor(H.copy(ee).multiplyScalar(se).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){F.setScissorTest(ne=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(b=!0,z=!0,X=!0){let Q=0;if(b){let W=!1;if(A!==null){let re=A.texture.format;W=re===Rl||re===Al||re===El}if(W){let re=A.texture.type,de=re===Mi||re===nn||re===sr||re===Pn||re===wl||re===Tl,ge=Be.getClearColor(),Me=Be.getClearAlpha(),Ae=ge.r,Te=ge.g,we=ge.b;de?(p[0]=Ae,p[1]=Te,p[2]=we,p[3]=Me,D.clearBufferuiv(D.COLOR,0,p)):(m[0]=Ae,m[1]=Te,m[2]=we,m[3]=Me,D.clearBufferiv(D.COLOR,0,m))}else Q|=D.COLOR_BUFFER_BIT}z&&(Q|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Hl,!1),t.removeEventListener("webglcontextrestored",Gl,!1),t.removeEventListener("webglcontextcreationerror",Vl,!1),ke.dispose(),Xe.dispose(),te.dispose(),he.dispose(),pe.dispose(),Fe.dispose(),hi.dispose(),Hi.dispose(),Oe.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",jl),dt.removeEventListener("sessionend",ql),Vi.stop()},this.renderBufferDirect=function(b,z,X,Q,W,re){z===null&&(z=P);let de=W.isMesh&&W.matrixWorld.determinant()<0,ge=(function(Ge,nt,gt,Ne,Ce){nt.isScene!==!0&&(nt=P),K.resetTextureUnits();let jt=nt.fog,Wh=Ne.isMeshStandardMaterial?nt.environment:null,Xh=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zi,Sr=(Ne.isMeshStandardMaterial?pe:he).get(Ne.envMap||Wh),jh=Ne.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,qh=!!gt.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),Yh=!!gt.morphAttributes.position,Zh=!!gt.morphAttributes.normal,Jh=!!gt.morphAttributes.color,Ql=Ni;Ne.toneMapped&&(A!==null&&A.isXRRenderTarget!==!0||(Ql=v.toneMapping));let ec=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,Kh=ec!==void 0?ec.length:0,ze=te.get(Ne),$h=g.state.lights;if(ue===!0&&(C===!0||Ge!==U)){let Ft=Ge===U&&Ne.id===O;tt.setState(Ne,Ge,Ft)}let qt=!1;Ne.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==$h.state.version||ze.outputColorSpace!==Xh||Ce.isBatchedMesh&&ze.batching===!1?qt=!0:Ce.isBatchedMesh||ze.batching!==!0?Ce.isBatchedMesh&&ze.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&ze.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&ze.instancing===!1?qt=!0:Ce.isInstancedMesh||ze.instancing!==!0?Ce.isSkinnedMesh&&ze.skinning===!1?qt=!0:Ce.isSkinnedMesh||ze.skinning!==!0?Ce.isInstancedMesh&&ze.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&ze.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&ze.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&ze.instancingMorph===!1&&Ce.morphTexture!==null||ze.envMap!==Sr||Ne.fog===!0&&ze.fog!==jt?qt=!0:ze.numClippingPlanes===void 0||ze.numClippingPlanes===tt.numPlanes&&ze.numIntersection===tt.numIntersection?(ze.vertexAlphas!==jh||ze.vertexTangents!==qh||ze.morphTargets!==Yh||ze.morphNormals!==Zh||ze.morphColors!==Jh||ze.toneMapping!==Ql||ze.morphTargetsCount!==Kh)&&(qt=!0):qt=!0:qt=!0:qt=!0:qt=!0:(qt=!0,ze.__version=Ne.version);let Wi=ze.currentProgram;qt===!0&&(Wi=Mr(Ne,nt,Ce));let tc=!1,Vn=!1,ra=!1,at=Wi.getUniforms(),Ei=ze.uniforms;if(F.useProgram(Wi.program)&&(tc=!0,Vn=!0,ra=!0),Ne.id!==O&&(O=Ne.id,Vn=!0),tc||U!==Ge){Z.reverseDepthBuffer?(M.copy(Ge.projectionMatrix),(function(Xi){let Ke=Xi.elements;Ke[2]=.5*Ke[2]+.5*Ke[3],Ke[6]=.5*Ke[6]+.5*Ke[7],Ke[10]=.5*Ke[10]+.5*Ke[11],Ke[14]=.5*Ke[14]+.5*Ke[15]})(M),(function(Xi){let Ke=Xi.elements;Ke[11]===-1?(Ke[10]=-Ke[10]-1,Ke[14]=-Ke[14]):(Ke[10]=-Ke[10],Ke[14]=1-Ke[14])})(M),at.setValue(D,"projectionMatrix",M)):at.setValue(D,"projectionMatrix",Ge.projectionMatrix),at.setValue(D,"viewMatrix",Ge.matrixWorldInverse);let Ft=at.map.cameraPosition;Ft!==void 0&&Ft.setValue(D,V.setFromMatrixPosition(Ge.matrixWorld)),Z.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(Ge.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&at.setValue(D,"isOrthographic",Ge.isOrthographicCamera===!0),U!==Ge&&(U=Ge,Vn=!0,ra=!0)}if(Ce.isSkinnedMesh){at.setOptional(D,Ce,"bindMatrix"),at.setOptional(D,Ce,"bindMatrixInverse");let Ft=Ce.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),at.setValue(D,"boneTexture",Ft.boneTexture,K))}Ce.isBatchedMesh&&(at.setOptional(D,Ce,"batchingTexture"),at.setValue(D,"batchingTexture",Ce._matricesTexture,K),at.setOptional(D,Ce,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",Ce._indirectTexture,K),at.setOptional(D,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",Ce._colorsTexture,K));let sa=gt.morphAttributes;sa.position===void 0&&sa.normal===void 0&&sa.color===void 0||je.update(Ce,gt,Wi),(Vn||ze.receiveShadow!==Ce.receiveShadow)&&(ze.receiveShadow=Ce.receiveShadow,at.setValue(D,"receiveShadow",Ce.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&(Ei.envMap.value=Sr,Ei.flipEnvMap.value=Sr.isCubeTexture&&Sr.isRenderTargetTexture===!1?-1:1),Ne.isMeshStandardMaterial&&Ne.envMap===null&&nt.environment!==null&&(Ei.envMapIntensity.value=nt.environmentIntensity),Vn&&(at.setValue(D,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&(Yt=ra,(ni=Ei).ambientLightColor.needsUpdate=Yt,ni.lightProbe.needsUpdate=Yt,ni.directionalLights.needsUpdate=Yt,ni.directionalLightShadows.needsUpdate=Yt,ni.pointLights.needsUpdate=Yt,ni.pointLightShadows.needsUpdate=Yt,ni.spotLights.needsUpdate=Yt,ni.spotLightShadows.needsUpdate=Yt,ni.rectAreaLights.needsUpdate=Yt,ni.hemisphereLights.needsUpdate=Yt),jt&&Ne.fog===!0&&ye.refreshFogUniforms(Ei,jt),ye.refreshMaterialUniforms(Ei,Ne,se,$,g.state.transmissionRenderTarget[Ge.id]),An.upload(D,Kl(ze),Ei,K));var ni,Yt;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(An.upload(D,Kl(ze),Ei,K),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&at.setValue(D,"center",Ce.center),at.setValue(D,"modelViewMatrix",Ce.modelViewMatrix),at.setValue(D,"normalMatrix",Ce.normalMatrix),at.setValue(D,"modelMatrix",Ce.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let Ft=Ne.uniformsGroups;for(let Xi=0,Ke=Ft.length;Xi<Ke;Xi++){let ic=Ft[Xi];Hi.update(ic,Wi),Hi.bind(ic,Wi)}}return Wi})(b,z,X,Q,W);F.setMaterial(Q,de);let Me=X.index,Ae=1;if(Q.wireframe===!0){if(Me=Ee.getWireframeAttribute(X),Me===void 0)return;Ae=2}let Te=X.drawRange,we=X.attributes.position,He=Te.start*Ae,st=(Te.start+Te.count)*Ae;re!==null&&(He=Math.max(He,re.start*Ae),st=Math.min(st,(re.start+re.count)*Ae)),Me!==null?(He=Math.max(He,0),st=Math.min(st,Me.count)):we!=null&&(He=Math.max(He,0),st=Math.min(st,we.count));let it=st-He;if(it<0||it===1/0)return;let pt;hi.setup(W,Q,ge,X,Me);let Ze=xr;if(Me!==null&&(pt=fe.get(Me),Ze=on,Ze.setIndex(pt)),W.isMesh)Q.wireframe===!0?(F.setLineWidth(Q.wireframeLinewidth*I()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(W.isLine){let Ge=Q.linewidth;Ge===void 0&&(Ge=1),F.setLineWidth(Ge*I()),W.isLineSegments?Ze.setMode(D.LINES):W.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else W.isPoints?Ze.setMode(D.POINTS):W.isSprite&&Ze.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ze.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))Ze.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ge=W._multiDrawStarts,nt=W._multiDrawCounts,gt=W._multiDrawCount,Ne=Me?fe.get(Me).bytesPerElement:1,Ce=te.get(Q).currentProgram.getUniforms();for(let jt=0;jt<gt;jt++)Ce.setValue(D,"_gl_DrawID",jt),Ze.render(Ge[jt]/Ne,nt[jt])}else if(W.isInstancedMesh)Ze.renderInstances(He,it,W.count);else if(X.isInstancedBufferGeometry){let Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,nt=Math.min(X.instanceCount,Ge);Ze.renderInstances(He,it,nt)}else Ze.render(He,it)},this.compile=function(b,z,X=null){X===null&&(X=b),g=Xe.get(X),g.init(z),_.push(g),X.traverseVisible((function(W){W.isLight&&W.layers.test(z.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),b!==X&&b.traverseVisible((function(W){W.isLight&&W.layers.test(z.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),g.setupLights();let Q=new Set;return b.traverse((function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let re=W.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){let ge=re[de];Xl(ge,X,W),Q.add(ge)}else Xl(re,X,W),Q.add(re)})),_.pop(),g=null,Q},this.compileAsync=function(b,z,X=null){let Q=this.compile(b,z,X);return new Promise((W=>{function re(){Q.forEach((function(de){te.get(de).currentProgram.isReady()&&Q.delete(de)})),Q.size!==0?setTimeout(re,10):W(b)}L.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)}))};let ia=null;function jl(){Vi.stop()}function ql(){Vi.start()}let Vi=new Sh;function na(b,z,X,Q){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||me.intersectsSprite(b)){Q&&R.setFromMatrixPosition(b.matrixWorld).applyMatrix4(N);let re=Fe.update(b),de=b.material;de.visible&&x.push(b,re,de,X,R.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||me.intersectsObject(b))){let re=Fe.update(b),de=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),R.copy(b.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),R.copy(re.boundingSphere.center)),R.applyMatrix4(b.matrixWorld).applyMatrix4(N)),Array.isArray(de)){let ge=re.groups;for(let Me=0,Ae=ge.length;Me<Ae;Me++){let Te=ge[Me],we=de[Te.materialIndex];we&&we.visible&&x.push(b,re,we,X,R.z,Te)}}else de.visible&&x.push(b,re,de,X,R.z,null)}}let W=b.children;for(let re=0,de=W.length;re<de;re++)na(W[re],z,X,Q)}function Yl(b,z,X,Q){let W=b.opaque,re=b.transmissive,de=b.transparent;g.setupLightsView(X),ue===!0&&tt.setGlobalState(v.clippingPlanes,X),Q&&F.viewport(B.copy(Q)),W.length>0&&yr(W,z,X),re.length>0&&yr(re,z,X),de.length>0&&yr(de,z,X),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Zl(b,z,X,Q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new Si(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?gr:Mi,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let W=g.state.transmissionRenderTarget[Q.id],re=Q.viewport||B;W.setSize(re.z,re.w);let de=v.getRenderTarget();v.setRenderTarget(W),v.getClearColor(j),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),S&&Be.render(X);let ge=v.toneMapping;v.toneMapping=Ni;let Me=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),ue===!0&&tt.setGlobalState(v.clippingPlanes,Q),yr(b,X,Q),K.updateMultisampleRenderTarget(W),K.updateRenderTargetMipmap(W),L.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Te=0,we=z.length;Te<we;Te++){let He=z[Te],st=He.object,it=He.geometry,pt=He.material,Ze=He.group;if(pt.side===2&&st.layers.test(Q.layers)){let Ge=pt.side;pt.side=St,pt.needsUpdate=!0,Jl(st,X,Q,it,pt,Ze),pt.side=Ge,pt.needsUpdate=!0,Ae=!0}}Ae===!0&&(K.updateMultisampleRenderTarget(W),K.updateRenderTargetMipmap(W))}v.setRenderTarget(de),v.setClearColor(j,G),Me!==void 0&&(Q.viewport=Me),v.toneMapping=ge}function yr(b,z,X){let Q=z.isScene===!0?z.overrideMaterial:null;for(let W=0,re=b.length;W<re;W++){let de=b[W],ge=de.object,Me=de.geometry,Ae=Q===null?de.material:Q,Te=de.group;ge.layers.test(X.layers)&&Jl(ge,z,X,Me,Ae,Te)}}function Jl(b,z,X,Q,W,re){b.onBeforeRender(v,z,X,Q,W,re),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,z,X,Q,b,re),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=St,W.needsUpdate=!0,v.renderBufferDirect(X,z,Q,W,b,re),W.side=Fi,W.needsUpdate=!0,v.renderBufferDirect(X,z,Q,W,b,re),W.side=2):v.renderBufferDirect(X,z,Q,W,b,re),b.onAfterRender(v,z,X,Q,W,re)}function Mr(b,z,X){z.isScene!==!0&&(z=P);let Q=te.get(b),W=g.state.lights,re=g.state.shadowsArray,de=W.state.version,ge=Oe.getParameters(b,W.state,re,z,X),Me=Oe.getProgramCacheKey(ge),Ae=Q.programs;Q.environment=b.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(b.isMeshStandardMaterial?pe:he).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",Wl),Ae=new Map,Q.programs=Ae);let Te=Ae.get(Me);if(Te!==void 0){if(Q.currentProgram===Te&&Q.lightsStateVersion===de)return $l(b,ge),Te}else ge.uniforms=Oe.getUniforms(b),b.onBeforeCompile(ge,v),Te=Oe.acquireProgram(ge,Me),Ae.set(Me,Te),Q.uniforms=ge.uniforms;let we=Q.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(we.clippingPlanes=tt.uniform),$l(b,ge),Q.needsLights=(function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0})(b),Q.lightsStateVersion=de,Q.needsLights&&(we.ambientLightColor.value=W.state.ambient,we.lightProbe.value=W.state.probe,we.directionalLights.value=W.state.directional,we.directionalLightShadows.value=W.state.directionalShadow,we.spotLights.value=W.state.spot,we.spotLightShadows.value=W.state.spotShadow,we.rectAreaLights.value=W.state.rectArea,we.ltc_1.value=W.state.rectAreaLTC1,we.ltc_2.value=W.state.rectAreaLTC2,we.pointLights.value=W.state.point,we.pointLightShadows.value=W.state.pointShadow,we.hemisphereLights.value=W.state.hemi,we.directionalShadowMap.value=W.state.directionalShadowMap,we.directionalShadowMatrix.value=W.state.directionalShadowMatrix,we.spotShadowMap.value=W.state.spotShadowMap,we.spotLightMatrix.value=W.state.spotLightMatrix,we.spotLightMap.value=W.state.spotLightMap,we.pointShadowMap.value=W.state.pointShadowMap,we.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Te,Q.uniformsList=null,Te}function Kl(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=An.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function $l(b,z){let X=te.get(b);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}Vi.setAnimationLoop((function(b){ia&&ia(b)})),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){ia=b,dt.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},dt.addEventListener("sessionstart",jl),dt.addEventListener("sessionend",ql),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(z),z=dt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,A),g=Xe.get(b,_.length),g.init(z),_.push(g),N.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),me.setFromProjectionMatrix(N),C=this.localClippingEnabled,ue=tt.init(this.clippingPlanes,C),x=ke.get(b,f.length),x.init(),f.push(x),dt.enabled===!0&&dt.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&na(re,z,-1/0,v.sortObjects)}na(b,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(ae,ce),S=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,S&&Be.addToRenderList(x,b),this.info.render.frame++,ue===!0&&tt.beginShadows();let X=g.state.shadowsArray;ve.render(X,b,z),ue===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=x.opaque,W=x.transmissive;if(g.setupLights(),z.isArrayCamera){let re=z.cameras;if(W.length>0)for(let de=0,ge=re.length;de<ge;de++)Zl(Q,W,b,re[de]);S&&Be.render(b);for(let de=0,ge=re.length;de<ge;de++){let Me=re[de];Yl(x,b,Me,Me.viewport)}}else W.length>0&&Zl(Q,W,b,z),S&&Be.render(b),Yl(x,b,z);A!==null&&(K.updateMultisampleRenderTarget(A),K.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,z),hi.resetDefaultState(),O=-1,U=null,_.pop(),_.length>0?(g=_[_.length-1],ue===!0&&tt.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,f.pop(),x=f.length>0?f[f.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,z,X){te.get(b.texture).__webglTexture=z,te.get(b.depthTexture).__webglTexture=X;let Q=te.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=X===void 0,Q.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){let X=te.get(b);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,X=0){A=b,w=z,E=X;let Q=!0,W=null,re=!1,de=!1;if(b){let ge=te.get(b);if(ge.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1;else if(ge.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(ge.__hasExternalTextures)K.rebindTextures(b,te.get(b.texture).__webglTexture,te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Te=b.depthTexture;if(ge.__boundDepthTexture!==Te){if(Te!==null&&te.has(Te)&&(b.width!==Te.image.width||b.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);let Ae=te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(W=Array.isArray(Ae[z])?Ae[z][X]:Ae[z],re=!0):W=b.samples>0&&K.useMultisampledRTT(b)===!1?te.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?Ae[X]:Ae,B.copy(b.viewport),H.copy(b.scissor),k=b.scissorTest}else B.copy(xe).multiplyScalar(se).floor(),H.copy(ee).multiplyScalar(se).floor(),k=ne;if(F.bindFramebuffer(D.FRAMEBUFFER,W)&&Q&&F.drawBuffers(b,W),F.viewport(B),F.scissor(H),F.setScissorTest(k),re){let ge=te.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge.__webglTexture,X)}else if(de){let ge=te.get(b.texture),Me=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,X||0,Me)}O=-1},this.readRenderTargetPixels=function(b,z,X,Q,W,re,de){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){F.bindFramebuffer(D.FRAMEBUFFER,ge);try{let Me=b.texture,Ae=Me.format,Te=Me.type;if(!Z.textureFormatReadable(Ae))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Te))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");z>=0&&z<=b.width-Q&&X>=0&&X<=b.height-W&&D.readPixels(z,X,Q,W,Lt.convert(Ae),Lt.convert(Te),re)}finally{let Me=A!==null?te.get(A).__webglFramebuffer:null;F.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,z,X,Q,W,re,de){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){let Me=b.texture,Ae=Me.format,Te=Me.type;if(!Z.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-Q&&X>=0&&X<=b.height-W){F.bindFramebuffer(D.FRAMEBUFFER,ge);let we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(z,X,Q,W,Lt.convert(Ae),Lt.convert(Te),0);let He=A!==null?te.get(A).__webglFramebuffer:null;F.bindFramebuffer(D.FRAMEBUFFER,He);let st=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await(function(it,pt,Ze){return new Promise((function(Ge,nt){setTimeout((function gt(){switch(it.clientWaitSync(pt,it.SYNC_FLUSH_COMMANDS_BIT,0)){case it.WAIT_FAILED:nt();break;case it.TIMEOUT_EXPIRED:setTimeout(gt,Ze);break;default:Ge()}}),Ze)}))})(D,st,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(we),D.deleteSync(st),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,X=0){b.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);let Q=Math.pow(2,-X),W=Math.floor(b.image.width*Q),re=Math.floor(b.image.height*Q),de=z!==null?z.x:0,ge=z!==null?z.y:0;K.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,de,ge,W,re),F.unbindTexture()},this.copyTextureToTexture=function(b,z,X=null,Q=null,W=0){let re,de,ge,Me,Ae,Te;b.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],z=arguments[2],W=arguments[3]||0,X=null),X!==null?(re=X.max.x-X.min.x,de=X.max.y-X.min.y,ge=X.min.x,Me=X.min.y):(re=b.image.width,de=b.image.height,ge=0,Me=0),Q!==null?(Ae=Q.x,Te=Q.y):(Ae=0,Te=0);let we=Lt.convert(z.format),He=Lt.convert(z.type);K.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let st=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pt=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Ge=D.getParameter(D.UNPACK_SKIP_IMAGES),nt=b.isCompressedTexture?b.mipmaps[W]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Me),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,Ae,Te,re,de,we,He,nt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,Ae,Te,nt.width,nt.height,we,nt.data):D.texSubImage2D(D.TEXTURE_2D,W,Ae,Te,re,de,we,He,nt),D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge),W===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,z,X=null,Q=null,W=0){let re,de,ge,Me,Ae,Te,we,He,st;b.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],z=arguments[3],W=arguments[4]||0);let it=b.isCompressedTexture?b.mipmaps[W]:b.image;X!==null?(re=X.max.x-X.min.x,de=X.max.y-X.min.y,ge=X.max.z-X.min.z,Me=X.min.x,Ae=X.min.y,Te=X.min.z):(re=it.width,de=it.height,ge=it.depth,Me=0,Ae=0,Te=0),Q!==null?(we=Q.x,He=Q.y,st=Q.z):(we=0,He=0,st=0);let pt=Lt.convert(z.format),Ze=Lt.convert(z.type),Ge;if(z.isData3DTexture)K.setTexture3D(z,0),Ge=D.TEXTURE_3D;else{if(!z.isDataArrayTexture&&!z.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");K.setTexture2DArray(z,0),Ge=D.TEXTURE_2D_ARRAY}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let nt=D.getParameter(D.UNPACK_ROW_LENGTH),gt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ne=D.getParameter(D.UNPACK_SKIP_PIXELS),Ce=D.getParameter(D.UNPACK_SKIP_ROWS),jt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,it.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ge,W,we,He,st,re,de,ge,pt,Ze,it.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ge,W,we,He,st,re,de,ge,pt,it.data):D.texSubImage3D(Ge,W,we,He,st,re,de,ge,pt,Ze,it),D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ne),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt),W===0&&z.generateMipmaps&&D.generateMipmap(Ge),F.unbindTexture()},this.initRenderTarget=function(b){te.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,F.reset(),hi.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Cl?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===js?"display-p3":"srgb"}};var Ts=class r{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Es=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ko=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=So,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bt=new T,As=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lr=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mn,Kn=new T,Sn=new T,bn=new T,wn=new ie,$n=new ie,Ah=new Pe,Wr=new T,Qn=new T,Xr=new T,qc=new ie,Oa=new ie,Yc=new ie,Rs=class extends _t{constructor(e=new lr){if(super(),this.isSprite=!0,this.type="Sprite",Mn===void 0){Mn=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ko(t,5);Mn.setIndex([0,1,2,0,2,3]),Mn.setAttribute("position",new As(i,3,0,!1)),Mn.setAttribute("uv",new As(i,2,3,!1))}this.geometry=Mn,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sn.setFromMatrixScale(this.matrixWorld),Ah.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sn.multiplyScalar(-bn.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;jr(Wr.set(-.5,-.5,0),bn,a,Sn,n,s),jr(Qn.set(.5,-.5,0),bn,a,Sn,n,s),jr(Xr.set(.5,.5,0),bn,a,Sn,n,s),qc.set(0,0),Oa.set(1,0),Yc.set(1,1);let o=e.ray.intersectTriangle(Wr,Qn,Xr,!1,Kn);if(o===null&&(jr(Qn.set(-.5,.5,0),bn,a,Sn,n,s),Oa.set(0,1),o=e.ray.intersectTriangle(Wr,Xr,Qn,!1,Kn),o===null))return;let l=e.ray.origin.distanceTo(Kn);l<e.near||l>e.far||t.push({distance:l,point:Kn.clone(),uv:_i.getInterpolation(Kn,Wr,Qn,Xr,qc,Oa,Yc,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jr(r,e,t,i,n,s){wn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?($n.x=s*wn.x-n*wn.y,$n.y=n*wn.x+s*wn.y):$n.copy(wn),r.copy(e),r.x+=$n.x,r.y+=$n.y,r.applyMatrix4(Ah)}var zp=new T,kp=new T;var Hp=new T,Gp=new Ye,Vp=new Ye,Wp=new T,Xp=new Pe,jp=new T,qp=new li,Yp=new Pe,Zp=new Un;var Jp=new Pe,Kp=new Pe;var $p=new Pe,Qp=new Pe;var em=new oi,tm=new Pe,im=new We,nm=new li;var Ho=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i){let n=this.pool,s=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1,index:-1});let a=n[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=i}reset(){this.list.length=0,this.index=0}},rm=new Pe,sm=new Pe,am=new Pe,om=new Re(1,1,1),lm=new Pe,cm=new Nn,hm=new oi,um=new li,dm=new T,pm=new T,mm=new T,fm=new Ho,gm=new We;var vm=new T,_m=new T,xm=new Pe,ym=new Un,Mm=new li,Sm=new T,bm=new T;var wm=new T,Tm=new T;var Go=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zc=new Pe,Vo=new Un,qr=new li,Yr=new T,Cs=class extends _t{constructor(e=new Qe,t=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(n),qr.radius+=s,e.ray.intersectsSphere(qr)===!1)return;Zc.copy(n).invert(),Vo.copy(e.ray).applyMatrix4(Zc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Yr.fromBufferAttribute(h,p),Jc(Yr,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Yr.fromBufferAttribute(h,u),Jc(Yr,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Jc(r,e,t,i,n,s,a){let o=Vo.distanceSqToPoint(r);if(o<t){let l=new T;Vo.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ti=class extends Et{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ie:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new T,n=[],s=[],a=[],o=new T,l=new Pe;for(let p=0;p<=e;p++){let m=p/e;n[p]=this.getTangentAt(m,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(vt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(vt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(n[m],p*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cr=class extends Wt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let i=t,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wo=class extends cr{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ll(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var Zr=new T,Fa=new Ll,Ba=new Ll,za=new Ll,Xo=class extends Wt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new T){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(Zr.subVectors(n[0],n[1]).add(n[0]),o=Zr);let u=n[c%s],d=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(Zr.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(l),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Fa.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,x,g),Ba.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,x,g),za.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,x,g)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Ba.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),za.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Fa.calc(h),Ba.calc(h),za.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new T().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Kc(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function tr(r,e,t,i){return(function(n,s){let a=1-n;return a*a*s})(r,e)+(function(n,s){return 2*(1-n)*n*s})(r,t)+(function(n,s){return n*n*s})(r,i)}function ir(r,e,t,i,n){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,i)+(function(s,a){return s*s*s*a})(r,n)}var Ps=class extends Wt{constructor(e=new ie,t=new ie,i=new ie,n=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ie){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ir(e,n.x,s.x,a.x,o.x),ir(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends Wt{constructor(e=new T,t=new T,i=new T,n=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ir(e,n.x,s.x,a.x,o.x),ir(e,n.y,s.y,a.y,o.y),ir(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ls=class extends Wt{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Wt{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Is=class extends Wt{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(tr(e,n.x,s.x,a.x),tr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends Wt{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(tr(e,n.x,s.x,a.x),tr(e,n.y,s.y,a.y),tr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends Wt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Kc(o,l.x,c.x,h.x,u.x),Kc(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ie().fromArray(n))}return this}},Ns=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:Xo,CubicBezierCurve:Ps,CubicBezierCurve3:jo,EllipseCurve:cr,LineCurve:Ls,LineCurve3:qo,QuadraticBezierCurve:Is,QuadraticBezierCurve3:Us,SplineCurve:Ds}),Yo=class extends Wt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ns[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Ns[n.type]().fromJSON(n))}return this}},hr=class extends Yo{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ls(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Is(this.currentPoint.clone(),new ie(e,t),new ie(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Ps(this.currentPoint.clone(),new ie(e,t),new ie(i,n),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ds(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new cr(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Os=class r extends Qe{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=vt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new ie,p=new T,m=new T,x=new T,g=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=1*f,p.y=-g,p.z=0*f,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=1*f,p.y=-g,p.z=0*f,m.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(m)}for(let _=0;_<=t;_++){let v=i+_*h*n,y=Math.sin(v),w=Math.cos(v);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*w,a.push(u.x,u.y,u.z),d.x=_/t,d.y=E/(e.length-1),o.push(d.x,d.y);let A=l[3*E+0]*y,O=l[3*E+1],U=l[3*E+0]*w;c.push(A,O,U)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let y=v+_*e.length,w=y,E=y+e.length,A=y+e.length+1,O=y+1;s.push(w,E,O),s.push(A,O,E)}this.setIndex(s),this.setAttribute("position",new Le(a,3)),this.setAttribute("uv",new Le(o,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Zo=class r extends Os{constructor(e=1,t=1,i=4,n=8){let s=new hr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Jo=class r extends Qe{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new T,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rn=class r extends Qe{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,x=[],g=i/2,f=0;function _(v){let y=m,w=new ie,E=new T,A=0,O=v===!0?e:t,U=v===!0?1:-1;for(let H=1;H<=n;H++)u.push(0,g*U,0),d.push(0,U,0),p.push(.5,.5),m++;let B=m;for(let H=0;H<=n;H++){let k=H/n*l+o,j=Math.cos(k),G=Math.sin(k);E.x=O*G,E.y=g*U,E.z=O*j,u.push(E.x,E.y,E.z),d.push(0,U,0),w.x=.5*j+.5,w.y=.5*G*U+.5,p.push(w.x,w.y),m++}for(let H=0;H<n;H++){let k=y+H,j=B+H;v===!0?h.push(j,j+1,k):h.push(j+1,j,k),A+=3}c.addGroup(f,A,v===!0?1:2),f+=A}(function(){let v=new T,y=new T,w=0,E=(t-e)/i;for(let A=0;A<=s;A++){let O=[],U=A/s,B=U*(t-e)+e;for(let H=0;H<=n;H++){let k=H/n,j=k*l+o,G=Math.sin(j),q=Math.cos(j);y.x=B*G,y.y=-U*i+g,y.z=B*q,u.push(y.x,y.y,y.z),v.set(G,E,q).normalize(),d.push(v.x,v.y,v.z),p.push(k,1-U),O.push(m++)}x.push(O)}for(let A=0;A<n;A++)for(let O=0;O<s;O++){let U=x[O][A],B=x[O+1][A],H=x[O+1][A+1],k=x[O][A+1];e>0&&(h.push(U,B,k),w+=3),t>0&&(h.push(B,H,k),w+=3)}c.addGroup(f,w,0),f+=w})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Le(u,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ur=class r extends rn{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sn=class r extends Qe{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,p,m,x){let g=x+1,f=[];for(let _=0;_<=g;_++){f[_]=[];let v=d.clone().lerp(m,_/g),y=p.clone().lerp(m,_/g),w=g-_;for(let E=0;E<=w;E++)f[_][E]=E===0&&_===g?v:v.clone().lerp(y,E/w)}for(let _=0;_<g;_++)for(let v=0;v<2*(g-_)-1;v++){let y=Math.floor(v/2);v%2==0?(l(f[_][y+1]),l(f[_+1][y]),l(f[_][y])):(l(f[_][y+1]),l(f[_+1][y+1]),l(f[_+1][y]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,x){x<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=x/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new T,m=new T,x=new T;for(let g=0;g<t.length;g+=3)c(t[g+0],p),c(t[g+1],m),c(t[g+2],x),o(p,m,x,d)})(n),(function(d){let p=new T;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(i),(function(){let d=new T;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let x=u(d)/2/Math.PI+.5,g=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(x,1-g)}var p;(function(){let m=new T,x=new T,g=new T,f=new T,_=new ie,v=new ie,y=new ie;for(let w=0,E=0;w<s.length;w+=9,E+=6){m.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),g.set(s[w+6],s[w+7],s[w+8]),_.set(a[E+0],a[E+1]),v.set(a[E+2],a[E+3]),y.set(a[E+4],a[E+5]),f.copy(m).add(x).add(g).divideScalar(3);let A=u(f);h(_,E+0,m,A),h(v,E+2,x,A),h(y,E+4,g,A)}})(),(function(){for(let m=0;m<a.length;m+=6){let x=a[m+0],g=a[m+2],f=a[m+4],_=Math.max(x,g,f),v=Math.min(x,g,f);_>.9&&v<.1&&(x<.2&&(a[m+0]+=1),g<.2&&(a[m+2]+=1),f<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(s.slice(),3)),this.setAttribute("uv",new Le(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Ko=class r extends sn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Jr=new T,Kr=new T,ka=new T,$r=new _i,$o=class extends Qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(os*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:f}=$r;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),$r.getNormal(ka),u[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,u[1]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,y=u[_],w=u[v],E=$r[h[_]],A=$r[h[v]],O=`${y}_${w}`,U=`${w}_${y}`;U in d&&d[U]?(ka.dot(d[U].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(A.x,A.y,A.z)),d[U]=null):O in d||(d[O]={index0:c[_],index1:c[v],normal:ka.clone()})}}for(let m in d)if(d[m]){let{index0:x,index1:g}=d[m];Jr.fromBufferAttribute(o,x),Kr.fromBufferAttribute(o,g),p.push(Jr.x,Jr.y,Jr.z),p.push(Kr.x,Kr.y,Kr.z)}this.setAttribute("position",new Le(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Fs=class extends hr{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new hr().fromJSON(n))}return this}},np=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=$c(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=(function(m,x,g,f){let _=[],v,y,w,E,A;for(v=0,y=x.length;v<y;v++)w=x[v]*f,E=v<y-1?x[v+1]*f:m.length,A=$c(m,w,E,f,!1),A===A.next&&(A.steiner=!0),_.push(up(A));for(_.sort(lp),v=0;v<_.length;v++)g=cp(_[v],g);return g})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<n;m+=t)u=r[m],d=r[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return dr(s,a,t,o,l,p,0),a};function $c(r,e,t,i,n){let s,a;if(n===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Qc(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Qc(s,r[s],r[s+1],a);return a&&Ys(a,a.next)&&(mr(a),a=a.next),a}function an(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Ys(i,i.next)&&rt(i.prev,i,i.next)!==0)i=i.next;else{if(mr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function dr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let m=h;do m.z===0&&(m.z=Qo(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(x){let g,f,_,v,y,w,E,A,O=1;do{for(f=x,x=null,y=null,w=0;f;){for(w++,_=f,E=0,g=0;g<O&&(E++,_=_.nextZ,_);g++);for(A=O;E>0||A>0&&_;)E!==0&&(A===0||!_||f.z<=_.z)?(v=f,f=f.nextZ,E--):(v=_,_=_.nextZ,A--),y?y.nextZ=v:x=v,v.prevZ=y,y=v;f=_}y.nextZ=null,O*=2}while(w>1)})(m)})(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?sp(r,i,n,s):rp(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),mr(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?dr(r=ap(an(r),e,t),e,t,i,n,s,2):a===2&&op(r,e,t,i,n,s):dr(an(r),e,t,i,n,s,1);break}}function rp(r){let e=r.prev,t=r,i=r.next;if(rt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Tn(n,o,s,l,a,c,m.x,m.y)&&rt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function sp(r,e,t,i){let n=r.prev,s=r,a=r.next;if(rt(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,f=Qo(p,m,e,t,i),_=Qo(x,g,e,t,i),v=r.prevZ,y=r.nextZ;for(;v&&v.z>=f&&y&&y.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==n&&v!==a&&Tn(o,h,l,u,c,d,v.x,v.y)&&rt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==n&&y!==a&&Tn(o,h,l,u,c,d,y.x,y.y)&&rt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==n&&v!==a&&Tn(o,h,l,u,c,d,v.x,v.y)&&rt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==n&&y!==a&&Tn(o,h,l,u,c,d,y.x,y.y)&&rt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ap(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!Ys(n,s)&&Rh(n,i,i.next,s)&&pr(n,s)&&pr(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),mr(i),mr(i.next),i=r=s),i=i.next}while(i!==r);return an(i)}function op(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dp(a,o)){let l=Ch(a,o);return a=an(a,a.next),l=an(l,l.next),dr(a,e,t,i,n,s,0),void dr(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function lp(r,e){return r.x-e.x}function cp(r,e){let t=(function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let g=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(g<=c&&g>l&&(l=g,a=o.x<o.next.x?o:o.next,g===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,x=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Tn(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),pr(o,n)&&(m<x||m===x&&(o.x>a.x||o.x===a.x&&hp(a,o)))&&(a=o,x=m)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let i=Ch(t,r);return an(i,i.next),an(t,t.next)}function hp(r,e){return rt(r.prev,r,e.prev)<0&&rt(e.next,r,r.next)<0}function Qo(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function up(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Tn(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function dp(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Rh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1})(r,e)&&(pr(r,e)&&pr(e,r)&&(function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s})(r,e)&&(rt(r.prev,r,e.prev)||rt(r,e.prev,e))||Ys(r,e)&&rt(r.prev,r,r.next)>0&&rt(e.prev,e,e.next)>0)}function rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ys(r,e){return r.x===e.x&&r.y===e.y}function Rh(r,e,t,i){let n=es(rt(r,e,t)),s=es(rt(r,e,i)),a=es(rt(t,i,r)),o=es(rt(t,i,e));return n!==s&&a!==o||!(n!==0||!Qr(r,t,e))||!(s!==0||!Qr(r,i,e))||!(a!==0||!Qr(t,r,i))||!(o!==0||!Qr(t,e,i))}function Qr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function es(r){return r>0?1:r<0?-1:0}function pr(r,e){return rt(r.prev,r,r.next)<0?rt(r,e,r.next)>=0&&rt(r,r.prev,e)>=0:rt(r,e,r.prev)<0||rt(r,r.next,e)<0}function Ch(r,e){let t=new el(r.i,r.x,r.y),i=new el(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Qc(r,e,t,i){let n=new el(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function mr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function el(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Oi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];eh(e),th(i,e);let a=e.length;t.forEach(eh);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,th(i,t[l]);let o=np(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function eh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function th(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var tl=class r extends Qe{constructor(e=new Fs([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:pp,v,y,w,E,A,O=!1;f&&(v=f.getSpacedPoints(h),O=!0,d=!1,y=f.computeFrenetFrames(h,!1),w=new T,E=new T,A=new T),d||(g=0,p=0,m=0,x=0);let U=o.extractPoints(c),B=U.shape,H=U.holes;if(!Oi.isClockWise(B)){B=B.reverse();for(let R=0,P=H.length;R<P;R++){let S=H[R];Oi.isClockWise(S)&&(H[R]=S.reverse())}}let k=Oi.triangulateShape(B,H),j=B;for(let R=0,P=H.length;R<P;R++){let S=H[R];B=B.concat(S)}function G(R,P,S){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(P,S)}let q=B.length,$=k.length;function se(R,P,S){let I,L,Z,F=R.x-P.x,J=R.y-P.y,te=S.x-R.x,K=S.y-R.y,he=F*F+J*J,pe=F*K-J*te;if(Math.abs(pe)>Number.EPSILON){let fe=Math.sqrt(he),Ee=Math.sqrt(te*te+K*K),Fe=P.x-J/fe,Oe=P.y+F/fe,ye=((S.x-K/Ee-Fe)*K-(S.y+te/Ee-Oe)*te)/(F*K-J*te);I=Fe+F*ye-R.x,L=Oe+J*ye-R.y;let ke=I*I+L*L;if(ke<=2)return new ie(I,L);Z=Math.sqrt(ke/2)}else{let fe=!1;F>Number.EPSILON?te>Number.EPSILON&&(fe=!0):F<-Number.EPSILON?te<-Number.EPSILON&&(fe=!0):Math.sign(J)===Math.sign(K)&&(fe=!0),fe?(I=-J,L=F,Z=Math.sqrt(he)):(I=F,L=J,Z=Math.sqrt(he/2))}return new ie(I/Z,L/Z)}let ae=[];for(let R=0,P=j.length,S=P-1,I=R+1;R<P;R++,S++,I++)S===P&&(S=0),I===P&&(I=0),ae[R]=se(j[R],j[S],j[I]);let ce=[],xe,ee=ae.concat();for(let R=0,P=H.length;R<P;R++){let S=H[R];xe=[];for(let I=0,L=S.length,Z=L-1,F=I+1;I<L;I++,Z++,F++)Z===L&&(Z=0),F===L&&(F=0),xe[I]=se(S[I],S[Z],S[F]);ce.push(xe),ee=ee.concat(xe)}for(let R=0;R<g;R++){let P=R/g,S=p*Math.cos(P*Math.PI/2),I=m*Math.sin(P*Math.PI/2)+x;for(let L=0,Z=j.length;L<Z;L++){let F=G(j[L],ae[L],I);ue(F.x,F.y,-S)}for(let L=0,Z=H.length;L<Z;L++){let F=H[L];xe=ce[L];for(let J=0,te=F.length;J<te;J++){let K=G(F[J],xe[J],I);ue(K.x,K.y,-S)}}}let ne=m+x;for(let R=0;R<q;R++){let P=d?G(B[R],ee[R],ne):B[R];O?(E.copy(y.normals[0]).multiplyScalar(P.x),w.copy(y.binormals[0]).multiplyScalar(P.y),A.copy(v[0]).add(E).add(w),ue(A.x,A.y,A.z)):ue(P.x,P.y,0)}for(let R=1;R<=h;R++)for(let P=0;P<q;P++){let S=d?G(B[P],ee[P],ne):B[P];O?(E.copy(y.normals[R]).multiplyScalar(S.x),w.copy(y.binormals[R]).multiplyScalar(S.y),A.copy(v[R]).add(E).add(w),ue(A.x,A.y,A.z)):ue(S.x,S.y,u/h*R)}for(let R=g-1;R>=0;R--){let P=R/g,S=p*Math.cos(P*Math.PI/2),I=m*Math.sin(P*Math.PI/2)+x;for(let L=0,Z=j.length;L<Z;L++){let F=G(j[L],ae[L],I);ue(F.x,F.y,u+S)}for(let L=0,Z=H.length;L<Z;L++){let F=H[L];xe=ce[L];for(let J=0,te=F.length;J<te;J++){let K=G(F[J],xe[J],I);O?ue(K.x,K.y+v[h-1].y,v[h-1].x+S):ue(K.x,K.y,u+S)}}}function me(R,P){let S=R.length;for(;--S>=0;){let I=S,L=S-1;L<0&&(L=R.length-1);for(let Z=0,F=h+2*g;Z<F;Z++){let J=q*Z,te=q*(Z+1);M(P+I+J,P+L+J,P+L+te,P+I+te)}}}function ue(R,P,S){l.push(R),l.push(P),l.push(S)}function C(R,P,S){N(R),N(P),N(S);let I=n.length/3,L=_.generateTopUV(i,n,I-3,I-2,I-1);V(L[0]),V(L[1]),V(L[2])}function M(R,P,S,I){N(R),N(P),N(I),N(P),N(S),N(I);let L=n.length/3,Z=_.generateSideWallUV(i,n,L-6,L-3,L-2,L-1);V(Z[0]),V(Z[1]),V(Z[3]),V(Z[1]),V(Z[2]),V(Z[3])}function N(R){n.push(l[3*R+0]),n.push(l[3*R+1]),n.push(l[3*R+2])}function V(R){s.push(R.x),s.push(R.y)}(function(){let R=n.length/3;if(d){let P=0,S=q*P;for(let I=0;I<$;I++){let L=k[I];C(L[2]+S,L[1]+S,L[0]+S)}P=h+2*g,S=q*P;for(let I=0;I<$;I++){let L=k[I];C(L[0]+S,L[1]+S,L[2]+S)}}else{for(let P=0;P<$;P++){let S=k[P];C(S[2],S[1],S[0])}for(let P=0;P<$;P++){let S=k[P];C(S[0]+q*h,S[1]+q*h,S[2]+q*h)}}i.addGroup(R,n.length/3-R,0)})(),(function(){let R=n.length/3,P=0;me(j,P),P+=j.length;for(let S=0,I=H.length;S<I;S++){let L=H[S];me(L,P),P+=L.length}i.addGroup(R,n.length/3-R,1)})()}this.setAttribute("position",new Le(n,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ns[n.type]().fromJSON(n)),new r(i,e.options)}},pp={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new ie(s,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],m=e[3*n+2],x=e[3*s],g=e[3*s+1],f=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-u),new ie(d,1-m),new ie(x,1-f)]:[new ie(o,1-l),new ie(h,1-u),new ie(p,1-m),new ie(g,1-f)]}},fr=class r extends sn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},il=class r extends sn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},nl=class r extends Qe{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new T,m=new ie;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let f=s+g/i*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<n;x++){let g=x*(i+1);for(let f=0;f<i;f++){let _=f+g,v=_,y=_+i+1,w=_+i+2,E=_+1;o.push(v,y,E),o.push(y,w,E)}}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},rl=class r extends Qe{constructor(e=new Fs([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=n.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;Oi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){let _=m[g];Oi.isClockWise(_)===!0&&(m[g]=_.reverse())}let x=Oi.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){let _=m[g];p=p.concat(_)}for(let g=0,f=p.length;g<f;g++){let _=p[g];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let g=0,f=x.length;g<f;g++){let _=x[g],v=_[0]+u,y=_[1]+u,w=_[2]+u;i.push(v,y,w),l+=3}}this.setIndex(i),this.setAttribute("position",new Le(n,3)),this.setAttribute("normal",new Le(s,3)),this.setAttribute("uv",new Le(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},On=class r extends Qe{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,p=[],m=[],x=[],g=[];for(let f=0;f<=i;f++){let _=[],v=f/i,y=0;f===0&&a===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let E=w/t;u.x=-e*Math.cos(n+E*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(n+E*s)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(E+y,1-v),_.push(c++)}h.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){let v=h[f][_+1],y=h[f][_],w=h[f+1][_],E=h[f+1][_+1];(f!==0||a>0)&&p.push(v,y,E),(f!==i-1||l<Math.PI)&&p.push(y,w,E)}this.setIndex(p),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sl=class r extends sn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},al=class r extends Qe{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=i;p++)for(let m=0;m<=n;m++){let x=m/n*s,g=p/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=n;m++){let x=(n+1)*p+m-1,g=(n+1)*(p-1)+m-1,f=(n+1)*(p-1)+m,_=(n+1)*p+m;a.push(x,g,_),a.push(g,f,_)}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ol=class r extends Qe{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new T,d=new T,p=new T,m=new T,x=new T,g=new T,f=new T;for(let v=0;v<=i;++v){let y=v/i*s*Math.PI*2;_(y,s,a,e,p),_(y+.01,s,a,e,m),g.subVectors(m,p),f.addVectors(m,p),x.crossVectors(g,f),f.crossVectors(x,g),x.normalize(),f.normalize();for(let w=0;w<=n;++w){let E=w/n*Math.PI*2,A=-t*Math.cos(E),O=t*Math.sin(E);u.x=p.x+(A*f.x+O*x.x),u.y=p.y+(A*f.y+O*x.y),u.z=p.z+(A*f.z+O*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(w/n)}}for(let v=1;v<=i;v++)for(let y=1;y<=n;y++){let w=(n+1)*(v-1)+(y-1),E=(n+1)*v+(y-1),A=(n+1)*v+y,O=(n+1)*(v-1)+y;o.push(w,E,O),o.push(E,A,O)}function _(v,y,w,E,A){let O=Math.cos(v),U=Math.sin(v),B=w/y*v,H=Math.cos(B);A.x=E*(2+H)*.5*O,A.y=E*(2+H)*U*.5,A.z=E*Math.sin(B)*.5}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ll=class r extends Qe{constructor(e=new Us(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new ie,h=new T,u=[],d=[],p=[],m=[];function x(g){h=e.getPointAt(g/t,h);let f=a.normals[g],_=a.binormals[g];for(let v=0;v<=n;v++){let y=v/n*Math.PI*2,w=Math.sin(y),E=-Math.cos(y);l.x=E*f.x+w*_.x,l.y=E*f.y+w*_.y,l.z=E*f.z+w*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)x(g);x(s===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let f=0;f<=n;f++)c.x=g/t,c.y=f/n,p.push(c.x,c.y)})(),(function(){for(let g=1;g<=t;g++)for(let f=1;f<=n;f++){let _=(n+1)*(g-1)+(f-1),v=(n+1)*g+(f-1),y=(n+1)*g+f,w=(n+1)*(g-1)+f;m.push(_,v,w),m.push(v,y,w)}})()})(),this.setIndex(m),this.setAttribute("position",new Le(u,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ns[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},cl=class extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let x=0;x<3;x++){let g=o.getX(p+x),f=o.getX(p+(x+1)%3);n.fromBufferAttribute(a,g),s.fromBufferAttribute(a,f),ih(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),ih(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function ih(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Em=Object.freeze({__proto__:null,BoxGeometry:ei,CapsuleGeometry:Zo,CircleGeometry:Jo,ConeGeometry:ur,CylinderGeometry:rn,DodecahedronGeometry:Ko,EdgesGeometry:$o,ExtrudeGeometry:tl,IcosahedronGeometry:fr,LatheGeometry:Os,OctahedronGeometry:il,PlaneGeometry:Vt,PolyhedronGeometry:sn,RingGeometry:nl,ShapeGeometry:rl,SphereGeometry:On,TetrahedronGeometry:sl,TorusGeometry:al,TorusKnotGeometry:ol,TubeGeometry:ll,WireframeGeometry:cl});var Dt=class extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ts(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function mp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Fn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hl=class extends Fn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case rc:s=e,o=2*t-i;break;case sc:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:a=e,l=2*i-t;break;case sc:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(n-t),x=m*m,g=x*m,f=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,v=(-1-p)*g+(1.5+p)*x+.5*m,y=p*g-p*x;for(let w=0;w!==o;++w)s[w]=f*a[h+w]+_*a[c+w]+v*a[l+w]+y*a[u+w];return s}},ul=class extends Fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},dl=class extends Fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ts(t,this.TimeBufferType),this.values=ts(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ts(e.times,Array),values:ts(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&mp(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===oa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Qt.prototype.TimeBufferType=Float32Array,Qt.prototype.ValueBufferType=Float32Array,Qt.prototype.DefaultInterpolation=Mo;var en=class extends Qt{constructor(e,t,i){super(e,t,i)}};en.prototype.ValueTypeName="bool",en.prototype.ValueBufferType=Array,en.prototype.DefaultInterpolation=cs,en.prototype.InterpolantFactoryMethodLinear=void 0,en.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Qt{};pl.prototype.ValueTypeName="color";var ml=class extends Qt{};ml.prototype.ValueTypeName="number";var fl=class extends Fn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)ai.slerpFlat(s,0,a,c-o,a,c,l);return s}},Bs=class extends Qt{InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};Bs.prototype.ValueTypeName="quaternion",Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var tn=class extends Qt{constructor(e,t,i){super(e,t,i)}};tn.prototype.ValueTypeName="string",tn.prototype.ValueBufferType=Array,tn.prototype.DefaultInterpolation=cs,tn.prototype.InterpolantFactoryMethodLinear=void 0,tn.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Qt{};gl.prototype.ValueTypeName="vector";var vl=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},fp=new vl,_l=class{constructor(e){this.manager=e!==void 0?e:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(n,s){i.load(e,n,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ks=class extends zs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ha=new Pe,nh=new T,rh=new T,xl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nn,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rh),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Am=new Pe,Rm=new T,Cm=new T;var yl=class extends xl{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new yl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Pm=new Pe,Lm=new Pe,Im=new Pe;var Gs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sh(){return performance.now()}var Um=new T,Dm=new ai,Nm=new T,Om=new T;var Fm=new T,Bm=new ai,zm=new T,km=new T;var Il="\\[\\]\\.:\\/",gp=new RegExp("["+Il+"]","g"),Ga="[^"+Il+"]",vp="[^"+Il.replace("\\.","")+"]",_p=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ga)+/(WCOD+)?/.source.replace("WCOD",vp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ga)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ga)+"$"),xp=["material","materials","bones","map"],$e=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(e){let t=_p.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);xp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=class{constructor(r,e,t){let i=t||$e.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray],$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hm=new Float32Array(1);var Gm=new Pe;var Vm=new ie;var Wm=new T,Xm=new T;var jm=new T;var qm=new T,Ym=new Pe,Zm=new Pe;var Jm=new T,Km=new Re,$m=new Re;var Qm=new T,ef=new T,tf=new T;var nf=new T,rf=new or;var sf=new oi;var af=new T;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var zn=r=>window.__ASSETS&&window.__ASSETS[r]||r;var ti={W:928,FLOOR:1640,CX:464,S:3.9/1640},Zs=new ie(464,382),yp=1175,Mp=1525,Sp=new ie(464,1120),ft={top:1350,h:300,w:176,xL:382,xR:546},bp=`
attribute vec2 sp;
uniform int uLayer;
uniform float uS;
uniform vec2 uOrigin;
uniform float uLift, uBob, uSwayX, uRoll, uBreath, uZ;
uniform vec2 uHip;
uniform float uG;
uniform vec2 uBAnchor;
uniform vec3 uBJ;          // jiggle x, y, squash
uniform vec3 uRip;         // ripple amp, phase, wobble
uniform float uWing;
uniform vec2 uWingPivotL, uWingPivotR;
uniform vec4 uLegL, uLegR; // lift, fore, xoff, -
uniform vec2 uHem;         // hem lift near L / R leg
uniform float uHemSway;
uniform float uTime;
varying vec2 vUv;
varying float vFog;
varying float vShade;

vec2 upperT(vec2 p){
  // breathing (chest/shoulders rise a little)
  p.y -= uBreath * smoothstep(560.0, 120.0, p.y);
  vec2 d = p - uHip; float c = cos(uRoll), s = sin(uRoll);
  p = uHip + vec2(c*d.x - s*d.y, s*d.x + c*d.y);
  p.x += uSwayX; p.y -= uBob + uLift;
  return p;
}
vec2 rot(vec2 p, vec2 piv, float a, float sx){
  vec2 d = p - piv; d.x *= sx; float c = cos(a), s = sin(a);
  return piv + vec2(c*d.x - s*d.y, s*d.x + c*d.y);
}
void main(){
  vUv = uv;
  vec2 p = sp;
  vShade = 0.0;
  if (uLayer == 0) {            // body (head, torso, arms, hair, dress, skirt)
    float t = smoothstep(600.0, 1420.0, p.y);
    vec2 up = upperT(p);
    vec2 lo = p;
    float hemW = smoothstep(1250.0, 1455.0, p.y);
    lo.x += uSwayX * 0.45 + uHemSway * smoothstep(1050.0, 1460.0, p.y);
    float gl = exp(-pow((p.x - ${ft.xL.toFixed(1)}) / 78.0, 2.0));
    float gr = exp(-pow((p.x - ${ft.xR.toFixed(1)}) / 78.0, 2.0));
    lo.y -= (uHem.x * gl + uHem.y * gr) * hemW;
    lo.y -= uBob * 0.35 * (1.0 - hemW);
    p = mix(up, lo, t);
  } else if (uLayer == 1) {     // belly
    vec2 q = p - uBAnchor;
    float wj = smoothstep(0.0, 300.0, q.y);
    float wx = smoothstep(80.0, 420.0, abs(q.x));
    vec2 sc = vec2(uG * (1.0 + uBJ.z * wj), uG * (1.0 - uBJ.z * 0.8 * wj));
    vec2 r = q - vec2(0.0, 430.0);
    float rl = length(r) / 430.0;
    vec2 rn = r / max(length(r), 1.0);
    vec2 rip = rn * sin(rl * 8.0 - uRip.y) * uRip.x * wj * (1.0 - smoothstep(0.55, 1.05, rl));
    // slow organic wobble: the lower mass sways a touch later than the top
    float wob = sin(uTime * 2.3 + q.x * 0.004) * uRip.z * wj;
    vec2 j = vec2(uBJ.x * (0.6 + 0.4 * wj), uBJ.y) * wj;
    p = uBAnchor + q * sc + (j + rip + vec2(0.0, wob) + vec2(uBJ.x * 0.25 * wx * sign(q.x), 0.0)) * uG;
    p = upperT(p);
    vShade = uBJ.z * wj;
  } else if (uLayer == 2 || uLayer == 3) { // wings
    float side = (uLayer == 2) ? -1.0 : 1.0;
    vec2 piv = (uLayer == 2) ? uWingPivotL : uWingPivotR;
    float sx = 1.0 - 0.10 * (0.5 + 0.5 * sin(uWing * 6.0));
    p = rot(p, piv, -side * uWing, sx);
    p = upperT(p);
  } else if (uLayer == 4 || uLayer == 5) { // legs
    vec4 L = (uLayer == 4) ? uLegL : uLegR;
    float cx = (uLayer == 4) ? ${ft.xL.toFixed(1)} : ${ft.xR.toFixed(1)};
    float top = ${ft.top.toFixed(1)};
    float len = ${(ti.FLOOR-ft.top).toFixed(1)};
    float k = 1.0 - L.x / len;
    p.y = top + (p.y - top) * k;
    p.x = cx + (p.x - cx) * (1.0 + 0.10 * L.y) + L.z + uSwayX * 0.35;
  } else {                       // face overlay / fx on head
    p = upperT(p);
  }
  vec3 pos = vec3((p.x - uOrigin.x) * uS, (uOrigin.y - p.y) * uS, uZ);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vFog = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,wp=`
uniform sampler2D map;
uniform vec3 uFogColor;
uniform float uFogNear, uFogFar;
uniform vec3 uTint;
uniform float uTintAmt, uFlash, uOpacity;
varying vec2 vUv;
varying float vFog;
varying float vShade;
void main(){
  vec4 c = texture2D(map, vUv);
  if (c.a < 0.02) discard;
  vec3 col = c.rgb;
  col *= 1.0 - clamp(vShade, -0.2, 0.2) * 0.35;
  col = mix(col, uTint, uTintAmt);
  col = mix(col, vec3(1.0), uFlash);
  float f = smoothstep(uFogNear, uFogFar, vFog);
  col = mix(col, uFogColor, f);
  gl_FragColor = vec4(col, c.a * uOpacity);
}`;function Tp(r){return new Promise((e,t)=>{let i=new Image,n=setTimeout(()=>t(new Error("\u753B\u50CF\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8 "+r.slice(0,60))),3e4);i.onload=()=>{clearTimeout(n),e(i)},i.onerror=()=>{clearTimeout(n),t(new Error("\u753B\u50CF\u30A8\u30E9\u30FC "+r.slice(0,60)))},i.src=r})}function Ph(r){let t=ft.w,i=ft.h,n=document.createElement("canvas");n.width=t*2,n.height=i*2;let s=n.getContext("2d");s.scale(2,2);let a=r==="L"?1:-1,o=E=>a===1?E:t-E,l=t/2,c=i-10,h=c-58,u=()=>{s.beginPath(),s.moveTo(o(26),0),s.bezierCurveTo(o(14),50,o(14),110,o(36),165),s.bezierCurveTo(o(48),196,o(56),h-14,o(58),h+8),s.lineTo(o(t-60),h+8),s.bezierCurveTo(o(t-58),h-20,o(t-44),180,o(t-32),130),s.bezierCurveTo(o(t-24),90,o(t-24),40,o(t-30),0),s.closePath()};u();let d=s.createLinearGradient(0,0,t,0),p="rgb(118,70,60)",m="rgb(164,107,93)",x="rgb(196,139,120)";a===1?(d.addColorStop(.08,p),d.addColorStop(.26,m),d.addColorStop(.44,x),d.addColorStop(.64,m),d.addColorStop(.9,p)):(d.addColorStop(.1,p),d.addColorStop(.36,m),d.addColorStop(.56,x),d.addColorStop(.74,m),d.addColorStop(.92,p)),s.fillStyle=d,s.fill(),s.save(),s.clip();let g=s.createLinearGradient(0,0,0,120);g.addColorStop(0,"rgba(45,8,16,0.9)"),g.addColorStop(.5,"rgba(45,8,16,0.35)"),g.addColorStop(1,"rgba(45,8,16,0)"),s.fillStyle=g,s.fillRect(0,0,t,130);let f=s.createRadialGradient(o(l-12),150,2,o(l-12),150,46);f.addColorStop(0,"rgba(255,225,205,0.32)"),f.addColorStop(1,"rgba(255,225,205,0)"),s.fillStyle=f,s.fillRect(0,90,t,130),s.fillStyle="rgba(90,45,38,0.25)",s.beginPath(),s.ellipse(o(64),h-4,5,9,0,0,Math.PI*2),s.fill(),s.restore(),u(),s.lineWidth=2.6,s.strokeStyle="#4a221c",s.lineJoin="round",s.stroke();let _=o(l+2),v=h+4,y=40,w=()=>{s.beginPath(),s.moveTo(_-y*.72,v),s.bezierCurveTo(_-y*1.02,v+14,_-y*1.08,v+36,_-y*.86,c-6),s.bezierCurveTo(_-y*.5,c+2,_+y*.5,c+2,_+y*.86,c-6),s.bezierCurveTo(_+y*1.08,v+36,_+y*1.02,v+14,_+y*.72,v),s.bezierCurveTo(_+y*.4,v+15,_-y*.4,v+15,_-y*.72,v),s.closePath()};return s.beginPath(),s.moveTo(_-y*.72,v+1),s.bezierCurveTo(_-y*.4,v-7,_+y*.4,v-7,_+y*.72,v+1),s.bezierCurveTo(_+y*.4,v+15,_-y*.4,v+15,_-y*.72,v+1),s.closePath(),s.fillStyle="rgb(150,95,82)",s.fill(),s.lineWidth=1.6,s.strokeStyle="#4a221c",s.stroke(),w(),d=s.createLinearGradient(0,v,0,c),d.addColorStop(0,"#62304a"),d.addColorStop(.45,"#3c1a2b"),d.addColorStop(1,"#1a0911"),s.fillStyle=d,s.fill(),s.lineWidth=2.6,s.strokeStyle="#14060c",s.stroke(),s.save(),w(),s.clip(),s.globalAlpha=.55,s.fillStyle="#ffd6ea",s.beginPath(),s.ellipse(_-a*18,v+30,4,13,a*.3,0,Math.PI*2),s.fill(),s.globalAlpha=.22,s.beginPath(),s.ellipse(_+a*16,v+38,3,9,-a*.25,0,Math.PI*2),s.fill(),s.restore(),Ks(s,_,v+16,7,"#ff6fae","#9c1a52"),n}function Ks(r,e,t,i,n,s){r.beginPath(),r.moveTo(e,t+i*.9),r.bezierCurveTo(e-i*1.6,t-i*.1,e-i*.8,t-i*1.3,e,t-i*.45),r.bezierCurveTo(e+i*.8,t-i*1.3,e+i*1.6,t-i*.1,e,t+i*.9),r.closePath(),r.fillStyle=n,r.fill(),s&&(r.lineWidth=Math.max(1,i*.22),r.strokeStyle=s,r.stroke())}var Dl=class{constructor(e,t){this.L=t,this.imgs=e,this.R=3;let[i,n,s,a]=t.face;this.box={x:i,y:n,w:s,h:a},this.canvas=document.createElement("canvas"),this.canvas.width=s*this.R,this.canvas.height=a*this.R,this.g=this.canvas.getContext("2d"),this.tex=new Ti(this.canvas),this.tex.minFilter=kt,this.tex.generateMipmaps=!1,this.eyes={L:{c:[425,85],hw:15.5,up:6.5,lo:5.5,a:-.14,img:e.eyeL,r:t.eyeL,inner:1},R:{c:[473,73.5],hw:16.5,up:6.5,lo:5.5,a:-.1,img:e.eyeR,r:t.eyeR,inner:-1}},this.mouth={c:[455.5,113],top:104,a:-.17,img:e.mouth,r:t.mouth},this.p={open:1,eyeMode:"normal",lid:0,brow:0,blush:.2,mouthMode:"smile",talk:0,wink:0,tear:0,cheek:0},this.key=""}skinClip(e){let t=this.g;t.save(),t.beginPath(),e(t),t.clip(),t.drawImage(this.imgs.skin,this.box.x,this.box.y),t.restore()}drawEye(e,t,i,n){let s=this.g,[a,o]=e.c;if(i==="happy"||i==="squeeze"||t<.14){if(s.save(),s.translate(a,o+1.5),s.rotate(e.a),s.strokeStyle="#2a0f16",s.lineCap="round",s.lineJoin="round",i==="happy"){s.lineWidth=2.3,s.beginPath(),s.moveTo(-e.hw+1,2.5),s.quadraticCurveTo(0,-8,e.hw-1,2.5),s.stroke(),s.lineWidth=1.4,s.beginPath(),s.moveTo(-e.hw*e.inner*-1+0,2);let p=-e.inner*(e.hw-1);s.moveTo(p,2.5),s.lineTo(p-e.inner*-3.5,4.5),s.stroke()}else if(i==="squeeze"){s.lineWidth=2.4;let p=e.inner;s.beginPath(),s.moveTo(-p*e.hw*.9,-5),s.lineTo(p*e.hw*.55,0),s.lineTo(-p*e.hw*.9,5),s.stroke()}else{s.lineWidth=2.2,s.beginPath(),s.moveTo(-e.hw+.5,-1),s.quadraticCurveTo(0,5.5,e.hw-.5,-1),s.stroke(),s.lineWidth=1.3;let p=-e.inner*(e.hw-.5);s.beginPath(),s.moveTo(p,-1),s.lineTo(p-e.inner*3.5,-3.5),s.stroke()}s.restore();return}let[l,c,h,u]=e.r,d=o+e.lo*.7;if(s.save(),s.translate(a,d),s.scale(1,t),s.translate(-a,-d),s.drawImage(e.img,l,c,h,u),s.restore(),n>.2){let p=(n-.2)/.8;s.save(),s.translate(a,o),s.rotate(e.a);let m=e.hw,x=-e.up*t-.5,g=e.inner*(m+1),f=-e.inner*(m+1),_=x+8*p,v=x+1.5*p,y=[(g+f)/2,(_+v)/2-1.8];s.beginPath(),s.moveTo(f,v),s.quadraticCurveTo(y[0],y[1],g,_),s.lineTo(g,x-10),s.lineTo(f,x-10),s.closePath(),s.clip(),s.rotate(-e.a),s.translate(-a,-o),s.drawImage(this.imgs.skin,this.box.x,this.box.y),s.restore(),s.save(),s.translate(a,o),s.rotate(e.a),s.strokeStyle="rgba(30,8,14,0.95)",s.lineCap="round",s.lineWidth=1.9,s.beginPath(),s.moveTo(f+e.inner*2.5,v+.4),s.quadraticCurveTo(y[0],y[1]+.6,g-e.inner*3,_+.2),s.stroke(),s.restore()}}drawBrows(e){if(Math.abs(e)<.08)return;let t=this.g;t.save(),t.globalAlpha=Math.min(1,Math.abs(e)*1.4)*.9,t.fillStyle="#331437";let i=(n,s,a,o,l)=>{let c=a-n,h=o-s,u=Math.hypot(c,h),d=-h/u,p=c/u;t.beginPath(),t.moveTo(n+d*.6,s+p*.6),t.quadraticCurveTo((n+a)/2+d*(l+.8),(s+o)/2+p*(l+.8)-1.2,a+d*l,o+p*l),t.lineTo(a-d*l,o-p*l),t.quadraticCurveTo((n+a)/2-d*.4,(s+o)/2-p*.4-1.2,n-d*.6,s-p*.6),t.closePath(),t.fill()};if(e>0){let n=e;i(409,72-2*n,437,72+5.5*n,1.5),i(489,58-1*n,457,61+6*n,1.5)}else{let n=-e;i(410,75,437,72-5*n,1.2),i(489,62,457,61-5.5*n,1.2)}t.restore()}drawMouth(e,t){let i=this.g,n=this.mouth,[s,a]=n.c,[o,l,c,h]=n.r,u=(m,x)=>{i.save(),i.translate(s,n.top),i.scale(m,x),i.translate(-s,-n.top),i.drawImage(n.img,o,l,c,h),i.restore()},d=(m,x=1.6,g="#5a1f22")=>{i.save(),i.translate(s,a-3),i.rotate(n.a),i.strokeStyle=g,i.lineWidth=x,i.lineCap="round",i.beginPath(),m(i),i.stroke(),i.restore()},p=t;if((e==="grin"||e==="shout")&&(p=Math.max(p,e==="shout"?.75:.85)),e==="o"){u(.55+.1*p,.65+.2*p);return}if(p>.1){u((e==="shout"?1.12:e==="pout"?.82:1)*(.82+.18*p),.22+.78*p);return}e==="pout"?(d(m=>{m.moveTo(-5.5,1.5),m.quadraticCurveTo(0,-2.5,5.5,1.5)},1.7),d(m=>{m.moveTo(-2.5,4.6),m.quadraticCurveTo(0,5.6,2.5,4.6)},1,"rgba(90,31,34,0.45)")):(d(m=>{m.moveTo(-8,-1.5),m.quadraticCurveTo(0,4.2,8,-2.5)},1.7),i.save(),i.translate(s,a-3),i.rotate(n.a),i.fillStyle="#fff",i.strokeStyle="#5a1f22",i.lineWidth=.7,i.beginPath(),i.moveTo(2.2,1.6),i.lineTo(4.4,1),i.lineTo(3.5,4.2),i.closePath(),i.fill(),i.stroke(),i.restore())}drawBlush(e,t){if(e<=.01)return;let i=this.g;for(let[n,s,a]of[[418,96,1],[478,85,1]]){let o=i.createRadialGradient(n,s,0,n,s,13);if(o.addColorStop(0,`rgba(255,70,110,${.55*e})`),o.addColorStop(1,"rgba(255,70,110,0)"),i.save(),i.translate(n,s),i.scale(1.25,.6),i.translate(-n,-s),i.fillStyle=o,i.beginPath(),i.arc(n,s,13,0,Math.PI*2),i.fill(),i.restore(),e>.45){i.save(),i.strokeStyle=`rgba(200,30,70,${(e-.45)*.9})`,i.lineWidth=.9,i.lineCap="round";for(let l=-1;l<=1;l++)i.beginPath(),i.moveTo(n+l*4-1.2,s+2),i.lineTo(n+l*4+1.6,s-2.4),i.stroke();i.restore()}}t>.05&&(i.save(),i.globalAlpha=t*.16,i.fillStyle="#ffe9e0",i.beginPath(),i.ellipse(414,102,5,3,-.3,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(484,92,5,3,-.3,0,Math.PI*2),i.fill(),i.restore())}render(){let e=this.p,t=[e.open.toFixed(2),e.eyeMode,e.lid.toFixed(2),e.brow.toFixed(2),e.blush.toFixed(2),e.mouthMode,e.talk.toFixed(2),e.wink,e.tear.toFixed(1),e.cheek.toFixed(2)].join("|");if(t===this.key)return!1;this.key=t;let i=this.g,n=this.box;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.setTransform(this.R,0,0,this.R,-n.x*this.R,-n.y*this.R),i.imageSmoothingQuality="high",i.drawImage(this.imgs.skin,n.x,n.y),this.drawBlush(e.blush,e.cheek);let s=e.eyeMode;return this.drawEye(this.eyes.L,e.open,s,e.lid),this.drawEye(this.eyes.R,e.wink?0:e.open,e.wink?"happy":s,e.lid),this.drawBrows(e.brow),this.drawMouth(e.mouthMode,e.talk),this.tex.needsUpdate=!0,!0}},Js=class r{static async load(e="assets/img/"){let t=await(await fetch(zn(e+"layout.json"))).json(),i=["body","belly","wingL","wingR"],n={};return await Promise.all([...i,"face_skin","eyeL","eyeR","mouth"].map(async s=>{n[s]=await Tp(zn(e+s+".png"))})),n.skin=n.face_skin,new r(n,t)}constructor(e,t){this.imgs=e,this.L=t,this.group=new Gt,this.rig=new Gt,this.group.add(this.rig),this.u={uS:{value:ti.S},uOrigin:{value:new ie(ti.CX,ti.FLOOR)},uLift:{value:0},uBob:{value:0},uSwayX:{value:0},uRoll:{value:0},uBreath:{value:0},uHip:{value:Sp.clone()},uG:{value:1},uBAnchor:{value:Zs.clone()},uBJ:{value:new T},uRip:{value:new T},uWing:{value:0},uWingPivotL:{value:new ie(238,392)},uWingPivotR:{value:new ie(690,392)},uLegL:{value:new Ye},uLegR:{value:new Ye},uHem:{value:new ie},uHemSway:{value:0},uTime:{value:0},uFogColor:{value:new T(.81,.89,.97)},uFogNear:{value:40},uFogFar:{value:150},uTint:{value:new T(1,.45,.85)},uTintAmt:{value:0},uFlash:{value:0},uOpacity:{value:1}};let i=c=>{let h=c instanceof HTMLCanvasElement?new Ti(c):new Et(c);return h.needsUpdate=!0,h.anisotropy=4,h.colorSpace=Ui,h.minFilter=Di,h.generateMipmaps=!0,h},n=(c,h,u,d,p,m,x)=>{let[g,f,_,v]=h,y=new Vt(1,1,u,d),w=y.attributes.uv,E=w.count,A=new Float32Array(E*2);for(let H=0;H<E;H++)A[H*2]=g+w.getX(H)*_,A[H*2+1]=f+(1-w.getY(H))*v;y.setAttribute("sp",new lt(A,2));let O={...this.u,map:{value:c},uLayer:{value:p},uZ:{value:m}},U=new At({uniforms:O,vertexShader:bp,fragmentShader:wp,transparent:!0,depthWrite:!0,side:Vs}),B=new We(y,U);return B.frustumCulled=!1,B.renderOrder=x,this.rig.add(B),B},s=this.L;this.legCanvases={L:Ph("L"),R:Ph("R")},n(i(e.wingL),s.wingL,10,12,2,-.06,10),n(i(e.wingR),s.wingR,10,12,3,-.06,10),n(i(this.legCanvases.L),[ft.xL-ft.w/2,ft.top,ft.w,ft.h],2,12,4,-.03,11),n(i(this.legCanvases.R),[ft.xR-ft.w/2,ft.top,ft.w,ft.h],2,12,5,-.03,11),this.bodyMesh=n(i(e.body),s.body,36,72,0,0,12),this.face=new Dl(e,s),this.face.render(),n(this.face.tex,s.face,2,2,6,.012,13),this.bellyMesh=n(i(e.belly),s.belly,48,48,1,.03,14),this.fxCanvas=document.createElement("canvas"),this.fxCanvas.width=128,this.fxCanvas.height=128,this.fxTex=new Ti(this.fxCanvas),this.fxMesh=n(this.fxTex,[486,4,56,56],1,1,6,.05,15),this.fxKey="";let a=document.createElement("canvas");a.width=a.height=128;let o=a.getContext("2d"),l=o.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(20,0,20,0.55)"),l.addColorStop(.6,"rgba(20,0,20,0.28)"),l.addColorStop(1,"rgba(20,0,20,0)"),o.fillStyle=l,o.fillRect(0,0,128,128),this.shadow=new We(new Vt(1,1),new wi({map:new Ti(a),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.shadow.renderOrder=1,this.group.add(this.shadow),this.t=0,this.phase=0,this.speed=0,this.G=1,this.Gt=1,this.Gv=0,this.spring={x:0,vx:0,y:0,vy:0,q:0,vq:0},this.rip=0,this.ripPhase=0,this.lastStance=-1,this.onStep=null,this.wingBoost=0,this.mood="tease",this.blinkT=2+Math.random()*2,this.blinkK=0,this.winkT=0,this.tapFace=0,this.talk=0,this.f={open:1,lid:0,brow:0,blush:.25,cheek:0},this.anger=0}get bodyScale(){return 1+.06*(this.G-1)}get radius(){return 421*this.G*ti.S*.92*this.bodyScale}get height(){return(ti.FLOOR-(12-this.u.uLift.value))*ti.S*this.bodyScale}headWorldY(){return(ti.FLOOR-70+this.u.uLift.value)*ti.S*this.bodyScale}bellyWorldY(){let e=Zs.y,t=e+420*this.G-this.u.uLift.value;return(ti.FLOOR-t)*ti.S*this.bodyScale}setGrowth(e){this.Gt=e}impulse(e,t=0,i=0){this.spring.vy+=e,this.spring.vx+=t,this.spring.vq+=i}ripple(e){this.rip=Math.max(this.rip,e)}setMood(e){this.mood=e}update(e,t,i=0){this.t+=e;let n=this.t,s=this.u;s.uTime.value=n;let a=this.group.position;this.rig.rotation.y=Math.atan2(t.x-a.x,t.z-a.z);let o=40,l=7;this.Gv+=(-(this.G-this.Gt)*o-this.Gv*l)*e,this.G+=this.Gv*e;let c=this.G;s.uG.value=c,this.rig.scale.setScalar(this.bodyScale),s.uLift.value=Math.max(0,Zs.y+(yp-Zs.y)*c-Mp);let h=1.15+.12*Math.min(c,6),u=Math.min(1,this.speed/1.2);this.phase=(this.phase+e*this.speed/(h*2))%1;let d=this.phase,p=d<.5?d/.5:0,m=d>=.5?(d-.5)/.5:0,x=46*u,g=Math.sin(Math.PI*p),f=Math.sin(Math.PI*m);s.uLegL.value.set(g*x,g*u,-g*4*u,0),s.uLegR.value.set(f*x,f*u,f*4*u,0),s.uHem.value.set(g*x*.55,f*x*.55);let _=Math.sin(d*Math.PI*2),v=Math.abs(Math.sin(d*Math.PI*2))*11*u;s.uBob.value=v-3*u,s.uSwayX.value=-_*11*u,s.uRoll.value=_*.022*u,s.uHemSway.value=Math.sin(d*Math.PI*2-.9)*7*u,s.uBreath.value=(Math.sin(n*1.7)*.5+.5)*3.2;let y=d<.5?1:0;y!==this.lastStance&&u>.2&&(this.lastStance=y,this.impulse(85*u,(y?1:-1)*55*u,-.35*u),this.onStep&&this.onStep(y,c));let w=this.spring;w.vy+=(-w.y*62-w.vy*4)*e,w.y+=w.vy*e,w.vx+=(-w.x*48-w.vx*3.6)*e,w.x+=w.vx*e,w.vq+=(-w.q*150-w.vq*6.5)*e,w.q+=w.vq*e;let E=w.q+w.y*.0016;s.uBJ.value.set(w.x,w.y,Math.max(-.16,Math.min(.16,E))),this.rip*=Math.exp(-e*2.8),this.ripPhase+=e*16,s.uRip.value.set(this.rip*14,this.ripPhase,2.2+1.2*u),this.wingBoost*=Math.exp(-e*1.5);let A=2.1+this.wingBoost*9;s.uWing.value=(.07+.1*this.wingBoost)*Math.sin(n*A)+.02;let O=this.radius;this.shadow.scale.set(O*2.6,O*1.9,1),this.updateFace(e,i)}updateFace(e,t){let i=this.f,n=this.face.p,s=this.mood,a={open:1,lid:0,brow:0,blush:.25,cheek:0,eye:"normal",mouth:"smile"},o=this.anger;s==="tease"?(a.lid=o*.6,a.brow=o>.45?(o-.45)*1.2:0,a.mouth=o>.6?"pout":"smile",a.cheek=o>.6?1:0,a.blush=.25+o*.2):s==="angry"?(a.lid=.85,a.brow=1,a.mouth="shout",a.blush=.5):s==="cast"?(a.lid=.7,a.brow=.9,a.mouth="grin",a.blush=.55):s==="happy"?(a.lid=0,a.brow=-.25,a.mouth="grin",a.blush=.95,a.eye=Math.sin(this.t*2.2)>.1?"happy":"normal"):s==="tickle"?(a.lid=0,a.brow=-.6,a.mouth="grin",a.blush=1,a.eye="squeeze"):s==="pout"?(a.lid=.35,a.brow=-.7,a.mouth="pout",a.cheek=1,a.blush=.7):s==="surprised"&&(a.lid=0,a.brow=-.5,a.mouth="o",a.blush=.5),this.tapFace>0&&(this.tapFace-=e,a.eye="squeeze",a.mouth="grin",a.blush=1,a.brow=-.7);let l=1-Math.exp(-e*10);i.lid+=(a.lid-i.lid)*l,i.brow+=(a.brow-i.brow)*l,i.blush+=(a.blush-i.blush)*(1-Math.exp(-e*4)),i.cheek+=(a.cheek-i.cheek)*l,this.blinkT-=e,this.blinkT<=0&&this.blinkK===0&&(this.blinkK=1e-4);let c=1;if(this.blinkK>0){this.blinkK+=e;let h=this.blinkK;c=h<.07?1-h/.07:h<.11?0:h<.24?(h-.11)/.13:1,h>=.24&&(this.blinkK=0,this.blinkT=1.8+Math.random()*3.2,Math.random()<.2&&(this.blinkT=.25))}this.winkT-=e,s==="tease"&&this.anger<.4&&this.winkT<-6&&Math.random()<e*.25&&(this.winkT=.7),n.wink=this.winkT>0&&s==="tease"?1:0,n.open=Math.round(c*8)/8,n.lid=Math.round(i.lid*10)/10,n.brow=Math.round(i.brow*10)/10,n.blush=Math.round(i.blush*10)/10,n.cheek=Math.round(i.cheek*5)/5,n.eyeMode=a.eye,n.mouthMode=a.mouth,this.talk+=(t-this.talk)*(1-Math.exp(-e*25)),n.talk=Math.round(Math.min(1,this.talk)*6)/6,this.face.render(),this.drawFx()}drawFx(){let e=this.mood==="angry"||this.mood==="cast"||this.mood==="tease"&&this.anger>.7||this.mood==="pout",t=this.mood==="tickle"||this.tapFace>0,i=e?1+.15*Math.sin(this.t*14):1,n=(e?"a"+i.toFixed(2):"")+(t?"s":"");if(n===this.fxKey)return;this.fxKey=n;let s=this.fxCanvas.getContext("2d");if(s.clearRect(0,0,128,128),e){s.save(),s.translate(64,60),s.scale(i,i),s.strokeStyle="#ff1744",s.lineWidth=9,s.lineCap="round";for(let a=0;a<4;a++)s.save(),s.rotate(a*Math.PI/2+.785),s.beginPath(),s.moveTo(10,-14),s.quadraticCurveTo(10,-6,22,-6),s.stroke(),s.restore();s.restore()}t&&(s.fillStyle="rgba(160,220,255,0.95)",s.strokeStyle="#2b6aa8",s.lineWidth=3,s.beginPath(),s.moveTo(30,70),s.quadraticCurveTo(14,100,30,108),s.quadraticCurveTo(46,100,30,70),s.fill(),s.stroke()),this.fxTex.needsUpdate=!0}setFog(e){let t=e.color.clone().convertLinearToSRGB();this.u.uFogColor.value.set(t.r,t.g,t.b),this.u.uFogNear.value=e.near,this.u.uFogFar.value=e.far}};var be=(r,e)=>r+Math.random()*(e-r);function ki(r,e,t,i=!1){let n=document.createElement("canvas");n.width=r,n.height=e,t(n.getContext("2d"),r,e);let s=new Ti(n);return s.colorSpace=zt,s.anisotropy=4,i&&(s.wrapS=s.wrapT=nr),s}var Nt=84,vr=class{constructor(e,t){this.scene=e,this.low=t,this.buildings=[],this.dissolving=[],this.fx=[],this.makeSky(),this.makeGround(),this.makeCity(),this.makeEdge(),this.makeMagic(),this.makeParticles()}makeSky(){let e=new On(400,32,16),t=new At({side:St,depthWrite:!1,fog:!1,uniforms:{top:{value:new Re(5214176)},mid:{value:new Re(11129333)},bot:{value:new Re(16178153)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top, mid, bot; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.55, h)) : mix(mid, bot, smoothstep(0.0, -0.2, h)); c = mix(c, bot, smoothstep(0.12, 0.0, abs(h)) * 0.55); gl_FragColor = vec4(c, 1.0);
#include <colorspace_fragment>
}`});this.sky=new We(e,t),this.sky.renderOrder=-10,this.scene.add(this.sky);let i=ki(256,128,(n,s,a)=>{for(let o=0;o<22;o++){let l=be(40,s-40),c=be(50,a-30),h=be(18,42),u=n.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.beginPath(),n.arc(l,c,h,0,Math.PI*2),n.fill()}});for(let n=0;n<14;n++){let s=new Rs(new lr({map:i,transparent:!0,depthWrite:!1,fog:!1,opacity:be(.6,.95)})),a=be(0,Math.PI*2),o=be(220,330);s.position.set(Math.cos(a)*o,be(70,140),Math.sin(a)*o),s.scale.set(be(90,160),be(35,55),1),this.scene.add(s)}}makeGround(){let e=ki(512,512,(a,o,l)=>{a.fillStyle="#8fbf6a",a.fillRect(0,0,o,l);for(let c=0;c<9e3;c++)a.fillStyle=`hsla(${be(85,110)},${be(35,55)}%,${be(38,58)}%,0.35)`,a.fillRect(be(0,o),be(0,l),2,be(2,5))},!0);e.repeat.set(60,60);let t=new We(new Vt(600,600),new Dt({map:e}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(t);let i=ki(256,256,(a,o,l)=>{a.fillStyle="#5d5f66",a.fillRect(0,0,o,l);for(let c=0;c<2500;c++)a.fillStyle=`rgba(${be(60,120)},${be(60,120)},${be(70,130)},0.35)`,a.fillRect(be(0,o),be(0,l),2,2);a.fillStyle="#f2f2e8";for(let c=0;c<l;c+=64)a.fillRect(o/2-3,c+8,6,34);a.fillStyle="#e8e8e0",a.fillRect(6,0,4,l),a.fillRect(o-10,0,4,l)},!0),n=ki(128,128,(a,o,l)=>{a.fillStyle="#c9c3bb",a.fillRect(0,0,o,l),a.strokeStyle="#a9a39b",a.lineWidth=2;for(let c=0;c<=o;c+=32)a.beginPath(),a.moveTo(c,0),a.lineTo(c,l),a.stroke(),a.beginPath(),a.moveTo(0,c),a.lineTo(o,c),a.stroke()},!0);this.block=26,this.road=8;let s=Nt*2+20;for(let a=-3;a<=3;a++){let o=a*this.block;for(let l of[0,1]){let c=i.clone();c.needsUpdate=!0,c.repeat.set(1,s/8);let h=new We(new Vt(this.road,s),new Dt({map:c}));h.rotation.x=-Math.PI/2,l&&(h.rotation.z=Math.PI/2),h.position.set(l?0:o,.02+l*.003,l?o:0),h.receiveShadow=!0,this.scene.add(h)}}this.blocks=[];for(let a=-3;a<3;a++)for(let o=-3;o<3;o++){let l=(a+.5)*this.block,c=(o+.5)*this.block,h=this.block-this.road,u=n.clone();u.needsUpdate=!0,u.repeat.set(h/2,h/2);let d=new We(new ei(h,.12,h),new Dt({map:u}));d.position.set(l,.06,c),d.receiveShadow=!0,this.scene.add(d),this.blocks.push({cx:l,cz:c,s:h})}}facade(e){let t=[["#f4d7c6","#7ab6e8"],["#f7f0e3","#86c5e6"],["#ffd1dc","#8fb8ef"],["#d9e6f2","#5f8fc9"],["#fff1b8","#7fb1e3"],["#e8d4f7","#7aa7e0"],["#cfe8d0","#6fa6d8"],["#e6e1db","#4f7fb8"]][e%8];return ki(128,128,(i,n,s)=>{i.fillStyle=t[0],i.fillRect(0,0,n,s),i.fillStyle="rgba(0,0,0,0.06)";for(let u=0;u<300;u++)i.fillRect(be(0,n),be(0,s),2,2);i.fillStyle="rgba(0,0,0,0.12)",i.fillRect(0,s-6,n,6);let a=30,o=26,l=68,c=66;i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(a-4,o-4,l+8,c+8);let h=i.createLinearGradient(0,o,0,o+c);h.addColorStop(0,t[1]),h.addColorStop(1,"#dff1ff"),i.fillStyle=h,i.fillRect(a,o,l,c),i.fillStyle="rgba(255,255,255,0.55)",i.beginPath(),i.moveTo(a+6,o+c-6),i.lineTo(a+26,o+6),i.lineTo(a+38,o+6),i.lineTo(a+18,o+c-6),i.fill(),i.fillStyle="#ffffff",i.fillRect(a+l/2-2,o,4,c),i.fillRect(a,o+c/2-2,l,4),i.fillStyle="rgba(255,255,255,0.7)",i.fillRect(a-6,o+c+2,l+12,6)},!0)}makeCity(){let e=[];for(let h=0;h<8;h++)e.push(new Dt({map:this.facade(h)}));let i=[14242639,5995953,9333695,5216878,13204282,8028039].map(h=>new Dt({color:h})),n=new Dt({color:12104362}),s=new Dt({color:8016438}),a=[6270554,5021528,7781729].map(h=>new Dt({color:h})),o=3.2,l=(h,u,d,p,m,x,g)=>{let f=new ei(d,m,p),_=f.attributes.uv,v=[[p,m],[p,m],[d,p],[d,p],[d,m],[d,m]];for(let A=0;A<6;A++)for(let O=0;O<4;O++){let U=A*4+O;_.setXY(U,_.getX(U)*Math.max(1,Math.round(v[A][0]/o)),_.getY(U)*Math.max(1,Math.round(v[A][1]/o)))}let y=e[x],w=new We(f,[y,y,n,n,y,y]);w.position.set(h,m/2+.12,u),w.castShadow=!this.low,w.receiveShadow=!0;let E=new Gt;if(E.add(w),g==="house"){let A=new We(new ur(Math.max(d,p)*.78,Math.min(d,p)*.55,4,1),i[Math.random()*i.length|0]);A.rotation.y=Math.PI/4,A.scale.set(d/Math.max(d,p),1,p/Math.max(d,p)),A.position.set(h,m+.12+Math.min(d,p)*.275,u),A.castShadow=!this.low,E.add(A)}else{let A=new We(new ei(d+.3,.4,p+.3),n);A.position.set(h,m+.12,u),E.add(A)}this.scene.add(E),this.buildings.push({grp:E,minX:h-d/2,maxX:h+d/2,minZ:u-p/2,maxZ:u+p/2,h:m,alive:!0,kind:g})},c=(h,u)=>{let d=new Gt,p=new We(new rn(.15,.22,1.6,6),s);p.position.set(h,.8,u),d.add(p);let m=be(1.1,1.6),x=new We(new fr(m,0),a[Math.random()*3|0]);x.position.set(h,1.6+m*.8,u),x.castShadow=!this.low,d.add(x),this.scene.add(d),this.buildings.push({grp:d,minX:h-.35,maxX:h+.35,minZ:u-.35,maxZ:u+.35,h:3,alive:!0,kind:"tree"})};for(let h of this.blocks){let u=h.s,d=h.cx-u/2,p=h.cz-u/2;if(Math.abs(h.cx)<this.block&&Math.abs(h.cz)<this.block&&Math.random()<.6||Math.random()<.12){for(let x=0;x<6;x++)c(be(d+2,d+u-2),be(p+2,p+u-2));continue}let m=[[0,0],[1,0],[0,1],[1,1]];for(let[x,g]of m){if(Math.random()<.18){c(d+(x+.5)*u/2,p+(g+.5)*u/2);continue}let f=u/2-1.6,_=be(f*.6,f),v=be(f*.6,f),y=d+(x+.5)*u/2+be(-.5,.5),w=p+(g+.5)*u/2+be(-.5,.5),E=Math.random()<.35,A=E?be(9,18):be(3.4,7);l(y,w,_,v,A,Math.random()*8|0,E?"tower":"house")}}}makeEdge(){let e=new Dt({color:16119285});for(let[i,n,s,a]of[[0,-Nt-1,Nt*2+2,.3],[0,Nt+1,Nt*2+2,.3],[-Nt-1,0,.3,Nt*2+2],[Nt+1,0,.3,Nt*2+2]]){let o=new We(new ei(s,1.1,a),e);o.position.set(i,.55,n),this.scene.add(o)}let t=new Dt({color:9288586});for(let i=0;i<26;i++){let n=i/26*Math.PI*2,s=be(180,230),a=be(30,60),o=new We(new On(a,12,8),t);o.scale.y=be(.35,.6),o.position.set(Math.cos(n)*s,0,Math.sin(n)*s),this.scene.add(o)}}collideCircle(e,t,i=!0){let n=null;for(let s of this.buildings){if(i&&!s.alive)continue;let a=Math.max(s.minX,Math.min(e.x,s.maxX)),o=Math.max(s.minZ,Math.min(e.z,s.maxZ)),l=e.x-a,c=e.z-o,h=l*l+c*c;if(h<t*t)if(n=s,h>1e-6){let u=Math.sqrt(h),d=(t-u)/u;e.x+=l*d,e.z+=c*d}else{let u=e.x-s.minX,d=s.maxX-e.x,p=e.z-s.minZ,m=s.maxZ-e.z,x=Math.min(u,d,p,m);x===u?e.x=s.minX-t:x===d?e.x=s.maxX+t:x===p?e.z=s.minZ-t:e.z=s.maxZ+t}}return e.x=Math.max(-Nt,Math.min(Nt,e.x)),e.z=Math.max(-Nt,Math.min(Nt,e.z)),n}overlaps(e,t){let i=[];for(let n of this.buildings){if(!n.alive)continue;let s=Math.max(n.minX,Math.min(e.x,n.maxX)),a=Math.max(n.minZ,Math.min(e.z,n.maxZ)),o=e.x-s,l=e.z-a;o*o+l*l<t*t&&i.push(n)}return i}segmentBlocked(e,t,i){for(let s=1;s<=6;s++){let a=s/6,o={x:e.x+(t.x-e.x)*a,z:e.z+(t.z-e.z)*a};for(let l of this.buildings)if(l.alive&&o.x>l.minX-i&&o.x<l.maxX+i&&o.z>l.minZ-i&&o.z<l.maxZ+i)return!0}return!1}destroy(e){if(!e.alive)return;e.alive=!1,e.grp.traverse(n=>{if(n.isMesh){let s=Array.isArray(n.material)?n.material:[n.material];n.material=s.length>1?s.map(a=>{let o=a.clone();return o.transparent=!0,o}):(()=>{let a=s[0].clone();return a.transparent=!0,a})(),n.castShadow=!1}}),e.t=0,this.dissolving.push(e);let t=(e.minX+e.maxX)/2,i=(e.minZ+e.maxZ)/2;this.sparkleBurst(new T(t,e.h*.5,i),Math.max(e.maxX-e.minX,e.maxZ-e.minZ),e.h,60)}makeMagic(){let e=ki(512,512,(i,n,s)=>{i.translate(n/2,s/2),i.strokeStyle="#ff9bd6",i.shadowColor="#ff4fb4",i.shadowBlur=12;let a=(l,c)=>{i.lineWidth=c,i.beginPath(),i.arc(0,0,l,0,Math.PI*2),i.stroke()};a(240,6),a(222,3),a(150,4),a(70,3),i.lineWidth=4,i.beginPath();for(let l=0;l<=6;l++){let c=l*Math.PI*2/6*2-Math.PI/2,h=Math.cos(c)*222,u=Math.sin(c)*222;l?i.lineTo(h,u):i.moveTo(h,u)}i.stroke(),i.font="bold 22px serif",i.fillStyle="#ffd6f0";let o="\u2661\u2726\u263E\u2727\u2662\u2605\u2661\u2726\u263E\u2727\u2662\u2605\u2661\u2726\u263E\u2727\u2662\u2605";for(let l=0;l<18;l++){let c=l/18*Math.PI*2;i.save(),i.rotate(c),i.fillText(o[l],-8,-194),i.restore()}for(let l=0;l<6;l++){let c=l/6*Math.PI*2;i.save(),i.rotate(c),Ks(i,0,-110,16,"rgba(255,120,200,0.9)",null),i.restore()}Ks(i,0,6,40,"rgba(255,90,180,0.85)","#fff")});this.circle=new We(new Vt(1,1),new wi({map:e,transparent:!0,blending:Ws,depthWrite:!1,opacity:0})),this.circle.rotation.x=-Math.PI/2,this.circle.position.y=.15,this.circle.renderOrder=2,this.circle.visible=!1,this.scene.add(this.circle);let t=ki(64,256,(i,n,s)=>{let a=i.createLinearGradient(0,s,0,0);a.addColorStop(0,"rgba(255,120,210,0.9)"),a.addColorStop(1,"rgba(255,120,210,0)"),i.fillStyle=a,i.fillRect(0,0,n,s)});this.pillar=new We(new rn(1,1,1,32,1,!0),new wi({map:t,transparent:!0,blending:Ws,depthWrite:!1,side:Vs,opacity:0})),this.pillar.visible=!1,this.scene.add(this.pillar)}makeParticles(){this.pN=600,this.pi=0;let t=new Qe;this.pPos=new Float32Array(600*3),this.pCol=new Float32Array(600*3),this.pVel=new Float32Array(600*3),this.pLife=new Float32Array(600),this.pSize=new Float32Array(600),t.setAttribute("position",new lt(this.pPos,3)),t.setAttribute("color",new lt(this.pCol,3)),t.setAttribute("size",new lt(this.pSize,1));let i=ki(64,64,(s,a,o)=>{let l=s.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.25,"rgba(255,255,255,0.8)"),l.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=l,s.fillRect(0,0,a,o),s.strokeStyle="rgba(255,255,255,0.9)",s.lineWidth=2,s.beginPath(),s.moveTo(32,2),s.lineTo(32,62),s.moveTo(2,32),s.lineTo(62,32),s.stroke()}),n=new At({uniforms:{map:{value:i},scale:{value:600}},transparent:!0,depthWrite:!1,blending:Ws,vertexColors:!0,vertexShader:"attribute float size; varying vec3 vC; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC * t.rgb, t.a); }"});this.points=new Cs(t,n),this.points.frustumCulled=!1,this.points.renderOrder=20,this.scene.add(this.points);for(let s=0;s<600;s++)this.pPos[s*3+1]=-999}spawn(e,t,i,n,s,a,o,l,c){let h=this.pi;this.pi=(this.pi+1)%this.pN,this.pPos.set([e,t,i],h*3),this.pVel.set([n,s,a],h*3),this.pLife[h]=o,this.pSize[h]=l,this.pCol.set(c,h*3)}sparkleBurst(e,t,i,n){for(let s=0;s<n;s++){let a=Math.random()<.5?[1,.55,.85]:Math.random()<.5?[.8,.6,1]:[1,1,1];this.spawn(e.x+be(-t/2,t/2),be(.2,i),e.z+be(-t/2,t/2),be(-.6,.6),be(.5,2.2),be(-.6,.6),be(.6,1.3),be(.15,.4),a)}}magicAura(e,t,i){for(let n=0;n<3;n++){let s=Math.random()*Math.PI*2,a=t*be(.6,1.3),o=Math.random()<.5?[1,.45,.85]:[.85,.55,1];this.spawn(e.x+Math.cos(s)*a,be(0,i*.6),e.z+Math.sin(s)*a,-Math.cos(s)*.3,be(1.2,3.2),-Math.sin(s)*.3,be(.8,1.5),be(.12,.32),o)}}setCircle(e,t,i,n){this.circle.visible=this.pillar.visible=i>.01,this.circle.visible&&(this.circle.position.set(e.x,.15,e.z),this.circle.scale.set(t*2,t*2,1),this.circle.rotation.z=n*.8,this.circle.material.opacity=i,this.pillar.position.set(e.x,t*1.2,e.z),this.pillar.scale.set(t*.9,t*2.4,t*.9),this.pillar.material.opacity=i*.22)}update(e){for(let n=this.dissolving.length-1;n>=0;n--){let s=this.dissolving[n];s.t+=e;let a=Math.min(1,s.t/.85),o=a*a;s.grp.scale.set(1+.12*Math.sin(a*Math.PI),Math.max(.001,1-o),1+.12*Math.sin(a*Math.PI));let l=(s.minX+s.maxX)/2,c=(s.minZ+s.maxZ)/2;s.grp.position.set(l*(1-s.grp.scale.x),0,c*(1-s.grp.scale.z)),s.grp.traverse(h=>{h.isMesh&&(Array.isArray(h.material)?h.material:[h.material]).forEach(d=>{d.opacity=1-a,d.emissive&&d.emissive.setRGB(.6*(1-a)*a*4,.2*a,.5*a)})}),a>=1&&(this.scene.remove(s.grp),s.grp.traverse(h=>{h.isMesh&&h.geometry.dispose()}),this.dissolving.splice(n,1))}let t=this.pPos,i=this.pVel;for(let n=0;n<this.pN;n++)if(!(this.pLife[n]<=0)){if(this.pLife[n]-=e,this.pLife[n]<=0){t[n*3+1]=-999;continue}t[n*3]+=i[n*3]*e,t[n*3+1]+=i[n*3+1]*e,t[n*3+2]+=i[n*3+2]*e,i[n*3+1]+=.2*e,this.pSize[n]*=.995}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.size.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}};var $s=class{constructor(){this.ctx=null,this.voices={},this.manifest=null,this.muted=!1,this.cur=null,this.curPri=0,this.lastIdx={},this.level=0,this.buf=null,this.bgmOn=!1,this.bgmTempo=112,this.nextNote=0,this.bstep=0}create(){if(this.ctx)return this.ctx;let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;try{this.ctx=new e}catch(n){return console.warn("AudioContext failed",n),null}let t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.muted?0:1,this.master.connect(t.destination),this.vbus=t.createGain(),this.vbus.gain.value=1,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=3,this.vbus.connect(this.comp),this.comp.connect(this.master),this.analyser=t.createAnalyser(),this.analyser.fftSize=512,this.vbus.connect(this.analyser),this.buf=new Float32Array(this.analyser.fftSize),this.sfx=t.createGain(),this.sfx.gain.value=.8,this.sfx.connect(this.master),this.music=t.createGain(),this.music.gain.value=.1,this.music.connect(this.master),this.noiseBuf=t.createBuffer(1,t.sampleRate,t.sampleRate);let i=this.noiseBuf.getChannelData(0);for(let n=0;n<i.length;n++)i[n]=Math.random()*2-1;return t}unlock(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let e=this.create();if(!e)return Promise.resolve();try{let i=e.createBuffer(1,1,22050),n=e.createBufferSource();n.buffer=i,n.connect(e.destination),n.start(0)}catch{}let t=Promise.resolve();try{e.state!=="running"&&(t=Promise.resolve(e.resume()).catch(()=>{}))}catch{}return this.decodeAll(),Promise.race([t,new Promise(i=>setTimeout(i,300))])}async init(){return this.unlock()}prefetchVoices(e="assets/voice/"){if(this._pref)return this._pref;this.raw={};let t=(i,n)=>Promise.race([fetch(i),new Promise((s,a)=>setTimeout(()=>a(new Error("timeout "+i)),n))]);return this._pref=t(zn(e+"voices.json"),15e3).then(i=>i.json()).then(i=>{this.manifest=i;let n=[];return Object.keys(i).forEach(s=>{this.voices[s]=this.voices[s]||[],i[s].forEach((a,o)=>{n.push(t(zn(e+a.f),3e4).then(l=>l.arrayBuffer()).then(l=>{this.raw[s+"/"+o]={ab:l,cat:s,i:o,text:a.t},this.ctx&&this.decodeAll()}).catch(l=>console.warn("voice",a.f,l)))})}),Promise.all(n)}).catch(i=>console.warn("voices unavailable",i)),this._pref}decodeOne(e){let t=this.ctx;return new Promise(i=>{let n=!1,s=a=>{n||(n=!0,i(a||null))};setTimeout(()=>s(null),1e4);try{let a=t.decodeAudioData(e,o=>s(o),()=>s(null));a&&a.then&&a.then(s,()=>s(null))}catch{s(null)}})}decodeAll(){!this.ctx||!this.raw||Object.keys(this.raw).forEach(e=>{let t=this.raw[e];delete this.raw[e],this.decodeOne(t.ab).then(i=>{if(!i)return;let n=this.voices[t.cat]||(this.voices[t.cat]=[]);n[t.i]={buf:i,text:t.text}})})}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:1,this.ctx.currentTime,.05)}speaking(){return!!this.cur}say(e,t=1,i={}){if(!this.ctx||!this.voices[e]||!this.voices[e].length||this.cur&&t<=this.curPri&&!i.force)return null;let n=this.voices[e],s=i.index??Math.floor(Math.random()*n.length);i.index==null&&n.length>1&&s===this.lastIdx[e]&&(s=(s+1)%n.length),this.lastIdx[e]=s;let a=n[s];if(!a){let h=[];for(let u=0;u<n.length;u++)n[u]&&h.push(u);if(!h.length)return null;s=h[Math.floor(Math.random()*h.length)],a=n[s]}this.stopVoice();let o=this.ctx.createBufferSource();o.buffer=a.buf;let l=this.ctx.createGain();l.gain.value=i.vol??1,o.connect(l),l.connect(this.vbus),o.start();let c={src:o,text:a.text,cat:e,dur:a.buf.duration};return this.cur=c,this.curPri=t,o.onended=()=>{this.cur===c&&(this.cur=null,this.curPri=0)},this.onLine&&this.onLine(a.text,e,a.buf.duration),c}stopVoice(){if(this.cur){try{this.cur.src.stop()}catch{}this.cur=null,this.curPri=0}}voiceLevel(){if(!this.analyser||!this.cur)return this.level*=.6,this.level;this.analyser.getFloatTimeDomainData(this.buf);let e=0;for(let n=0;n<this.buf.length;n++)e+=this.buf[n]*this.buf[n];let t=Math.sqrt(e/this.buf.length),i=Math.min(1,Math.max(0,(t-.012)*9));return this.level=i,i}env(e,t,i,n,s){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(n,t+i),e.gain.exponentialRampToValueAtTime(1e-4,t+i+s)}tone(e,t,i,n,s,a=0,o=this.sfx){if(!this.ctx||!this.ctx)return;let l=this.ctx,c=l.currentTime+a,h=l.createOscillator();h.type=e,h.frequency.setValueAtTime(t,c),h.frequency.exponentialRampToValueAtTime(Math.max(20,i),c+n);let u=l.createGain();this.env(u,c,.008,s,n),h.connect(u),u.connect(o),h.start(c),h.stop(c+n+.05)}noise(e,t,i,n=1,s="bandpass",a=0,o=null){if(!this.ctx||!this.ctx)return;let l=this.ctx,c=l.currentTime+a,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(i,c),u.Q.value=n,o&&u.frequency.exponentialRampToValueAtTime(o,c+e);let d=l.createGain();this.env(d,c,.01,t,e),h.connect(u),u.connect(d),d.connect(this.sfx),h.start(c,Math.random()*.5),h.stop(c+e+.05)}step(e,t=1){e=Math.min(1,e),!(e<.02)&&(this.tone("sine",85/Math.sqrt(t),38,.28,.55*e),this.noise(.12,.25*e,300,.8,"lowpass"))}slap(){this.noise(.07,.6,1800,.9),this.tone("sine",330+Math.random()*60,150,.22,.35,.01)}boing(e=.5){this.tone("sine",180,420,.12,e),this.tone("sine",420,160,.25,e*.8,.12)}catchSfx(){this.tone("sine",260,110,.45,.5),this.noise(.3,.3,500,.7,"lowpass"),this.tone("triangle",880,1320,.15,.15,.05)}escape(){this.noise(.35,.45,600,.6,"bandpass",0,3e3),this.tone("triangle",520,1040,.18,.25),this.tone("triangle",780,1560,.2,.2,.08)}magic(e=2.2){if(!this.ctx||!this.ctx)return;let t=[0,4,7,11,12,16,19,23,24];for(let i=0;i<18;i++){let n=t[i%t.length]+(i>=9?12:0);this.tone(i%2?"triangle":"sine",523.25*Math.pow(2,n/12),523.25*Math.pow(2,n/12)*1.01,.35,.09,i*e/20)}this.noise(e,.12,2e3,2,"bandpass",0,8e3)}puff(e=0){this.tone("sine",140+e*30,300+e*60,.22,.45),this.noise(.2,.15,400,1,"lowpass")}poof(){this.noise(.6,.5,260,.7,"lowpass",0,90),this.tone("sine",1200,2400,.25,.08,.05),this.tone("sine",1600,3200,.25,.06,.15)}click(){this.tone("triangle",900,1300,.07,.15)}heartbeat(e){this.tone("sine",70,45,.12,.5*e),this.tone("sine",65,40,.12,.38*e,.18)}startBGM(){this.ctx&&(this.bgmOn=!0,this.nextNote=this.ctx.currentTime+.1,this.bstep=0)}stopBGM(){this.bgmOn=!1}tickBGM(e=0){if(!this.ctx||!this.bgmOn||!this.ctx)return;let t=this.ctx,i=60/(this.bgmTempo+e*24)/2,n=[12,-1,15,12,19,-1,17,15,12,-1,10,12,15,-1,14,-1,12,-1,15,17,19,-1,22,19,17,-1,15,14,12,-1,-1,-1],s=[0,0,7,7,5,5,3,7];for(;this.nextNote<t.currentTime+.25;){let a=this.nextNote,o=this.bstep%32,l=n[o],c=220*Math.pow(2,-12/12);l>=0&&this.note("square",440*Math.pow(2,(l-12)/12),a,i*.9,.18),o%2===0&&this.note("triangle",c*Math.pow(2,s[o/4|0]/12),a,i*1.6,.5),o%4===0&&this.kick(a),o%4===2?this.hat(a,.25):this.hat(a,.08),this.nextNote+=i,this.bstep++}}note(e,t,i,n,s){if(!this.ctx)return;let a=this.ctx,o=a.createOscillator();o.type=e,o.frequency.value=t;let l=a.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(s,i+.01),l.gain.exponentialRampToValueAtTime(1e-4,i+n);let c=a.createBiquadFilter();c.type="lowpass",c.frequency.value=2400,o.connect(c),c.connect(l),l.connect(this.music),o.start(i),o.stop(i+n+.02)}kick(e){if(!this.ctx)return;let t=this.ctx,i=t.createOscillator();i.frequency.setValueAtTime(150,e),i.frequency.exponentialRampToValueAtTime(45,e+.12);let n=t.createGain();n.gain.setValueAtTime(.7,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.15),i.connect(n),n.connect(this.music),i.start(e),i.stop(e+.2)}hat(e,t){if(!this.ctx)return;let i=this.ctx,n=i.createBufferSource();n.buffer=this.noiseBuf;let s=i.createBiquadFilter();s.type="highpass",s.frequency.value=7e3;let a=i.createGain();a.gain.setValueAtTime(t*.5,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.04),n.connect(s),s.connect(a),a.connect(this.music),n.start(e,Math.random()),n.stop(e+.05)}};var Se=r=>document.getElementById(r),Qs=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,_r=Qs,Lh=.95,Ih=5.4,Hn=new ws({canvas:Se("gl"),antialias:!0,powerPreference:"high-performance"});Hn.setPixelRatio(Math.min(devicePixelRatio,_r?1.6:2));Hn.shadowMap.enabled=!0;Hn.shadowMap.type=Ml;var Xt=new Es;Xt.fog=new Ts(14083314,38,170);var Pt=new Tt(72,1,.05,900);Xt.add(new ks(15135487,8822896,1.9));var ii=new Hs(16773856,2.3);ii.position.set(30,60,20);ii.castShadow=!0;ii.shadow.mapSize.set(_r?1024:2048,_r?1024:2048);Object.assign(ii.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:160});ii.shadow.bias=-8e-4;Xt.add(ii);Xt.add(ii.target);var ut=new vr(Xt,_r),Ie=new $s,oe=null;function Nh(){let r=innerWidth,e=innerHeight;Hn.setSize(r,e,!1),Pt.aspect=r/e,Pt.fov=r<e?86:70,Pt.updateProjectionMatrix();let t=Se("grabCanvas");t.width=Math.round(r*Math.min(devicePixelRatio,2)),t.height=Math.round(e*Math.min(devicePixelRatio,2))}addEventListener("resize",Nh);Nh();var _e={pos:new T,yaw:0,pitch:.12,vel:new T,bob:0,inv:0},Y={state:"title",time:0,stage:0,irr:0,captures:0,escapes:0,shake:0,lineT:4,destroyCD:0,irrSaid:!1,stun:0,knock:new T,cast:null,grab:null,beatT:0,stuckT:0,lastPos:new T,avoidSide:1,paused:!1,bubbleT:0,best:+(localStorage.getItem("succ_best")||0)},Ep=r=>1+.45*r,Ct={mx:0,my:0,lx:0,ly:0,keys:{}};function Oh(r,e,t){let i=Se(r),n=Se(e),s=n.querySelector(".knob"),a=null,o=0,l=0,c=()=>{n.style.left=t==="L"?"96px":"calc(100% - 96px)",n.style.top="calc(100% - 112px)",s.style.transform=""};c(),addEventListener("resize",c);let h=56,u=(p,m)=>{let x=Math.hypot(p,m),g=x>h?h/x:1;p*=g,m*=g,s.style.transform=`translate(${p}px,${m}px)`;let f=p/h,_=m/h;t==="L"?(Ct.mx=f,Ct.my=_):(Ct.lx=f,Ct.ly=_)};i.addEventListener("pointerdown",p=>{if(a!==null)return;a=p.pointerId;try{i.setPointerCapture(a)}catch{}let m=i.getBoundingClientRect();o=p.clientX-m.left,l=p.clientY-m.top,n.style.left=o+"px",n.style.top=l+"px",u(0,0),p.preventDefault()}),i.addEventListener("pointermove",p=>{if(p.pointerId!==a)return;let m=i.getBoundingClientRect();u(p.clientX-m.left-o,p.clientY-m.top-l)});let d=p=>{p.pointerId===a&&(a=null,u(0,0),c())};i.addEventListener("pointerup",d),i.addEventListener("pointercancel",d)}Oh("zoneL","stickL","L");Oh("zoneR","stickR","R");addEventListener("keydown",r=>{Ct.keys[r.code]=!0,r.code==="Space"&&(r.preventDefault(),Y.state==="grab"&&kl(innerWidth/2+(Math.random()-.5)*200,innerHeight*.45+(Math.random()-.5)*160)),(r.code==="Escape"||r.code==="KeyP")&&Bl()});addEventListener("keyup",r=>{Ct.keys[r.code]=!1});var kn=null;Se("gl").addEventListener("mousedown",r=>{kn={x:r.clientX,y:r.clientY}});addEventListener("mousemove",r=>{!kn||Y.state!=="play"||(_e.yaw-=(r.clientX-kn.x)*.006,_e.pitch=Fh(_e.pitch-(r.clientY-kn.y)*.004),kn={x:r.clientX,y:r.clientY})});addEventListener("mouseup",()=>{kn=null});var Fh=r=>Math.max(-.55,Math.min(1,r));document.addEventListener("gesturestart",r=>r.preventDefault());addEventListener("contextmenu",r=>r.preventDefault());try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}document.addEventListener("touchmove",r=>{(r.touches.length>1||Y.state!=="title")&&r.preventDefault()},{passive:!1});function et(r,e){Se(r).classList.toggle("hidden",!e)}function ea(r){let e=Se("toast");e.textContent=r,e.classList.remove("hidden"),e.style.animation="none",e.offsetWidth,e.style.animation="",clearTimeout(ea.h),ea.h=setTimeout(()=>e.classList.add("hidden"),1800)}Ie.onLine=(r,e,t)=>{let i=Se("bubble");Se("bubbleText").textContent=r,i.classList.toggle("angry",["grow","irritate","destroy","escape"].includes(e)),i.classList.remove("hidden"),i.style.animation="none",i.offsetWidth,i.style.animation="",Y.bubbleT=t+.8};var Ap=r=>{let e=Math.floor(r/60),t=r-e*60;return`${String(e).padStart(2,"0")}:${t.toFixed(1).padStart(4,"0")}`};function Ol(){return Y.best>0?`\u3055\u3044\u3053\u3046\u8A18\u9332\uFF1A${Y.best.toFixed(1)} \u79D2`:""}Se("best").textContent=Ol();function Bh(r){let e=Se("loading");e.innerHTML="",e.appendChild(document.createTextNode("\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\uFF1A"+r+" "));let t=document.createElement("a");t.href=location.pathname+"?r="+Date.now(),t.textContent="\u518D\u8AAD\u307F\u8FBC\u307F",t.style.color="#ff9ccf",e.appendChild(t)}window.__loadFail=Bh;(async()=>{try{Se("loading").textContent="\u3088\u307F\u3053\u307F\u4E2D\u2026",Ie.prefetchVoices("assets/voice/");let r=new Promise((e,t)=>setTimeout(()=>t(new Error("\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8")),45e3));oe=await Promise.race([Js.load("assets/img/"),r]),oe.setFog(Xt.fog),Xt.add(oe.group),oe.group.position.set(0,0,-30),oe.onStep=(e,t)=>{let i=oe.group.position.distanceTo(_e.pos),n=Math.min(1,(.25+.15*t)*18/(i+6));(Y.state==="play"||Y.state==="grab")&&(Ie.step(n,t),t>1.6&&(Y.shake=Math.max(Y.shake,Math.min(.12,.02*t*14/(i+8)))))},Se("loading").textContent="",Se("startBtn").disabled=!1,window.__booted=!0}catch(r){console.error(r),Bh(r&&r.message||String(r))}})();Se("startBtn").disabled=!0;function Rp(){if(ut.buildings.some(r=>!r.alive)){let r=new Set([oe.group,ii,ii.target,Pt]);Xt.children.filter(e=>!r.has(e)&&!e.isLight).forEach(e=>Xt.remove(e)),ut=new vr(Xt,_r)}}async function Fl(){if(oe){try{await Ie.unlock()}catch{}Ie.click(),Rp(),Object.assign(Y,{state:"play",time:0,stage:0,irr:0,captures:0,escapes:0,shake:0,lineT:5,destroyCD:0,irrSaid:!1,stun:0,cast:null,grab:null,stuckT:0}),Y.knock.set(0,0,0),_e.pos.set(0,0,4),_e.yaw=0,_e.pitch=.16,_e.inv=2,oe.group.position.set(Ot(-2,2),0,-26),oe.G=oe.Gt=1,oe.Gv=0,oe.anger=0,oe.setMood("tease"),et("title",!1),et("over",!1),et("pause",!1),et("hud",!0),et("sticks",Qs),et("grab",!1),Ie.startBGM(),setTimeout(()=>{Y.state==="play"&&Ie.say("chase",2,{index:2})},700),Qs&&document.documentElement.requestFullscreen&&!document.fullscreenElement&&document.documentElement.requestFullscreen().catch(()=>{})}}var Ot=(r,e)=>r+Math.random()*(e-r);Se("startBtn").addEventListener("click",Fl);Se("againBtn").addEventListener("click",Fl);Se("toTitleBtn").addEventListener("click",()=>{et("over",!1),et("title",!0),Y.state="title",Se("best").textContent=Ol()});Se("btnMute").addEventListener("click",()=>{Ie.setMuted(!Ie.muted),Se("btnMute").textContent=Ie.muted?"\u{1F507}":"\u{1F50A}"});Se("btnPause").addEventListener("click",Bl);Se("resumeBtn").addEventListener("click",Bl);Se("quitBtn").addEventListener("click",()=>{Y.paused=!1,et("pause",!1),et("hud",!1),et("sticks",!1),et("grab",!1),Y.state="title",et("title",!0),Ie.stopBGM(),Ie.stopVoice()});function Bl(){Y.state!=="play"&&Y.state!=="grab"||(Y.paused=!Y.paused,et("pause",Y.paused),Ie.ctx&&(Y.paused?Ie.ctx.suspend():Ie.ctx.resume()))}function zh(){Y.cast={t:0,puffs:0,from:oe.Gt,to:Ep(Y.stage+1)},Y.stage++,oe.setMood("cast"),oe.wingBoost=1,Ie.say("grow",3,{force:!0}),Ie.magic(2.6)}function Cp(r){let e=Y.cast;e.t+=r;let t=oe.group.position,i=oe.radius;ut.setCircle(t,i*1.7+1,Math.min(1,e.t/.4)*(e.t>2.9?Math.max(0,1-(e.t-2.9)/.5):1),performance.now()/1e3),ut.magicAura(t,i*1.2,oe.height),oe.wingBoost=Math.max(oe.wingBoost,.8),oe.u.uTintAmt.value=.16+.12*Math.sin(e.t*18);let n=[.9,1.5,2.1];e.puffs<3&&e.t>=n[e.puffs]&&(e.puffs++,oe.setGrowth(e.from+(e.to-e.from)*e.puffs/3),oe.impulse(-140,0,.5),oe.ripple(1),Ie.puff(e.puffs),Y.shake=Math.max(Y.shake,.08),ut.sparkleBurst(new T(t.x,oe.bellyWorldY(),t.z),i*2,1.5,24)),e.t>1&&e.t<2.6&&oe.setMood("angry"),e.t>=3.3&&(Y.cast=null,Y.irr=0,Y.irrSaid=!1,oe.u.uTintAmt.value=0,ut.setCircle(t,1,0,0),oe.setMood("tease"),ea(`\u304A\u8179\u304C\u5DE8\u5927\u5316\uFF01 Lv.${Y.stage+1}`))}var kh=[],zl=r=>{kh.push(`${Y.time.toFixed(2)} ${r}`)};function Hh(){zl("grab inv="+_e.inv.toFixed(2)+" stun="+Y.stun.toFixed(2)),Y.state="grab",Y.captures++;let r=Math.min(12,8+Math.floor((Y.captures-1)/2));Y.grab={t:0,taps:0,need:r,limit:Math.max(3.6,7.5-.45*(Y.captures-1)),sq:0,sv:0,zoom:0},oe.setMood("happy"),Ie.stopVoice(),Ie.say("catch",3,{force:!0}),Ie.catchSfx(),oe.impulse(-90,0,.4),oe.ripple(.8),Se("tapCount").textContent=`0 / ${r}`,Se("grabFill").style.width="0%",et("grab",!0),et("sticks",!1),Se("grab").style.opacity=0,Ct.mx=Ct.my=Ct.lx=Ct.ly=0;let e=oe.group.position;for(let t=0;t<20;t++)ut.spawn(e.x+Ot(-1,1),oe.headWorldY()+Ot(-.3,.3),e.z+Ot(-1,1),Ot(-.5,.5),Ot(.5,1.4),Ot(-.5,.5),1.4,.5,[1,.4,.7])}function kl(r,e){let t=Y.grab;if(!t||t.done)return;zl("tap"),t.taps++,t.sv+=9+Math.random()*4,t.lastTap={x:r,y:e,t:0},Ie.slap(),oe.tapFace=.4,oe.impulse(60,(Math.random()-.5)*80,.35),oe.ripple(.6),!Ie.speaking()&&Math.random()<.6&&Ie.say("tap",2);let i=Se("fxLayer"),n=document.createElement("div");n.className="slap",n.textContent=["\u307A\u3061\u3063","\u307D\u3088\u3093","\u307A\u3057\u3063","\u3077\u306B\u3063","\u307D\u306B\u3085"][Math.random()*5|0],n.style.left=r+"px",n.style.top=e+"px",i.appendChild(n),setTimeout(()=>n.remove(),520);let s=document.createElement("div");s.className="ring",s.style.left=r+"px",s.style.top=e+"px",i.appendChild(s),setTimeout(()=>s.remove(),460),Se("tapCount").textContent=`${Math.min(t.taps,t.need)} / ${t.need}`,Se("grabFill").style.width=Math.min(100,t.taps/t.need*100)+"%",Se("tapBtn").classList.add("hit"),setTimeout(()=>Se("tapBtn").classList.remove("hit"),70),navigator.vibrate&&navigator.vibrate(15),t.taps>=t.need&&Pp()}Se("grab").addEventListener("pointerdown",r=>{Y.state==="grab"&&(r.preventDefault(),kl(r.clientX,r.clientY))});function Pp(){zl("escape");let r=Y.grab;r.done=!0,Y.escapes++,Ie.escape(),Ie.stopVoice(),setTimeout(()=>Ie.say("escape",3,{force:!0}),250);let e=oe.group.position,t=new T().subVectors(_e.pos,e).setY(0);t.lengthSq()<1e-4&&t.set(0,0,1),t.normalize(),_e.pos.copy(e).addScaledVector(t,oe.radius+1.6),ut.collideCircle(_e.pos,.35),_e.yaw=Math.atan2(-(e.x-_e.pos.x),-(e.z-_e.pos.z))+Math.PI,_e.pitch=.1,Y.knock.copy(t).multiplyScalar(-10),Y.stun=1.6,oe.setMood("pout"),oe.impulse(-160,0,.6),oe.ripple(1),Y.irr=Math.min(.95,Y.irr+.25),_e.inv=2.6,Y.state="play",Y.grab=null,Se("grab").style.opacity=0,setTimeout(()=>{et("grab",!1),et("sticks",Qs&&Y.state==="play")},180),ea("\u8131\u51FA\uFF01")}function Lp(){Y.state="over",Ie.stopBGM(),Ie.stopVoice(),setTimeout(()=>Ie.say("over",3,{force:!0}),300);let r=Y.time,e=r>Y.best;e&&(Y.best=r,localStorage.setItem("succ_best",String(r))),Se("rTime").textContent=r.toFixed(1),Se("rStage").textContent="Lv."+(Y.stage+1),Se("rEsc").textContent=Y.escapes,Se("rBest").textContent=e?"\u2605 \u65B0\u8A18\u9332\uFF01 \u2605":Ol(),et("grab",!1),et("sticks",!1),et("hud",!1),setTimeout(()=>et("over",!0),700)}var ta=new T,Gh=new T;function Ip(r){let e=Ct.mx,t=Ct.my,i=Ct.lx,n=Ct.ly,s=Ct.keys;(s.KeyW||s.ArrowUp)&&(t-=1),(s.KeyS||s.ArrowDown)&&(t+=1),s.KeyA&&(e-=1),s.KeyD&&(e+=1),(s.ArrowLeft||s.KeyQ)&&(i-=.8),(s.ArrowRight||s.KeyE)&&(i+=.8);let a=Math.hypot(e,t);a>1&&(e/=a,t/=a);let o=m=>Math.sign(m)*Math.pow(Math.abs(m),1.6);_e.yaw-=o(i)*4.6*r,_e.pitch=Fh(_e.pitch-o(n)*2*r);let l=-Math.sin(_e.yaw),c=-Math.cos(_e.yaw),h=Math.cos(_e.yaw),u=-Math.sin(_e.yaw),d=ta.set((l*-t+h*e)*Ih,0,(c*-t+u*e)*Ih);if(_e.vel.lerp(d,1-Math.exp(-r*12)),_e.pos.addScaledVector(_e.vel,r),ut.collideCircle(_e.pos,.35),oe){let m=Gh.subVectors(_e.pos,oe.group.position).setY(0),x=m.length(),g=oe.radius*.9;x<g&&x>.001&&_e.pos.addScaledVector(m,(g-x)/x)}let p=_e.vel.length();_e.bob+=r*p*2.2,_e.inv=Math.max(0,_e.inv-r)}function Up(r){let e=oe.group.position,t=ta.subVectors(_e.pos,e).setY(0),i=t.length(),n=oe.radius;if(oe.anger=Math.min(1,Y.irr*1.1),Y.cast)return oe.speed=0,Cp(r),i;if(Y.stun>0)return Y.stun-=r,e.addScaledVector(Y.knock,r),Y.knock.multiplyScalar(Math.exp(-r*5)),ut.collideCircle(e,Math.min(n*.7,1.2)),oe.speed=Math.min(2,Y.knock.length()),Y.stun<=0&&oe.setMood("tease"),i;if(Y.irr+=r/(i>22?14:19),!Y.irrSaid&&Y.irr>.55&&(Y.irrSaid=!0,Ie.say("irritate",2)),Y.irr>=1)return zh(),i;let s=t.clone().normalize(),a=Math.min(4.6,2.75+.3*Y.stage)*(i<3?.85:1),o=Y.stage>=1;if(!o){let h=u=>ut.segmentBlocked(e,{x:e.x+u.x*4.5,z:e.z+u.z*4.5},Math.min(n*.7,1));if(h(s)){let u=!1;for(let d of[.45,.9,1.3,1.75,2.3]){for(let p of[Y.avoidSide,-Y.avoidSide]){let m=Math.cos(d*p),x=Math.sin(d*p),g=new T(s.x*m-s.z*x,0,s.x*x+s.z*m);if(!h(g)){s.copy(g),Y.avoidSide=p,u=!0;break}}if(u)break}}}e.addScaledVector(s,a*r),oe.speed=a;let l=ut.overlaps(e,n*(o?.85:.6));if(l.length&&(o?(l.forEach(c=>ut.destroy(c)),Ie.poof(),Y.shake=Math.max(Y.shake,.05),oe.impulse(-50,(Math.random()-.5)*120,.25),Y.destroyCD<=0&&(Ie.say("destroy",2),Y.destroyCD=7,oe.setMood("angry"),setTimeout(()=>{oe.mood==="angry"&&!Y.cast&&oe.setMood("tease")},1400))):ut.collideCircle(e,Math.min(n*.6,1))),Y.stuckT+=r,Y.stuckT>1.5){if(e.distanceTo(Y.lastPos)<.8&&!o){let c=ut.overlaps(e,n*1.3);c.forEach(h=>ut.destroy(h)),c.length&&(Ie.poof(),Ie.say("destroy",2,{index:0}))}Y.stuckT=0,Y.lastPos.copy(e)}return Y.destroyCD-=r,Y.lineT-=r,Y.lineT<=0&&i<40&&(Ie.say("chase",1,{vol:Math.max(.45,Math.min(1,14/(i+4)))}),Y.lineT=Ot(6,10)),i<n+.55&&_e.inv<=0&&Hh(),i}var Rt=Se("grabCanvas").getContext("2d"),Uh=Se("cutinCanvas").getContext("2d");function Dp(r){let e=Y.grab;if(!e)return;e.t+=r,e.sv+=(-e.sq*120-e.sv*7)*r,e.sq+=e.sv*r,e.zoom+=(1-e.zoom)*(1-Math.exp(-r*6));let t=Se("grab");t.style.opacity=Math.min(1,e.t/.35);let i=Se("grabCanvas"),n=i.width,s=i.height,a=oe.imgs.belly,o=415,l=360,c=n/s,h=470,u=h/c;u>600&&(u=600,h=u*c);let d=1+.015*Math.sin(e.t*2.4),m=(1.35-.35*e.zoom+.06*Math.sin(e.t*5)*Math.exp(-e.t*1.5))*d;h/=m,u/=m,Rt.fillStyle="#c8605e",Rt.fillRect(0,0,n,s);let x=60;for(let v=0;v<x;v++){let y=v/x,w=(v+1)/x,A=((y+w)/2-.5)*2,O=1+e.sq*.06*Math.cos(A*1.4)+.012*Math.sin(e.t*3+A*3),U=e.sq*.025*Math.sin(A*3.1+e.t*9)*s,B=h/O,H=o-B/2,k=l-u/2+y*u;Rt.drawImage(a,H,k,B,u/x+.6,0,y*s+U,n,s/x+1.5)}let g=Rt.createRadialGradient(n/2,s/2,Math.min(n,s)*.2,n/2,s/2,Math.max(n,s)*.75);g.addColorStop(0,"rgba(255,200,210,0.0)"),g.addColorStop(.7,"rgba(120,20,50,0.25)"),g.addColorStop(1,"rgba(60,0,30,0.75)"),Rt.fillStyle=g,Rt.fillRect(0,0,n,s);let f=n*(.3+.05*Math.sin(e.t*1.3));g=Rt.createRadialGradient(f,s*.3,0,f,s*.3,n*.35),g.addColorStop(0,"rgba(255,240,245,0.28)"),g.addColorStop(1,"rgba(255,240,245,0)"),Rt.fillStyle=g,Rt.fillRect(0,0,n,s),Rt.save();for(let v=0;v<7;v++){let y=(e.t*.25+v/7)%1,w=n*(.12+.76*(v*.37%1))+Math.sin(e.t*2+v)*20,E=s*(1-y);Rt.globalAlpha=Math.sin(y*Math.PI)*.7,Rt.fillStyle="#ff7eb6",Rt.font=`${Math.round(s*.05)}px sans-serif`,Rt.fillText("\u2661",w,E)}Rt.restore();let _=Math.max(0,1-e.t/e.limit);Se("grabTimerFill").style.width=_*100+"%",Uh.clearRect(0,0,248,212),Uh.drawImage(oe.face.canvas,0,0,248,212),e.t>e.limit&&!e.done&&(e.done=!0,Lp())}var xt=Se("radar").getContext("2d");function Np(r){xt.clearRect(0,0,120,120),xt.strokeStyle="rgba(255,170,215,0.35)",xt.lineWidth=1;for(let c of[20,40])xt.beginPath(),xt.arc(60,60,c,0,Math.PI*2),xt.stroke();if(xt.fillStyle="#fff",xt.beginPath(),xt.moveTo(60,53),xt.lineTo(55,65),xt.lineTo(65,65),xt.fill(),!oe)return;let t=ta.subVectors(oe.group.position,_e.pos),i=Math.cos(_e.yaw),n=Math.sin(_e.yaw),s=t.x*i-t.z*n,a=t.x*n+t.z*i,o=50/45;s*=o,a*=o;let l=Math.hypot(s,a);l>52&&(s*=52/l,a*=52/l),xt.font="bold 18px sans-serif",xt.textAlign="center",xt.textBaseline="middle",xt.fillStyle=r<10?"#ff2d6f":"#ff7eb6",xt.fillText("\u2665",60+s,60+a)}var Nl=0;function Op(r,e){if(Nl+=r,Nl<.05)return;Nl=0,Se("time").textContent=Ap(Y.time),Se("stage").textContent="Lv."+(Y.stage+1),Se("irrFill").style.width=Math.min(100,Y.irr*100)+"%",Se("irr").classList.toggle("hot",Y.irr>.75||!!Y.cast);let t=Math.max(0,1-(e-oe.radius)/7);Se("vignette").style.opacity=(t*.9).toFixed(2),et("inv",_e.inv>0&&Y.state==="play"&&Y.time>2.5),Np(e)}var Fp=new Gs,Dh=0;function Vh(){requestAnimationFrame(Vh);let r=Math.min(.05,Fp.getDelta());if(Y.paused&&(r=0),!oe){Hn.render(Xt,Pt);return}let e=oe.group.position.distanceTo(_e.pos);if(Y.state==="play"&&r>0){Y.time+=r,Ip(r),e=Up(r),Y.beatT-=r;let t=e-oe.radius;t<6&&Y.beatT<=0&&(Ie.heartbeat(Math.min(1,(6-t)/6)),Y.beatT=.45+t*.08),Ie.tickBGM(Math.min(1,Y.stage/6))}else if(Y.state==="grab"&&r>0)Y.time+=r,oe.speed=0,Dp(r),Math.random()<r*1.5&&oe.impulse(30,0,.12),Ie.tickBGM(Math.min(1,Y.stage/6));else if(Y.state==="title"||Y.state==="over"){Dh+=r,oe.speed=1.3,oe.setMood(Y.state==="over"?"happy":"tease");let t=Math.sin(Dh*.25)*.35;_e.pos.set(Math.sin(t)*8.5,0,Math.cos(t)*8.5),oe.group.position.set(0,0,0),_e.yaw=Math.atan2(_e.pos.x,_e.pos.z),_e.pitch=.3}if(Y.shake*=Math.exp(-r*6),Y.state==="grab"){let t=oe.group.position,i=Gh.subVectors(_e.pos,t).setY(0).normalize(),n=ta.copy(t).addScaledVector(i,oe.radius*.55);n.y=Math.max(Lh,oe.bellyWorldY()-.3),Pt.position.lerp(n,1-Math.exp(-r*6)),Pt.lookAt(t.x,oe.bellyWorldY(),t.z)}else{let t=Math.sin(_e.bob)*.035*Math.min(1,_e.vel.length()/3);Pt.position.set(_e.pos.x+(Math.random()-.5)*Y.shake,Lh+t+(Math.random()-.5)*Y.shake,_e.pos.z),Pt.rotation.set(0,0,0,"YXZ"),Pt.rotation.order="YXZ",Pt.rotation.y=_e.yaw,Pt.rotation.x=_e.pitch}if(ii.position.set(_e.pos.x+30,60,_e.pos.z+20),ii.target.position.set(_e.pos.x,0,_e.pos.z),oe.u.uFlash.value=0,oe.update(r,Pt.position,Ie.voiceLevel()),ut.update(r),(Y.state==="grab"||oe.mood==="happy")&&Math.random()<r*6){let t=oe.group.position;ut.spawn(t.x+Ot(-.6,.6),oe.headWorldY()+.2,t.z+Ot(-.6,.6),Ot(-.3,.3),Ot(.4,.9),Ot(-.3,.3),1.2,.45,[1,.35,.65])}Y.bubbleT>0&&(Y.bubbleT-=r,Y.bubbleT<=0&&et("bubble",!1)),(Y.state==="play"||Y.state==="grab")&&Op(r,e),Hn.render(Xt,Pt)}Vh();window.__game={LOG:kh,G:Y,player:_e,get succ(){return oe},get world(){return ut},audio:Ie,startGame:Fl,startGrab:Hh,tap:kl,startCast:zh};})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
