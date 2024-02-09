import * as punycode from "punycode";

const HIGNS_GLOBAL_NAME = '__Higns_Global_Instance'

/**
 * Get the Higns instance.
 *
 * Used by the main application and for plugins to register themselves.
 *
 */
export function higns(pluginId : string) : HignsClient {
    if (!window[HIGNS_GLOBAL_NAME]) {
        throw new Error('Higns not initialized. You need to load the main application or the development tools first.');
    }
    return new HignsClient(window[HIGNS_GLOBAL_NAME], pluginId);
}

export function init_higns() : HignsMainProcess {
    if (window[HIGNS_GLOBAL_NAME]) {
        throw new Error('Higns already initialized. Higns is only allowed to be initialized once by the main application. Do not initialize Higns in a library or a component.');
    }
    window[HIGNS_GLOBAL_NAME] = new Higns();
    return new HignsMainProcess(window[HIGNS_GLOBAL_NAME]);
}


class HignsMainProcess {
    constructor(public readonly higns: Higns) {

    }


}

class HignsClient {

    constructor(public readonly higns: Higns, public readonly pluginId: string) {

    }

}


class Higns {
    constructor() {
        console.log('Higns')
    }
}
