module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: ✨ Features | 新功能'
    },
    {
      value: 'fix',
      name: 'fix: 🐛 Bug Fixes | Bug 修复'
    },
    {
      value: 'docs',
      name: 'docs: ✏️ Documentation | 文档'
    },
    {
      value: 'style',
      name: 'style: 💄 Styles | 风格'
    },
    {
      value: 'refactor',
      name: 'refactor: ♻️ Code Refactoring | 代码重构'
    },
    {
      value: 'perf',
      name: 'perf: ⚡ Performance Improvements | 性能优化'
    },
    {
      value: 'test',
      name: 'test: ✅ Tests | 测试'
    },
    {
      value: 'chore',
      name: 'chore: 🚀 Chore | 构建/工程依赖/工具'
    },
    {
      value: 'revert',
      name: 'revert: ⏪ Revert | 回退'
    },
    {
      value: 'build',
      name: 'build: 📦‍ Build System | 打包构建'
    }
  ],
  messages: {
    type: "Select the type of change that you're commiting: (Use arrow keys)",
    customScope: 'Please enter the modification range (optional):',
    subject: 'Please briefly describe the submission (required):',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    footer: 'Please enter the issue to close (optional):',
    confirmCommit: 'Are you sure you want to proceed with the commit above? (y/n/e/h)'
  },
  skipQuestions: [],
  subjectLimit: 100
}
