export class ServiceRequest {
    public id: number;
    
    constructor(
        public description: string,
        public name: string,
        public author: string,
        public category: string
    ) { }
}
