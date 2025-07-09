import { AgentConfig } from '@/types/agent';

export const agents: AgentConfig[] = [
  {
    "id": "agent_1751851652568",
    "name": "testnamer",
    "category": "categorytest",
    "role": "test",
    "goal": "write a concise blog article about the prompted subject, 200 words max.",
    "backstory": "Helpful AI assistant",
    "tools": [],
    "llm": "anthropic/claude-3-5-sonnet-20241022"
  }
];
