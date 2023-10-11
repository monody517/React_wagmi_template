import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import "@rainbow-me/rainbowkit/styles.css";

function App() {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, goerli],
    [alchemyProvider({ apiKey: "" })]
  );

  const { connectors } = getDefaultWallets({
    appName: "",
    projectId: "YOUR_PROJECT_ID",
    chains,
  });

  const config = createConfig({
    publicClient,
    connectors,
    autoConnect: true,
  });
  return (
    <>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          <text>111</text>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
