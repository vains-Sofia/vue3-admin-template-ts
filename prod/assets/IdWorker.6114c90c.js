function a(){const t=[],s="0123456789abcdef";for(let n=0;n<32;n++){const r=Math.floor(Math.random()*16);t[n]=s.substring(r,r+1)}t[14]="4";const o=t[19]&3|8;return t[19]=s.substring(o,o+1),t[8]=t[13]=t[18]=t[23],t.join("")}export{a as n};
