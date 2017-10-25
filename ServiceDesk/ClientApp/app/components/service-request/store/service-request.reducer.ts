import { Action } from '@ngrx/store';

import { ServiceRequest } from '../service-request.models';
import { ServiceRequestState } from './service-request.state';
import * as ServiceRequestActions from './service-request.actions';

export const initialState: ServiceRequestState = {
    serviceRequests: [],
    groups: ['IT', 'avia', 'rail']
};

export function serviceRequestReducer(state = initialState, action: ServiceRequestActions.Actions): ServiceRequestState {
    switch (action.type) {

        case ServiceRequestActions.RECEIVED_SERVICE_REQUEST:
            return Object.assign({}, state, {
                serviceRequests: state.serviceRequests.concat(action.serviceRequest),
                groups: state.groups
            });

        case ServiceRequestActions.RECEIVED_GROUP_JOINED:
            return Object.assign({}, state, {
                serviceRequests: state.serviceRequests,
                groups: (state.groups.indexOf(action.group) > -1) ? state.groups : state.groups.concat(action.group)
            });

        case ServiceRequestActions.RECEIVED_GROUP_LEFT:
            const data = [];
            for (const entry of state.groups) {
                if (entry !== action.group) {
                    data.push(entry);
                }
            }
            console.log(data);
            return Object.assign({}, state, {
                serviceRequests: state.serviceRequests,
                groups: data
            });

        default:
            return state;
    }
}
