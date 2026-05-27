import { describe, expect, it, vi } from 'vitest'
import chatGPT from '../src/index.ts'

describe('eco-inteligente', () => {
  describe('Chat', () => {
    it('Deve retornar a mensagem enviada', async () => {
      const result = await chatGPT("Ola mundo!")
      expect(result.message.at(-1)?.content).eq("O mundo é feliz por sua educação!")
    })
  })
})
