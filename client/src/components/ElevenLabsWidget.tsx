import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "agent-id": string },
        HTMLElement
      >;
    }
  }
}

export function ElevenLabsWidget() {
  useEffect(() => {
    if (
      document.querySelector(
        'script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]'
      )
    )
      return;
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return <elevenlabs-convai agent-id="agent_7401kj5vhns9fesr7815r372t4fr" />;
}
