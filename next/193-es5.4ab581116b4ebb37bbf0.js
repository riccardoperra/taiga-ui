(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{AXTI:function(n,t,e){"use strict";e.r(t),e.d(t,"Underline",(function(){return u}));var r=e("jgtz"),u=r.Mark.create({name:"underline",defaultOptions:{HTMLAttributes:{}},parseHTML:function(){return[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:function(n){return!!n.includes("underline")&&{}}}]},renderHTML:function(n){var t=n.HTMLAttributes;return["u",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:function(){return{setUnderline:function(){return function(n){return n.commands.setMark("underline")}},toggleUnderline:function(){return function(n){return n.commands.toggleMark("underline")}},unsetUnderline:function(){return function(n){return n.commands.unsetMark("underline")}}}},addKeyboardShortcuts:function(){var n=this;return{"Mod-u":function(){return n.editor.commands.toggleUnderline()}}}});t.default=u}}]);