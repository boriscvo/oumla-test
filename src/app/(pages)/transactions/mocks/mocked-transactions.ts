export const mockedTransactions = [
    {
        id: 1,
        from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        to: "0x1111111111111111111111111111111111111111",
        amount: 1500000000000000000n, // 1.5 ETH
        description: "Service payment",
        status: "pending",
        createdAt: 1721750000,
        approvalId: 201
      },
      {
        id: 2,
        from: "0x1234567890123456789012345678901234567890",
        to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        amount: 700000000000000000n, // 0.7 ETH
        description: "Payout",
        status: "completed",
        createdAt: 1721749900,
        approvalId: 202
      },
      {
        id: 3,
        from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        to: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
        amount: 2500000000000000000n, // 2.5 ETH
        description: "Funding round",
        status: "active",
        createdAt: 1721749800,
        approvalId: 203
      },
      {
        id: 4,
        from: "0x9876543210987654321098765432109876543210",
        to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        amount: 1800000000000000000n, // 1.8 ETH
        description: "Partial refund",
        status: "rejected",
        createdAt: 1721749700,
        approvalId: 204
      },
      {
        id: 5,
        from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        to: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        amount: 10000000000000000000n, // 10 ETH
        description: "DAO backing",
        status: "completed",
        createdAt: 1721749600,
        approvalId: 205
      },
      {
        id: 6,
        from: "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        amount: 3000000000000000000n, // 3 ETH
        description: "Loan return",
        status: "pending",
        createdAt: 1721749500,
        approvalId: 206
      },
      {
        id: 7,
        from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        to: "0xcccccccccccccccccccccccccccccccccccccccc",
        amount: 500000000000000000n, // 0.5 ETH
        description: "Small test tx",
        status: "pending",
        createdAt: 1721749400,
        approvalId: 207
      },
      {
        id: 8,
        from: "0xdddddddddddddddddddddddddddddddddddddddd",
        to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        amount: 1200000000000000000n, // 1.2 ETH
        description: "Bonus payment",
        status: "completed",
        createdAt: 1721749300,
        approvalId: 208
      },
      {
        id: 9,
        from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        to: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        amount: 2000000000000000000n, // 2 ETH
        description: "Contractor payout",
        status: "active",
        createdAt: 1721749200,
        approvalId: 209
      },
      {
        id: 10,
        from: "0xffffffffffffffffffffffffffffffffffffffff",
        to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        amount: 2200000000000000000n, // 2.2 ETH
        description: "Bounty reward",
        status: "rejected",
        createdAt: 1721749100,
        approvalId: 210
      },
      {
        id: 11,
        from: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        to: "0x9999999999999999999999999999999999999999",
        amount: 6000000000000000000n, // 6 ETH
        description: "Liquidity injection",
        status: "completed",
        createdAt: 1721749000,
        approvalId: 211
      },
      {
        id: 12,
        from: "0x8888888888888888888888888888888888888888",
        to: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        amount: 900000000000000000n, // 0.9 ETH
        description: "Grant received",
        status: "pending",
        createdAt: 1721748900,
        approvalId: 212
      }
]