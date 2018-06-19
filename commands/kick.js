const discord = require("discord.js")

module.exports.run = async (bot, message, args, ) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if (!kickUser) return message.channel.send("de gebruiker is niet gevonden");

    var reason = arguments.join(" ").slice(22);

    if (message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("sorry jij kunt dit niet doen!");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("jij kunt deze persoon niet kicken!")

    var kick = new discord.RichEmbed()
        .setDescription("kick")
        .setColor("#ff0000")
        .addField("kicked gebruiker", kickUser)
        .addField("reden", reason);

    var kickChannel = message.guild.channels("name", "straffen");

    if (!kickChannel) return message.guild.send("het kanaal straffen bestaat niet");

    message.guild.member(kickUser, kick(reason))

    kickChannel.send(kick)

    return;
}

module.exports.help = {
    name: "kick"
}