export interface Ok {
    success: true;
    hasValue: false;
}

export interface OkVal<TValue> {
    success: true;
    hasValue: true;
    value: TValue;
}

export type ReasonType = string | number;

export interface Bad<TReason extends ReasonType> {
    success: false;
    hasValue: false;
    reason: TReason;
}

export interface BadVal<TReason extends ReasonType, TValue> {
    success: false;
    hasValue: true;
    reason: TReason;
    value: TValue;
}

export type OkResult = Ok | OkVal<any>;
export type BadResult = Bad<ReasonType> | BadVal<ReasonType, any>;
export type AnyResult = OkResult | BadResult;

export class ResultWrapper {
    public readonly success: boolean = false;

    public readonly hasValue: boolean = false;
    public readonly value?: any;

    public readonly reason?: ReasonType;

    public constructor(from?: Partial<ResultWrapper>) {
        if (from != undefined) {
            this.success = from.success ?? false;
            this.hasValue = from.hasValue ?? from.value !== undefined;
            this.value = from.value;
            this.reason = from.reason;
        }
    }
}


/**
 * Returns an empty successful result.
 */
function ok(value?: undefined): Ok;

/**
 * Returns a successful result with a typed string or number value.
 * @param value A typed string or number.
 */
function ok<T extends string | number>(value: T): OkVal<T>;

/**
 * Returns a successful result with a typed value.
 * @param value The value to return.
 */
function ok<T>(value: T): OkVal<T>;

function ok<T>(value?: any) {
    if (value !== undefined) return new ResultWrapper({ success: true, hasValue: true, value }) as OkVal<T>;
    else return new ResultWrapper({ success: true }) as Ok;
}

/**
 * Common shortcuts for ok results.
 */
namespace ok {
}

/**
 * Returns a failed result with a typed string or number reason.
 * @param reason A typed string or number reason describing why the operation has failed.
 */
function bad<TReason extends ReasonType>(reason: TReason, value?: undefined): Bad<TReason>;

function bad<TReason extends ReasonType, TValue>(reason: TReason, value: TValue): BadVal<TReason, TValue>;

function bad<TReason extends ReasonType, TValue>(reason: TReason, value?: TValue) {
    if (value !== undefined) return new ResultWrapper({ success: false, reason, value, hasValue: true });
    else return new ResultWrapper({ success: false, reason });
}

export type BadShortcut<TReason extends ReasonType> =
    <TValue = undefined>(value?: TValue) => TValue extends undefined ? Bad<TReason> : BadVal<TReason, TValue>;


/**
 * A "Bad" result represents an operation that has failed, whose origin is known or which was predictable.
 * The result contains a reason describing why the operation has failed.
 * Note: any exceptional errors that cannot be compensated should not be represented as a result, but thrown as an exception (e.g.: a database transaction has failed, a request failed due to a network error, etc).
 */
export const Bad = bad;

/**
 * An "Ok" result represents an operation that has been successfully completed.
 * The result may include a value.
 */
export const Ok = ok;
