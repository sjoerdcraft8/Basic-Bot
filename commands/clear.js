const discord = require("discord.js");

module.exports.run = async (bot, message, args, ) => {

    if (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("je hebt geen toesteming");

    if (!args[0]) return message.reply("geef een aantal op");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;
        message.channel.bulkDelete(amount).then(() => {
        });

    } else {
        return message.channel.send("geef een getal op");
    }

}
module.exports.help = {
    name: "clear"
}

