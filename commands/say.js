exports.run = async (client, message, args, level) => {
  let speakMsg = args.join(" ");
  if(!speakMsg) return message.reply("You must supply some text for me to say!");
  message.channel.send(speakMsg);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["speak"],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "Be the bot and speak!",
  usage: "say [text]"
};
