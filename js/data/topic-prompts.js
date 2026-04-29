(function () {
  function buildPrompt(lines) {
    return lines.join('\n');
  }

  // Reserved for optional hand-authored study-prompt overrides keyed by topic id or visible topic text.
  // With the rewritten brief-config guides, generated prompts are sufficient for all topics.
  window.TopicPromptOverrides = Object.freeze({
  });
}());
