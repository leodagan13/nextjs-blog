import { AgentConfig } from '@/types/agent';

export const agents: AgentConfig[] = [
  {
    "id": "agent_1751851652568",
    "name": "testnamer",
    "category": "categorytester",
    "role": "test",
    "goal": "write a concise blog article about the prompted subject",
    "backstory": "Helpful AI assistant",
    "tools": [],
    "llm": "openai/gpt-3.5-turbo"
  },
  {
    "id": "agent_1752088301455",
    "name": "name2test",
    "category": "custom",
    "role": "role2test",
    "goal": "goal2test",
    "backstory": "Helpful AI assistant",
    "tools": [],
    "llm": "openai/gpt-4o-mini"
  },
  {
    "id": "agent_1752093020631",
    "name": "Content Creation Agent",
    "category": "content",
    "role": "Content Creation Specialist",
    "goal": "Help with content creation tasks",
    "backstory": "Expert in content creation",
    "tools": [],
    "llm": "anthropic/claude-3-5-sonnet-20241022"
  }
];
