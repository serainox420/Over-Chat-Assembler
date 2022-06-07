// Each line is appended manually by receiver side.
JsMacros.runScript("Assembler.py")
Client.waitTick(10)
World.playSound("minecraft:block.anvil.use", 100,1)
Chat.log("Line appended...")
Client.waitTick(50)
Chat.say(".clear-chat")
