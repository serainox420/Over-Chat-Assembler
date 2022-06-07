// Remote feature for auto-append for Assembler.py
// Enable as "RecvMessage" Event in JSM
// Any message sent by <NICK1> with "PFX1" prefix will be appended.
// <Serainox420> $ <Value> will add <Value> to Assembly.js

const str = Chat.getHistory().getRecvLine(0).getText().getString()    
const words = str.split(' ')

var NICK1 = '<Serainox420> '
var PFX1 = '$ ' // prefix for worker 1

if (event.text.getString().includes(NICK1 + PFX1))  // <Silverainox> $ <value_to_parse>
JsMacros.runScript("Assembler-RUN.js")
