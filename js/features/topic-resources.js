(function () {  const officialResourceMatchers = [
    { pattern: /\bMCP\b|\bModel Context Protocol\b/i, label: 'Model Context Protocol docs', url: 'https://modelcontextprotocol.io/introduction' },
    { pattern: /\bA2A\b|\bAgent2Agent\b/i, label: 'A2A protocol docs', url: 'https://google.github.io/A2A/' },
    { pattern: /\bOpenAI Agents SDK\b/i, label: 'OpenAI Agents SDK docs', url: 'https://openai.github.io/openai-agents-python/' },
    { pattern: /\bOpenAI\b|\bGPT-4o\b|\bGPT-4V\b|\bCodex\b|\bRealtime API\b/i, label: 'OpenAI docs', url: 'https://platform.openai.com/docs/overview' },
    { pattern: /\bAnthropic\b|\bClaude\b/i, label: 'Anthropic docs', url: 'https://docs.anthropic.com/' },
    { pattern: /\bGoogle ADK\b|\bAgent Development Kit\b/i, label: 'Google ADK docs', url: 'https://adk.dev/' },
    { pattern: /\bGemini\b|\bGoogle ADK\b|\bProject Mariner\b/i, label: 'Google AI docs', url: 'https://ai.google.dev/' },
    { pattern: /\bLangChain\b|\bLangGraph\b/i, label: 'LangChain docs', url: 'https://docs.langchain.com/' },
    { pattern: /\bLlamaIndex\b/i, label: 'LlamaIndex docs', url: 'https://docs.llamaindex.ai/' },
    { pattern: /\bAutoGen\b/i, label: 'Microsoft AutoGen docs', url: 'https://microsoft.github.io/autogen/' },
    { pattern: /\bSemantic Kernel\b/i, label: 'Semantic Kernel docs', url: 'https://learn.microsoft.com/en-us/semantic-kernel/overview/' },
    { pattern: /\bCrewAI\b/i, label: 'CrewAI docs', url: 'https://docs.crewai.com/' },
    { pattern: /\bPydanticAI\b/i, label: 'PydanticAI docs', url: 'https://ai.pydantic.dev/' },
    { pattern: /\bHaystack\b/i, label: 'Haystack docs', url: 'https://docs.haystack.deepset.ai/' },
    { pattern: /\bvLLM\b/i, label: 'vLLM docs', url: 'https://docs.vllm.ai/' },
    { pattern: /\bOllama\b/i, label: 'Ollama docs', url: 'https://ollama.com/' },
    { pattern: /\bllama\.cpp\b/i, label: 'llama.cpp project', url: 'https://github.com/ggerganov/llama.cpp' },
    { pattern: /\bQdrant\b/i, label: 'Qdrant docs', url: 'https://qdrant.tech/documentation/' },
    { pattern: /\bWeaviate\b/i, label: 'Weaviate docs', url: 'https://weaviate.io/developers/weaviate' },
    { pattern: /\bPinecone\b/i, label: 'Pinecone docs', url: 'https://docs.pinecone.io/' },
    { pattern: /\bNeo4j\b/i, label: 'Neo4j docs', url: 'https://neo4j.com/docs/' },
    { pattern: /\bDocker\b/i, label: 'Docker docs', url: 'https://docs.docker.com/' },
    { pattern: /\bKubernetes\b/i, label: 'Kubernetes docs', url: 'https://kubernetes.io/docs/home/' },
    { pattern: /\bOpenTelemetry\b/i, label: 'OpenTelemetry docs', url: 'https://opentelemetry.io/docs/' },
    { pattern: /\bNIST AI RMF\b/i, label: 'NIST AI RMF', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    { pattern: /\bEU AI Act\b/i, label: 'EU AI Act overview', url: 'https://artificialintelligenceact.eu/' },
    { pattern: /\bOWASP Agentic AI Top 10\b/i, label: 'OWASP Agentic AI Top 10', url: 'https://genai.owasp.org/' }
  ];

  function dedupeResourceLinks(resources, limit) {
    const seen = new Set();
    const result = [];

    resources.forEach(resource => {
      if (!resource || !resource.url || seen.has(resource.url)) {
        return;
      }

      seen.add(resource.url);
      result.push({ label: resource.label, url: resource.url });
    });

    return typeof limit === 'number' ? result.slice(0, limit) : result;
  }

  function buildSuggestedTopicResources(entry) {
    const query = encodeURIComponent(entry.text);
    const scopedQuery = encodeURIComponent(`${entry.text} ${entry.section.title}`);
    const matchText = `${entry.text} ${entry.section.title} ${entry.layer.title}`;

    const officialLinks = officialResourceMatchers
      .filter(resource => resource.pattern.test(matchText))
      .slice(0, 2)
      .map(resource => ({ label: resource.label, url: resource.url }));

    return dedupeResourceLinks([
      ...officialLinks,
      { label: 'Wikipedia overview', url: `https://en.wikipedia.org/w/index.php?search=${query}` },
      { label: 'Britannica overview', url: `https://www.britannica.com/search?query=${query}` },
      { label: 'arXiv papers', url: `https://arxiv.org/search/?query=${query}&searchtype=all&abstracts=show&order=-announced_date_first&size=25` },
      { label: 'Semantic Scholar', url: `https://www.semanticscholar.org/search?q=${scopedQuery}&sort=relevance` },
      { label: 'Google Scholar', url: `https://scholar.google.com/scholar?q=${scopedQuery}` },
      { label: 'Papers with Code', url: `https://paperswithcode.com/search?q=${query}` }
    ]);
  }
  window.__SyllabusTopicResources = {
    buildSuggestedTopicResources
  };
}());
