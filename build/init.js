!function(){"use strict";var e,o={938:function(e,o,t){var l=window.React,n=window.wp.primitives,r=(0,l.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(n.Path,{d:"M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",fillRule:"evenodd"})),a=window.wp.blocks,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"dss/jobbnorge","version":"2.1.3","title":"Jobbnorge","category":"widgets","icon":"people","description":"Retrieve and display job listings from Jobbnorge.no","keywords":["jobbnorge","jobbnorge.no"],"supports":{"html":false},"attributes":{"columns":{"type":"number","default":3},"blockLayout":{"type":"string","default":"list"},"employerID":{"type":"string","default":""},"noJobsMessage":{"type":"string","default":""},"orderBy":{"type":"string","default":"Deadline"},"itemsToShow":{"type":"number","default":5},"displayEmployer":{"type":"boolean","default":false},"displayExcerpt":{"type":"boolean","default":true},"displayDeadline":{"type":"boolean","default":false},"displayScope":{"type":"boolean","default":false},"displayDate":{"type":"boolean","default":true},"excerptLength":{"type":"number","default":55}},"textdomain":"wp-jobbnorge-block","editorScript":"file:init.js","editorStyle":"file:editor.scss","style":"file:style.scss"}'),c=window.wp.blockEditor,s=window.wp.components,b=window.wp.element,p=(0,l.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(n.Path,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"})),d=(0,l.createElement)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(n.Path,{d:"M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"})),m=(0,l.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(n.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})),u=window.wp.i18n,g=window.wp.serverSideRender,w=t.n(g);const{name:v}=i;(e=>{const{metadata:o,settings:t,name:l}=e;(0,a.registerBlockType)({name:l,...o},t)})({name:v,metadata:i,settings:{icon:r,example:{attributes:{employerID:"123[, 456, 789]"}},edit:function({attributes:e,setAttributes:o}){const[t,n]=(0,b.useState)(!e.employerID),{blockLayout:a,columns:i,displayScope:g,displayDate:v,displayEmployer:y,displayExcerpt:h,employerID:f,itemsToShow:k,noJobsMessage:_,orderBy:E}=e;function j(t){return()=>{const l=e[t];o({[t]:!l})}}const C=(0,c.useBlockProps)();var x;if(t)return(0,l.createElement)("div",{...C},(0,l.createElement)(s.Placeholder,{icon:r,label:"Jobbnorge"},(0,l.createElement)("form",{onSubmit:function(e){e.preventDefault(),f&&(o({employerID:f}),n(!1))},className:"wp-block-dss-jobbnorge__placeholder-form"},window.wpJobbnorgeBlock&&window.wpJobbnorgeBlock.employers?(0,l.createElement)(s.SelectControl,{multiple:!0,value:f.split(","),onChange:e=>o({employerID:e.toString()}),options:(null!==(x=wpJobbnorgeBlock.employers)&&void 0!==x?x:[]).map((e=>{var o;return{label:e.label,value:e.value,disabled:null!==(o=e?.disabled)&&void 0!==o&&o}})),className:"wp-block-dss-jobbnorge__placeholder-input",help:(0,u.__)("Select employers to display. Ctrl-click (Windows) or Cmd-click (Mac) to select multiple employers. Alt-click (Windows) or Option-click (Mac) to select a range of employers.","wp-jobbnorge-block"),__nextHasNoMarginBottom:!0}):(0,l.createElement)(s.TextControl,{placeholder:(0,u.__)("Employer ID [,id2, id3, ..]","wp-jobbnorge-block"),value:f,onChange:e=>o({employerID:e}),className:"wp-block-dss-jobbnorge__placeholder-input"}),(0,l.createElement)(s.Button,{variant:"primary",type:"submit"},(0,u.__)("Save","wp-jobbnorge-block")))));const S=[{icon:p,title:(0,u.__)("Edit Jobbnorge URL","wp-jobbnorge-block"),onClick:()=>n(!0)},{icon:d,title:(0,u.__)("List view","wp-jobbnorge-block"),onClick:()=>o({blockLayout:"list"}),isActive:"list"===a},{icon:m,title:(0,u.__)("Grid view","wp-jobbnorge-block"),onClick:()=>o({blockLayout:"grid"}),isActive:"grid"===a}];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.BlockControls,null,(0,l.createElement)(s.ToolbarGroup,{controls:S})),(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,u.__)("Settings","wp-jobbnorge-block")},(0,l.createElement)(s.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Number of items","wp-jobbnorge-block"),value:k,onChange:e=>o({itemsToShow:e}),min:1,max:100,required:!0}),f.includes(",")&&(0,l.createElement)(s.RadioControl,{label:(0,u.__)("Order by","wp-jobbnorge-block"),selected:E,options:[{label:(0,u.__)("Deadline","wp-jobbnorge-block"),value:"Deadline"},{label:(0,u.__)("Employer","wp-jobbnorge-block"),value:"Employer"}],onChange:e=>o({orderBy:e})}),(0,l.createElement)(s.TextareaControl,{label:(0,u.__)("No jobs found message","wp-jobbnorge-block"),help:(0,u.__)("Message to display if no jobs are found","wp-jobbnorge-block"),value:_||(0,u.__)("There are no jobs at this time.","wp-jobbnorge-block"),onChange:e=>o({noJobsMessage:e})})),(0,l.createElement)(s.PanelBody,{title:(0,u.__)("Item","wp-jobbnorge-block")},(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Display employer","wp-jobbnorge-block"),checked:y,onChange:j("displayEmployer")}),(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Display excerpt","wp-jobbnorge-block"),checked:h,onChange:j("displayExcerpt")}),(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Display deadline","wp-jobbnorge-block"),checked:v,onChange:j("displayDate")}),(0,l.createElement)(s.ToggleControl,{label:(0,u.__)("Display scope","wp-jobbnorge-block"),checked:g,onChange:j("displayScope")})),"grid"===a&&(0,l.createElement)(s.PanelBody,{title:(0,u.__)("Grid view","wp-jobbnorge-block")},(0,l.createElement)(s.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,u.__)("Columns","wp-jobbnorge-block"),value:i,onChange:e=>o({columns:e}),min:2,max:6,required:!0}))),(0,l.createElement)("div",{...C},(0,l.createElement)(s.Disabled,null,(0,l.createElement)(w(),{block:"dss/jobbnorge",attributes:e,httpMethod:"POST"}))))}}})}},t={};function l(e){var n=t[e];if(void 0!==n)return n.exports;var r=t[e]={exports:{}};return o[e](r,r.exports,l),r.exports}l.m=o,e=[],l.O=function(o,t,n,r){if(!t){var a=1/0;for(b=0;b<e.length;b++){t=e[b][0],n=e[b][1],r=e[b][2];for(var i=!0,c=0;c<t.length;c++)(!1&r||a>=r)&&Object.keys(l.O).every((function(e){return l.O[e](t[c])}))?t.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(b--,1);var s=n();void 0!==s&&(o=s)}}return o}r=r||0;for(var b=e.length;b>0&&e[b-1][2]>r;b--)e[b]=e[b-1];e[b]=[t,n,r]},l.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(o,{a:o}),o},l.d=function(e,o){for(var t in o)l.o(o,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={410:0,308:0};l.O.j=function(o){return 0===e[o]};var o=function(o,t){var n,r,a=t[0],i=t[1],c=t[2],s=0;if(a.some((function(o){return 0!==e[o]}))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var b=c(l)}for(o&&o(t);s<a.length;s++)r=a[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(b)},t=self.webpackChunkjobbnorge_block=self.webpackChunkjobbnorge_block||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var n=l.O(void 0,[308],(function(){return l(938)}));n=l.O(n)}();