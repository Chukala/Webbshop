exports.calcTotal=function(t){console.log(typeof t);let e=t.reduce(function(t,e){return t+e.qty*e.itemPrice},0);return e=Math.round(100*e)/100,send=e.toString(),send};