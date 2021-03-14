import {createContext} from "react";
export const LocalizationContext = createContext("ENG");

export const LocalizationProvider = LocalizationContext.Provider

export const LocalizationConsumer = LocalizationContext.Consumer