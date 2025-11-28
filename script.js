* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  background: radial-gradient(circle at top, #1f2937 0, #020617 45%, #000 100%);
  color: #e5e7eb;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 24px;
}

.app {
  width: 100%;
  max-width: 820px;
}

.header {
  margin-bottom: 20px;
  text-align: center;
}

.header h1 {
  font-size: 1.9rem;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 0.96rem;
  color: #9ca3af;
}

.progress-text {
  margin-top: 6px;
  font-size: 0.85rem;
  color: #6b7280;
}

.card {
  background: rgba(15, 23, 42, 0.95);
  border-radius: 14px;
  padding: 22px 24px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.18);
  backdrop-filter: blur(8px);
}

.game {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

#scenario-title {
  font-size: 1.25rem;
  margin-bottom: 6px;
}

#scenario-description {
  font-size: 0.98rem;
  color: #e5e7eb;
  margin-bottom: 18px;
  line-height: 1.45;
}

.choices {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 14px;
}

.btn {
  padding: 11px 14px;
  border-radius: 9px;
  border: 1px solid #1f2937;
  background: #020617;
  color: #e5e7eb;
  cursor: pointer;
  text-align: left;
  transition:
    background 0.15s ease,
    transform 0.05s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;
  font-size: 0.95rem;
}

.btn:hover:not(.disabled) {
  background: #111827;
  border-color: #3b82f6;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.55);
}

.btn:active:not(.disabled) {
  transform: translateY(1px);
  box-shadow: none;
}

.btn.primary {
  width: 100%;
  text-align: center;
  margin-top: 4px;
  border-color: #2563eb;
  background: #1d4ed8;
}

.btn.primary:hover:not(.disabled) {
  background: #2563eb;
  border-color: #3b82f6;
}

.btn.disabled {
  opacity: 0.6;
  cursor: default;
  box-shadow: none;
}

.outcome {
  margin-top: 10px;
  padding: 11px 12px;
  border-radius: 9px;
  background: #020617;
  border: 1px solid #1f2937;
  font-size: 0.9rem;
  color: #cbd5f5;
  line-height: 1.4;
}

.hidden {
  display: none;
}

#result-title {
  font-size: 1.25rem;
  margin-bottom: 6px;
}

#result-description {
  font-size: 0.95rem;
  color: #d1d5db;
  margin-bottom: 12px;
  line-height: 1.45;
}

.stats-list {
  list-style: none;
  margin-top: 6px;
  margin-bottom: 10px;
}

.stats-list li {
  font-size: 0.9rem;
  padding: 3px 0;
  color: #e5e7eb;
}

.share-hint {
  margin-top: 12px;
  font-size: 0.84rem;
  color: #9ca3af;
}

/* Mobile tweaks */
@media (max-width: 600px) {
  body {
    padding: 12px;
  }

  .card {
    padding: 18px 16px;
  }

  #scenario-title {
    font-size: 1.15rem;
  }

  .btn {
    font-size: 0.9rem;
  }
}
