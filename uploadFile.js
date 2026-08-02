// Это скрипт загрузки картинки на сервер

import { ITDClient } from "itd-sdk-js";
import dotenv from 'dotenv';

dotenv.config();

const client = new ITDClient();
const filePath = "./" // Путь до картинки
const uploadUrl = await client.uploadFile(filePath);

console.log("URL: ", uploadUrl?.id)
