import { useEffect } from "react"

export default function useMockServiceWorker(
  onActivatedCb: () => void,
  onDeactivatedCb: () => void
) {
  useEffect(() => {
    function onstatechange(this: ServiceWorker) {
      if (
        this.scriptURL.endsWith("mockServiceWorker.js") &&
        this.state === "activated"
      ) {
        onActivatedCb()
      } else {
        onDeactivatedCb()
      }
    }

    function oncontrollerchange() {
      navigator.serviceWorker.controller?.addEventListener(
        "statechange",
        onstatechange
      )
    }

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener(
        "controllerchange",
        oncontrollerchange
      )
    }

    return () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.removeEventListener(
          "controllerchange",
          oncontrollerchange
        )
        navigator.serviceWorker.controller &&
          navigator.serviceWorker.controller.removeEventListener(
            "statechange",
            onstatechange
          )
      }
    }
  }, [onActivatedCb, onDeactivatedCb])
}
