(function () {
  var contentApi = window.__SyllabusContent || {};
  var { newTopic, dedupeTopics, copyTopics, copySection, syntheticSection, topicText } = contentApi;

  if (!newTopic || !dedupeTopics || !copyTopics || !copySection || !syntheticSection || !topicText) {
    throw new Error('Syllabus content helpers failed to load before syllabus layout.');
  }

  function buildStructuredData() {
    return [
      {
        id: 0,
        kind: 'Orientation',
        scope: 'Foundational intuitions — what models are, how they generate, what agents do, and how systems are built around them',
        title: 'Mental Models',
        color: '#2DABB1',
        bg: '#E0F5F5',
        sections: [
          copySection('Mental Models', 'What a model is'),
          copySection('Mental Models', 'How models learn', {
            prerequisites: ['What a model is']
          }),
          copySection('Mental Models', 'How models generate', {
            prerequisites: ['What a model is']
          }),
          copySection('Mental Models', 'Tokens, context, and the input surface', {
            prerequisites: ['How models generate']
          }),
          copySection('Mental Models', 'Prompting as steering', {
            prerequisites: ['Tokens, context, and the input surface']
          }),
          copySection('Mental Models', 'Reasoning, planning, and model limitations', {
            prerequisites: ['Prompting as steering']
          }),
          copySection('Mental Models', 'Agents, tools, and autonomy', {
            prerequisites: ['Reasoning, planning, and model limitations']
          }),
          copySection('Mental Models', 'Memory, retrieval, and state', {
            prerequisites: ['Agents, tools, and autonomy']
          }),
          copySection('Mental Models', 'The system around the model', {
            prerequisites: ['Agents, tools, and autonomy', 'Memory, retrieval, and state']
          })
        ]
      },
      {
        id: 1,
        kind: 'Foundations',
        scope: 'Model internals, selection, inference, and prompt management for production',
        title: 'Foundation Models',
        color: '#7F77DD',
        bg: '#EEEDFE',
        sections: [
          copySection('Foundation Models', 'Model internals for system design'),
          copySection('Foundation Models', 'Model selection', {
            prerequisites: ['Model internals for system design']
          }),
          copySection('Foundation Models', 'Inference optimization', {
            prerequisites: ['Model internals for system design']
          }),
          copySection('Foundation Models', 'Structured output', {
            prerequisites: ['Model selection']
          }),
          copySection('Foundation Models', 'Embedding and retrieval models', {
            prerequisites: ['Model internals for system design']
          }),
          copySection('Foundation Models', 'Prompt engineering for production', {
            prerequisites: ['Structured output']
          }),
          copySection('Foundation Models', 'Reasoning models', {
            prerequisites: ['Model selection', 'Inference optimization']
          })
        ]
      },
      {
        id: 2,
        kind: 'Cognition',
        scope: 'Agent loops, planning, reasoning, and self-correction',
        title: 'Reasoning & Intelligence',
        color: '#1D9E75',
        bg: '#E1F5EE',
        sections: [
          copySection('Reasoning & Intelligence', 'The agent loop'),
          copySection('Reasoning & Intelligence', 'Planning and decomposition', {
            prerequisites: ['The agent loop']
          }),
          copySection('Reasoning & Intelligence', 'Reasoning patterns', {
            prerequisites: ['The agent loop']
          }),
          copySection('Reasoning & Intelligence', 'Reflection and self-correction', {
            prerequisites: ['Reasoning patterns', 'Planning and decomposition']
          }),
          copySection('Reasoning & Intelligence', 'Metacognition', {
            prerequisites: ['Reflection and self-correction']
          }),
          copySection('Reasoning & Intelligence', 'Agent architectures', {
            prerequisites: ['The agent loop', 'Planning and decomposition', 'Reasoning patterns']
          })
        ]
      },
      {
        id: 3,
        kind: 'State',
        scope: 'Memory, retrieval, chunking, RAG, and knowledge stores',
        title: 'Memory & Knowledge',
        color: '#378ADD',
        bg: '#E6F1FB',
        sections: [
          copySection('Memory & Knowledge', 'Memory architecture'),
          copySection('Memory & Knowledge', 'Retrieval fundamentals', {
            prerequisites: ['Memory architecture']
          }),
          copySection('Memory & Knowledge', 'Chunking and indexing', {
            prerequisites: ['Retrieval fundamentals']
          }),
          copySection('Memory & Knowledge', 'RAG architectures', {
            prerequisites: ['Retrieval fundamentals', 'Chunking and indexing']
          }),
          copySection('Memory & Knowledge', 'Knowledge stores', {
            prerequisites: ['Retrieval fundamentals']
          })
        ]
      },
      {
        id: 4,
        kind: 'Action',
        scope: 'Tool design, protocols, interaction patterns, and agent identity',
        title: 'Agency & Tool Use',
        color: '#EF9F27',
        bg: '#FAEEDA',
        sections: [
          copySection('Agency & Tool Use', 'Tool design discipline'),
          copySection('Agency & Tool Use', 'Information tools', {
            prerequisites: ['Tool design discipline']
          }),
          copySection('Agency & Tool Use', 'Action tools', {
            prerequisites: ['Tool design discipline']
          }),
          copySection('Agency & Tool Use', 'Meta tooling', {
            prerequisites: ['Tool design discipline']
          }),
          copySection('Agency & Tool Use', 'Protocols and standards', {
            prerequisites: ['Tool design discipline']
          }),
          copySection('Agency & Tool Use', 'Interaction patterns', {
            prerequisites: ['Tool design discipline']
          }),
          copySection('Agency & Tool Use', 'Agent identity and authentication', {
            prerequisites: ['Protocols and standards']
          })
        ]
      },
      {
        id: 5,
        kind: 'Coordination',
        scope: 'When to use multi-agent, orchestration patterns, and failure modes',
        title: 'Multi-Agent Systems',
        color: '#D4537E',
        bg: '#FBEAF0',
        sections: [
          copySection('Multi-Agent Systems', 'When multi-agent is wrong'),
          copySection('Multi-Agent Systems', 'Orchestration patterns', {
            prerequisites: ['When multi-agent is wrong']
          }),
          copySection('Multi-Agent Systems', 'Coordination mechanics', {
            prerequisites: ['Orchestration patterns']
          }),
          copySection('Multi-Agent Systems', 'Frameworks', {
            prerequisites: ['Orchestration patterns', 'Coordination mechanics']
          }),
          copySection('Multi-Agent Systems', 'Failure modes at scale', {
            prerequisites: ['Coordination mechanics', 'Frameworks']
          })
        ]
      },
      {
        id: 6,
        kind: 'Runtime',
        scope: 'Serving, hardening, caching, deployment, cost, and API design',
        title: 'Infrastructure & Deployment',
        color: '#888780',
        bg: '#F1EFE8',
        sections: [
          copySection('Infrastructure & Deployment', 'Model serving'),
          copySection('Infrastructure & Deployment', 'Production hardening', {
            prerequisites: ['Model serving']
          }),
          copySection('Infrastructure & Deployment', 'Caching and performance', {
            prerequisites: ['Model serving']
          }),
          copySection('Infrastructure & Deployment', 'Data infrastructure', {
            prerequisites: ['Model serving']
          }),
          copySection('Infrastructure & Deployment', 'Deployment patterns', {
            prerequisites: ['Production hardening']
          }),
          copySection('Infrastructure & Deployment', 'Cost engineering', {
            prerequisites: ['Model serving', 'Production hardening']
          }),
          copySection('Infrastructure & Deployment', 'API design for AI services', {
            prerequisites: ['Production hardening', 'Deployment patterns']
          }),
          copySection('Infrastructure & Deployment', 'Fine-tuning and adaptation', {
            prerequisites: ['Model serving']
          })
        ]
      },
      {
        id: 7,
        kind: 'Constraints',
        scope: 'Threats, defenses, governance, and privacy for agent systems',
        title: 'Safety, Security & Governance',
        color: '#E24B4A',
        bg: '#FCEBEB',
        sections: [
          copySection('Safety, Security & Governance', 'Threat landscape'),
          copySection('Safety, Security & Governance', 'Defense mechanisms', {
            prerequisites: ['Threat landscape']
          }),
          copySection('Safety, Security & Governance', 'Governance and compliance', {
            prerequisites: ['Defense mechanisms']
          }),
          copySection('Safety, Security & Governance', 'Privacy and data protection', {
            prerequisites: ['Defense mechanisms']
          })
        ]
      },
      {
        id: 8,
        kind: 'Measurement',
        scope: 'Evaluation, observability, debugging, CI/CD, and application patterns',
        title: 'Evaluation, Observability & Applications',
        color: '#639922',
        bg: '#EAF3DE',
        sections: [
          copySection('Evaluation, Observability & Applications', 'Evaluation frameworks'),
          copySection('Evaluation, Observability & Applications', 'Observability', {
            prerequisites: ['Evaluation frameworks']
          }),
          copySection('Evaluation, Observability & Applications', 'Debugging and testing', {
            prerequisites: ['Evaluation frameworks', 'Observability']
          }),
          copySection('Evaluation, Observability & Applications', 'CI/CD for AI systems', {
            prerequisites: ['Debugging and testing']
          }),
          copySection('Evaluation, Observability & Applications', 'Performance engineering', {
            prerequisites: ['Observability']
          }),
          copySection('Evaluation, Observability & Applications', 'Application patterns', {
            prerequisites: ['Evaluation frameworks']
          })
        ]
      }
    ];
  }

  window.__SyllabusContent = {
    ...contentApi,
    buildStructuredData
  };
}());
