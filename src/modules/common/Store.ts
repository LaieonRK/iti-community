import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { cloneDeep } from "lodash-es";

export type StateMutation<T> = (current: T) => T;
export type AsyncStateMutation<T> = (current: T) => Promise<T>;

export class MutableStore<T> {
    private _defaultValue: T;
    private readonly _behaviorSubject: BehaviorSubject<T>;
    private readonly _observable: Observable<T>;

    constructor(defaultValue: T) {
        this._defaultValue = defaultValue;
        this._behaviorSubject = new BehaviorSubject<T>(defaultValue);
        this._observable = this._behaviorSubject.asObservable();
    }

    protected get mutableValue() {
        return this._behaviorSubject.value;
    }

    get value() {
        return this._behaviorSubject.value as T;
    }

    get value$() {
        return this._observable as Observable<T>;
    }

    copy() {
        return cloneDeep(this.mutableValue);
    }

    protected set(value: T) {
        this._behaviorSubject.next(value);
        return this.value;
    }

    protected reset() {
        this.set(this._defaultValue);
        return this.value;
    }

    protected mutate(mutation: StateMutation<T>) {
        const mutableValue = this.mutableValue;

        const mutated = mutation(mutableValue);
        this._behaviorSubject.next(mutated);

        return this.value;
    }

    protected async mutateAsync(mutation: AsyncStateMutation<T>) {
        const mutableValue = this.mutableValue;

        const mutated = await mutation(mutableValue);
        this._behaviorSubject.next(mutated);

        return this.value;
    }

    notify() {
        this._behaviorSubject.next(this.mutableValue);
    }
}

export class Store<T> extends MutableStore<T> {

    get<TVal>(selector: (state: T) => TVal): Observable<TVal> {
        return this.value$.pipe(map(selector));
    }

    set(value: T) {
        return super.set(value);
    }

    reset() {
        return super.reset();
    }

    mutate(mutation: StateMutation<T>) {
        return super.mutate(mutation);
    }

    async mutateAsync(mutation: AsyncStateMutation<T>) {
        return super.mutateAsync(mutation);
    }
}
