const discord = require("discord.js")

module.exports.run = async (bot, message, args, ) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("server info")
        .setColor("#37fcbe")
        .setThumbnail(icon)
        .addField("Bot naam", bot.user.username)
        .addField("je bent gejoined op", message.member.joinedAt)
        .addField("totaal members", message.guild.memberCount);

    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "serverinfo"
}