import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBX0Ko5UGLTCAQrZdMKWqIcbn3pXvwUCqo',
  authDomain: 'nakhlex2022.firebaseapp.com',
  projectId: 'nakhlex2022',
  storageBucket: 'nakhlex2022.appspot.com',
  messagingSenderId: '4209302745',
  appId: '1:4209302745:web:7a92301875fe28925432c8',
  measurementId: 'G-G3SGN102Z9',
};

const firebaseApps = getApps();
let firebaseApp: FirebaseApp | undefined;
let analyticsInstance: Analytics;

if (!firebaseApps.length) {
  firebaseApp = initializeApp(firebaseConfig);
  analyticsInstance = getAnalytics(firebaseApp);
} else {
  firebaseApp = firebaseApps[0];
  analyticsInstance = getAnalytics(firebaseApp);
}

export const GAEvent = (
  eventName: string,
  eventParams:
    | {
        [key: string]: unknown;
      }
    | undefined = undefined,
) => {
  if (analyticsInstance) {
    logEvent(analyticsInstance, eventName, eventParams);
  }
};
