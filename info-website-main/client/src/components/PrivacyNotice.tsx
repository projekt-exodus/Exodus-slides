import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

export function PrivacyNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("exodus-privacy-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("exodus-privacy-dismissed", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-sm z-50 border border-border bg-card p-4 shadow-lg"
          role="dialog"
          aria-label="Datenschutzhinweis"
          data-testid="privacy-notice"
        >
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-green)" }} />
            <div className="flex-1">
              <p className="text-xs font-medium mb-1">Datenschutzhinweis</p>
              <p className="text-[11px] text-muted-foreground font-light leading-relaxed mb-3">
                Diese Seite speichert deine Theme-Präferenz (hell/dunkel) lokal in deinem Browser (localStorage). Es werden keine Cookies gesetzt und keine Daten an Dritte übermittelt.
              </p>
              <button
                onClick={dismiss}
                className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 border border-border hover:bg-muted transition-colors"
                data-testid="button-privacy-dismiss"
              >
                Verstanden
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
