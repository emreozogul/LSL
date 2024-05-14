// src/renderer/clients/ClientLoader.tsx
import React from 'react';
import { ClientInterface } from './ClientInterface';

export function ClientLoader({ client }: { client: ClientInterface }) {
    return (
        <div>
            <h2>{client.name}</h2>
            {client.render()}
        </div>
    );
}
