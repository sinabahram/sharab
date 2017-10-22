'use strict';

exports.tagToDec = function(tag) {
var dec = 0;

var pos = tag.length-1;
for(var ch of tag) {
dec += (ch.charCodeAt(0)-97+1)*(26**pos);
pos -= 1;
}

return dec;
};

exports.decToTag = function(dec) {
var tag = '';
while(dec > 26) {
dec -= 1;
var r = dec%26;
dec -= r;
dec /= 26;

tag = String.fromCharCode(97+r)+tag;
}

tag = String.fromCharCode(97+dec-1)+tag;

return tag;
};
