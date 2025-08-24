import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadDone = false;
    let minTimeDone = false;
    let maxTimeoutDone = false;

    const tryFinish = () => {
      if ((loadDone && minTimeDone) || maxTimeoutDone) {
        setLoading(false);
        onFinish();
        console.log("✅ Preloader finished");
      }
    };

    const handleLoad = () => {
      loadDone = true;
      tryFinish();
    };

    window.addEventListener("load", handleLoad);

    const timer = setTimeout(() => {
      minTimeDone = true;
      tryFinish();
    }, 2000);

    const maxTimer = setTimeout(() => {
      maxTimeoutDone = true;
      tryFinish();
    }, 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
      clearTimeout(maxTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <motion.img src = {`${import.meta.env.BASE_URL}logo.png`} alt='Logo'
          className="w-24 h-24 object-contain"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }} />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
