# Jython JSM over chat assembler
str = Chat.getHistory().getRecvLine(0).getText().getString()
words = str.split(' ')
#A = words[0] +" "+ words[1] # Nick + Prefix
B = words[2]#+words[3]+words[4] # Prefix + Part 1  2  3
#C = words[1]+words[2]+words[3]
#NXT = ' || ' # Next argument
#NWL = ' \n ' # Newline
with open('config/jsMacros/Macros/Assembly.js', 'a') as f: 
# f.write('Chat.say("'+B+'")') # Chat.say("B")
     #f.write(NWL + NXT)
     #f.write(B[2]+B[1])
    # Chat.log(B)
     f.write(B+'\n')
