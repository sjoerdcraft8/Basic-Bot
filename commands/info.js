const discord = require("discord.js")

module.exports.run = async (bot, message, args, ) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbet = new discord.RichEmbed()
        .setDescription("discord bot info")
        .setThumbnail(botIcon)
        .setColor("#37fcbe")
        .addField("Bot naam", bot.user.username)
        .addField("gemaakt op", bot.user.createdAt);

    return message.channel.send(botEmbet);
}

module.exports.help = {
    name: "info"
}