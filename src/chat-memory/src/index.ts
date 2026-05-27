import dotenv from "dotenv";
dotenv.config()

import conversation from 'agents/chat-memory'
import {startChat} from 'chat'

startChat(conversation)