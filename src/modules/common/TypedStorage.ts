import { Injectable } from '@angular/core';
import { cloneDeep } from "lodash-es";

export interface IStoredWrappedValue {
    date: string;
    value: any;
}

export interface IWrappedValue<T> {
    date?: Date;
    value: T;
}

export abstract class TypedStorage<T> {
    protected readonly _storage: Storage;
    protected readonly _key: string;
    protected readonly _defaultValue: T;

    constructor(storage: Storage, key: string, defaultValue: T) {
        this._storage = storage;
        this._key = key ?? new Error("key is required");
        this._defaultValue = cloneDeep(defaultValue);
    }

    private getDefaultWrappedValue(): IWrappedValue<T> {
        return {
            date: undefined,
            value: cloneDeep(this._defaultValue)
        };
    }

    protected onSave(value: T): any {
        return value;
    }

    protected onLoad(value: any): T {
        return value;
    }

    protected load(): IWrappedValue<T> {
        const storedJson = this._storage.getItem(this._key);

        if (storedJson === null) {
            return this.getDefaultWrappedValue();
        }
        else {
            const deserialized = JSON.parse(storedJson) as IStoredWrappedValue;

            const wrappedValue: IWrappedValue<T> = {
                date: new Date(deserialized.date),
                value: this.onLoad(deserialized.value)
            };

            return wrappedValue;
        }
    }

    protected save(wrappedValue: IWrappedValue<T>) {
        const toSerialize: IStoredWrappedValue = {
            date: (wrappedValue.date ?? new Date()).toISOString(),
            value: this.onSave(wrappedValue.value)
        };

        this._storage.setItem(this._key, JSON.stringify(toSerialize));
    }

    getLastModificationDate() {
        return this.load().date;
    }

    getValue() {
        return this.load().value;
    }

    setValue(value: T) {
        this.save({
            date: new Date(),
            value: cloneDeep(value)
        });
    }

    resetValue() {
        this._storage.removeItem(this._key);
        return this.getDefaultWrappedValue();
    }
}
