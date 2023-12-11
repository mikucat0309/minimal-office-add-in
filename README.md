# Minimal Office Add-in

## Requirement

- Excel
- Node.js

## Setup

1. Download mkcert

```sh
curl.exe -SsL -o mkcert.exe "https://github.com/FiloSottile/mkcert/releases/download/v1.4.4/mkcert-v1.4.4-windows-amd64.exe"
```

2. Install CA & generate self-signed certificates

```sh
.\mkcert -install
.\mkcert -cert-file localhost.pem -key-file localhost-key.pem localhost 127.0.0.1
```

3. Install tools

```sh
npm install -g live-server concurrently
```

## Usage

```sh
npm run start
```
