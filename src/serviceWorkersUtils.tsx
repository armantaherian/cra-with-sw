import { useState, useCallback, useEffect, FC } from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import { useNavigate } from "react-router-dom";

export const useServiceWorker = () => {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
  const [showReload, setShowReload] = useState(false);

  // called when a service worker updates. this function is a callback
  // to the actual service worker registration onUpdate.
  const onSWUpdate = useCallback((registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  }, []);

  // simply put, this tells the service
  // worker to skip the waiting phase and then reloads the page
  const reloadPage = useCallback(() => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  }, [waitingWorker]);

  // register the service worker
  useEffect(() => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorkerRegistration.register({ onUpdate: onSWUpdate });
  }, [onSWUpdate]);

  return { showReload, waitingWorker, reloadPage };
};

export const ForceUpdateSW: FC = () => {
  const onClick = () => {
    console.log("force update!");

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then((r) => {
        r?.update().then((rr) => console.log(rr));
      }).catch((error) => {
        // registration failed
        console.error(`Registration failed with ${error}`);
      });
    }
    // updateCallback && updateCallback();
  }

  return (
    <button onClick={onClick}>force update!</button>
  );
}

export const ServiceWorkerWrapper: FC = () => {
  // const [update, setUpdate] = useState(false);
  const { waitingWorker, showReload, reloadPage } = useServiceWorker();

  console.log(waitingWorker, showReload)

  if (showReload) {
    return (
      <button onClick={() => reloadPage()}>REFRESH</button>
    );
  }

  if (waitingWorker) {
    return (
      <button disabled={true}>Loading...</button>
    );
  }

  return null;
};
