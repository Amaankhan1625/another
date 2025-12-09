import '@testing-library/jest-dom'
import 'whatwg-fetch'

// Mock BroadcastChannel for Jest tests since it's not available
globalThis.BroadcastChannel = globalThis.BroadcastChannel || class {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  postMessage() {}
  close() {}
  addEventListener() {}
  removeEventListener() {}
  dispatchEvent() { return true; }
};

// Simple polyfills for streams
globalThis.WritableStream = globalThis.WritableStream || class {
  constructor() {}
  getWriter() {
    return {
      write: () => Promise.resolve(),
      close: () => Promise.resolve(),
      abort: () => Promise.resolve(),
    };
  }
};

globalThis.TransformStream = globalThis.TransformStream || class {
  constructor() {
    this.readable = {
      getReader: () => ({
        read: () => Promise.resolve({ done: true, value: undefined }),
        releaseLock: () => {},
      }),
    };
    this.writable = {
      getWriter: () => ({
        write: () => Promise.resolve(),
        close: () => Promise.resolve(),
        abort: () => Promise.resolve(),
      }),
    };
  }
};
