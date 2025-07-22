export function useActivityEventCard() {
    // TODO: Connect logic with the ethers

    const recentActivity = [
        {
          type: 'transaction' as const,
          label: 'Transaction #123 created',
          description: 'Sent 2.5 ETH to 0xDef...4567',
          timestamp: Math.floor(Date.now() / 1000) - 60 * 15, // 15 minutes ago
        },
        {
          type: 'approval' as const,
          label: 'Approval #89 approved by Manager Alice',
          description: 'For transaction #122',
          timestamp: Math.floor(Date.now() / 1000) - 60 * 45, // 45 minutes ago
        },
        {
          type: 'user' as const,
          label: 'New user registered',
          description: '0xAbc...7890 (Role: Manager)',
          timestamp: Math.floor(Date.now() / 1000) - 60 * 90, // 1.5 hours ago
        },
        {
          type: 'approval' as const,
          label: 'Approval #90 rejected by Admin Bob',
          description: 'For transaction #124',
          timestamp: Math.floor(Date.now() / 1000) - 60 * 150, // 2.5 hours ago
        },
        {
          type: 'transaction' as const,
          label: 'Transaction #121 completed',
          description: 'Transferred 1 ETH to 0xEee...9999',
          timestamp: Math.floor(Date.now() / 1000) - 60 * 240, // 4 hours ago
        },
      ]
      
  return {
    recentActivity
  }
}