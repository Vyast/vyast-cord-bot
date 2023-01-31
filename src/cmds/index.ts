import { type SlashCommand } from "@/types/discord";
import Ping from "./misc/ping";
import SendWelcomeEmbed from "./util/send-welcome-embed";

export const Commands: SlashCommand[] = [Ping, SendWelcomeEmbed];
