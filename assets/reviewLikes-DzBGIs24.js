function t(e){if(e<=0)return"";if(e>=1e3){const r=e/1e3;return(r>=10?Math.round(r):r.toFixed(1).replace(/\.0$/,""))+"k"}return e.toLocaleString("en-US")}export{t as f};
