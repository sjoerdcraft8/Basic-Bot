const discord = require("discord.js")

module.exports.run = async (bot, message, args, ) => {
    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if (!banUser) return message.channel.send("de gebruiker is niet gevonden");

    var reason = arguments.join(" ").slice(22);

    if (message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("sorry jij kunt dit niet doen!");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("jij kunt deze persoon niet banen!")

    var ban = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("#ff0000")
        .addField("baned gebruiker", banUser)
        .addField("reden", reason);

    var banChannel = message.guild.channels("name", "straffen");

    if (!banChannel) return message.guild.send("het kanaal straffen bestaat niet");

    message.guild.member(banUser, ban(reason))

    banChannel.send(ban)

    return;
}

module.exports.help = {
    name: "ban"
}