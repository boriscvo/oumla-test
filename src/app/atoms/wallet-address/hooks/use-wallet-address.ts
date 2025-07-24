type Args = {
    address: string;
}

export function useWalletAddress({ address }: Args) {
    const getFormattedAddress = () => {
        if(address.length < 10) {
            return address
        }
        return `${address.slice(0, 4)}...${address.slice(-4)} `
    }

  return {formattedAddress: getFormattedAddress()};
}