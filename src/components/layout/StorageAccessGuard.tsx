'use client';

import { useServerInsertedHTML } from 'next/navigation';

export function StorageAccessGuard() {
  useServerInsertedHTML(() => {
    return (
      <script
        id="storage-access-guard"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              function createMemoryStorage() {
                var store = {};
                return {
                  getItem: function (key) {
                    key = String(key);
                    return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
                  },
                  setItem: function (key, value) {
                    store[String(key)] = String(value);
                  },
                  removeItem: function (key) {
                    delete store[String(key)];
                  },
                  clear: function () {
                    store = {};
                  },
                  key: function (index) {
                    return Object.keys(store)[index] || null;
                  },
                  get length() {
                    return Object.keys(store).length;
                  }
                };
              }

              function patchStorage(name) {
                try {
                  window[name].getItem("__openmarket_storage_test__");
                } catch (error) {
                  try {
                    Object.defineProperty(window, name, {
                      configurable: true,
                      value: createMemoryStorage()
                    });
                  } catch (_) {}
                }
              }

              patchStorage("sessionStorage");
              patchStorage("localStorage");
            })();
          `,
        }}
      />
    );
  });

  return null;
}
