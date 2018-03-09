interface IDebuggers {
    log: debug.IDebugger,
    debug: debug.IDebugger,
    error: debug.IDebugger,
    warn: debug.IDebugger,
    trace: debug.IDebugger,
    info: debug.IDebugger
}

export function createConsoleDebugger(module:string): IDebuggers;

export namespace createConsoleDebugger {
    const prototype: {
    };

}

