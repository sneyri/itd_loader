import { ITDClient } from "itd-sdk-js";
import dotenv from 'dotenv';

dotenv.config();

const client = new ITDClient();
const id = "" // Айди картинки

client.updateProfile(null, null, null, id)
