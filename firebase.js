import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyC99A9g4nMpYzujhzZiT2xUKfdN0MAkNGY",
  authDomain: "erro-npac-spn.firebaseapp.com",
  databaseURL: "https://erro-npac-spn-default-rtdb.firebaseio.com",
  projectId: "erro-npac-spn",
  appId: "1:568064054155:web:450e7769371ed7c6c1958e"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
