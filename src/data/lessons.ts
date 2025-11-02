import type { Lesson } from '@/types/catalog';

export const lessons: Lesson[] = [
  // Bitcoin Learning Path - B1 (Bitcoin Basics)
  {
    id: 'B1-L01',
    level: 'B1',
    moduleId: 'B1-M01',
    title: 'What is Money?',
    kind: 'concepts',
    isFree: true,
    priceSats: 0,
    durationMin: 5,
    description: 'Understand the fundamental properties and history of money',
    objectives: [
      'Define what money is and its key properties',
      'Learn about the evolution of money throughout history',
      'Understand the problems with traditional fiat currencies',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">What is Money?</h2>
          <p class="text-lg">Money is a medium of exchange that must possess certain key properties to function effectively.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-orange-50 rounded-lg">
              <span class="text-2xl font-bold text-orange-600">💰</span>
              <h3 class="font-semibold mt-2">Store of Value</h3>
              <p class="text-sm mt-1">Maintains purchasing power over time</p>
            </div>
            <div class="p-4 bg-blue-50 rounded-lg">
              <span class="text-2xl font-bold text-blue-600">🔄</span>
              <h3 class="font-semibold mt-2">Medium of Exchange</h3>
              <p class="text-sm mt-1">Accepted for goods and services</p>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
              <span class="text-2xl font-bold text-green-600">📏</span>
              <h3 class="font-semibold mt-2">Unit of Account</h3>
              <p class="text-sm mt-1">Standard measure of value</p>
            </div>
            <div class="p-4 bg-purple-50 rounded-lg">
              <span class="text-2xl font-bold text-purple-600">✂️</span>
              <h3 class="font-semibold mt-2">Divisible</h3>
              <p class="text-sm mt-1">Can be split into smaller units</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">💡 Key Insight:</p>
            <p>Throughout history, the best money has been the hardest to produce - from seashells to gold to Bitcoin!</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Which is NOT a property of good money?',
          options: ['Store of Value', 'Medium of Exchange', 'Easy to Counterfeit', 'Unit of Account'],
          correctAnswer: 2,
          explanation: 'Good money should be hard to counterfeit, not easy to counterfeit',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Money should maintain its purchasing power over time.',
          correctAnswer: 'true',
          explanation: 'A store of value means money should maintain its purchasing power over time',
        },
      ],
    },
  },
  {
    id: 'B1-L02',
    level: 'B1',
    moduleId: 'B1-M01',
    title: 'Fiat Money Problems',
    kind: 'theory',
    isFree: false,
    priceSats: 2000,
    durationMin: 5,
    description: 'Understand the fundamental issues with traditional fiat currencies',
    objectives: [
      'Learn about inflation and debasement',
      'Understand central banking and money printing',
      'Recognize the cantillon effect',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Problems with Fiat Money</h2>
          
          <div class="space-y-4">
            <div class="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 class="font-semibold text-lg mb-2 text-red-700">🏦 Central Bank Control</h3>
              <ul class="space-y-2 text-sm">
                <li><strong>Money printing:</strong> Central banks can create money out of thin air</li>
                <li><strong>Interest rate manipulation:</strong> Artificial control of borrowing costs</li>
                <li><strong>Economic distortions:</strong> Boom and bust cycles created by policy</li>
                <li><strong>Political influence:</strong> Monetary policy subject to government pressure</li>
              </ul>
            </div>

            <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 class="font-semibold text-lg mb-2 text-orange-700">📉 Inflation & Debasement</h3>
              <ul class="space-y-2 text-sm">
                <li><strong>Loss of purchasing power:</strong> Your savings buy less over time</li>
                <li><strong>Hidden tax:</strong> Inflation transfers wealth from savers to borrowers</li>
                <li><strong>Price distortions:</strong> Hard to distinguish real vs monetary inflation</li>
                <li><strong>Planning difficulties:</strong> Uncertain future value of money</li>
              </ul>
            </div>

            <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 class="font-semibold text-lg mb-2 text-yellow-700">⚖️ Cantillon Effect</h3>
              <div class="space-y-2 text-sm">
                <p><strong>First recipients benefit:</strong> New money reaches some people before others</p>
                <p><strong>Wealth transfer:</strong> Early recipients can spend before prices rise</p>
                <p><strong>Inequality:</strong> Systematic advantage to those closest to money creation</p>
                <p class="italic">Named after economist Richard Cantillon (1680s-1734)</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p class="font-semibold">💡 Real Example:</p>
            <p class="mt-2">Since 1971 (end of gold standard), the US dollar has lost over 85% of its purchasing power due to inflation!</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What is the Cantillon Effect?',
          options: ['Lower interest rates', 'New money benefits early recipients first', 'Gold price changes', 'Currency exchange rates'],
          correctAnswer: 1,
          explanation: 'The Cantillon Effect describes how new money creation benefits those who receive it first',
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'What happens to your savings during inflation?',
          options: ['They gain value', 'They lose purchasing power', 'They stay the same', 'They become tax-free'],
          correctAnswer: 1,
          explanation: 'Inflation reduces the purchasing power of saved money over time',
        },
        {
          id: 'q3',
          type: 'true-false',
          question: 'Central banks can create money without backing.',
          correctAnswer: 'true',
          explanation: 'Fiat currencies are not backed by gold or other commodities - central banks can create money digitally',
        },
      ],
    },
  },
  {
    id: 'B1-L03',
    level: 'B1',
    moduleId: 'B1-M01',
    title: 'What is Bitcoin?',
    kind: 'concepts',
    isFree: false,
    priceSats: 2000,
    durationMin: 5,
    description: 'Discover Bitcoin as digital sound money and peer-to-peer electronic cash',
    objectives: [
      'Define Bitcoin and its core properties',
      'Understand Bitcoin as digital scarcity',
      'Learn about decentralization and trustless systems',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">What is Bitcoin?</h2>
          
          <div class="space-y-4">
            <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 class="font-semibold text-lg mb-3 text-orange-700">🪙 Digital Sound Money Properties</h3>
              <ol class="space-y-2 text-sm">
                <li><strong>Fixed supply:</strong> Only 21 million Bitcoin will ever exist</li>
                <li><strong>Divisible:</strong> Each bitcoin can be divided into 100 million satoshis</li>
                <li><strong>Durable:</strong> Exists as digital information, cannot physically decay</li>
                <li><strong>Portable:</strong> Send any amount anywhere in the world instantly</li>
                <li><strong>Verifiable:</strong> Anyone can verify the total supply and transactions</li>
              </ol>
            </div>

            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-3 text-blue-700">🔗 Peer-to-Peer Electronic Cash</h3>
              <div class="space-y-2 text-sm">
                <p><strong>No intermediaries:</strong> Send directly person to person</p>
                <p><strong>Permissionless:</strong> No one can stop you from using Bitcoin</p>
                <p><strong>Censorship resistant:</strong> Transactions cannot be blocked</p>
                <p><strong>Global:</strong> Works the same everywhere in the world</p>
              </div>
            </div>

            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-3 text-green-700">🏛️ How Decentralization Works</h3>
              <ol class="space-y-2 text-sm">
                <li><strong>No central authority:</strong> No single point of control or failure</li>
                <li><strong>Distributed ledger:</strong> Transaction history stored on thousands of computers</li>
                <li><strong>Consensus mechanism:</strong> Network agrees on valid transactions through proof-of-work</li>
                <li><strong>Open source:</strong> Code is transparent and auditable by anyone</li>
              </ol>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">⚡ Key Innovation:</p>
            <p class="mt-2">Bitcoin solves the "double spending problem" - preventing digital money from being spent twice without a trusted third party!</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What is the maximum supply of Bitcoin?',
          options: ['100 million', '21 million', '1 billion', 'Unlimited'],
          correctAnswer: 1,
          explanation: 'Bitcoin has a fixed maximum supply of 21 million coins',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Bitcoin transactions require a bank to process.',
          correctAnswer: 'false',
          explanation: 'Bitcoin is peer-to-peer electronic cash that works without banks or intermediaries',
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'What problem does Bitcoin solve?',
          options: ['High fees', 'Double spending', 'Slow payments', 'All of the above'],
          correctAnswer: 3,
          explanation: 'Bitcoin addresses all these issues, but its key innovation is solving double spending without trusted third parties',
        },
      ],
    },
  },
  // Bitcoin Technology (B2)
  {
    id: 'B2-L01',
    level: 'B2',
    moduleId: 'B2-M01',
    title: 'Bitcoin Mining & Proof of Work',
    kind: 'technical',
    isFree: true,
    priceSats: 0,
    durationMin: 6,
    description: 'Learn how Bitcoin mining secures the network through proof of work',
    objectives: [
      'Understand the mining process and its purpose',
      'Learn how proof-of-work creates security',
      'Explore the economics of Bitcoin mining',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Bitcoin Mining & Proof of Work</h2>
          <p class="text-lg">Mining is the process that secures Bitcoin and creates new coins according to a predictable schedule.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 class="font-semibold text-lg mb-2 text-orange-700">⚡ What is Mining?</h3>
              <ul class="space-y-1 text-sm">
                <li>• Miners compete to solve cryptographic puzzles</li>
                <li>• Winner gets to add the next block of transactions</li>
                <li>• Miner receives newly created Bitcoin as reward</li>
                <li>• Process repeats approximately every 10 minutes</li>
              </ul>
            </div>
            
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">🔒 Security Through Work</h3>
              <ul class="space-y-1 text-sm">
                <li>• Enormous computational power secures the network</li>
                <li>• Changing history becomes exponentially expensive</li>
                <li>• More miners = more security</li>
                <li>• Energy cost makes attacks economically unfeasible</li>
              </ul>
            </div>

            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">📈 Difficulty Adjustment</h3>
              <p class="text-sm">Bitcoin automatically adjusts mining difficulty every 2016 blocks (~2 weeks) to maintain 10-minute block times regardless of total mining power.</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">💡 Energy Insight:</p>
            <p>Bitcoin mining incentivizes renewable energy development and utilizes stranded energy that would otherwise be wasted.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'How often does Bitcoin adjust mining difficulty?',
          options: ['Every day', 'Every week', 'Every 2016 blocks', 'Every month'],
          correctAnswer: 2,
          explanation: 'Bitcoin adjusts difficulty every 2016 blocks, approximately every 2 weeks',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'More miners make the network less secure.',
          correctAnswer: 'false',
          explanation: 'More miners increase the computational power securing the network, making it more secure',
        },
      ],
    },
  },
  {
    id: 'B2-L02',
    level: 'B2',
    moduleId: 'B2-M01',
    title: 'Bitcoin Wallets & Keys',
    kind: 'practical',
    isFree: false,
    priceSats: 2500,
    durationMin: 7,
    description: 'Learn about Bitcoin wallets, private keys, and seed phrases',
    objectives: [
      'Understand private and public keys',
      'Learn about different wallet types',
      'Practice wallet security best practices',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Bitcoin Wallets & Keys</h2>
          <p class="text-lg">Your Bitcoin wallet is your gateway to the Bitcoin network. Understanding keys and security is crucial.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">🔑 Private Keys</h3>
              <ul class="space-y-1 text-sm">
                <li>• 256-bit random number that controls your Bitcoin</li>
                <li>• Never share your private key with anyone</li>
                <li>• Whoever has the private key owns the Bitcoin</li>
                <li>• Can generate multiple Bitcoin addresses</li>
              </ul>
            </div>
            
            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">🌱 Seed Phrases</h3>
              <ul class="space-y-1 text-sm">
                <li>• 12 or 24 word backup of your wallet</li>
                <li>• Can restore entire wallet from seed</li>
                <li>• Write down and store securely offline</li>
                <li>• Never type into computers or phones</li>
              </ul>
            </div>

            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">💼 Wallet Types</h3>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Hardware:</strong> Most secure, offline storage</li>
                <li>• <strong>Mobile:</strong> Convenient for daily use</li>
                <li>• <strong>Desktop:</strong> Full node capabilities</li>
                <li>• <strong>Paper:</strong> Cold storage backup</li>
              </ul>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-400 p-4">
            <p class="font-semibold">⚠️ Security Rule:</p>
            <p>"Not your keys, not your coins" - Always control your own private keys rather than leaving Bitcoin on exchanges.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What is the most secure way to store large amounts of Bitcoin?',
          options: ['Exchange wallet', 'Mobile wallet', 'Hardware wallet', 'Paper wallet'],
          correctAnswer: 2,
          explanation: 'Hardware wallets provide the best security for storing significant amounts of Bitcoin',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'You should store your seed phrase in a cloud service for easy access.',
          correctAnswer: 'false',
          explanation: 'Seed phrases should be stored offline and never in digital formats to prevent theft',
        },
      ],
    },
  },
  // Bitcoin Privacy & Security (B3)
  {
    id: 'B3-L01',
    level: 'B3',
    moduleId: 'B3-M01',
    title: 'Bitcoin Privacy Fundamentals',
    kind: 'concepts',
    isFree: true,
    priceSats: 0,
    durationMin: 7,
    description: 'Learn about Bitcoin privacy, address reuse, and transaction analysis',
    objectives: [
      'Understand Bitcoin\'s privacy model',
      'Learn about address reuse risks',
      'Explore privacy enhancement techniques',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Bitcoin Privacy Fundamentals</h2>
          <p class="text-lg">Bitcoin provides pseudonymity, not complete anonymity. Understanding privacy is crucial for protecting your financial sovereignty.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">🎭 Pseudonymous Nature</h3>
              <ul class="space-y-1 text-sm">
                <li>• Bitcoin addresses don't directly reveal identity</li>
                <li>• All transactions are publicly visible on blockchain</li>
                <li>• Address clustering can link transactions together</li>
                <li>• Exchange KYC can connect addresses to real identity</li>
              </ul>
            </div>
            
            <div class="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 class="font-semibold text-lg mb-2 text-red-700">⚠️ Address Reuse Risks</h3>
              <ul class="space-y-1 text-sm">
                <li>• Reusing addresses links all transactions together</li>
                <li>• Makes transaction history easily traceable</li>
                <li>• Reduces privacy for all parties involved</li>
                <li>• Always generate new addresses for each transaction</li>
              </ul>
            </div>

            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">🛡️ Privacy Enhancement</h3>
              <ul class="space-y-1 text-sm">
                <li>• Use HD wallets for automatic address generation</li>
                <li>• Consider coin mixing services (CoinJoin)</li>
                <li>• Run your own Bitcoin node for privacy</li>
                <li>• Use Tor for network-level anonymity</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">🔒 Privacy Principle:</p>
            <p>Bitcoin privacy requires active effort - the default behavior is not private. Plan your transaction patterns carefully.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'true-false',
          question: 'Bitcoin transactions are completely anonymous by default.',
          correctAnswer: 'false',
          explanation: 'Bitcoin is pseudonymous, not anonymous. All transactions are publicly visible and can potentially be traced',
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Why should you avoid address reuse?',
          options: ['It costs more fees', 'It reduces privacy', 'It slows down transactions', 'It\'s technically impossible'],
          correctAnswer: 1,
          explanation: 'Address reuse links all your transactions together, significantly reducing privacy',
        },
      ],
    },
  },
  {
    id: 'B3-L02',
    level: 'B3',
    moduleId: 'B3-M01',
    title: 'Bitcoin Node Operations',
    kind: 'technical',
    isFree: false,
    priceSats: 3000,
    durationMin: 8,
    description: 'Learn how to run and maintain your own Bitcoin node',
    objectives: [
      'Understand the importance of running a node',
      'Learn about different node implementations',
      'Explore node setup and maintenance',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Bitcoin Node Operations</h2>
          <p class="text-lg">Running your own Bitcoin node gives you sovereignty, privacy, and helps secure the network.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">🎯 Why Run a Node?</h3>
              <ul class="space-y-1 text-sm">
                <li>• Verify your own transactions independently</li>
                <li>• Don't trust third-party servers</li>
                <li>• Enhanced privacy for your transactions</li>
                <li>• Contribute to network decentralization</li>
              </ul>
            </div>
            
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">⚙️ Node Types</h3>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Full Node:</strong> Downloads entire blockchain</li>
                <li>• <strong>Pruned Node:</strong> Keeps recent transactions only</li>
                <li>• <strong>SPV:</strong> Simplified payment verification</li>
                <li>• <strong>Lightning Node:</strong> Enables Lightning Network</li>
              </ul>
            </div>

            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">🛠️ Popular Implementations</h3>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Bitcoin Core:</strong> Reference implementation</li>
                <li>• <strong>Umbrel:</strong> User-friendly node solution</li>
                <li>• <strong>RaspiBlitz:</strong> Raspberry Pi Lightning node</li>
                <li>• <strong>MyNode:</strong> Pre-configured node package</li>
              </ul>
            </div>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
            <p class="font-semibold">💾 Storage Requirements:</p>
            <p>A full Bitcoin node requires about 500GB+ of storage and grows by ~50GB per year. Consider using external storage.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What is the main benefit of running your own Bitcoin node?',
          options: ['Faster transactions', 'Lower fees', 'Independent verification', 'Higher privacy only'],
          correctAnswer: 2,
          explanation: 'The main benefit is independently verifying transactions without trusting third parties',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'A pruned node keeps the entire blockchain history.',
          correctAnswer: 'false',
          explanation: 'A pruned node only keeps recent transaction data to save storage space',
        },
      ],
    },
  },
  // Bitcoin Advanced (B4)
  {
    id: 'B4-L01',
    level: 'B4',
    moduleId: 'B4-M01',
    title: 'Lightning Network Mastery',
    kind: 'technical',
    isFree: true,
    priceSats: 0,
    durationMin: 10,
    description: 'Master advanced Lightning Network concepts and operations',
    objectives: [
      'Deep dive into Lightning Network architecture',
      'Learn about channel management and liquidity',
      'Explore Lightning Network routing and fees',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Lightning Network Mastery</h2>
          <p class="text-lg">Master the advanced concepts of Bitcoin's second layer for instant, low-cost payments and new economic possibilities.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 class="font-semibold text-lg mb-2 text-yellow-700">⚡ Advanced Channel Management</h3>
              <ul class="space-y-1 text-sm">
                <li>• Inbound vs outbound liquidity management</li>
                <li>• Channel rebalancing strategies</li>
                <li>• Submarine swaps for liquidity</li>
                <li>• Dual-funded channels and splicing</li>
              </ul>
            </div>
            
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">🗺️ Routing & Pathfinding</h3>
              <ul class="space-y-1 text-sm">
                <li>• Source-based routing algorithms</li>
                <li>• Route hints and private channels</li>
                <li>• Multi-part payments (MPP)</li>
                <li>• Just-in-time (JIT) routing</li>
              </ul>
            </div>

            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">💰 Economic Incentives</h3>
              <ul class="space-y-1 text-sm">
                <li>• Routing fee strategies and optimization</li>
                <li>• Channel scoring and reputation</li>
                <li>• Watchtower services for security</li>
                <li>• Lightning Service Provider (LSP) models</li>
              </ul>
            </div>

            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">🚀 Advanced Applications</h3>
              <ul class="space-y-1 text-sm">
                <li>• Lightning-native applications and games</li>
                <li>• Streaming payments and paywalls</li>
                <li>• Value-4-Value content monetization</li>
                <li>• Machine-to-machine micropayments</li>
              </ul>
            </div>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
            <p class="font-semibold">🌐 Future Vision:</p>
            <p>Lightning Network enables new economic models impossible with traditional payment rails - from streaming money to IoT micropayments.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What is inbound liquidity in Lightning Network?',
          options: ['Your ability to send payments', 'Your ability to receive payments', 'Your connection speed', 'Your node uptime'],
          correctAnswer: 1,
          explanation: 'Inbound liquidity refers to your ability to receive Lightning payments through your channels',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Multi-part payments allow splitting large payments across multiple routes.',
          correctAnswer: 'true',
          explanation: 'MPP enables splitting large payments into smaller parts that route through different channels',
        },
      ],
    },
  },
  // Nostr Basics (N1)
  {
    id: 'N1-L01',
    level: 'N1',
    moduleId: 'N1-M01',
    title: 'What is Nostr?',
    kind: 'concepts',
    isFree: true,
    priceSats: 0,
    durationMin: 5,
    description: 'Introduction to the Nostr protocol and decentralized social networking',
    objectives: [
      'Understand what Nostr is and why it matters',
      'Learn the basic architecture of Nostr',
      'Compare Nostr to traditional social media',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">What is Nostr?</h2>
          <p class="text-lg">Nostr (Notes and Other Stuff Transmitted by Relays) is a simple, open protocol for creating censorship-resistant social networks.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">🌐 Decentralized Design</h3>
              <ul class="space-y-1 text-sm">
                <li>• No central server or authority</li>
                <li>• Messages relay across multiple servers</li>
                <li>• Users control their own identity and data</li>
                <li>• Resistant to censorship and takedowns</li>
              </ul>
            </div>
            
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">🔑 Identity & Keys</h3>
              <ul class="space-y-1 text-sm">
                <li>• Your identity is a public/private key pair</li>
                <li>• Same keys work across all Nostr apps</li>
                <li>• Cryptographic signatures prove authenticity</li>
                <li>• Portable identity - no vendor lock-in</li>
              </ul>
            </div>

            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">⚡ Simple Protocol</h3>
              <ul class="space-y-1 text-sm">
                <li>• Just two components: clients and relays</li>
                <li>• Events are signed JSON messages</li>
                <li>• Easy to implement and extend</li>
                <li>• Interoperable across different apps</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">💡 Key Advantage:</p>
            <p>Unlike traditional social media, Nostr gives you true ownership of your social graph, content, and identity.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What does Nostr stand for?',
          options: ['Network of Secure Transmission Relays', 'Notes and Other Stuff Transmitted by Relays', 'Nostalgic Social Transmission Relay', 'New Open Social Technology Relay'],
          correctAnswer: 1,
          explanation: 'Nostr stands for "Notes and Other Stuff Transmitted by Relays"',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Nostr requires a central server to function.',
          correctAnswer: 'false',
          explanation: 'Nostr is decentralized and works through multiple independent relays, not a central server',
        },
      ],
    },
  },
  {
    id: 'N1-L02',
    level: 'N1',
    moduleId: 'N1-M01',
    title: 'Nostr Keys & Identity',
    kind: 'practical',
    isFree: false,
    priceSats: 1500,
    durationMin: 6,
    description: 'Learn how to create and manage your Nostr identity with keys',
    objectives: [
      'Generate your first Nostr key pair',
      'Understand npub and nsec formats',
      'Set up your Nostr profile',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Nostr Keys & Identity</h2>
          <p class="text-lg">Your Nostr identity is controlled by cryptographic keys, giving you true ownership of your digital persona.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">🔓 Public Key (npub)</h3>
              <ul class="space-y-1 text-sm">
                <li>• Your Nostr username/address</li>
                <li>• Safe to share publicly</li>
                <li>• Starts with 'npub1...'</li>
                <li>• Others use this to find and follow you</li>
              </ul>
            </div>
            
            <div class="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 class="font-semibold text-lg mb-2 text-red-700">🔐 Private Key (nsec)</h3>
              <ul class="space-y-1 text-sm">
                <li>• Your secret password to Nostr</li>
                <li>• NEVER share with anyone</li>
                <li>• Starts with 'nsec1...'</li>
                <li>• Used to sign your messages</li>
              </ul>
            </div>

            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">👤 Profile Setup</h3>
              <ul class="space-y-1 text-sm">
                <li>• Set your display name and bio</li>
                <li>• Add profile picture and banner</li>
                <li>• Include website and contact info</li>
                <li>• Profile data is cryptographically signed</li>
              </ul>
            </div>

            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">🔄 Portability</h3>
              <p class="text-sm">Your keys work across ALL Nostr applications. Switch clients anytime while keeping your identity, followers, and content.</p>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">🔒 Security Tip:</p>
            <p>Store your private key securely! Consider using a hardware wallet or secure password manager. If you lose it, you lose your Nostr identity forever.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Which key should you NEVER share publicly?',
          options: ['npub (public key)', 'nsec (private key)', 'Both keys', 'Neither key'],
          correctAnswer: 1,
          explanation: 'Your nsec (private key) must be kept secret. Only share your npub (public key)',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Your Nostr keys work across different Nostr applications.',
          correctAnswer: 'true',
          explanation: 'Nostr keys are portable and work with any Nostr client or application',
        },
      ],
    },
  },
  // Nostr Network (N2)
  {
    id: 'N2-L01',
    level: 'N2',
    moduleId: 'N2-M01',
    title: 'Nostr Relays & Network',
    kind: 'technical',
    isFree: true,
    priceSats: 0,
    durationMin: 7,
    description: 'Deep dive into how Nostr relays work and form the network',
    objectives: [
      'Understand relay functionality and types',
      'Learn about relay selection strategies',
      'Explore relay economics and incentives',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Nostr Relays & Network</h2>
          <p class="text-lg">Relays are the backbone of Nostr, storing and forwarding messages across the decentralized network.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">🔄 How Relays Work</h3>
              <ul class="space-y-1 text-sm">
                <li>• Store events (messages) from users</li>
                <li>• Forward events to connected clients</li>
                <li>• Filter events based on client requests</li>
                <li>• No requirement to store everything forever</li>
              </ul>
            </div>
            
            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">🏠 Relay Types</h3>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Public:</strong> Open to all users</li>
                <li>• <strong>Private:</strong> Invite-only or paid access</li>
                <li>• <strong>Specialized:</strong> Focus on specific content types</li>
                <li>• <strong>Personal:</strong> Run your own relay</li>
              </ul>
            </div>

            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">📡 Network Strategy</h3>
              <ul class="space-y-1 text-sm">
                <li>• Connect to multiple relays for redundancy</li>
                <li>• Choose relays based on your community</li>
                <li>• Balance between reach and performance</li>
                <li>• Consider paid relays for better service</li>
              </ul>
            </div>

            <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 class="font-semibold text-lg mb-2 text-orange-700">💰 Relay Economics</h3>
              <ul class="space-y-1 text-sm">
                <li>• Free relays depend on donations</li>
                <li>• Paid relays offer premium features</li>
                <li>• Lightning payments enable micro-fees</li>
                <li>• Sustainable model still evolving</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">🌐 Network Effect:</p>
            <p>The more relays that exist, the more resilient and censorship-resistant the Nostr network becomes.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Why should you connect to multiple relays?',
          options: ['Faster internet', 'Better redundancy', 'Lower cost', 'Easier setup'],
          correctAnswer: 1,
          explanation: 'Connecting to multiple relays provides redundancy and makes your messages more available',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'All Nostr relays must store every message forever.',
          correctAnswer: 'false',
          explanation: 'Relays can choose their own storage policies and are not required to store all messages permanently',
        },
      ],
    },
  },
  {
    id: 'N2-L02',
    level: 'N2',
    moduleId: 'N2-M01',
    title: 'Nostr Events & NIPs',
    kind: 'technical',
    isFree: false,
    priceSats: 2000,
    durationMin: 6,
    description: 'Learn about Nostr event types and Nostr Implementation Possibilities (NIPs)',
    objectives: [
      'Understand different event kinds in Nostr',
      'Learn about NIPs and protocol extensions',
      'Explore event validation and signatures',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Nostr Events & NIPs</h2>
          <p class="text-lg">Nostr events are the building blocks of the protocol, while NIPs define how different features work across the network.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">📝 Event Types</h3>
              <ul class="space-y-1 text-sm">
                <li>• <strong>Kind 0:</strong> User metadata (profile)</li>
                <li>• <strong>Kind 1:</strong> Short text notes (tweets)</li>
                <li>• <strong>Kind 3:</strong> Contact lists (follows)</li>
                <li>• <strong>Kind 4:</strong> Encrypted direct messages</li>
                <li>• <strong>Kind 7:</strong> Reactions (likes, dislikes)</li>
              </ul>
            </div>
            
            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">📋 NIPs (Nostr Implementation Possibilities)</h3>
              <ul class="space-y-1 text-sm">
                <li>• Protocol specifications and standards</li>
                <li>• Optional features that clients can implement</li>
                <li>• Backward compatibility maintained</li>
                <li>• Community-driven development process</li>
              </ul>
            </div>

            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">✅ Event Structure</h3>
              <ul class="space-y-1 text-sm">
                <li>• JSON format with standardized fields</li>
                <li>• Cryptographic signature for authenticity</li>
                <li>• Tags for metadata and references</li>
                <li>• Content field for actual message data</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">🔗 Interoperability:</p>
            <p>NIPs ensure different Nostr applications can work together while allowing innovation in new features.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What does NIP stand for?',
          options: ['Nostr Internet Protocol', 'Network Implementation Proposal', 'Nostr Implementation Possibility', 'New Internet Protocol'],
          correctAnswer: 2,
          explanation: 'NIP stands for Nostr Implementation Possibility - specifications for protocol features',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Kind 1 events are used for user profile information.',
          correctAnswer: 'false',
          explanation: 'Kind 1 events are for short text notes. Kind 0 events contain user profile information',
        },
      ],
    },
  },
  // Nostr Applications (N3)
  {
    id: 'N3-L01',
    level: 'N3',
    moduleId: 'N3-M01',
    title: 'Building Nostr Applications',
    kind: 'practical',
    isFree: true,
    priceSats: 0,
    durationMin: 8,
    description: 'Learn how to build applications on the Nostr protocol',
    objectives: [
      'Understand Nostr client architecture',
      'Learn about WebSocket connections to relays',
      'Explore popular Nostr development libraries',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Building Nostr Applications</h2>
          <p class="text-lg">Nostr's simple protocol makes it easy to build decentralized applications that users truly own.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">🏗️ Client Architecture</h3>
              <ul class="space-y-1 text-sm">
                <li>• Connect to multiple relays via WebSockets</li>
                <li>• Subscribe to events with filters</li>
                <li>• Sign events with user's private key</li>
                <li>• Publish events to relay network</li>
              </ul>
            </div>
            
            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">📚 Development Libraries</h3>
              <ul class="space-y-1 text-sm">
                <li>• <strong>JavaScript:</strong> nostr-tools, nostr-dev-kit</li>
                <li>• <strong>Rust:</strong> nostr-rs-sdk</li>
                <li>• <strong>Python:</strong> python-nostr</li>
                <li>• <strong>Go:</strong> go-nostr</li>
              </ul>
            </div>

            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">🌐 Application Types</h3>
              <ul class="space-y-1 text-sm">
                <li>• Social media clients (Twitter-like)</li>
                <li>• Chat applications and forums</li>
                <li>• Content publishing platforms</li>
                <li>• Marketplaces and classified ads</li>
                <li>• Gaming and interactive experiences</li>
              </ul>
            </div>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
            <p class="font-semibold">💡 Developer Advantage:</p>
            <p>Build once, work everywhere - Nostr apps inherit the entire network effect and user base from day one.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'How do Nostr clients communicate with relays?',
          options: ['HTTP requests', 'WebSocket connections', 'TCP sockets', 'UDP packets'],
          correctAnswer: 1,
          explanation: 'Nostr clients use WebSocket connections to communicate with relays for real-time messaging',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Nostr applications can only be social media clients.',
          correctAnswer: 'false',
          explanation: 'Nostr supports many application types including chat, publishing, marketplaces, and games',
        },
      ],
    },
  },
  {
    id: 'N3-L02',
    level: 'N3',
    moduleId: 'N3-M01',
    title: 'Nostr Marketplaces & Zaps',
    kind: 'concepts',
    isFree: false,
    priceSats: 2500,
    durationMin: 7,
    description: 'Explore Nostr marketplaces and Bitcoin Lightning integration with Zaps',
    objectives: [
      'Learn about decentralized marketplaces on Nostr',
      'Understand Zaps and Lightning integration',
      'Explore value-for-value content models',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Nostr Marketplaces & Zaps</h2>
          <p class="text-lg">Nostr enables new economic models by combining decentralized communication with Bitcoin Lightning payments.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">🛒 Decentralized Marketplaces</h3>
              <ul class="space-y-1 text-sm">
                <li>• No platform fees or intermediaries</li>
                <li>• Censorship-resistant commerce</li>
                <li>• Global reach without restrictions</li>
                <li>• Built-in reputation through social proof</li>
              </ul>
            </div>
            
            <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 class="font-semibold text-lg mb-2 text-yellow-700">⚡ Zaps Integration</h3>
              <ul class="space-y-1 text-sm">
                <li>• Instant Bitcoin micropayments</li>
                <li>• Tip content creators directly</li>
                <li>• Proof-of-payment on Nostr</li>
                <li>• Social signaling through payment</li>
              </ul>
            </div>

            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">💰 Value-for-Value Models</h3>
              <ul class="space-y-1 text-sm">
                <li>• Pay creators based on value received</li>
                <li>• No ads or algorithmic manipulation</li>
                <li>• Direct creator-audience relationship</li>
                <li>• Streaming payments and subscriptions</li>
              </ul>
            </div>

            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">🎯 Use Cases</h3>
              <ul class="space-y-1 text-sm">
                <li>• Freelance services marketplace</li>
                <li>• Digital content monetization</li>
                <li>• Peer-to-peer classified ads</li>
                <li>• Crowdfunding and donations</li>
              </ul>
            </div>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
            <p class="font-semibold">🚀 Economic Innovation:</p>
            <p>Nostr + Lightning creates new possibilities for internet-native economies without traditional payment processor limitations.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What are Zaps in the Nostr ecosystem?',
          options: ['Lightning payments with social proof', 'Private messages', 'Profile updates', 'Relay connections'],
          correctAnswer: 0,
          explanation: 'Zaps are Lightning Network payments that are publicly visible on Nostr as social proof',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Nostr marketplaces require platform fees like traditional platforms.',
          correctAnswer: 'false',
          explanation: 'Nostr marketplaces can operate without intermediaries or platform fees',
        },
      ],
    },
  },
  // Nostr Advanced (N4)
  {
    id: 'N4-L01',
    level: 'N4',
    moduleId: 'N4-M01',
    title: 'Advanced Nostr & Future Protocols',
    kind: 'technical',
    isFree: true,
    priceSats: 0,
    durationMin: 9,
    description: 'Explore advanced Nostr concepts and future protocol developments',
    objectives: [
      'Learn about advanced NIPs and features',
      'Understand Nostr\'s role in the decentralized future',
      'Explore integration with other Bitcoin technologies',
    ],
    content: {
      html: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Advanced Nostr & Future Protocols</h2>
          <p class="text-lg">Nostr continues to evolve with new NIPs and integrations, shaping the future of decentralized communication.</p>
          
          <div class="grid gap-4">
            <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 class="font-semibold text-lg mb-2 text-purple-700">🔮 Advanced NIPs</h3>
              <ul class="space-y-1 text-sm">
                <li>• NIP-17: Private Direct Messages</li>
                <li>• NIP-51: Lists (mute, pin, bookmark)</li>
                <li>• NIP-57: Lightning Zaps</li>
                <li>• NIP-94: File Metadata</li>
                <li>• NIP-99: Classified Listings</li>
              </ul>
            </div>
            
            <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 class="font-semibold text-lg mb-2 text-blue-700">🌐 Protocol Integration</h3>
              <ul class="space-y-1 text-sm">
                <li>• Lightning Network for instant payments</li>
                <li>• Cashu for ecash and privacy</li>
                <li>• RGB for colored coins and tokens</li>
                <li>• Tor for network-level privacy</li>
              </ul>
            </div>

            <div class="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 class="font-semibold text-lg mb-2 text-green-700">🚀 Future Possibilities</h3>
              <ul class="space-y-1 text-sm">
                <li>• Decentralized web infrastructure</li>
                <li>• AI agent communication protocols</li>
                <li>• IoT device messaging networks</li>
                <li>• Cross-chain bridge communications</li>
              </ul>
            </div>

            <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 class="font-semibold text-lg mb-2 text-orange-700">🛡️ Security Considerations</h3>
              <ul class="space-y-1 text-sm">
                <li>• Key management and recovery</li>
                <li>• Relay trust and verification</li>
                <li>• Spam and abuse prevention</li>
                <li>• Privacy-preserving techniques</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p class="font-semibold">🌟 The Vision:</p>
            <p>Nostr represents a paradigm shift toward user sovereignty in digital communication, where users control their identity, data, and social connections.</p>
          </div>
        </div>
      `,
      quiz: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Which NIP enables Lightning payments on Nostr?',
          options: ['NIP-17', 'NIP-51', 'NIP-57', 'NIP-99'],
          correctAnswer: 2,
          explanation: 'NIP-57 defines Lightning Zaps, enabling Bitcoin payments with social proof on Nostr',
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Nostr can only be used for social media applications.',
          correctAnswer: 'false',
          explanation: 'Nostr is a general-purpose protocol that can support many types of applications beyond social media',
        },
      ],
    },
  },
];
