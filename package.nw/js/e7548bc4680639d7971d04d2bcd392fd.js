'use strict';!function(require,directRequire){const a=require('uglify-js'),b=require('babel-core'),c=require('babel-code-frame'),d=require('source-map'),{FILE_NOT_UTF8:e,BABEL_TRANS_JS_ERR:f,UGLIFY_JS_ERR:g,BABILI_JS_ERR:h}=require('./949d8235c744ced2a80121e4dba34c28.js');module.exports=function(e,i){const{file:j,es6:k,minified:l,sourceMaps:m,sourceFileName:n}=i,o=Date.now();console.log('process task',j);try{let i;if(k&&'yes'===k.toLowerCase()){try{const a=b.transform(e,{presets:['es2015','stage-0'],babelrc:!1,sourceFileName:j,sourceMaps:m});e=a.code,i=a.map}catch(a){const b=`file: ${j}\n ${a.message}\n ${c(e,a.loc.line,0<a.loc.column?a.loc.column:1)}`;throw{message:b,code:f}}if(l&&'yes'===l.toLowerCase()){const b=i?{content:i,filename:j}:{content:null,filename:j},d=a.minify(e,{toplevel:!0,sourceMap:b});if(d.error){const a=`file: ${j}\n ${d.error.message}\n ${c(e,d.error.line,0<d.error.col?d.error.col:1)}`;throw{message:a,code:g}}e=d.code,i=d.map}}else if(l&&'yes'===l.toLowerCase())try{const a=b.transform(`(function(){\n${e}\n})()`,{presets:['minify'],sourceMap:'map',sourceFileName:j,babelrc:!1});let c=new d.SourceMapConsumer(a.map),f=new d.SourceMapGenerator({file:j});f.setSourceContent(j,e.replace(/\n/g,'\\n')),c.eachMapping((a)=>{1<a.originalLine&&f.addMapping({generated:{line:a.generatedLine,column:a.generatedColumn},original:{line:a.originalLine-1,column:a.originalColumn},source:j,name:a.name})}),e=a.code,i=f.toJSON()}catch(a){a.loc=a.loc||{};const b=`file: ${j}\n ${a.message}\n ${c(e,a.loc.line,0<a.loc.column?a.loc.column:1)}`;throw{message:b,code:h}}return{error:null,map:i?'string'==typeof i?i:JSON.stringify(i):null,code:e}}catch(a){return{error:a}}}}(require('lazyload'),require);