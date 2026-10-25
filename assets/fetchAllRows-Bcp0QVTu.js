async function c(l,t=1e3,s=5e4){const f=[];for(let o=0;o<s;o+=t){const{data:r,error:n}=await l(o,o+t-1);if(n)throw n;if(f.push(...r!=null?r:[]),!r||r.length<t)break}return f}export{c as f};
