import readline from 'readline';

const CYAN = '\x1b[36m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

type ConverseFn = (message: string) => Promise<unknown>;

export function startChat(converse: ConverseFn): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  process.stdout.write('\x1Bc');
  console.log('=== Chat - Analista de Negócios ===');
  console.log('Digite sua mensagem e pressione Enter. Ctrl+C para sair.\n');

  function prompt() {
    process.stdout.write(`${CYAN}Você:${RESET} `);
  }

  async function handleLine(line: string) {
    const trimmed = line.trim();

    if (!trimmed) {
      prompt();
      return;
    }

    process.stdout.write('Aguardando resposta...\n');

    try {
      const response = await converse(trimmed);
      console.log(`\n${GREEN}Bot:${RESET} ${String(response)}`);
    } catch (err) {
      console.error(`\nErro: ${String(err)}`);
    }

    console.log('');
    prompt();
  }

  rl.on('line', handleLine);
  rl.on('close', () => process.exit(0));

  prompt();
}
