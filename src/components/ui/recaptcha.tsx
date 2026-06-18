import { useEffect, useRef } from "react";

interface RecaptchaProps {
  sitekey: string;
  onVerify: (token: string) => void;
  onExpired?: () => void;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      render: (el: string | HTMLElement, opts: { sitekey: string; callback: (token: string) => void; "expired-callback"?: () => void }) => number;
      reset: (id?: number) => void;
      getResponse: (id?: number) => string;
    };
    onRecaptchaLoad: () => void;
  }
}

export function RecaptchaCheckbox({ sitekey, onVerify, onExpired }: RecaptchaProps) {
  const widgetId = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderWidget = () => {
      if (!containerRef.current || !window.grecaptcha) return;
      widgetId.current = window.grecaptcha.render(containerRef.current, {
        sitekey,
        callback: onVerify,
        "expired-callback": onExpired,
      });
    };

    if (window.grecaptcha?.render) {
      renderWidget();
    } else {
      const timer = setInterval(() => {
        if (window.grecaptcha?.render) {
          clearInterval(timer);
          renderWidget();
        }
      }, 200);
      return () => clearInterval(timer);
    }
  }, [sitekey, onVerify, onExpired]);

  return <div ref={containerRef} className="flex justify-center" />;
}
