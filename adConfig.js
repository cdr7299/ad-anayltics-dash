'use client'

import { PersonaAdSDK } from "@personaxyz/ad-sdk";

const personaConfig = {
    apiKey : 'persona-pub-0xd525280f2e74f3e9c8de08755c5b6fef',
    environment: 'development'
}

const sdk = new PersonaAdSDK(personaConfig);

export const adClient = sdk.getClient();