(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0a314a"],{"013f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isLatest,expression:"appUpdater.isLatest"}]},[a("q-form",{on:{submit:e.onLogin}},[a("q-input",{attrs:{label:"Sitecode",rules:[function(e){return e&&e.length>0||"Please input your sitecode"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"person"}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.name=""}}})]},proxy:!0}]),model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{attrs:{label:"Embossed",type:e.isPassword?"password":"text",rules:[function(e){return e&&e.length>0||"Please input your embossed"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{attrs:{name:e.isPassword?"visibility_off":"visibility",lass:"cursor-pointer"},on:{click:function(t){e.isPassword=!e.isPassword}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-toggle",{attrs:{label:"Remeber Me"},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}}),a("div",[a("q-btn",{staticClass:"full-width",attrs:{label:"Login",type:"submit",color:"primary"}})],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isLatest,expression:"!appUpdater.isLatest"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isAndroid,expression:"appUpdater.isAndroid"}],staticStyle:{"text-align":"center"}},[a("h5",{staticStyle:{"margin-bottom":"0"}},[e._v(e._s(e.appUpdater.updateTitle))]),a("mt-progress",{attrs:{value:e.appUpdater.downloadProcessValue,"bar-height":5}},[a("div",{attrs:{slot:"start"},slot:"start"},[e._v("0%")]),a("div",{attrs:{slot:"end"},slot:"end"},[e._v(e._s(e.appUpdater.downloadProcessValue)+"%")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isAndroid,expression:"!appUpdater.isAndroid"}],staticStyle:{"text-align":"center"}},[a("h5",{staticStyle:{"margin-bottom":"0"}},[e._v(e._s(e.appUpdater.updateTitle))]),a("mt-progress",{attrs:{value:e.appUpdater.downloadProcessValue,"bar-height":5}},[a("div",{attrs:{slot:"start"},slot:"start"},[e._v("0%")]),a("div",{attrs:{slot:"end"},slot:"end"},[e._v(e._s(e.appUpdater.downloadProcessValue)+"%")])])],1)])])},r=[],o=a("bc3a"),i=a.n(o),p=a("2c75");class n{static Export(){const e={};return p["a"].post("Export",e,{responseType:"blob"})}static Export2(e){const t={JobNumber:e};return p["a"].post("Export2",t,{responseType:"blob"})}static Import(e){const t=new FormData;return t.append("data",e),p["a"].post("Import",t,{headers:{"Content-Type":"multipart/form-data"}})}static Import2(e,t){const a=new FormData;return a.append("jobNumber",e),a.append("data",t),p["a"].post("Import2",a,{headers:{"Content-Type":"multipart/form-data"}})}static Login(e,t){const a={Sitecode:e,Embossed:t};return p["a"].post("Login",a)}static Test(){const e={};return p["a"].post("Test",e)}static TestSave(e){const t={cardHolder:e};return p["a"].post("TestSave",t)}static TestSearch(e,t,a,s,r){const o={bldgpk:e,begintime:t,endtime:a,filterby:s,sortby:r};return p["a"].post("TestSearch",o)}}var d=a("d257"),l=a("2b0e"),c=l["a"].extend({name:"Login",data(){return{name:"234",password:"17586",isPassword:!0,rememberMe:!0,appUpdater:{isLatest:!1,isAndroid:!1,updateTitle:"Checking new version ...",updateBaseUrl:"https://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"TechConsole",version:"1.1.0",downloadProcessValue:0}}},methods:{onLogin(){let e=this.name,t=this.password;this.login(e,t)},login(e,t){this.$q.loading.show(),n.Login(e,t).then(e=>{this.$q.loading.hide(),e.data.OK?(d["a"].setAuthorization(e.data.Authorization),this.rememberMe?d["a"].setRemeberMe(e.data.Authorization):d["a"].clearRemeberMe(),this.$router.push({path:"/"})):this.$q.dialog({title:"Login Error",message:e.data.Message})}).catch(e=>{this.$q.loading.hide(),this.$q.dialog({title:"Login Error",message:e.message})})},autoLogin(){d["a"].hasAuthorization()&&this.login("","")},checkVersion(e){this.$q.platform.is.android?this.appUpdater.isAndroid=!0:this.appUpdater.isAndroid=!1,this.appUpdater.isAndroid?this.checkAndroidVersion(t=>{t?this.updateApp():e()}):this.checkIOSVersion(t=>{t?this.updateApp():e()})},checkAndroidVersion(e){let t=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.txt`;i.a.get(t).then(t=>{let a=t.data.Version;a!=this.appUpdater.version?(this.appUpdater.updateTitle="Downloading new version...",e(!0)):e(!1)}).catch(e=>{this.showError(e.message)})},checkIOSVersion(e){let t=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.plist`;i.a.get(t).then(t=>{let a="";const s=t.data.split(/\r\n|[\r\n]/);for(let e=0;e<s.length;e++){const t=s[e];if(t.endsWith("<key>bundle-version</key>")&&e+1<s.length){const t=s[e+1].indexOf("<string>");a=s[e+1].substring(t+8,t+8+5)}}a.length>0&&a!=this.appUpdater.version?(this.appUpdater.updateTitle="Updating the App, please wait...",e(!0)):e(!1)}).catch(e=>{this.showError(e.message)})},updateApp(){if(this.appUpdater.isAndroid){let e=(new Date).getTime(),t=`${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.apk?v=${e}`;this.updateAndroid(t)}else{let e=`itms-services://?action=download-manifest&url=${this.appUpdater.updateBaseUrl}/${this.appUpdater.appName}/${this.appUpdater.appName}.plist`;this.updateIOS(e)}},updateAndroid(e){const t=this;window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory,(function(a){a.getFile(`${t.appUpdater.appName}.apk`,{create:!0,exclusive:!1},(function(a){i()({method:"GET",url:e,responseType:"blob",onDownloadProgress(e){e.lengthComputable&&t.$nextTick(()=>{t.appUpdater.downloadProcessValue=Math.round(e.loaded/e.total*100)})}}).then(e=>{var t=new Blob([e.data],{type:"application/vnd.android.package-archive"});a.createWriter((function(e){e.onwriteend=function(){cordova.plugins.fileOpener2.open(a.toInternalURL(),"application/vnd.android.package-archive")},e.write(t)}))}).catch(e=>{t.showError("download error: "+e.message)})}),e=>{t.showError("error getting file! "+e.message)})}),e=>{t.showError("error getting persistent fs! "+e.code)})},updateIOS(e){cordova.InAppBrowser.open(e,"_system","location=no"),this.simulateDownloadIOS()},simulateDownloadIOS(){setTimeout(()=>{this.appUpdater.downloadProcessValue>=100?cordova.plugins.exit():(this.$nextTick(()=>{this.appUpdater.downloadProcessValue+=10}),this.simulateDownloadIOS())},1e3)},showError(e){navigator.notification.alert(e,()=>{cordova.plugins.exit()})}},mounted(){this.$q.platform.is.cordova?this.checkVersion(()=>{this.appUpdater.isLatest=!0,this.autoLogin()}):(this.appUpdater.isLatest=!0,this.autoLogin())}}),h=c,u=a("2877"),m=Object(u["a"])(h,s,r,!1,null,null,null);t["default"]=m.exports}}]);