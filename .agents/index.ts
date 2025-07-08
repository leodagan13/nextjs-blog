import { AgentConfig } from '@/types/agent';

export const agents: AgentConfig[] = [
  {
    "id": "agent_1751851652568",
    "name": "testname",
    "category": "testcategory",
    "role": "tester",
    "goal": "the prompt contains a number, write this exact amount of time the word \"test\"",
    "backstory": "Helpful AI assistant",
    "tools": [],
    "llm": "anthropic/claude-3-5-sonnet-20241022"
  }
];
