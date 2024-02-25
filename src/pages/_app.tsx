import "@/styles/globals.css";
import type { AppType } from "next/app";
import { Viga, Roboto_Mono } from "next/font/google";
import { createConfig } from "@privy-io/wagmi";
import { base } from "wagmi/chains";
import { PrivyProvider } from "@privy-io/react-auth";
import { http } from "wagmi";
import { WagmiProvider } from "@privy-io/wagmi";
import classNames from "classnames";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

const viga = Viga({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-viga",
});
const robotoMono = Roboto_Mono({
  weight: ["300", "400", "700"],
  subsets: ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"],
  variable: "--font-roboto-mono",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={classNames(viga.variable, robotoMono.variable, "h-screen")}
    >
      <PrivyProvider appId="clt204lqu0850i2uwrtbiw6s9">
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={config}>
            <Component {...pageProps} />
          </WagmiProvider>
        </QueryClientProvider>
      </PrivyProvider>
    </main>
  );
};

export default MyApp;
