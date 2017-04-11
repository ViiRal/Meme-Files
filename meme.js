// If you try to run this code, please follow everything *almost* exactly as how I do
const Discord = require("discord.js")
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Successfully logged in as ${bot.user.username}!`);
  console.log(`Ready to begin grinding Mee6 levels!`)
});

bot.on('message', msg => {
  if (msg.content === '/grindme') {
setInterval(function() {
      bot.guilds.find("name", "meme").channels.find("name", "general").sendMessage(`Cool kids only :100: :triumph: :joy: :ok_hand: xd`)
}, 60000); //time is in milliseconds, so 60,000 is = to 1 minute ;p
  } //that's pretty gay
})

bot.login("no leech plzxd")
//I'll show a tutorial on how to get a user token
