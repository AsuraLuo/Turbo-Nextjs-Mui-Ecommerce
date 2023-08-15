### Nginx Configuration

Add virtual host profile

```nginx
server {
    listen 443 ssl;
    ssl_certificate         /etc/nginx/conf.d/ssl/pwa/pwa.crt;
    ssl_certificate_key     /etc/nginx/conf.d/ssl/pwa/pwa.key;
    ssl_protocols           TLSv1.1 TLSv1.2;
    server_name www.pwa.com;
    index  index.php index.html index.htm;

    location / {
      proxy_pass  http://127.0.0.1:3000;
    }

    location /graphql {
      proxy_pass https://www.pwa.com/graphql;
    }
    access_log /var/log/nginx/fe.pwa.access.log;
    error_log /var/log/nginx/fe.pwa.error.log;
}

server {
  listen 80;
  server_name www.pwa.com;
  return 301 https://www.pwa.com$request_uri;
}
```
