import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          variants={variants}
          initial="out"
          animate="in"
          exit="out"
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
