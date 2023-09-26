var u=Object.defineProperty;var y=(n,e,t)=>e in n?u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>(y(n,typeof e!="symbol"?e+"":e,t),t);import{S as A,i as w,s as f,I as h,ac as b}from"../chunks/index.9fe14626.js";import{d as r,g as c,s as p}from"../chunks/store.d3ab02ad.js";import{d as C}from"../chunks/index.78404594.js";const I=`# Hello World

This is probably the simplest possible Tact program. It will provide callers with the classic output "hello world".

Tact lets you write smart contracts. This code defines a single contract named \`HelloWorld\`. Smart contracts must be deployed to the blockchain network to be usable, try to deploy this contract by pressing the <span class="mdButton blue">Deploy</span> button.

Contract deployments usually cost gas. This website deploys to an [emulator](https://github.com/tact-lang/tact-emulator) of TON blockchain, so gas is emulated TON coin (which is free).

If you're unfamilar with terms like *contract*, *deployment* and *gas*, please [read this post](https://blog.ton.org/what_is_blockchain) first. It's a great introduction to all blockchain terminology you will need to learn Tact.

## A simple interaction

Contracts can have *getters* like \`greeting()\`. Getters are special external interface functions that allow users to query information from the contract. Try to call the getter by pressing the <span class="mdButton teal">Get greeting</span> button. Calling getters is free and does not cost gas.

Don't worry if some things aren't clear now, we will dive into getters in more detail later.`,v=`contract HelloWorld {

    get fun greeting(): String {
        return "hello world";
    }

}`;async function g(){const n=r.Cell.fromBase64("te6ccgECDgEAAXAAART/APSkE/S88sgLAQIBYgIDApLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4IIwyPhDAcx/AcoAye1UBwQCASAFBgA8AZIwf+BwIddJwh+VMCDXCx/ewAAB10nBIbCRf+BwAg+9jVbZ5tnhjAcIAgEgCgsBNO1E0NQB+GPSADCRbeD4KNcLCoMJuvLgids8CQAai7aGVsbG8gd29ybGSAACbQC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAgFIDA0AEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtVXE0N2RKY2tqWG90UFRDZHZoRjZHQ3hGb3BwQTQxNEJ0Y0tGeUdwNEhDYkeCA="),e=r.Cell.fromBase64("te6cckECEAEAAXoAAQHAAQEFoPYVAgEU/wD0pBP0vPLICwMCAWIMBAIBIAoFAgEgCQYCAUgIBwB1sm7jQ1aXBmczovL1FtVXE0N2RKY2tqWG90UFRDZHZoRjZHQ3hGb3BwQTQxNEJ0Y0tGeUdwNEhDYkeCAAEbCvu1E0NIAAYAC5u70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAg+9jVbZ5tnhjA4LABqLtoZWxsbyB3b3JsZIApLQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zzy4IIwyPhDAcx/AcoAye1UDg0APAGSMH/gcCHXScIflTAg1wsf3sAAAddJwSGwkX/gcAE07UTQ1AH4Y9IAMJFt4Pgo1wsKgwm68uCJ2zwPAAJtiiFvWw==");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const s=t.endCell();return{code:n,data:s}}const k={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}},B=[{name:"StateInit",header:null,fields:[{name:"code",type:{kind:"simple",type:"cell",optional:!1}},{name:"data",type:{kind:"simple",type:"cell",optional:!1}}]},{name:"Context",header:null,fields:[{name:"bounced",type:{kind:"simple",type:"bool",optional:!1}},{name:"sender",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"raw",type:{kind:"simple",type:"slice",optional:!1}}]},{name:"SendParameters",header:null,fields:[{name:"bounce",type:{kind:"simple",type:"bool",optional:!1}},{name:"to",type:{kind:"simple",type:"address",optional:!1}},{name:"value",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"mode",type:{kind:"simple",type:"int",optional:!1,format:257}},{name:"body",type:{kind:"simple",type:"cell",optional:!0}},{name:"code",type:{kind:"simple",type:"cell",optional:!0}},{name:"data",type:{kind:"simple",type:"cell",optional:!0}}]}],S=[{name:"greeting",arguments:[],returnType:{kind:"simple",type:"string",optional:!1}}],D=[{receiver:"internal",message:{kind:"empty"}}];class i{constructor(e,t){l(this,"address");l(this,"init");l(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]}],types:B,getters:S,receivers:D,errors:k});this.address=e,this.init=t}static async init(){return await g()}static async fromInit(){const e=await g(),t=r.contractAddress(0,e);return new i(t,e)}static fromAddress(e){return new i(e)}async send(e,t,s,a){let o=null;if(a===null&&(o=new r.Cell),o===null)throw new Error("Invalid message type");await e.internal(t,{...s,body:o})}async getGreeting(e){let t=new r.TupleBuilder;return(await e.get("greeting",t.build())).stack.readString()}}function E(n,e,t){let s;h(n,p,o=>t(2,s=o));let a;return b(p,s={markdown:I,tactCode:v,deploy:async()=>{const o=await C.Blockchain.create(),d=await o.treasury("deployer");d.getSender(),a=o.openContract(await i.fromInit());const m={[d.address.toString()]:"deployer",[a.address.toString()]:"contract"};return[[a],m,[await a.send(d.getSender(),{value:r.toNano(1)},null)]]},messages:{},getters:{greeting:async()=>await a.getGreeting()},prev:c(import.meta.url).prev,next:c(import.meta.url).next},s),[]}class T extends A{constructor(e){super(),w(this,e,E,null,f,{})}}export{T as default};