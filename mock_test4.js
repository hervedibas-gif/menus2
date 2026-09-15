class FakeEl {
  constructor(){this._html='';this.value='';this.checked=false;this.dataset={};this.classList={add(){},remove(){},toggle(){},contains(){return false}};this.children=[];this.style={};}
  set innerHTML(v){this._html=v;}
  get innerHTML(){return this._html;}
  appendChild(c){this.children.push(c);}
  querySelector(){const e=new FakeEl();e.scrollIntoView=()=>{};return e;}
  querySelectorAll(){return [];}
  addEventListener(){}
  set onclick(f){this._onclick=f;}
  set onchange(f){this._onchange=f;}
  set onblur(f){this._onblur=f;}
  getContext(){return {clearRect(){},fillRect(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},arc(){},fill(){},fillText(){},set fillStyle(v){},set strokeStyle(v){},set lineWidth(v){},set font(v){}};}
  focus(){}
}
const store={};
global.localStorage={getItem:k=>store[k]!==undefined?store[k]:null,setItem:(k,v)=>{store[k]=String(v)},removeItem:k=>{delete store[k]}};
const elements={};
global.document={
  getElementById:(id)=>{if(!elements[id])elements[id]=new FakeEl();return elements[id];},
  querySelector:()=>{const e=new FakeEl();e.scrollIntoView=()=>{};return e;},
  querySelectorAll:()=>[],
  addEventListener:()=>{},
  createElement:()=>new FakeEl(),
  body:new FakeEl(),
};
global.window=global;
global.Notification=undefined;
global.navigator={};
global.addEventListener=()=>{};
global.URL={createObjectURL:()=>'blob:x'};
global.Blob=function(){};
global.setInterval=()=>0;
global.setTimeout=(fn)=>{try{fn()}catch(e){}return 0};

const vm=require('vm');
const code=require('fs').readFileSync('app.js','utf8');
const ctx=vm.createContext(global);
vm.runInContext(code, ctx, {filename:'app.js'});

console.log('--- Tailles des banques ---');
console.log('STARTERS+BONUS_STARTERS:', vm.runInContext('ALL_STARTERS.length', ctx));
console.log('lunchPool:', vm.runInContext('fullLunchPool().length', ctx));
console.log('dinnerPool:', vm.runInContext('fullDinnerPool().length', ctx));

console.log('--- buildNextCycle : vérif anti-répétition 2 semaines ---');
vm.runInContext('buildNextCycle()', ctx);
const check = vm.runInContext(`
  (function(){
    const dinnersSeq = M.map(m=>m.dinner);
    const lunchSeq = M.map((m,idx)=>cleanLunchMain(currentMeal(idx,'lunch')));
    function violations(seq){
      let v=0;
      for(let i=0;i<seq.length;i++){
        for(let j=i+1;j<=Math.min(seq.length-1,i+13);j++){
          if(seq[i]===seq[j]){v++;}
        }
      }
      return v;
    }
    return {dinnerViol: violations(dinnersSeq), lunchViol: violations(lunchSeq), total: M.length};
  })()
`, ctx);
console.log(check);

console.log('--- alternative() : test répété 30 fois sur un jour, vérifie respect fenêtre ---');
let violCount=0;
for(let t=0;t<30;t++){
  vm.runInContext(`alternative(10,'dinner')`, ctx);
  const win = vm.runInContext(`twoWeekWindow(10,'dinner')`, ctx);
  const cur = vm.runInContext(`currentMeal(10,'dinner')`, ctx);
  if(win.has(cur)) violCount++;
}
console.log('violations sur 30 essais (devrait être 0 ou très rare si le pool filtré est vide):', violCount);
