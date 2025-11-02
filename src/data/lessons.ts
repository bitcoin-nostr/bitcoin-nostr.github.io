import type { Lesson } from '@/types/catalog';

export const lessons: Lesson[] = [
  {
    id: 'A1-L01',
    level: 'A1',
    moduleId: 'A1-M01',
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
    id: 'A1-L02',
    level: 'A1',
    moduleId: 'A1-M01',
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
    id: 'A1-L03',
    level: 'A1',
    moduleId: 'A1-M01',
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
              <h3 class="font-semibold text-lg mb-3 text-orange-700">🪙 Digital Sound Money</h3>
              <div class="space-y-2 text-sm">
                <p><strong>Fixed supply:</strong> Only 21 million Bitcoin will ever exist</p>
                <p><strong>Divisible:</strong> Each bitcoin can be divided into 100 million satoshis</p>
                <p><strong>Durable:</strong> Exists as digital information, cannot physically decay</p>
                <p><strong>Portable:</strong> Send any amount anywhere in the world instantly</p>
                <p><strong>Verifiable:</strong> Anyone can verify the total supply and transactions</p>
              </div>
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
              <h3 class="font-semibold text-lg mb-3 text-green-700">🏛️ Decentralized Network</h3>
              <div class="space-y-2 text-sm">
                <p><strong>No central authority:</strong> No single point of control or failure</p>
                <p><strong>Distributed ledger:</strong> Transaction history stored on thousands of computers</p>
                <p><strong>Consensus mechanism:</strong> Network agrees on valid transactions through proof-of-work</p>
                <p><strong>Open source:</strong> Code is transparent and auditable by anyone</p>
              </div>
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
];
