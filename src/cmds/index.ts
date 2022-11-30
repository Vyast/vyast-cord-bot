import { SlashCommand } from "../types/discord";
import Ping from "./misc/ping";
import Role from "./role";

const List: SlashCommand[] = [Ping, Role];

export default List;
