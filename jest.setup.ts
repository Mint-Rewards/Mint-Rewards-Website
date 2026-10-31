import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'node:util';

/*
 * jsdom does not define TextEncoder/TextDecoder, and react-router reaches for
 * TextEncoder at module scope from 7.18 onwards — so merely importing <Link>
 * threw `ReferenceError: TextEncoder is not defined` and the whole suite
 * failed to load. Node's own implementations are the ones jsdom is missing.
 *
 * This has to run before the test module is imported, which is why it lives
 * in setup rather than in a test.
 */
Object.assign(globalThis, { TextEncoder, TextDecoder });

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver;
