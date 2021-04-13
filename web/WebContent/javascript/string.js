let str = 'Hello'; // new String();
str.charAt(0);
str.indexOf('a');
let t = 'Hello Thank you good luck to you';
let r = t.indexOf('you');
r = t.match('you');
r = t.search('you');
r = t.substr('you');
r = t.substring('you');
r = t.replace('you', 'me');
r = t.charCodeAt(0);
r = t.search(/\d+g/i)
console.log(r);
console.log(this);