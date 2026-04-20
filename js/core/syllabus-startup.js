(function () {
  const state = {
    failed: false,
    message: '',
    details: []
  };

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeDetails(details) {
    const items = Array.isArray(details) ? details : [details];
    return items.map(function (item) {
      return String(item || '').trim();
    }).filter(Boolean);
  }

  function hideInteractiveRegions() {
    [
      'root',
      'search',
      'meta-bar',
      'status-legend',
      'resource-tools',
      'topic-status-picker',
      'hero-grid',
      'topic-brief',
      'collapse-button',
      'export-button',
      'scroll-top'
    ].forEach(function (id) {
      const node = document.getElementById(id);
      if (node) {
        node.hidden = true;
      }
    });
  }

  function updateTopicHeader(message) {
    const heroTitle = document.getElementById('hero-title');
    const heroSummary = document.getElementById('hero-summary');

    if (heroTitle && !heroTitle.textContent.trim()) {
      heroTitle.textContent = 'Page unavailable';
    }

    if (heroSummary && !heroSummary.textContent.trim()) {
      heroSummary.textContent = message;
    }
  }

  function renderStartupError() {
    if (!document.body) {
      return;
    }

    let panel = document.getElementById('startup-error');
    if (!panel) {
      panel = document.createElement('section');
      panel.id = 'startup-error';
      panel.className = 'startup-error';
      panel.setAttribute('role', 'alert');
      panel.setAttribute('aria-live', 'assertive');

      const shell = document.querySelector('.s');
      const anchor = shell ? shell.querySelector('.page-topbar, .header-row') : null;
      if (anchor) {
        anchor.insertAdjacentElement('afterend', panel);
      } else if (shell) {
        shell.prepend(panel);
      } else {
        document.body.prepend(panel);
      }
    }

    panel.innerHTML = [
      '<div class="startup-error-k">Startup issue</div>',
      '<h2 class="startup-error-title">' + escapeHtml(state.message) + '</h2>',
      state.details.length
        ? '<ul class="startup-error-list">' + state.details.map(function (detail) {
            return '<li>' + escapeHtml(detail) + '</li>';
          }).join('') + '</ul>'
        : '',
      '<p class="startup-error-note">Check the browser console if you need the underlying technical trace.</p>'
    ].join('');

    document.body.classList.add('startup-error-active');
    hideInteractiveRegions();
    updateTopicHeader(state.message);
  }

  function getState() {
    return {
      failed: state.failed,
      message: state.message,
      details: state.details.slice()
    };
  }

  function failStartup(message, details) {
    if (state.failed) {
      return getState();
    }

    state.failed = true;
    state.message = String(message || 'This page could not finish loading.').trim();
    state.details = normalizeDetails(details);

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderStartupError, { once: true });
    } else {
      renderStartupError();
    }

    return getState();
  }

  function hasFailure() {
    return state.failed;
  }

  window.__SyllabusStartup = {
    failStartup,
    hasFailure,
    getState
  };
}());