"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{39664:function(e,t,n){n.d(t,{E:function(){return i}});var a=n(85893);n(67294);var r=n(94184),o=n.n(r);let i=e=>{let{status:t}=e,{type:n,icon:r,message:i}=t||{},s=o()({"status-container":!0,["status-".concat(n)]:n,empty:!i});return(0,a.jsxs)("span",{className:s,children:[r?(0,a.jsx)("span",{className:"status-icon",children:r}):null,i?(0,a.jsx)("span",{className:"status-message",children:i}):null]})};t.Z=i},52018:function(e,t,n){n.d(t,{A8:function(){return u},Kx:function(){return l},Sk:function(){return d},mG:function(){return h},nv:function(){return p},xA:function(){return f}});var a=n(85893);n(67294);var r=n(94184),o=n.n(r),i=n(69677),s=n(79915),c=n(39664);let l="default",u="password",h="numeric",d="textarea",f="url",p=e=>{let{className:t,disabled:n,fieldName:r,label:l,maxLength:p,onBlur:m,onChange:g,onPressEnter:b,pattern:y,placeholder:v,required:w,status:x,tip:P,type:L,useTrim:A,value:N}=e,k=e=>{if(g){let t=L===h?e:e.target.value;g({fieldName:r,value:A?t.trim():t})}},T=e=>{let t=e.target.value;m&&m({value:t})},E=()=>{b&&b()},S=i.Z,O={};L===d?(S=i.Z.TextArea,O={autoSize:!0}):L===u?(S=i.Z.Password,O={visibilityToggle:!0}):L===h?(S=s.Z,O={type:"number",min:1,max:10**p-1}):L===f&&(O={type:"url",pattern:y});let j="field-".concat(r),{type:I}=x||{},q=o()({"formfield-container":!0,"textfield-container":!0,["type-".concat(L)]:!0,required:w,["status-".concat(I)]:x});return(0,a.jsxs)("div",{className:q,children:[l?(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("label",{htmlFor:j,className:"formfield-label",children:l})}):null,(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsx)("div",{className:"input-group",children:(0,a.jsx)(S,{id:j,className:"field ".concat(t," ").concat(j),...O,...L!==h&&{allowClear:!0},placeholder:v,maxLength:p,onChange:k,onBlur:T,onPressEnter:E,disabled:n,value:N})}),(0,a.jsx)(c.E,{status:x}),(0,a.jsx)("p",{className:"field-tip",children:P})]})]})};p.defaultProps={className:"",disabled:!1,label:"",maxLength:255,placeholder:"",required:!1,status:null,tip:"",type:l,value:"",pattern:"",useTrim:!1,useTrimLead:!1,onSubmit:()=>{},onBlur:()=>{},onChange:()=>{},onPressEnter:()=>{}}},64777:function(e,t,n){n.d(t,{$i:function(){return D},$l:function(){return K},Bu:function(){return b},E8:function(){return W},Ff:function(){return T},GC:function(){return w},GR:function(){return Z},HP:function(){return F},IO:function(){return O},Kp:function(){return p},Kt:function(){return z},M_:function(){return I},N$:function(){return C},NE:function(){return c},NM:function(){return g},Q_:function(){return l},Qc:function(){return k},RB:function(){return y},UJ:function(){return U},WB:function(){return i},WE:function(){return A},WQ:function(){return L},Wr:function(){return S},XA:function(){return j},Y9:function(){return B},a_:function(){return f},ao:function(){return h},bl:function(){return u},e_:function(){return _},hn:function(){return N},iG:function(){return q},iV:function(){return d},jr:function(){return v},kb:function(){return G},kg:function(){return X},ms:function(){return E},nx:function(){return x},op:function(){return M},qk:function(){return m},rQ:function(){return H},sG:function(){return P},um:function(){return R}});var a=n(34155);let r=a.env.NEXT_PUBLIC_ADMIN_USERNAME,o=a.env.NEXT_PUBLIC_ADMIN_STREAMKEY,i="/",s="".concat(i,"api/admin/"),c=15e3,l="".concat(s,"status"),u="".concat(s,"serverconfig"),h="".concat(s,"config"),d="".concat(s,"viewersOverTime"),f="".concat(s,"viewers"),p="".concat(s,"chat/clients"),m="".concat(s,"chat/users/disabled"),g="".concat(s,"chat/users/setenabled"),b="".concat(s,"chat/users/ipbans"),y="".concat(s,"chat/users/ipbans/remove"),v="".concat(s,"chat/users/setmoderator"),w="".concat(s,"chat/users/moderators"),x="".concat(s,"hardwarestats"),P="".concat(s,"logs"),L="".concat(s,"logs/warnings"),A="".concat(s,"chat/messages"),N="/api/admin/chat/messagevisibility",k="".concat(s,"emoji/upload"),T="".concat(s,"emoji/delete"),E="".concat(s,"accesstokens"),S="".concat(s,"accesstokens/delete"),O="".concat(s,"accesstokens/create"),j="".concat(s,"webhooks"),I="".concat(s,"webhooks/delete"),q="".concat(s,"webhooks/create"),D="".concat(i,"api/socialplatforms"),_="".concat(s,"federation/send"),F="".concat(s,"followers"),W="".concat(s,"followers/pending"),B="".concat(s,"followers/blocked"),G="".concat(s,"followers/approve"),M="".concat(s,"federation/actions"),C="".concat(s,"metrics/video"),R="".concat(s,"config/streamkeys"),U="".concat(s,"yp/reset");async function H(e,t){let{data:n,method:a="GET",auth:i=!0}=t||{},s={method:a};if(n&&(s.body=JSON.stringify(n)),i&&r&&o){let c=btoa("".concat(r,":").concat(o));s.headers={Authorization:"Basic ".concat(c)},s.mode="cors",s.credentials="include"}try{let l=await fetch(e,s),u=await l.json();if(!l.ok){let h=u.message||"An error has occurred: ".concat(l.status);throw Error(h)}return u}catch(d){return console.error(d),d}}async function K(e,t){let n={method:"GET",auth:!1,...t};return H(e,n)}async function X(e){try{let t=await fetch(e,{referrerPolicy:"no-referrer",referrer:""});if(!t.ok){let n="An error has occured: ".concat(t.status);throw Error(n)}let a=await t.json();return a}catch(r){console.log(r)}return{}}async function z(){return X("https://api.github.com/repos/owncast/owncast/releases/latest")}let Q=/^\d+(\.\d+){0,2}$/;async function Z(e){let t=await z(),n=t.tag_name;return("v"===n.substr(0,1)&&(n=n.substr(1)),!function(e,t){if(!e||!t||0===e.length||0===t.length)return!1;if(e===t)return!0;if(Q.test(e)&&Q.test(t)){let n=e.split(".");for(;n.length<3;)n.push("0");let a=t.split(".");for(;a.length<3;)a.push("0");for(let r=0;r<3;r++){let o=parseInt(n[r],10),i=parseInt(a[r],10);if(o!==i)return o>i}return!0}return e>=t}(e,n))?n:null}},90745:function(e,t,n){n.d(t,{$Z:function(){return ep},$t:function(){return A},$w:function(){return d},AA:function(){return c},AN:function(){return H},AP:function(){return g},BF:function(){return Q},B_:function(){return V},CJ:function(){return b},CQ:function(){return w},Dg:function(){return U},EY:function(){return F},FE:function(){return z},HM:function(){return eo},I$:function(){return es},IX:function(){return T},KB:function(){return O},Kl:function(){return K},LC:function(){return X},ME:function(){return D},P:function(){return W},RE:function(){return L},SS:function(){return er},Si:function(){return P},Xc:function(){return Z},Xq:function(){return et},ZQ:function(){return E},_X:function(){return B},c9:function(){return f},cf:function(){return y},cj:function(){return q},d$:function(){return l},dL:function(){return J},dR:function(){return Y},dj:function(){return R},gX:function(){return G},i3:function(){return ec},kB:function(){return C},lT:function(){return I},mv:function(){return ef},nm:function(){return ee},os:function(){return v},oy:function(){return ed},pE:function(){return x},rE:function(){return j},rd:function(){return k},rs:function(){return N},sI:function(){return s},sv:function(){return p},t$:function(){return ei},tQ:function(){return S},vv:function(){return m},wC:function(){return el},x8:function(){return en},yC:function(){return ea},y_:function(){return _},yi:function(){return $},yj:function(){return M},z_:function(){return eu},zm:function(){return eh}});var a=n(85893),r=n(64777),o=n(52018),i=n(37174);let s=3e3,c="/pagecontent",l="/customstyles",u="/serverurl",h="/nsfw",d="/s3",f="/socialhandles",p="/video/streamlatencylevel",m="/video/streamoutputvariants",g="/directoryenabled",b="/chat/forbiddenusernames",y="/chat/suggestedusernames",v="/externalactions",w="/video/codec",x="/federation/blockdomains";async function P(e){let{apiPath:t,data:n,onSuccess:a,onError:o}=e,i=await (0,r.rQ)("".concat(r.ao).concat(t),{data:n,method:"POST",auth:!0});i.success&&a?a(i.message):o&&o(i.message)}let L={apiPath:"/name",configPath:"instanceDetails",maxLength:255,placeholder:"Owncast site name",label:"Name",tip:"The name of your Owncast server",required:!0,useTrimLead:!0},A={apiPath:"/streamtitle",configPath:"instanceDetails",maxLength:100,placeholder:"Doing cool things...",label:"Stream Title",tip:"What is your stream about today?"},N={apiPath:"/serversummary",configPath:"instanceDetails",maxLength:500,placeholder:"",label:"About",tip:"A brief blurb about you, your server, or what your stream is about."},k={apiPath:"/offlinemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"An optional message you can leave people when your stream is not live.",label:"Offline Message",tip:"An optional message you can leave people when your stream is not live."},T={apiPath:"/welcomemessage",configPath:"instanceDetails",maxLength:2500,placeholder:"",label:"Welcome Message",tip:"A system chat message sent to viewers when they first connect to chat. Leave blank to disable."},E={apiPath:"/logo",configPath:"instanceDetails",maxLength:255,placeholder:"/img/mylogo.png",label:"Logo",tip:"Upload your logo if you have one (max size 2 MB). We recommend that you use a square image that is at least 256x256. SVGs are discouraged as they cannot be displayed on all social media platforms."},S={apiPath:"/key",configPath:"",maxLength:255,placeholder:"abc123",label:"Admin Password",tip:"Save this password somewhere safe, you will need it to login to the admin dashboard!",required:!0},O={apiPath:"/ffmpegpath",configPath:"",maxLength:255,placeholder:"/usr/local/bin/ffmpeg",label:"FFmpeg Path",tip:"Absolute file path of the FFMPEG application on your server",required:!0},j={apiPath:"/webserverport",configPath:"",maxLength:6,placeholder:"8080",label:"Owncast port",tip:"What port is your Owncast web server listening? Default is 8080",required:!0},I={apiPath:"/rtmpserverport",configPath:"",maxLength:6,placeholder:"1935",label:"RTMP port",tip:"What port should accept inbound broadcasts? Default is 1935",required:!0},q={apiPath:u,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server.",type:o.xA,pattern:i.ax,useTrim:!0},D={apiPath:"/sockethostoverride",configPath:"",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Websocket host override",tip:"The direct URL of your Owncast server.",type:o.xA,pattern:i.ax,useTrim:!0},_={apiPath:"/tags",configPath:"instanceDetails",maxLength:24,placeholder:"Add a new tag",required:!0,label:"",tip:""},F={apiPath:h,configPath:"instanceDetails",label:"NSFW?",tip:"Turn this ON if you plan to steam explicit or adult content. Please respectfully set this flag so unexpected eyes won't accidentally see it in the Directory."},W={apiPath:g,configPath:"yp",label:"Enable directory",tip:"Turn this ON to request to show up in the directory."},B={apiPath:"/hideviewercount",configPath:"",label:"Hide viewer count",tip:"Turn this ON to hide the viewer count the web page."},G={framerate:24,videoPassthrough:!1,videoBitrate:800,audioPassthrough:!0,audioBitrate:0,cpuUsageLevel:3,scaledHeight:null,scaledWidth:null,name:""},M={apiPath:"/chat/disable",configPath:"",label:"Chat",tip:"Turn the chat functionality on/off on your Owncast server.",useSubmit:!0},C={apiPath:"/chat/joinmessagesenabled",configPath:"",label:"Join Messages",tip:"Show when a viewer joins the chat.",useSubmit:!0},R={apiPath:"/chat/establishedusermode",configPath:"",label:"Established users only",tip:"Only users who have previously been established for some time may chat.",useSubmit:!0},U={apiPath:b,placeholder:"username",label:"Forbidden usernames",tip:"A list of words in chat usernames you disallow."},H={apiPath:y,placeholder:"username",label:"Default usernames",tip:"An optional list of chat usernames that new users get assigned. If the list holds less then 10 items, random names will be generated.  Users can change their usernames afterwards and the same username may be given out multple times.",min_not_reached:"At least 10 items are required for this feature.",no_entries:"The default name generator is used."},K={apiPath:"/federation/enable",configPath:"federation",label:"Enable Social Features",tip:"Send and receive activities on the Fediverse.",useSubmit:!0},X={apiPath:"/federation/private",configPath:"federation",label:"Private",tip:"Follow requests will require approval and only followers will see your activity.",useSubmit:!0},z={apiPath:"/federation/showengagement",configPath:"showEngagement",label:"Show engagement",tip:"Following, liking and sharing will appear in the chat feed.",useSubmit:!0},Q={apiPath:"/federation/livemessage",configPath:"federation",maxLength:500,placeholder:"My stream has started, tune in!",label:"Now Live message",tip:"The message sent announcing that your live stream has begun. Tags will be automatically added. Leave blank to disable."},Z={apiPath:"/federation/username",configPath:"federation",maxLength:10,placeholder:"owncast",default:"owncast",label:"Username",tip:'The username used for sending and receiving activities from the Fediverse. For example, if you use "bob" as a username you would send messages to the fediverse from @bob@yourserver. Once people start following your instance you should not change this.'},$={apiPath:u,configPath:"yp",maxLength:255,placeholder:"https://owncast.mysite.com",label:"Server URL",tip:"The full url to your Owncast server is required to enable social features. Must use SSL (https). Once people start following your instance you should not change this.",type:o.xA,pattern:i.ax,useTrim:!0},V={apiPath:h,configPath:"instanceDetails",label:"Potentially NSFW",tip:"Turn this ON if you plan to steam explicit or adult content so previews of your stream can be marked as potentially sensitive."},Y={apiPath:x,configPath:"federation",label:"Blocked domains",placeholder:"bad.domain.biz",tip:"You can block specific domains from interacting with you."},J={audioBitrate:{min:600,max:1200,defaultValue:800,unit:"kbps",incrementBy:100,tip:"nothing to see here"},videoPassthrough:{tip:"If enabled, all other settings will be disabled. Otherwise configure as desired."},audioPassthrough:{tip:"If No is selected, then you should set your desired Audio Bitrate."},scaledWidth:{fieldName:"scaledWidth",label:"Resized Width",maxLength:4,placeholder:"1080",tip:"Optionally resize this content's width."},scaledHeight:{fieldName:"scaledHeight",label:"Resized Height",maxLength:4,placeholder:"720",tip:"Optionally resize this content's height."}},ee={min:24,max:120,defaultValue:24,unit:"fps",incrementBy:null,tip:"Reducing your framerate will decrease the amount of video that needs to be encoded and sent to your viewers, saving CPU and bandwidth at the expense of smoothness.  A lower value is generally is fine for most content."},et={[ee.min]:"".concat(ee.min," ").concat(ee.unit),25:" ",30:" ",50:" ",60:" ",90:" ",[ee.max]:"".concat(ee.max," ").concat(ee.unit)},en={[ee.min]:"".concat(ee.min,"fps - Good for film, presentations, music, low power/bandwidth servers."),25:"25fps - Good for film, presentations, music, low power/bandwidth servers.",30:"30fps - Good for slow/casual games, chat, general purpose.",50:"50fps - Good for fast/action games, sports, HD video.",60:"60fps - Good for fast/action games, sports, HD video.",90:"90fps - Good for newer fast games and hardware.",[ee.max]:"".concat(ee.max,"fps - Experimental, use at your own risk!")},ea={min:400,max:6e3,defaultValue:1200,unit:"kbps",incrementBy:100,tip:"The overall quality of your stream is generally impacted most by bitrate."},er={fieldName:"name",label:"Name",maxLength:15,placeholder:"HD or Low",tip:"Human-readable name for for displaying in the player."},eo={[ea.min]:{style:{marginLeft:"24px"},label:"".concat(ea.min," ").concat(ea.unit)},3e3:3e3,4500:4500,[ea.max]:{style:{marginLeft:"-10px"},label:"".concat(ea.max," ").concat(ea.unit)}},ei={1:{style:{marginLeft:"15px"},label:(0,a.jsx)("p",{children:"lowest"})},2:"",3:"",4:"",5:{style:{marginLeft:"-15px"},label:(0,a.jsx)("p",{children:"highest"})}},es={1:"Lowest hardware usage - lowest quality video",2:"Low hardware usage - low quality video",3:"Medium hardware usage - average quality video",4:"High hardware usage - high quality video",5:"Highest hardware usage - higher quality video"},ec={VIDEO_HEIGHT:1080,VIDEO_BITRATE:3e3,HELP_TEXT:"You have only set one video quality variant. If your server has the computing resources, consider adding another, lower-quality variant, so more people can view your content!"},el={url:"",platform:""},eu="OTHER_SOCIAL_HANDLE_OPTION",eh={accessKey:{fieldName:"accessKey",label:"Access Key",maxLength:255,placeholder:"access key 123",tip:""},acl:{fieldName:"acl",label:"ACL",maxLength:255,placeholder:"",tip:"Optional specific access control value to add to your content.  Generally not required."},bucket:{fieldName:"bucket",label:"Bucket",maxLength:255,placeholder:"bucket 123",tip:"Create a new bucket for each Owncast instance you may be running."},endpoint:{fieldName:"endpoint",label:"Endpoint",maxLength:255,placeholder:"https://your.s3.provider.endpoint.com",tip:'The full URL (with "https://") endpoint from your storage provider.',useTrim:!0,type:o.xA,pattern:i.ax},region:{fieldName:"region",label:"Region",maxLength:255,placeholder:"region 123",tip:""},secret:{fieldName:"secret",label:"Secret key",maxLength:255,placeholder:"your secret key",tip:""},servingEndpoint:{fieldName:"servingEndpoint",label:"Serving Endpoint",maxLength:255,placeholder:"http://cdn.ss3.provider.endpoint.com",tip:"Optional URL that content should be accessed from instead of the default.  Used with CDNs and specific storage providers. Generally not required.",type:o.xA,pattern:i.ax,useTrim:!0},forcePathStyle:{fieldName:"forcePathStyle",label:"Force path-style",tip:"If your S3 provider doesn't support virtual-hosted-style URLs set this to ON (i.e. Oracle Cloud Object Storage)"}},ed={webhookUrl:{fieldName:"webhook",label:"Webhook URL",maxLength:255,placeholder:"https://discord.com/api/webhooks/837/jf38-6iNEv",tip:"The webhook assigned to your channel.",type:o.xA,pattern:i.ax,useTrim:!0},goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:300,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},ef={goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:200,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}},ep={apiKey:{fieldName:"apiKey",label:"API Key",maxLength:200,tip:"",placeholder:"gaUQhRC2lqfrEFfElBXJgOctU"},apiSecret:{fieldName:"apiSecret",label:"API Secret",maxLength:200,tip:"",placeholder:"IIz4jFZMWbUKdFOEGUprFjRwIslG56d1SPQlolJYjXwJ2y2qKS"},accessToken:{fieldName:"accessToken",label:"Access Token",maxLength:200,tip:"",placeholder:"952540400-EEiwe9fkuSvWjnNC82YFa9kgpqbyAP3J7FjE2dkka"},accessTokenSecret:{fieldName:"accessTokenSecret",label:"Access Token Secret",maxLength:200,tip:"",placeholder:"xO0AZWNGfZxpNsYPg3zNEKhAsPPGvNZFlzQArA2khI9Kg"},bearerToken:{fieldName:"bearerToken",label:"Bearer Token",maxLength:200,tip:"",placeholder:"AAAAAAAAAAAAAAFqpXwEAAnnepHkjA8XD5ftx5jUadYIRtPtaq7AAAAwpXPpDWKDcdhiWr0tVDjsgW%2B4awGOM9VQ%3XPoMFuWcHsE42TK"},goLiveMessage:{fieldName:"goLiveMessage",label:"Go Live Text",maxLength:200,tip:"The text to send when you go live.",placeholder:"I've gone live! Come watch!"}}},37174:function(e,t,n){n.d(t,{Kf:function(){return o},ax:function(){return a},bu:function(){return i},jv:function(){return r}});let a="https?://.*";function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let n=new URL(e);if(""===n.protocol||""===n.hostname||!t.includes(n.protocol))return!1}catch(a){return!1}return!0}function o(e,t){e.startsWith("@")&&(e=e.slice(1));let n=e.split(/:|@/),[a,r,o]=n;return console.log({account:e,protocol:t,service:a,user:r,host:o}),a===t&&3===n.length&&!!a&&!!r&&!!o}function i(e){if(!e.startsWith("matrix:"))return!1;(e=e.slice(7)).startsWith("@")&&(e=e.slice(1));let t=e.split(":"),[n,a]=t;return 2===t.length&&!!n&&!!a}}}]);
//# sourceMappingURL=745-9267bdf0bc6bdec4.js.map