import { ServiceRequest } from '../service-request.models';

export interface ServiceRequestState {
    serviceRequests: ServiceRequest[],
    groups: string[]
};
