import { ApplicationCommandOptionType, CommandInteraction, EmbedBuilder, User } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";
import { ErrorHandler } from "../utils/error_handler.js";

@Discord()
export class Command {
  @Slash({name: "pp", description: "Measure someone's PP", dmPermission: true })
  async command(
    @SlashOption({
      name: "user",
      description: "User to rate",
      required: false,
      type: ApplicationCommandOptionType.User,
    })
    user: User | undefined,
    interaction: CommandInteraction
  ) {
    try {
      const _user = user ? user : interaction.user
      var pp = Number((Math.random() * 35).toFixed(2));;
      if (["424598691542990858", "287769937139990529", "969432021317349416", "609551301730369547", "382196113681416203"].includes(_user.id.toString())) {
        pp = 9999999999999999999999999999999999999999;
      }

      const embed = new EmbedBuilder()
        .setDescription(
          `${_user} PP size is ${pp}cm (${(
            pp / 2.54
          ).toFixed(2)}inch)`
        )
        .setColor("#c4a7e7")
        .setTimestamp();
      interaction.reply({ embeds: [embed] });
    } catch (e) {
      await ErrorHandler(e, interaction);
    }
  }
}
