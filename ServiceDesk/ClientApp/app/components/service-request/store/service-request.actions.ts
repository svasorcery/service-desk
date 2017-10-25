import { Action } from '@ngrx/store';

import { ServiceRequest } from '../service-request.models';
 
export const JOIN_GROUP = '[requests] JOIN_GROUP';
export const LEAVE_GROUP = '[requests] LEAVE_GROUP';
export const JOIN_GROUP_COMPLETE = '[requests] JOIN_GROUP_COMPLETE';
export const LEAVE_GROUP_COMPLETE = '[requests] LEAVE_GROUP_COMPLETE';
export const SEND_SERVICE_REQUEST = '[requests] SEND_SERVICE_REQUEST';
export const SEND_SERVICE_REQUEST_COMPLETE = '[requests] SEND_SERVICE_REQUEST_COMPLETE';
export const RECEIVED_SERVICE_REQUEST = '[requests]RECEIVED_SERVICE_REQUEST';
export const RECEIVED_GROUP_JOINED = '[requests] RECEIVED_GROUP_JOINED';
export const RECEIVED_GROUP_LEFT = '[requests] RECEIVED_GROUP_LEFT';
 
export class JoinGroupAction implements Action {
    readonly type = JOIN_GROUP;
 
    constructor(public group: string) { }
}
 
export class LeaveGroupAction implements Action {
    readonly type = LEAVE_GROUP;
 
    constructor(public group: string) { }
}
 
 
export class JoinGroupActionComplete implements Action {
    readonly type = JOIN_GROUP_COMPLETE;
 
    constructor(public group: string) { }
}
 
export class LeaveGroupActionComplete implements Action {
    readonly type = LEAVE_GROUP_COMPLETE;
 
    constructor(public group: string) { }
}
export class SendServiceRequestAction implements Action {
    readonly type = SEND_SERVICE_REQUEST;
 
    constructor(public serviceRequest: ServiceRequest) { }
}
 
export class SendServiceRequestActionComplete implements Action {
    readonly type = SEND_SERVICE_REQUEST_COMPLETE;
 
    constructor(public serviceRequest: ServiceRequest) { }
}
 
export class ReceivedServiceRequestAction implements Action {
    readonly type = RECEIVED_SERVICE_REQUEST;
 
    constructor(public serviceRequest: ServiceRequest) { }
}
 
export class ReceivedGroupJoinedAction implements Action {
    readonly type = RECEIVED_GROUP_JOINED;
 
    constructor(public group: string) { }
}
 
export class ReceivedGroupLeftAction implements Action {
    readonly type = RECEIVED_GROUP_LEFT;
 
    constructor(public group: string) { }
}
 
export type Actions
    = JoinGroupAction
    | LeaveGroupAction
    | JoinGroupActionComplete
    | LeaveGroupActionComplete
    | SendServiceRequestAction
    | SendServiceRequestActionComplete
    | ReceivedServiceRequestAction
    | ReceivedGroupJoinedAction
    | ReceivedGroupLeftAction;
