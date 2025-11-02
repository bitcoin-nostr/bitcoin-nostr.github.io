# Bitcoin Nostr Education Platform

<div align="center">
  <img src="public/bitcoin.png" alt="Bitcoin" width="80" height="80" />
  <img src="public/nostr.png" alt="Nostr" width="80" height="80" />
</div>

<div align="center">
  <h2>Learn Bitcoin & Nostr, Unlock Freedom</h2>
  <p>Master Bitcoin and Nostr with 5-minute lessons. Pay only for what you learn with Bitcoin Lightning.</p>
  
  [![Deploy](https://github.com/bitcoin-nostr/bitcoin-nostr.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/bitcoin-nostr/bitcoin-nostr.github.io/actions/workflows/deploy.yml)
  [![Test](https://github.com/bitcoin-nostr/bitcoin-nostr.github.io/actions/workflows/test.yml/badge.svg)](https://github.com/bitcoin-nostr/bitcoin-nostr.github.io/actions/workflows/test.yml)
</div>

## 🎯 What is Bitcoin Nostr?

Bitcoin Nostr is a comprehensive educational platform designed to teach Bitcoin and Nostr protocols through interactive, bite-sized lessons. Built with React, TypeScript, and powered by the Lightning Network for payments.

## ✨ Features

- **🕐 5-Minute Lessons**: Perfect for busy schedules
- **⚡ Lightning Payments**: Pay with sats, no subscriptions
- **📚 Progressive Learning**: From basics to mastery
- **🌍 Multilingual**: English, Persian (فارسی), Arabic (العربية)
- **🎮 Interactive Quizzes**: Test your knowledge
- **📱 Responsive Design**: Learn on any device
- **🔐 Nostr Integration**: Decentralized identity and payments

## 🚀 Live Demo

Visit the live application: [bitcoin-nostr.github.io](https://bitcoin-nostr.github.io)

## 🎓 Learning Path

### Bitcoin Fundamentals
- **A1**: Bitcoin Basics - What is money? Fiat problems, Bitcoin properties
- **A2**: Bitcoin Fundamentals - Deep dive into Bitcoin technology
- **C1**: Advanced Bitcoin - Lightning Network, advanced concepts

### Nostr Protocol  
- **B1**: Nostr Basics - Decentralized social protocols
- **B2**: Nostr Applications - Building and using Nostr apps
- **C2**: Bitcoin & Nostr Master - Complete ecosystem mastery

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: Zustand
- **Internationalization**: i18next
- **Payments**: Bitcoin Lightning Network (NIP-57 Zaps)
- **Identity**: Nostr Protocol (NIP-01, NIP-07)
- **Testing**: Vitest, Testing Library
- **Deployment**: GitHub Pages

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/bitcoin-nostr/bitcoin-nostr.github.io.git
cd bitcoin-nostr.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
VITE_APP_NAME=Bitcoin Nostr
VITE_APP_PUBKEY=npub1your_app_pubkey_here
VITE_RELAYS=wss://relay.damus.io,wss://nos.lol,wss://relay.nostr.band
VITE_PAYMENT_MODE=nostr-first
```

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for details.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Website**: [bitcoin-nostr.github.io](https://bitcoin-nostr.github.io)
- **GitHub**: [github.com/bitcoin-nostr](https://github.com/bitcoin-nostr)
- **Nostr**: Follow us on Nostr for updates

## 💡 Learn More

- [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf)
- [Nostr Protocol](https://github.com/nostr-protocol/nostr)
- [Lightning Network](https://lightning.network/)

---

<div align="center">
  <strong>Building the future of Bitcoin and Nostr education 🚀</strong>
</div>