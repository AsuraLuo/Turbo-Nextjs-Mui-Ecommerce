## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Generate SSL

```bash
1. mkdir keys && cd keys

2. mkcert localhost 127.0.0.1

3. rename file name
  localhost+1.pem => nextjs-cert.pem
  localhost+1-key.pem => nextjs-key.pem

4. mkcert -install
```
