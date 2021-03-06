import { ActionResolver } from './Resolver';

/**
 * Responsible of action invocation and execution
 */
export class ActionInvoker {
    constructor(
        private _resolver: ActionResolver
    ) {}
    
    /**
     * Invoke the specified action
     * @param actionName The action to invoke
     * @param parameters The action parameters
     * @return A promise that will wrap the action execution result
     */
    invoke (actionName: string, parameters:any) : Promise<any> {
        return this._resolver.resolve(actionName).execute(parameters);
    }
}