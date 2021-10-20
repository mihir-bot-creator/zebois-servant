let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if (message.content === "ping") {
  message.channel.send("pong")
}
if (message.content === "embed") {
  let embed = new Discord.MessageEmbed()
  .setTitle("This is embed title")
  .setDescription("This is embed description")
  .setColor("RANDOM")
  .setFooter("This is embed footer")
  message.channel.send(embed)
}
if (message.content === "hi") {
  message.channel.send("Hello" +"" + `<@${message.author.id}>`+ "!")
}
if (message.content === "tag") {
  "<@" + message.channel.send(`<@${message.author.id}>`)
 + ">"
}
})

client.login("process.env.BOT_TOKEN")
