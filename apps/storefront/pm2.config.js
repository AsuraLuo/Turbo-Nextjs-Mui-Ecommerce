module.exports = {
  apps: [
    {
      name: 'Ocommerce Storefront',
      exec_mode: 'cluster',
      instances: 'max',
      args: 'start',
      script: './node_modules/next/dist/bin/next',
      // script: './dist/server.js',
      watch: false,
      autorestart: true,
      combine_logs: true,
      exp_backoff_restart_delay: 100,
      ignore_watch: ['node_modules'],
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      // pid_file: './pm2/pid/ocommerce_storefront_pm.pid',
      error_file: './pm2/logs/ocommerce_storefront_err.log'
    }
  ]
}
