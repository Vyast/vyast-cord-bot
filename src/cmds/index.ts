import { type SlashCommand } from "@/types/discord";
import Ping from "./misc/ping";
import Role from "./role";

export const Commands: SlashCommand[] = [Ping, Role];
