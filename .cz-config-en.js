module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: A new feature'
    },
    {
      value: 'fix',
      name: 'fix: A bug fix'
    },
    {
      value: 'docs',
      name: 'docs: Documentation only changes'
    },
    {
      value: 'style',
      name: 'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name: 'perf: A code change that improves performance'
    },
    {
      value: 'test',
      name: 'test: Adding missing tests'
    },
    {
      value: 'chore',
      name: 'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation'
    },
    {
      value: 'revert',
      name: 'revert: revert to a commit'
    },
    {
      value: 'build',
      name: 'build: pack'
    }
  ],
  messages: {
    type: "Select the type of change that you're commiting: (Use arrow keys)",
    customScope: 'Please enter the modification range (optional):',
    subject: 'Please briefly describe the submission (required):',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    footer: 'Please enter the issue to close (optional):',
    confirmCommit:
      'Are you sure you want to proceed with the commit above? (y/n/e/h)'
  },
  skipQuestions: [],
  subjectLimit: 100
}
