import {
  setJSExceptionHandler,
  setNativeExceptionHandler
} from "react-native-exception-handler";
import { Client } from "bugsnag-react-native";
import { Alert } from "react-native";
import * as env from "app/environment-variables";

/**
 * This is your Native global error handler
 * You do stuff like hit a service to track crashes or hit a custom api to inform the dev team.
 *
 * NOTE: alert or showing any UI change via JS - WILL NOT WORK HERE - as this is a NATIVE ERRORS.
 */
const nativeErrorHandler = exceptionString => {
  // We're now handling these errors, so Bugsnag won't automagically log them
  bugsnag.notify(new Error(exceptionString));
  console.log(`[nativeErrorHandler] ${exceptionString}`);
};

/**
 * This is your JavaScript global error handler
 * You do stuff like show an error dialog
 * or hit a service to track crashes or hit a custom api to inform the dev team.
 */
const jsErrorHandler = (error, isFatal) => {
  // We're now handling these errors, so Bugsnag won't automagically log them
  if (error instanceof Error) {
    bugsnag.notify(error);
  } else {
    bugsnag.notify(new Error(error));
  }
  console.log(`[jsErrorHandler] ${error}`);

  const message =
    error && error.message
      ? error.message.substring(0, 200)
      : `unknown error\n${error}`;

  // TODO: Design a nicer error message dialog for users
  Alert.alert("Aw, snap :(", `${message} ...`, [{ text: "Close" }], {
    cancelable: false
  });
};

/**
 * Create our global bugsnag client
 */
export const bugsnag = new Client(env.BUGSNAG_API_KEY);

/**
 * register our global exception handlers
 */
export const registerGlobalExceptionHandlers = () => {
  // bugsnag.notify(new Error("Test error"))

  if (!__DEV__) {
    setJSExceptionHandler(jsErrorHandler, true);
  }

  setNativeExceptionHandler(nativeErrorHandler);
};
