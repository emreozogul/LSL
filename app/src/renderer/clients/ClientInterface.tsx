export class ClientInterface {
    name: string;
    port: number;

    constructor(name: string, port: number) {
        this.name = name;
        this.port = port;
    }

    render() {
        return (
            <iframe src={`http://localhost:${this.port}`} style={{ width: '100%', height: '100%' }} />
        );
    }
}