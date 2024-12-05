import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://92363e6764871dd38366b71ffbfdee29@o4508399797927936.ingest.us.sentry.io/4508410372751360",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      showBranding: false,
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: false,
      triggerLabel: "Reportar un bug",
      formTitle: "Reportar un bug",
      submitButtonLabel: "Enviar reporte de bug",
      cancelButtonLabel: "Cancelar",
      confirmButtonLabel: "Confirmar",
      addScreenshotButtonLabel: "Agregar Captura de Pantalla",
      removeScreenshotButtonLabel: "Remover Captura de Pantalla",
      nameLabel: "Nombre",
      namePlaceholder: "Digite su nombre",

      // Session Replay
      replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
      replaysOnErrorSampleRate: 0.1, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    }),
  ],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
