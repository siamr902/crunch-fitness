import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  in: {
    opacity: 0,
  },
  out: {
    opacity: 1,
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          variants={variants}
          initial="in"
          animate="out"
          exit="in"
          transition={{
            duration: 1,
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </SessionProvider>
  );
}

export default MyApp;
