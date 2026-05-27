import dotenv from "dotenv";
dotenv.config()

import { BaseMessage, HumanMessage } from "@langchain/core/messages";
import { Annotation, END, MemorySaver, messagesStateReducer, START, StateGraph } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import CONFIG from "CONFIG";
import systemPrompt from '../../prompts/systemprompt.json'

const memory = new MemorySaver()
const ChatMessageState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer:messagesStateReducer,
    default:()=>[]
  }),
  resposta: Annotation<string>()
})

const chatOpenAi = new ChatOpenAI({
  model: CONFIG.model,
  temperature: CONFIG.temperature,
  configuration:{
    apiKey: CONFIG.OPEN_ROUTER_API_KEY,
    baseURL: CONFIG.OPEN_ROUTER_URI
  }
})

export default async function conversation(message:string) {
  
  const config = {
    configurable:{thread_id: "session_id_0"}
  }
  
  const graph = new StateGraph(ChatMessageState)
    .addNode('chat', chat)
    .addEdge(START, 'chat')
    .addEdge('chat', END)
    .compile({checkpointer: memory})

  const result = await graph.invoke({messages: [new HumanMessage(message)]}, config)
  const chatMessage = result.resposta
  return chatMessage
  
}

async function chat(state:typeof ChatMessageState.State) {
  const system = JSON.stringify(systemPrompt)
  const humanMessage = new HumanMessage(state.messages.at(-1)?.content || "")

  const result = await chatOpenAi.invoke([system, humanMessage])

  return {resposta: result.content}
}