#!/usr/bin/env node

const pinyin = require('./lib/py');
const { log } = require('./utils/index');



function translate(word) {
	let str = '';
	let s;
	for (var i = 0; i < word.length; i++) {
		if (pinyin.indexOf(word.charAt(i)) != -1 && word.charCodeAt(i) > 200) {
			s = 1;
			while (pinyin.charAt(pinyin.indexOf(word.charAt(i)) + s) != ',') {
				str += pinyin.charAt(pinyin.indexOf(word.charAt(i)) + s);
				s++;
			}
			str += " ";
		} else {
			str += word.charAt(i);
		}
	}
	return str;
}

const word = process.argv.slice(2).join(' ');

if (!word) {
    log('请输入需要查询的汉字');
    return;
} else {
    let res = translate(word);
    log(`查询成功：${res}`, 'green');
}

