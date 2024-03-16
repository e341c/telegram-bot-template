import { Markup, Telegraf } from "telegraf"
import { Command } from "./command.class"
import { IBotContext } from "../context/context.interface"

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }

    handle(): void {
        this.bot.start((ctx) => {
            console.log(ctx.session)
            ctx.telegram.sendMessage(
                ctx.message.chat.id,
                "Template for telegram bot",
                Markup.keyboard([Markup.button.pay("Button1")])
                // Markup.inlineKeyboard([Markup.button.callback("Поплнить баланс", "top_up_balance")])
            )
        })
    }
}
