var u=(o,y,r)=>new Promise((i,s)=>{var l=e=>{try{n(r.next(e))}catch(m){s(m)}},t=e=>{try{n(r.throw(e))}catch(m){s(m)}},n=e=>e.done?i(e.value):Promise.resolve(e.value).then(l,t);n((r=r.apply(o,y)).next())});var c=o=>new Promise(y=>setTimeout(y,o)),T=(o,y)=>{let{maxRetries:r=3,retryDelay:i=1e3,maxRetryDelay:s=6e4,retryDelayType:l="exponential"}=y||{},t,n=(...e)=>new Promise((m,p)=>u(void 0,null,function*(){let a=0;for(t=x=>{a=r,p(x)};a<r;)try{return console.log("retries: ",a),yield o(...e)}catch(x){if(a===r-1)return p(x);a++;let d=l==="exponential"?Math.min(i*a,s):i;yield c(d)}return p({message:"Retry failed"})}));return n.abort=e=>{t==null||t(e),t=void 0},n};export{c as delay,T as retryPromiseFactory};
//# sourceMappingURL=index.es.js.map
