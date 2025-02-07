module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [
      'core',
      'sdk',
      'frontend',
      'agent-portal',
      'registration',
      'avs',
      'graph',
      'context',
      'payments',
      'infra',
      'deps',
      'ci',
      'docs'
    ]],
    'scope-case': [2, 'always', 'kebab-case'],
    'type-enum': [2, 'always', [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test'
    ]]
  }
};
