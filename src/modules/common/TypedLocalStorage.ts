import { Injectable } from '@angular/core';
import { TypedStorage } from "./TypedStorage";

/**
 * Typed key value store using the locasStorage API
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage</a>
 */
export class TypedLocalStorage<T> extends TypedStorage<T> {
    constructor(key: string, defaultValue: T) {
        super(localStorage, key, defaultValue);
    }
}
