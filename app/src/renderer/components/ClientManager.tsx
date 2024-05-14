// src/renderer/components/ClientManager.tsx
import React, { useState } from 'react';
import { ClientInterface } from '../clients/ClientInterface';
import { ClientLoader } from '../clients/ClientLoader';

function ClientManager() {
    const [clients, setClients] = useState<ClientInterface[]>([]);
    const [clientName, setClientName] = useState('');
    const [clientPort, setClientPort] = useState<number | ''>('');

    const addClient = () => {
        if (clientName && clientPort) {
            const newClient = new ClientInterface(clientName, clientPort);
            setClients([...clients, newClient]);
        }
    };

    const removeClient = (index: number) => {
        const newClients = clients.filter((_, i) => i !== index);
        setClients(newClients);
    };

    return (
        <div className='page'>
            <h1>Client Manager</h1>
            <input
                type="text"
                placeholder="Client Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Client Port"
                value={clientPort}
                onChange={(e) => setClientPort(Number(e.target.value))}
            />
            <button onClick={addClient}>Add Client</button>
            <div>
                {clients.map((client, index) => (
                    <div key={index}>
                        <ClientLoader client={client} />
                        <button onClick={() => removeClient(index)}>Remove Client</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientManager;
