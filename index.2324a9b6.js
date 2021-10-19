(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $66a81edb4bc8c1a0$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $66a81edb4bc8c1a0$export$2e2bcd8739ae039(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $66a81edb4bc8c1a0$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $66a81edb4bc8c1a0$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

function $26a452f010249323$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}


function $34fdf35afa6ca9f4$export$2e2bcd8739ae039(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}


function $e9516c5bbed03753$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}


function $1156f94a82362102$export$2e2bcd8739ae039(arr, i) {
    return $26a452f010249323$export$2e2bcd8739ae039(arr) || $34fdf35afa6ca9f4$export$2e2bcd8739ae039(arr, i) || $e9516c5bbed03753$export$2e2bcd8739ae039();
}

function $d80b82f9cbb6a283$export$2e2bcd8739ae039(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}




var $86a79651cc295bac$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $86a79651cc295bac$var$runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
"object" === "object" ? $86a79651cc295bac$exports : {
});
try {
    regeneratorRuntime = $86a79651cc295bac$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $86a79651cc295bac$var$runtime;
    else Function("r", "regeneratorRuntime = r")($86a79651cc295bac$var$runtime);
}


/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const $c1d80e18e443d24e$var$directives = new WeakMap();
const $c1d80e18e443d24e$export$99b43ad1ed32e735 = (f)=>(...args)=>{
        const d = f(...args);
        $c1d80e18e443d24e$var$directives.set(d, true);
        return d;
    }
;
const $c1d80e18e443d24e$export$4b5d79f26e0e3ad5 = (o)=>{
    return typeof o === 'function' && $c1d80e18e443d24e$var$directives.has(o);
};


const $64dc54f3fdc55db7$export$52a61c3a7415f2b1 = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
const $64dc54f3fdc55db7$export$4cae3494608af418 = (container, start, end = null, before = null)=>{
    while(start !== end){
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
const $64dc54f3fdc55db7$export$77f49a256021c8de = (container, start, end = null)=>{
    while(start !== end){
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};


const $0e5da880d698a84e$export$9c068ae9cc5db4e8 = {
};
const $0e5da880d698a84e$export$45b790e32b2810ee = {
};



const $c599c8d131b7231a$export$ffc4d0086f1a4c9 = `{{lit-${String(Math.random()).slice(2)}}}`;
const $c599c8d131b7231a$export$36b8314a2f34ed60 = `<!--${$c599c8d131b7231a$export$ffc4d0086f1a4c9}-->`;
const $c599c8d131b7231a$export$8c751b9db6965af4 = new RegExp(`${$c599c8d131b7231a$export$ffc4d0086f1a4c9}|${$c599c8d131b7231a$export$36b8314a2f34ed60}`);
const $c599c8d131b7231a$export$552ff45b274cc170 = '$lit$';
class $c599c8d131b7231a$export$14416b8d99d47caa {
    constructor(result, element){
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */ , null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings: strings , values: { length: length  }  } = result;
        while(partIndex < length){
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */ ) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length: length  } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for(let i = 0; i < length; i++)if ($c599c8d131b7231a$var$endsWith(attributes[i].name, $c599c8d131b7231a$export$552ff45b274cc170)) count++;
                    while(count-- > 0){
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = $c599c8d131b7231a$export$a5d53adfffe6a300.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + $c599c8d131b7231a$export$552ff45b274cc170;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split($c599c8d131b7231a$export$8c751b9db6965af4);
                        this.parts.push({
                            type: 'attribute',
                            index: index,
                            name: name,
                            strings: statics
                        });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            } else if (node.nodeType === 3 /* Node.TEXT_NODE */ ) {
                const data = node.data;
                if (data.indexOf($c599c8d131b7231a$export$ffc4d0086f1a4c9) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split($c599c8d131b7231a$export$8c751b9db6965af4);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for(let i = 0; i < lastIndex; i++){
                        let insert;
                        let s = strings[i];
                        if (s === '') insert = $c599c8d131b7231a$export$46b32044f78fe9b1();
                        else {
                            const match = $c599c8d131b7231a$export$a5d53adfffe6a300.exec(s);
                            if (match !== null && $c599c8d131b7231a$var$endsWith(match[2], $c599c8d131b7231a$export$552ff45b274cc170)) s = s.slice(0, match.index) + match[1] + match[2].slice(0, -$c599c8d131b7231a$export$552ff45b274cc170.length) + match[3];
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({
                            type: 'node',
                            index: ++index
                        });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore($c599c8d131b7231a$export$46b32044f78fe9b1(), node);
                        nodesToRemove.push(node);
                    } else node.data = strings[lastIndex];
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ ) {
                if (node.data === $c599c8d131b7231a$export$ffc4d0086f1a4c9) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore($c599c8d131b7231a$export$46b32044f78fe9b1(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({
                        type: 'node',
                        index: index
                    });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) node.data = '';
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                } else {
                    let i = -1;
                    while((i = node.data.indexOf($c599c8d131b7231a$export$ffc4d0086f1a4c9, i + 1)) !== -1){
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({
                            type: 'node',
                            index: -1
                        });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove)n.parentNode.removeChild(n);
    }
}
const $c599c8d131b7231a$var$endsWith = (str, suffix)=>{
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const $c599c8d131b7231a$export$93919229d19012c8 = (part)=>part.index !== -1
;
const $c599c8d131b7231a$export$46b32044f78fe9b1 = ()=>document.createComment('')
;
const $c599c8d131b7231a$export$a5d53adfffe6a300 = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;


class $d69a2e08197a5845$export$6eecef7813f38266 {
    constructor(template, processor, options){
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts){
            if (part !== undefined) part.setValue(values[i]);
            i++;
        }
        for (const part1 of this.__parts)if (part1 !== undefined) part1.commit();
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = $64dc54f3fdc55db7$export$52a61c3a7415f2b1 ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */ , null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while(partIndex < parts.length){
            part = parts[partIndex];
            if (!$c599c8d131b7231a$export$93919229d19012c8(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while(nodeIndex < part.index){
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            } else this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            partIndex++;
        }
        if ($64dc54f3fdc55db7$export$52a61c3a7415f2b1) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}




/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */ const $e9141b8e1f513d5a$var$policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
    createHTML: (s)=>s
});
const $e9141b8e1f513d5a$var$commentMarker = ` ${$c599c8d131b7231a$export$ffc4d0086f1a4c9} `;
class $e9141b8e1f513d5a$export$ce95ebd39b69fb27 {
    constructor(strings, values, type, processor){
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */ getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for(let i = 0; i < l; i++){
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = $c599c8d131b7231a$export$a5d53adfffe6a300.exec(s);
            if (attributeMatch === null) // We're only in this branch if we don't have a attribute-like
            // preceding sequence. For comments, this guards against unusual
            // attribute values like <div foo="<!--${'bar'}">. Cases like
            // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
            // below.
            html += s + (isCommentBinding ? $e9141b8e1f513d5a$var$commentMarker : $c599c8d131b7231a$export$36b8314a2f34ed60);
            else // For attributes we use just a marker sentinel, and also append a
            // $lit$ suffix to the name to opt-out of attribute-specific parsing
            // that IE and Edge do for style and certain SVG attributes.
            html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + $c599c8d131b7231a$export$552ff45b274cc170 + attributeMatch[3] + $c599c8d131b7231a$export$ffc4d0086f1a4c9;
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        let value = this.getHTML();
        if ($e9141b8e1f513d5a$var$policy !== undefined) // this is secure because `this.strings` is a TemplateStringsArray.
        // TODO: validate this when
        // https://github.com/tc39/proposal-array-is-template-object is
        // implemented.
        value = $e9141b8e1f513d5a$var$policy.createHTML(value);
        template.innerHTML = value;
        return template;
    }
}
class $e9141b8e1f513d5a$export$36e852975bbbeae0 extends $e9141b8e1f513d5a$export$ce95ebd39b69fb27 {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        $64dc54f3fdc55db7$export$4cae3494608af418(content, svgElement.firstChild);
        return template;
    }
}



const $e991b22ff0c98045$export$c3825b437cbdea5c = (value)=>{
    return value === null || !(typeof value === 'object' || typeof value === 'function');
};
const $e991b22ff0c98045$export$9652023d9040757 = (value)=>{
    return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!(value && value[Symbol.iterator]);
};
class $e991b22ff0c98045$export$9ac9216e336e96d0 {
    constructor(element, name, strings){
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for(let i = 0; i < strings.length - 1; i++)this.parts[i] = this._createPart();
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */ _createPart() {
        return new $e991b22ff0c98045$export$da9b3ca39c846561(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === '' && strings[1] === '') {
            const v = parts[0].value;
            if (typeof v === 'symbol') return String(v);
            if (typeof v === 'string' || !$e991b22ff0c98045$export$9652023d9040757(v)) return v;
        }
        let text = '';
        for(let i = 0; i < l; i++){
            text += strings[i];
            const part = parts[i];
            if (part !== undefined) {
                const v = part.value;
                if ($e991b22ff0c98045$export$c3825b437cbdea5c(v) || !$e991b22ff0c98045$export$9652023d9040757(v)) text += typeof v === 'string' ? v : String(v);
                else for (const t of v)text += typeof t === 'string' ? t : String(t);
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
class $e991b22ff0c98045$export$da9b3ca39c846561 {
    constructor(committer){
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== $0e5da880d698a84e$export$9c068ae9cc5db4e8 && (!$e991b22ff0c98045$export$c3825b437cbdea5c(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!$c1d80e18e443d24e$export$4b5d79f26e0e3ad5(value)) this.committer.dirty = true;
        }
    }
    commit() {
        while($c1d80e18e443d24e$export$4b5d79f26e0e3ad5(this.value)){
            const directive = this.value;
            this.value = $0e5da880d698a84e$export$9c068ae9cc5db4e8;
            directive(this);
        }
        if (this.value === $0e5da880d698a84e$export$9c068ae9cc5db4e8) return;
        this.committer.commit();
    }
}
class $e991b22ff0c98045$export$a354997aeda6e93 {
    constructor(options){
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ appendInto(container) {
        this.startNode = container.appendChild($c599c8d131b7231a$export$46b32044f78fe9b1());
        this.endNode = container.appendChild($c599c8d131b7231a$export$46b32044f78fe9b1());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ appendIntoPart(part) {
        part.__insert(this.startNode = $c599c8d131b7231a$export$46b32044f78fe9b1());
        part.__insert(this.endNode = $c599c8d131b7231a$export$46b32044f78fe9b1());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ insertAfterPart(ref) {
        ref.__insert(this.startNode = $c599c8d131b7231a$export$46b32044f78fe9b1());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) return;
        while($c1d80e18e443d24e$export$4b5d79f26e0e3ad5(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = $0e5da880d698a84e$export$9c068ae9cc5db4e8;
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === $0e5da880d698a84e$export$9c068ae9cc5db4e8) return;
        if ($e991b22ff0c98045$export$c3825b437cbdea5c(value)) {
            if (value !== this.value) this.__commitText(value);
        } else if (value instanceof $e9141b8e1f513d5a$export$ce95ebd39b69fb27) this.__commitTemplateResult(value);
        else if (value instanceof Node) this.__commitNode(value);
        else if ($e991b22ff0c98045$export$9652023d9040757(value)) this.__commitIterable(value);
        else if (value === $0e5da880d698a84e$export$45b790e32b2810ee) {
            this.value = $0e5da880d698a84e$export$45b790e32b2810ee;
            this.clear();
        } else // Fallback, will render the string representation
        this.__commitText(value);
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) return;
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling && node.nodeType === 3 /* Node.TEXT_NODE */ ) // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
        else this.__commitNode(document.createTextNode(valueAsString));
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof $d69a2e08197a5845$export$6eecef7813f38266 && this.value.template === template) this.value.update(value.values);
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new $d69a2e08197a5845$export$6eecef7813f38266(template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value){
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new $e991b22ff0c98045$export$a354997aeda6e93(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) itemPart.appendIntoPart(this);
                else itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        $64dc54f3fdc55db7$export$77f49a256021c8de(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
class $e991b22ff0c98045$export$b9df278b293d5b48 {
    constructor(element, name, strings){
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') throw new Error('Boolean attributes can only contain a single expression');
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while($c1d80e18e443d24e$export$4b5d79f26e0e3ad5(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = $0e5da880d698a84e$export$9c068ae9cc5db4e8;
            directive(this);
        }
        if (this.__pendingValue === $0e5da880d698a84e$export$9c068ae9cc5db4e8) return;
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) this.element.setAttribute(this.name, '');
            else this.element.removeAttribute(this.name);
            this.value = value;
        }
        this.__pendingValue = $0e5da880d698a84e$export$9c068ae9cc5db4e8;
    }
}
class $e991b22ff0c98045$export$2d7935a96ad7cb22 extends $e991b22ff0c98045$export$9ac9216e336e96d0 {
    constructor(element, name, strings){
        super(element, name, strings);
        this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    }
    _createPart() {
        return new $e991b22ff0c98045$export$b78f5e1c476c794e(this);
    }
    _getValue() {
        if (this.single) return this.parts[0].value;
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class $e991b22ff0c98045$export$b78f5e1c476c794e extends $e991b22ff0c98045$export$da9b3ca39c846561 {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let $e991b22ff0c98045$var$eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(()=>{
    try {
        const options = {
            get capture () {
                $e991b22ff0c98045$var$eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    } catch (_e) {
    // event options not supported
    }
})();
class $e991b22ff0c98045$export$b28e368652651bd7 {
    constructor(element, eventName, eventContext){
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e)=>this.handleEvent(e)
        ;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while($c1d80e18e443d24e$export$4b5d79f26e0e3ad5(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = $0e5da880d698a84e$export$9c068ae9cc5db4e8;
            directive(this);
        }
        if (this.__pendingValue === $0e5da880d698a84e$export$9c068ae9cc5db4e8) return;
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        if (shouldAddListener) {
            this.__options = $e991b22ff0c98045$var$getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = $0e5da880d698a84e$export$9c068ae9cc5db4e8;
    }
    handleEvent(event) {
        if (typeof this.value === 'function') this.value.call(this.eventContext || this.element, event);
        else this.value.handleEvent(event);
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const $e991b22ff0c98045$var$getOptions = (o)=>o && ($e991b22ff0c98045$var$eventOptionsSupported ? {
        capture: o.capture,
        passive: o.passive,
        once: o.once
    } : o.capture)
;


class $e9461418754611f9$export$53a556099f0fa088 {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */ handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new $e991b22ff0c98045$export$2d7935a96ad7cb22(element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') return [
            new $e991b22ff0c98045$export$b28e368652651bd7(element, name.slice(1), options.eventContext)
        ];
        if (prefix === '?') return [
            new $e991b22ff0c98045$export$b9df278b293d5b48(element, name.slice(1), strings)
        ];
        const committer = new $e991b22ff0c98045$export$9ac9216e336e96d0(element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */ handleTextExpression(options) {
        return new $e991b22ff0c98045$export$a354997aeda6e93(options);
    }
}
const $e9461418754611f9$export$608256e8e6650f65 = new $e9461418754611f9$export$53a556099f0fa088();











function $117542e81ffa080a$export$ac8809ff023de002(result) {
    let templateCache = $117542e81ffa080a$export$f4a9a5e9f571ddee.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        $117542e81ffa080a$export$f4a9a5e9f571ddee.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) return template;
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join($c599c8d131b7231a$export$ffc4d0086f1a4c9);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new $c599c8d131b7231a$export$14416b8d99d47caa(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const $117542e81ffa080a$export$f4a9a5e9f571ddee = new Map();


const $d034cb69e90eeed4$export$6e2410c1d27f06e7 = new WeakMap();
const $d034cb69e90eeed4$export$b3890eb0ae9dca99 = (result, container, options)=>{
    let part = $d034cb69e90eeed4$export$6e2410c1d27f06e7.get(container);
    if (part === undefined) {
        $64dc54f3fdc55db7$export$77f49a256021c8de(container, container.firstChild);
        $d034cb69e90eeed4$export$6e2410c1d27f06e7.set(container, part = new $e991b22ff0c98045$export$a354997aeda6e93(Object.assign({
            templateFactory: $117542e81ffa080a$export$ac8809ff023de002
        }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};






// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
const $e96d67fa7454c8ba$export$c0bb0b647f701bb5 = (strings, ...values)=>new $e9141b8e1f513d5a$export$ce95ebd39b69fb27(strings, values, 'html', $e9461418754611f9$export$608256e8e6650f65)
;
const $e96d67fa7454c8ba$export$7ed1367e7fa1ad68 = (strings, ...values)=>new $e9141b8e1f513d5a$export$36e852975bbbeae0(strings, values, 'svg', $e9461418754611f9$export$608256e8e6650f65)
;


let $54328c9baf7bc588$export$97aac956da55dae9;
let $54328c9baf7bc588$var$currentId = 0;
function $54328c9baf7bc588$export$5f80f094fd31fffd(state) {
    $54328c9baf7bc588$export$97aac956da55dae9 = state;
}
function $54328c9baf7bc588$export$42ffd38884aecdac() {
    $54328c9baf7bc588$export$97aac956da55dae9 = null;
    $54328c9baf7bc588$var$currentId = 0;
}
function $54328c9baf7bc588$export$5e14cdade93d6f7b() {
    return $54328c9baf7bc588$var$currentId++;
}


const $5637b1ccb386597b$export$225ab0e0febd92b1 = Symbol('haunted.phase');
const $5637b1ccb386597b$export$819a7f3d5f1d869d = Symbol('haunted.hook');
const $5637b1ccb386597b$export$e3a0ce117547085d = Symbol('haunted.update');
const $5637b1ccb386597b$export$c3840c26fe093fdb = Symbol('haunted.commit');
const $5637b1ccb386597b$export$8e8d58c9b17fea3e = Symbol('haunted.effects');
const $5637b1ccb386597b$export$db08efd2f456c5bf = Symbol('haunted.layoutEffects');
const $5637b1ccb386597b$export$c1645e5fb9a50701 = 'haunted.context';


class $60bd6928059dbf23$export$7254cc27399e90bd {
    update;
    host;
    virtual;
    [$5637b1ccb386597b$export$819a7f3d5f1d869d];
    [$5637b1ccb386597b$export$8e8d58c9b17fea3e];
    [$5637b1ccb386597b$export$db08efd2f456c5bf];
    constructor(update, host){
        this.update = update;
        this.host = host;
        this[$5637b1ccb386597b$export$819a7f3d5f1d869d] = new Map();
        this[$5637b1ccb386597b$export$8e8d58c9b17fea3e] = [];
        this[$5637b1ccb386597b$export$db08efd2f456c5bf] = [];
    }
    run(cb) {
        $54328c9baf7bc588$export$5f80f094fd31fffd(this);
        let res = cb();
        $54328c9baf7bc588$export$42ffd38884aecdac();
        return res;
    }
    _runEffects(phase) {
        let effects = this[phase];
        $54328c9baf7bc588$export$5f80f094fd31fffd(this);
        for (let effect of effects)effect.call(this);
        $54328c9baf7bc588$export$42ffd38884aecdac();
    }
    runEffects() {
        this._runEffects($5637b1ccb386597b$export$8e8d58c9b17fea3e);
    }
    runLayoutEffects() {
        this._runEffects($5637b1ccb386597b$export$db08efd2f456c5bf);
    }
    teardown() {
        let hooks = this[$5637b1ccb386597b$export$819a7f3d5f1d869d];
        hooks.forEach((hook)=>{
            if (typeof hook.teardown === 'function') hook.teardown();
        });
    }
}



const $cf63d9e4c44de970$var$defer = Promise.resolve().then.bind(Promise.resolve());
function $cf63d9e4c44de970$var$runner() {
    let tasks = [];
    let id;
    function runTasks() {
        id = null;
        let t = tasks;
        tasks = [];
        for(var i = 0, len = t.length; i < len; i++)t[i]();
    }
    return function(task) {
        tasks.push(task);
        if (id == null) id = $cf63d9e4c44de970$var$defer(runTasks);
    };
}
const $cf63d9e4c44de970$var$read = $cf63d9e4c44de970$var$runner();
const $cf63d9e4c44de970$var$write = $cf63d9e4c44de970$var$runner();
class $cf63d9e4c44de970$export$61cd7faa6f3316a3 {
    renderer;
    host;
    state;
    [$5637b1ccb386597b$export$225ab0e0febd92b1];
    _updateQueued;
    constructor(renderer, host){
        this.renderer = renderer;
        this.host = host;
        this.state = new $60bd6928059dbf23$export$7254cc27399e90bd(this.update.bind(this), host);
        this[$5637b1ccb386597b$export$225ab0e0febd92b1] = null;
        this._updateQueued = false;
    }
    update() {
        if (this._updateQueued) return;
        $cf63d9e4c44de970$var$read(()=>{
            let result = this.handlePhase($5637b1ccb386597b$export$e3a0ce117547085d);
            $cf63d9e4c44de970$var$write(()=>{
                this.handlePhase($5637b1ccb386597b$export$c3840c26fe093fdb, result);
                $cf63d9e4c44de970$var$write(()=>{
                    this.handlePhase($5637b1ccb386597b$export$8e8d58c9b17fea3e);
                });
            });
            this._updateQueued = false;
        });
        this._updateQueued = true;
    }
    handlePhase(phase, arg) {
        this[$5637b1ccb386597b$export$225ab0e0febd92b1] = phase;
        switch(phase){
            case $5637b1ccb386597b$export$c3840c26fe093fdb:
                this.commit(arg);
                this.runEffects($5637b1ccb386597b$export$db08efd2f456c5bf);
                return;
            case $5637b1ccb386597b$export$e3a0ce117547085d:
                return this.render();
            case $5637b1ccb386597b$export$8e8d58c9b17fea3e:
                return this.runEffects($5637b1ccb386597b$export$8e8d58c9b17fea3e);
        }
        this[$5637b1ccb386597b$export$225ab0e0febd92b1] = null;
    }
    render() {
        return this.state.run(()=>this.renderer.call(this.host, this.host)
        );
    }
    runEffects(phase) {
        this.state._runEffects(phase);
    }
    teardown() {
        this.state.teardown();
    }
}


const $3ca0ea538faed2a0$var$toCamelCase = (val = '')=>val.replace(/-+([a-z])?/g, (_, char)=>char ? char.toUpperCase() : ''
    )
;
function $3ca0ea538faed2a0$export$3bc26eec1cc2439f(render) {
    class Scheduler extends $cf63d9e4c44de970$export$61cd7faa6f3316a3 {
        frag;
        constructor(renderer, frag, host){
            super(renderer, host || frag);
            this.frag = frag;
        }
        commit(result) {
            render(result, this.frag);
        }
    }
    function component(renderer, baseElementOrOptions, options) {
        const BaseElement = (options || baseElementOrOptions || {
        }).baseElement || HTMLElement;
        const { observedAttributes: observedAttributes = [] , useShadowDOM: useShadowDOM = true , shadowRootInit: shadowRootInit = {
        }  } = options || baseElementOrOptions || {
        };
        class Element extends BaseElement {
            _scheduler;
            static get observedAttributes() {
                return renderer.observedAttributes || observedAttributes || [];
            }
            constructor(){
                super();
                if (useShadowDOM === false) this._scheduler = new Scheduler(renderer, this);
                else {
                    this.attachShadow({
                        mode: 'open',
                        ...shadowRootInit
                    });
                    this._scheduler = new Scheduler(renderer, this.shadowRoot, this);
                }
            }
            connectedCallback() {
                this._scheduler.update();
            }
            disconnectedCallback() {
                this._scheduler.teardown();
            }
            attributeChangedCallback(name, oldValue, newValue) {
                if (oldValue === newValue) return;
                let val = newValue === '' ? true : newValue;
                Reflect.set(this, $3ca0ea538faed2a0$var$toCamelCase(name), val);
            }
        }
        function reflectiveProp(initialValue) {
            let value = initialValue;
            let isSetup = false;
            return Object.freeze({
                enumerable: true,
                configurable: true,
                get () {
                    return value;
                },
                set (newValue) {
                    // Avoid scheduling update when prop value hasn't changed
                    if (isSetup && value === newValue) return;
                    isSetup = true;
                    value = newValue;
                    if (this._scheduler) this._scheduler.update();
                }
            });
        }
        const proto = new Proxy(BaseElement.prototype, {
            getPrototypeOf (target) {
                return target;
            },
            set (target, key, value, receiver) {
                let desc;
                if (key in target) {
                    desc = Object.getOwnPropertyDescriptor(target, key);
                    if (desc && desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    }
                    Reflect.set(target, key, value, receiver);
                    return true;
                }
                if (typeof key === 'symbol' || key[0] === '_') desc = {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: value
                };
                else desc = reflectiveProp(value);
                Object.defineProperty(receiver, key, desc);
                if (desc.set) desc.set.call(receiver, value);
                return true;
            }
        });
        Object.setPrototypeOf(Element.prototype, proto);
        return Element;
    }
    return component;
}





class $0271e6a690198cf7$export$e594a57fbda5c090 {
    id;
    state;
    constructor(id, state){
        this.id = id;
        this.state = state;
    }
}
function $0271e6a690198cf7$var$use(Hook, ...args) {
    let id = $54328c9baf7bc588$export$5e14cdade93d6f7b();
    let hooks = $54328c9baf7bc588$export$97aac956da55dae9[$5637b1ccb386597b$export$819a7f3d5f1d869d];
    let hook = hooks.get(id);
    if (!hook) {
        hook = new Hook(id, $54328c9baf7bc588$export$97aac956da55dae9, ...args);
        hooks.set(id, hook);
    }
    return hook.update(...args);
}
function $0271e6a690198cf7$export$1062a250c78723ea(Hook) {
    return $0271e6a690198cf7$var$use.bind(null, Hook);
}





function $49549e7c7634590b$export$7ea7134f704deda4(setEffects) {
    return $0271e6a690198cf7$export$1062a250c78723ea(class extends $0271e6a690198cf7$export$e594a57fbda5c090 {
        callback;
        lastValues;
        values;
        _teardown;
        constructor(id, state, ignored1, ignored2){
            super(id, state);
            setEffects(state, this);
        }
        update(callback, values) {
            this.callback = callback;
            this.values = values;
        }
        call() {
            if (!this.values || this.hasChanged()) this.run();
            this.lastValues = this.values;
        }
        run() {
            this.teardown();
            this._teardown = this.callback.call(this.state);
        }
        teardown() {
            if (typeof this._teardown === 'function') this._teardown();
        }
        hasChanged() {
            return !this.lastValues || this.values.some((value, i)=>this.lastValues[i] !== value
            );
        }
    });
}


function $3731d809633ee12d$export$2ff5f1970029d8ea(state, cb) {
    state[$5637b1ccb386597b$export$8e8d58c9b17fea3e].push(cb);
}
/**
 * @function
 * @param {() => void} effect - callback function that runs each time dependencies change
 * @param {unknown[]} [dependencies] - list of dependencies to the effect
 * @return {void}
 */ const $3731d809633ee12d$export$6d9c69b0de29b591 = $49549e7c7634590b$export$7ea7134f704deda4($3731d809633ee12d$export$2ff5f1970029d8ea);


const $1f286000d0d67491$export$fae74005e78b1a27 = $0271e6a690198cf7$export$1062a250c78723ea(class extends $0271e6a690198cf7$export$e594a57fbda5c090 {
    Context;
    value;
    _ranEffect;
    _unsubscribe;
    constructor(id, state, _){
        super(id, state);
        this._updater = this._updater.bind(this);
        this._ranEffect = false;
        this._unsubscribe = null;
        $3731d809633ee12d$export$2ff5f1970029d8ea(state, this);
    }
    update(Context) {
        if (this.state.virtual) throw new Error('can\'t be used with virtual components');
        if (this.Context !== Context) {
            this._subscribe(Context);
            this.Context = Context;
        }
        return this.value;
    }
    call() {
        if (!this._ranEffect) {
            this._ranEffect = true;
            if (this._unsubscribe) this._unsubscribe();
            this._subscribe(this.Context);
            this.state.update();
        }
    }
    _updater(value) {
        this.value = value;
        this.state.update();
    }
    _subscribe(Context) {
        const detail = {
            Context: Context,
            callback: this._updater
        };
        this.state.host.dispatchEvent(new CustomEvent($5637b1ccb386597b$export$c1645e5fb9a50701, {
            detail: detail,
            bubbles: true,
            cancelable: true,
            composed: true
        }));
        const { unsubscribe: unsubscribe = null , value: value  } = detail;
        this.value = unsubscribe ? value : Context.defaultValue;
        this._unsubscribe = unsubscribe;
    }
    teardown() {
        if (this._unsubscribe) this._unsubscribe();
    }
});


function $bac8f10a371a4a5b$export$2d2e2a019c76af3(component) {
    return (defaultValue)=>{
        const Context = {
            Provider: class extends HTMLElement {
                listeners;
                _value;
                constructor(){
                    super();
                    this.listeners = new Set();
                    this.addEventListener($5637b1ccb386597b$export$c1645e5fb9a50701, this);
                }
                disconnectedCallback() {
                    this.removeEventListener($5637b1ccb386597b$export$c1645e5fb9a50701, this);
                }
                handleEvent(event) {
                    const { detail: detail  } = event;
                    if (detail.Context === Context) {
                        detail.value = this.value;
                        detail.unsubscribe = this.unsubscribe.bind(this, detail.callback);
                        this.listeners.add(detail.callback);
                        event.stopPropagation();
                    }
                }
                unsubscribe(callback) {
                    this.listeners.delete(callback);
                }
                set value(value) {
                    this._value = value;
                    for (let callback of this.listeners)callback(value);
                }
                get value() {
                    return this._value;
                }
            },
            Consumer: component(function({ render: render  }) {
                const context = $1f286000d0d67491$export$fae74005e78b1a27(Context);
                return render(context);
            }),
            defaultValue: defaultValue
        };
        return Context;
    };
}



const $08e30976d6725731$export$1538c33de8887b59 = $0271e6a690198cf7$export$1062a250c78723ea(class extends $0271e6a690198cf7$export$e594a57fbda5c090 {
    value;
    values;
    constructor(id, state, fn, values){
        super(id, state);
        this.value = fn();
        this.values = values;
    }
    update(fn, values) {
        if (this.hasChanged(values)) {
            this.values = values;
            this.value = fn();
        }
        return this.value;
    }
    hasChanged(values = []) {
        return values.some((value, i)=>this.values[i] !== value
        );
    }
});


const $1f070e0ec7080ead$export$35808ee640e87ca7 = (fn, inputs)=>$08e30976d6725731$export$1538c33de8887b59(()=>fn
    , inputs)
;




function $e917245245244a32$var$setLayoutEffects(state, cb) {
    state[$5637b1ccb386597b$export$db08efd2f456c5bf].push(cb);
}
const $e917245245244a32$export$e5c5a5f917a5871c = $49549e7c7634590b$export$7ea7134f704deda4($e917245245244a32$var$setLayoutEffects);



/**
 * @function
 * @template {*} T
 * @param {T} [initialState] - Optional initial state
 * @return {readonly [state: T, updaterFn: StateUpdater<T>]} stateTuple - Tuple of current state and state updater function
 */ const $0c1b1580df2ce10c$export$60241385465d0a34 = $0271e6a690198cf7$export$1062a250c78723ea(class extends $0271e6a690198cf7$export$e594a57fbda5c090 {
    args;
    constructor(id, state, initialValue){
        super(id, state);
        this.updater = this.updater.bind(this);
        if (typeof initialValue === 'function') initialValue = initialValue();
        this.makeArgs(initialValue);
    }
    update() {
        return this.args;
    }
    updater(value) {
        if (typeof value === 'function') {
            const updaterFn = value;
            const [previousValue] = this.args;
            value = updaterFn(previousValue);
        }
        this.makeArgs(value);
        this.state.update();
    }
    makeArgs(value) {
        this.args = Object.freeze([
            value,
            this.updater
        ]);
    }
});


const $501333f180f3b862$var$microtask = Promise.resolve();
/**
 * An implementation of ReactiveControllerHost that is driven by Haunted hooks
 * and `useController()`.
 */ class $501333f180f3b862$var$HauntedControllerHost {
    count;
    kick;
    _controllers = [];
    _updatePending = true;
    _updateCompletePromise;
    _resolveUpdate;
    constructor(count, kick){
        this.count = count;
        this.kick = kick;
        this._updateCompletePromise = new Promise((res)=>{
            this._resolveUpdate = res;
        });
    }
    addController(controller) {
        this._controllers.push(controller);
    }
    removeController(controller) {
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        this._controllers && this._controllers.splice(this._controllers.indexOf(controller) >>> 0, 1);
    }
    requestUpdate() {
        if (!this._updatePending) {
            this._updatePending = true;
            $501333f180f3b862$var$microtask.then(()=>this.kick(this.count + 1)
            );
        }
    }
    get updateComplete() {
        return this._updateCompletePromise;
    }
    connected() {
        this._controllers.forEach((c)=>c.hostConnected && c.hostConnected()
        );
    }
    disconnected() {
        this._controllers.forEach((c)=>c.hostDisconnected && c.hostDisconnected()
        );
    }
    update() {
        this._controllers.forEach((c)=>c.hostUpdate && c.hostUpdate()
        );
    }
    updated() {
        this._updatePending = false;
        const resolve = this._resolveUpdate;
        // Create a new updateComplete Promise for the next update,
        // before resolving the current one.
        this._updateCompletePromise = new Promise((res)=>{
            this._resolveUpdate = res;
        });
        this._controllers.forEach((c)=>c.hostUpdated && c.hostUpdated()
        );
        resolve(this._updatePending);
    }
}
function $501333f180f3b862$export$e8c786024a2b0a79(createController) {
    const [count, kick] = $0c1b1580df2ce10c$export$60241385465d0a34(0);
    const [host] = $0c1b1580df2ce10c$export$60241385465d0a34(()=>{
        const host = new $501333f180f3b862$var$HauntedControllerHost(count, kick);
        const controller = createController(host);
        host.primaryController = controller;
        host.connected();
        return host;
    });
    // We use useLayoutEffect because we need updated() called synchronously
    // after rendering.
    $e917245245244a32$export$e5c5a5f917a5871c(()=>host.updated()
    );
    // Returning a cleanup function simulates hostDisconnected timing. An empty
    // deps array tells Haunted to only call this once: on mount with the cleanup
    // called on unmount.
    $e917245245244a32$export$e5c5a5f917a5871c(()=>()=>host.disconnected()
    , []);
    host.update();
    return host.primaryController;
}






const $2e8bb7c6f5e9d5de$export$13e3392192263954 = $0271e6a690198cf7$export$1062a250c78723ea(class extends $0271e6a690198cf7$export$e594a57fbda5c090 {
    reducer;
    currentState;
    constructor(id, state, _, initialState, init){
        super(id, state);
        this.dispatch = this.dispatch.bind(this);
        this.currentState = init !== undefined ? init(initialState) : initialState;
    }
    update(reducer) {
        this.reducer = reducer;
        return [
            this.currentState,
            this.dispatch
        ];
    }
    dispatch(action) {
        this.currentState = this.reducer(this.currentState, action);
        this.state.update();
    }
});





const $1f3ba07404cfa7bb$export$b8f5890fc79d6aca = (initialValue)=>$08e30976d6725731$export$1538c33de8887b59(()=>({
            current: initialValue
        })
    , [])
;





function $aa30acc25dc8214c$export$2e2bcd8739ae039({ render: render  }) {
    const component = $3ca0ea538faed2a0$export$3bc26eec1cc2439f(render);
    const createContext = $bac8f10a371a4a5b$export$2d2e2a019c76af3(component);
    return {
        component: component,
        createContext: createContext
    };
}




const $7d04f527d8b967ba$var$includes = Array.prototype.includes;
function $7d04f527d8b967ba$export$3b9595dc33c67676() {
    const partToScheduler = new WeakMap();
    const schedulerToPart = new WeakMap();
    class Scheduler extends $cf63d9e4c44de970$export$61cd7faa6f3316a3 {
        args;
        constructor(renderer, part){
            super(renderer, part);
            this.state.virtual = true;
        }
        render() {
            return this.state.run(()=>this.renderer.apply(this.host, this.args)
            );
        }
        commit(result) {
            this.host.setValue(result);
            this.host.commit();
        }
        teardown() {
            super.teardown();
            let part = schedulerToPart.get(this);
            partToScheduler.delete(part);
        }
    }
    function virtual(renderer) {
        function factory(...args) {
            return (part)=>{
                let cont = partToScheduler.get(part);
                if (!cont) {
                    cont = new Scheduler(renderer, part);
                    partToScheduler.set(part, cont);
                    schedulerToPart.set(cont, part);
                    $7d04f527d8b967ba$var$teardownOnRemove(cont, part);
                }
                cont.args = args;
                cont.update();
            };
        }
        return $c1d80e18e443d24e$export$99b43ad1ed32e735(factory);
    }
    return virtual;
}
function $7d04f527d8b967ba$var$teardownOnRemove(cont, part, node = part.startNode) {
    let frag = node.parentNode;
    let mo = new MutationObserver((mutations)=>{
        for (let mutation of mutations){
            if ($7d04f527d8b967ba$var$includes.call(mutation.removedNodes, node)) {
                mo.disconnect();
                if (node.parentNode instanceof ShadowRoot) $7d04f527d8b967ba$var$teardownOnRemove(cont, part);
                else cont.teardown();
                break;
            } else if ($7d04f527d8b967ba$var$includes.call(mutation.addedNodes, node.nextSibling)) {
                mo.disconnect();
                $7d04f527d8b967ba$var$teardownOnRemove(cont, part, node.nextSibling || undefined);
                break;
            }
        }
    });
    mo.observe(frag, {
        childList: true
    });
}


const { component: $df13a05f331fcc4c$export$d8556a2a8f973135 , createContext: $df13a05f331fcc4c$export$fd42f52fd3ae1109  } = $aa30acc25dc8214c$export$2e2bcd8739ae039({
    render: $d034cb69e90eeed4$export$b3890eb0ae9dca99
});
const $df13a05f331fcc4c$export$e193c227f15db60d = $7d04f527d8b967ba$export$3b9595dc33c67676();








var $9fdd35ce8c952e28$export$eec08455e72dba68 = $66a81edb4bc8c1a0$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($86a79651cc295bac$exports)).mark(function _callee(url) {
    var markdownPromise, markdownText;
    return (/*@__PURE__*/$parcel$interopDefault($86a79651cc295bac$exports)).wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                _ctx.next = 2;
                return fetch(url);
            case 2:
                markdownPromise = _ctx.sent;
                _ctx.next = 5;
                return markdownPromise.text();
            case 5:
                markdownText = _ctx.sent;
                return _ctx.abrupt("return", markdownText);
            case 7:
            case "end":
                return _ctx.stop();
        }
    }, _callee);
}));
var $9fdd35ce8c952e28$export$46f761b6245bcfc0 = function(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
};


var $41d52f03626a175b$exports = {};
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2021, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */ /**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */ (function(global, factory) {
    typeof $41d52f03626a175b$exports === 'object' && "object" !== 'undefined' ? $41d52f03626a175b$exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.marked = factory());
})($41d52f03626a175b$exports, function() {
    'use strict';
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function() {
                if (i >= o.length) return {
                    done: true
                };
                return {
                    done: false,
                    value: o[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var defaults$5 = {
        exports: {
        }
    };
    function getDefaults$1() {
        return {
            baseUrl: null,
            breaks: false,
            extensions: null,
            gfm: true,
            headerIds: true,
            headerPrefix: '',
            highlight: null,
            langPrefix: 'language-',
            mangle: true,
            pedantic: false,
            renderer: null,
            sanitize: false,
            sanitizer: null,
            silent: false,
            smartLists: false,
            smartypants: false,
            tokenizer: null,
            walkTokens: null,
            xhtml: false
        };
    }
    function changeDefaults$1(newDefaults) {
        defaults$5.exports.defaults = newDefaults;
    }
    defaults$5.exports = {
        defaults: getDefaults$1(),
        getDefaults: getDefaults$1,
        changeDefaults: changeDefaults$1
    };
    /**
   * Helpers
   */ var escapeTest = /[&<>"']/;
    var escapeReplace = /[&<>"']/g;
    var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
    var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
    var escapeReplacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    var getEscapeReplacement = function getEscapeReplacement(ch) {
        return escapeReplacements[ch];
    };
    function escape$2(html, encode) {
        if (encode) {
            if (escapeTest.test(html)) return html.replace(escapeReplace, getEscapeReplacement);
        } else {
            if (escapeTestNoEncode.test(html)) return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
        return html;
    }
    var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    function unescape$1(html) {
        // explicitly match decimal, hex, and named HTML entities
        return html.replace(unescapeTest, function(_, n) {
            n = n.toLowerCase();
            if (n === 'colon') return ':';
            if (n.charAt(0) === '#') return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
            return '';
        });
    }
    var caret = /(^|[^\[])\^/g;
    function edit$1(regex, opt) {
        regex = regex.source || regex;
        opt = opt || '';
        var obj = {
            replace: function replace(name, val) {
                val = val.source || val;
                val = val.replace(caret, '$1');
                regex = regex.replace(name, val);
                return obj;
            },
            getRegex: function getRegex() {
                return new RegExp(regex, opt);
            }
        };
        return obj;
    }
    var nonWordAndColonTest = /[^\w:]/g;
    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function cleanUrl$1(sanitize, base, href) {
        if (sanitize) {
            var prot;
            try {
                prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, '').toLowerCase();
            } catch (e) {
                return null;
            }
            if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) return null;
        }
        if (base && !originIndependentUrl.test(href)) href = resolveUrl(base, href);
        try {
            href = encodeURI(href).replace(/%25/g, '%');
        } catch (e) {
            return null;
        }
        return href;
    }
    var baseUrls = {
    };
    var justDomain = /^[^:]+:\/*[^/]*$/;
    var protocol = /^([^:]+:)[\s\S]*$/;
    var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function resolveUrl(base, href) {
        if (!baseUrls[' ' + base]) {
            // we can ignore everything in base after the last slash of its path component,
            // but we might need to add _that_
            // https://tools.ietf.org/html/rfc3986#section-3
            if (justDomain.test(base)) baseUrls[' ' + base] = base + '/';
            else baseUrls[' ' + base] = rtrim$1(base, '/', true);
        }
        base = baseUrls[' ' + base];
        var relativeBase = base.indexOf(':') === -1;
        if (href.substring(0, 2) === '//') {
            if (relativeBase) return href;
            return base.replace(protocol, '$1') + href;
        } else if (href.charAt(0) === '/') {
            if (relativeBase) return href;
            return base.replace(domain, '$1') + href;
        } else return base + href;
    }
    var noopTest$1 = {
        exec: function noopTest() {
        }
    };
    function merge$2(obj) {
        var i = 1, target, key;
        for(; i < arguments.length; i++){
            target = arguments[i];
            for(key in target)if (Object.prototype.hasOwnProperty.call(target, key)) obj[key] = target[key];
        }
        return obj;
    }
    function splitCells$1(tableRow, count) {
        // ensure that every cell-delimiting pipe has a space
        // before it to distinguish it from an escaped pipe
        var row = tableRow.replace(/\|/g, function(match, offset, str) {
            var escaped = false, curr = offset;
            while(--curr >= 0 && str[curr] === '\\')escaped = !escaped;
            if (escaped) // odd number of slashes means | is escaped
            // so we leave it alone
            return '|';
            else // add space before unescaped |
            return ' |';
        }), cells = row.split(/ \|/);
        var i = 0; // First/last cell in a row cannot be empty if it has no leading/trailing pipe
        if (!cells[0].trim()) cells.shift();
        if (!cells[cells.length - 1].trim()) cells.pop();
        if (cells.length > count) cells.splice(count);
        else while(cells.length < count)cells.push('');
        for(; i < cells.length; i++)// leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, '|');
        return cells;
    } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
    // /c*$/ is vulnerable to REDOS.
    // invert: Remove suffix of non-c chars instead. Default falsey.
    function rtrim$1(str, c, invert) {
        var l = str.length;
        if (l === 0) return '';
         // Length of suffix matching the invert condition.
        var suffLen = 0; // Step left until we fail to match the invert condition.
        while(suffLen < l){
            var currChar = str.charAt(l - suffLen - 1);
            if (currChar === c && !invert) suffLen++;
            else if (currChar !== c && invert) suffLen++;
            else break;
        }
        return str.substr(0, l - suffLen);
    }
    function findClosingBracket$1(str, b) {
        if (str.indexOf(b[1]) === -1) return -1;
        var l = str.length;
        var level = 0, i = 0;
        for(; i < l; i++){
            if (str[i] === '\\') i++;
            else if (str[i] === b[0]) level++;
            else if (str[i] === b[1]) {
                level--;
                if (level < 0) return i;
            }
        }
        return -1;
    }
    function checkSanitizeDeprecation$1(opt) {
        if (opt && opt.sanitize && !opt.silent) console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    } // copied from https://stackoverflow.com/a/5450113/806777
    function repeatString$1(pattern, count) {
        if (count < 1) return '';
        var result = '';
        while(count > 1){
            if (count & 1) result += pattern;
            count >>= 1;
            pattern += pattern;
        }
        return result + pattern;
    }
    var helpers = {
        escape: escape$2,
        unescape: unescape$1,
        edit: edit$1,
        cleanUrl: cleanUrl$1,
        resolveUrl: resolveUrl,
        noopTest: noopTest$1,
        merge: merge$2,
        splitCells: splitCells$1,
        rtrim: rtrim$1,
        findClosingBracket: findClosingBracket$1,
        checkSanitizeDeprecation: checkSanitizeDeprecation$1,
        repeatString: repeatString$1
    };
    var defaults$4 = defaults$5.exports.defaults;
    var rtrim = helpers.rtrim, splitCells = helpers.splitCells, _escape = helpers.escape, findClosingBracket = helpers.findClosingBracket;
    function outputLink(cap, link, raw, lexer) {
        var href = link.href;
        var title = link.title ? _escape(link.title) : null;
        var text = cap[1].replace(/\\([\[\]])/g, '$1');
        if (cap[0].charAt(0) !== '!') {
            lexer.state.inLink = true;
            var token = {
                type: 'link',
                raw: raw,
                href: href,
                title: title,
                text: text,
                tokens: lexer.inlineTokens(text, [])
            };
            lexer.state.inLink = false;
            return token;
        } else return {
            type: 'image',
            raw: raw,
            href: href,
            title: title,
            text: _escape(text)
        };
    }
    function indentCodeCompensation(raw, text) {
        var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
        if (matchIndentToCode === null) return text;
        var indentToCode = matchIndentToCode[1];
        return text.split('\n').map(function(node) {
            var matchIndentInNode = node.match(/^\s+/);
            if (matchIndentInNode === null) return node;
            var indentInNode = matchIndentInNode[0];
            if (indentInNode.length >= indentToCode.length) return node.slice(indentToCode.length);
            return node;
        }).join('\n');
    }
    /**
   * Tokenizer
   */ var Tokenizer_1 = /*#__PURE__*/ function() {
        function Tokenizer(options) {
            this.options = options || defaults$4;
        }
        var _proto = Tokenizer.prototype;
        _proto.space = function space(src) {
            var cap = this.rules.block.newline.exec(src);
            if (cap) {
                if (cap[0].length > 1) return {
                    type: 'space',
                    raw: cap[0]
                };
                return {
                    raw: '\n'
                };
            }
        };
        _proto.code = function code(src) {
            var cap = this.rules.block.code.exec(src);
            if (cap) {
                var text = cap[0].replace(/^ {1,4}/gm, '');
                return {
                    type: 'code',
                    raw: cap[0],
                    codeBlockStyle: 'indented',
                    text: !this.options.pedantic ? rtrim(text, '\n') : text
                };
            }
        };
        _proto.fences = function fences(src) {
            var cap = this.rules.block.fences.exec(src);
            if (cap) {
                var raw = cap[0];
                var text = indentCodeCompensation(raw, cap[3] || '');
                return {
                    type: 'code',
                    raw: raw,
                    lang: cap[2] ? cap[2].trim() : cap[2],
                    text: text
                };
            }
        };
        _proto.heading = function heading(src) {
            var cap = this.rules.block.heading.exec(src);
            if (cap) {
                var text = cap[2].trim(); // remove trailing #s
                if (/#$/.test(text)) {
                    var trimmed = rtrim(text, '#');
                    if (this.options.pedantic) text = trimmed.trim();
                    else if (!trimmed || / $/.test(trimmed)) // CommonMark requires space before trailing #s
                    text = trimmed.trim();
                }
                var token = {
                    type: 'heading',
                    raw: cap[0],
                    depth: cap[1].length,
                    text: text,
                    tokens: []
                };
                this.lexer.inline(token.text, token.tokens);
                return token;
            }
        };
        _proto.hr = function hr(src) {
            var cap = this.rules.block.hr.exec(src);
            if (cap) return {
                type: 'hr',
                raw: cap[0]
            };
        };
        _proto.blockquote = function blockquote(src) {
            var cap = this.rules.block.blockquote.exec(src);
            if (cap) {
                var text = cap[0].replace(/^ *> ?/gm, '');
                return {
                    type: 'blockquote',
                    raw: cap[0],
                    tokens: this.lexer.blockTokens(text, []),
                    text: text
                };
            }
        };
        _proto.list = function list(src) {
            var cap = this.rules.block.list.exec(src);
            if (cap) {
                var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, lines, itemContents;
                var bull = cap[1].trim();
                var isordered = bull.length > 1;
                var list = {
                    type: 'list',
                    raw: '',
                    ordered: isordered,
                    start: isordered ? +bull.slice(0, -1) : '',
                    loose: false,
                    items: []
                };
                bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;
                if (this.options.pedantic) bull = isordered ? bull : '[*+-]';
                 // Get next list item
                var itemRegex = new RegExp("^( {0,3}" + bull + ")((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))"); // Get each top-level item
                while(src){
                    if (this.rules.block.hr.test(src)) break;
                    if (!(cap = itemRegex.exec(src))) break;
                    lines = cap[2].split('\n');
                    if (this.options.pedantic) {
                        indent = 2;
                        itemContents = lines[0].trimLeft();
                    } else {
                        indent = cap[2].search(/[^ ]/); // Find first non-space char
                        indent = cap[1].length + (indent > 4 ? 1 : indent); // intented code blocks after 4 spaces; indent is always 1
                        itemContents = lines[0].slice(indent - cap[1].length);
                    }
                    blankLine = false;
                    raw = cap[0];
                    if (!lines[0] && /^ *$/.test(lines[1])) {
                        // items begin with at most one blank line
                        raw = cap[1] + lines.slice(0, 2).join('\n') + '\n';
                        list.loose = true;
                        lines = [];
                    }
                    var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])");
                    for(i = 1; i < lines.length; i++){
                        line = lines[i];
                        if (this.options.pedantic) // Re-align to follow commonmark nesting rules
                        line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
                         // End list item if found start of new bullet
                        if (nextBulletRegex.test(line)) {
                            raw = cap[1] + lines.slice(0, i).join('\n') + '\n';
                            break;
                        } // Until we encounter a blank line, item contents do not need indentation
                        if (!blankLine) {
                            if (!line.trim()) // Check if current line is empty
                            blankLine = true;
                             // Dedent if possible
                            if (line.search(/[^ ]/) >= indent) itemContents += '\n' + line.slice(indent);
                            else itemContents += '\n' + line;
                            continue;
                        } // Dedent this line
                        if (line.search(/[^ ]/) >= indent || !line.trim()) {
                            itemContents += '\n' + line.slice(indent);
                            continue;
                        } else {
                            // Line was not properly indented; end of this item
                            raw = cap[1] + lines.slice(0, i).join('\n') + '\n';
                            break;
                        }
                    }
                    if (!list.loose) {
                        // If the previous item ended with a blank line, the list is loose
                        if (endsWithBlankLine) list.loose = true;
                        else if (/\n *\n *$/.test(raw)) endsWithBlankLine = true;
                    } // Check for task list items
                    if (this.options.gfm) {
                        istask = /^\[[ xX]\] /.exec(itemContents);
                        if (istask) {
                            ischecked = istask[0] !== '[ ] ';
                            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
                        }
                    }
                    list.items.push({
                        type: 'list_item',
                        raw: raw,
                        task: !!istask,
                        checked: ischecked,
                        loose: false,
                        text: itemContents
                    });
                    list.raw += raw;
                    src = src.slice(raw.length);
                } // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
                list.items[list.items.length - 1].raw = raw.trimRight();
                list.items[list.items.length - 1].text = itemContents.trimRight();
                list.raw = list.raw.trimRight();
                var l = list.items.length; // Item child tokens handled here at end because we needed to have the final item to trim it first
                for(i = 0; i < l; i++){
                    this.lexer.state.top = false;
                    list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
                    if (list.items[i].tokens.some(function(t) {
                        return t.type === 'space';
                    })) {
                        list.loose = true;
                        list.items[i].loose = true;
                    }
                }
                return list;
            }
        };
        _proto.html = function html(src) {
            var cap = this.rules.block.html.exec(src);
            if (cap) {
                var token = {
                    type: 'html',
                    raw: cap[0],
                    pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
                    text: cap[0]
                };
                if (this.options.sanitize) {
                    token.type = 'paragraph';
                    token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]);
                    token.tokens = [];
                    this.lexer.inline(token.text, token.tokens);
                }
                return token;
            }
        };
        _proto.def = function def(src) {
            var cap = this.rules.block.def.exec(src);
            if (cap) {
                if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
                var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
                return {
                    type: 'def',
                    tag: tag,
                    raw: cap[0],
                    href: cap[2],
                    title: cap[3]
                };
            }
        };
        _proto.table = function table(src) {
            var cap = this.rules.block.table.exec(src);
            if (cap) {
                var item = {
                    type: 'table',
                    header: splitCells(cap[1]).map(function(c) {
                        return {
                            text: c
                        };
                    }),
                    align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    rows: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
                };
                if (item.header.length === item.align.length) {
                    item.raw = cap[0];
                    var l = item.align.length;
                    var i, j, k, row;
                    for(i = 0; i < l; i++){
                        if (/^ *-+: *$/.test(item.align[i])) item.align[i] = 'right';
                        else if (/^ *:-+: *$/.test(item.align[i])) item.align[i] = 'center';
                        else if (/^ *:-+ *$/.test(item.align[i])) item.align[i] = 'left';
                        else item.align[i] = null;
                    }
                    l = item.rows.length;
                    for(i = 0; i < l; i++)item.rows[i] = splitCells(item.rows[i], item.header.length).map(function(c) {
                        return {
                            text: c
                        };
                    });
                     // parse child tokens inside headers and cells
                    // header child tokens
                    l = item.header.length;
                    for(j = 0; j < l; j++){
                        item.header[j].tokens = [];
                        this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
                    } // cell child tokens
                    l = item.rows.length;
                    for(j = 0; j < l; j++){
                        row = item.rows[j];
                        for(k = 0; k < row.length; k++){
                            row[k].tokens = [];
                            this.lexer.inlineTokens(row[k].text, row[k].tokens);
                        }
                    }
                    return item;
                }
            }
        };
        _proto.lheading = function lheading(src) {
            var cap = this.rules.block.lheading.exec(src);
            if (cap) {
                var token = {
                    type: 'heading',
                    raw: cap[0],
                    depth: cap[2].charAt(0) === '=' ? 1 : 2,
                    text: cap[1],
                    tokens: []
                };
                this.lexer.inline(token.text, token.tokens);
                return token;
            }
        };
        _proto.paragraph = function paragraph(src) {
            var cap = this.rules.block.paragraph.exec(src);
            if (cap) {
                var token = {
                    type: 'paragraph',
                    raw: cap[0],
                    text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1],
                    tokens: []
                };
                this.lexer.inline(token.text, token.tokens);
                return token;
            }
        };
        _proto.text = function text(src) {
            var cap = this.rules.block.text.exec(src);
            if (cap) {
                var token = {
                    type: 'text',
                    raw: cap[0],
                    text: cap[0],
                    tokens: []
                };
                this.lexer.inline(token.text, token.tokens);
                return token;
            }
        };
        _proto.escape = function escape(src) {
            var cap = this.rules.inline.escape.exec(src);
            if (cap) return {
                type: 'escape',
                raw: cap[0],
                text: _escape(cap[1])
            };
        };
        _proto.tag = function tag(src) {
            var cap = this.rules.inline.tag.exec(src);
            if (cap) {
                if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) this.lexer.state.inLink = true;
                else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) this.lexer.state.inLink = false;
                if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = true;
                else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) this.lexer.state.inRawBlock = false;
                return {
                    type: this.options.sanitize ? 'text' : 'html',
                    raw: cap[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
                };
            }
        };
        _proto.link = function link(src) {
            var cap = this.rules.inline.link.exec(src);
            if (cap) {
                var trimmedUrl = cap[2].trim();
                if (!this.options.pedantic && /^</.test(trimmedUrl)) {
                    // commonmark requires matching angle brackets
                    if (!/>$/.test(trimmedUrl)) return;
                     // ending angle bracket cannot be escaped
                    var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
                    if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) return;
                } else {
                    // find closing parenthesis
                    var lastParenIndex = findClosingBracket(cap[2], '()');
                    if (lastParenIndex > -1) {
                        var start = cap[0].indexOf('!') === 0 ? 5 : 4;
                        var linkLen = start + cap[1].length + lastParenIndex;
                        cap[2] = cap[2].substring(0, lastParenIndex);
                        cap[0] = cap[0].substring(0, linkLen).trim();
                        cap[3] = '';
                    }
                }
                var href = cap[2];
                var title = '';
                if (this.options.pedantic) {
                    // split pedantic href and title
                    var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
                    if (link) {
                        href = link[1];
                        title = link[3];
                    }
                } else title = cap[3] ? cap[3].slice(1, -1) : '';
                href = href.trim();
                if (/^</.test(href)) {
                    if (this.options.pedantic && !/>$/.test(trimmedUrl)) // pedantic allows starting angle bracket without ending angle bracket
                    href = href.slice(1);
                    else href = href.slice(1, -1);
                }
                return outputLink(cap, {
                    href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
                    title: title ? title.replace(this.rules.inline._escapes, '$1') : title
                }, cap[0], this.lexer);
            }
        };
        _proto.reflink = function reflink(src, links) {
            var cap;
            if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
                var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
                link = links[link.toLowerCase()];
                if (!link || !link.href) {
                    var text = cap[0].charAt(0);
                    return {
                        type: 'text',
                        raw: text,
                        text: text
                    };
                }
                return outputLink(cap, link, cap[0], this.lexer);
            }
        };
        _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
            if (prevChar === void 0) prevChar = '';
            var match = this.rules.inline.emStrong.lDelim.exec(src);
            if (!match) return; // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
            if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
            var nextChar = match[1] || match[2] || '';
            if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
                var lLength = match[0].length - 1;
                var rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
                var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                endReg.lastIndex = 0; // Clip maskedSrc to same section of string as src (move to lexer?)
                maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
                while((match = endReg.exec(maskedSrc)) != null){
                    rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
                    if (!rDelim) continue; // skip single * in __abc*abc__
                    rLength = rDelim.length;
                    if (match[3] || match[4]) {
                        // found another Left Delim
                        delimTotal += rLength;
                        continue;
                    } else if (match[5] || match[6]) // either Left or Right Delim
                    {
                        if (lLength % 3 && !((lLength + rLength) % 3)) {
                            midDelimTotal += rLength;
                            continue; // CommonMark Emphasis Rules 9-10
                        }
                    }
                    delimTotal -= rLength;
                    if (delimTotal > 0) continue; // Haven't found enough closing delimiters
                    // Remove extra characters. *a*** -> *a*
                    rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal); // Create `em` if smallest delimiter has odd char count. *a***
                    if (Math.min(lLength, rLength) % 2) {
                        var _text = src.slice(1, lLength + match.index + rLength);
                        return {
                            type: 'em',
                            raw: src.slice(0, lLength + match.index + rLength + 1),
                            text: _text,
                            tokens: this.lexer.inlineTokens(_text, [])
                        };
                    } // Create 'strong' if smallest delimiter has even char count. **a***
                    var text = src.slice(2, lLength + match.index + rLength - 1);
                    return {
                        type: 'strong',
                        raw: src.slice(0, lLength + match.index + rLength + 1),
                        text: text,
                        tokens: this.lexer.inlineTokens(text, [])
                    };
                }
            }
        };
        _proto.codespan = function codespan(src) {
            var cap = this.rules.inline.code.exec(src);
            if (cap) {
                var text = cap[2].replace(/\n/g, ' ');
                var hasNonSpaceChars = /[^ ]/.test(text);
                var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
                if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) text = text.substring(1, text.length - 1);
                text = _escape(text, true);
                return {
                    type: 'codespan',
                    raw: cap[0],
                    text: text
                };
            }
        };
        _proto.br = function br(src) {
            var cap = this.rules.inline.br.exec(src);
            if (cap) return {
                type: 'br',
                raw: cap[0]
            };
        };
        _proto.del = function del(src) {
            var cap = this.rules.inline.del.exec(src);
            if (cap) return {
                type: 'del',
                raw: cap[0],
                text: cap[2],
                tokens: this.lexer.inlineTokens(cap[2], [])
            };
        };
        _proto.autolink = function autolink(src, mangle) {
            var cap = this.rules.inline.autolink.exec(src);
            if (cap) {
                var text, href;
                if (cap[2] === '@') {
                    text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
                    href = 'mailto:' + text;
                } else {
                    text = _escape(cap[1]);
                    href = text;
                }
                return {
                    type: 'link',
                    raw: cap[0],
                    text: text,
                    href: href,
                    tokens: [
                        {
                            type: 'text',
                            raw: text,
                            text: text
                        }
                    ]
                };
            }
        };
        _proto.url = function url(src, mangle) {
            var cap;
            if (cap = this.rules.inline.url.exec(src)) {
                var text, href;
                if (cap[2] === '@') {
                    text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
                    href = 'mailto:' + text;
                } else {
                    // do extended autolink path validation
                    var prevCapZero;
                    do {
                        prevCapZero = cap[0];
                        cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
                    }while (prevCapZero !== cap[0])
                    text = _escape(cap[0]);
                    if (cap[1] === 'www.') href = 'http://' + text;
                    else href = text;
                }
                return {
                    type: 'link',
                    raw: cap[0],
                    text: text,
                    href: href,
                    tokens: [
                        {
                            type: 'text',
                            raw: text,
                            text: text
                        }
                    ]
                };
            }
        };
        _proto.inlineText = function inlineText(src, smartypants) {
            var cap = this.rules.inline.text.exec(src);
            if (cap) {
                var text;
                if (this.lexer.state.inRawBlock) text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
                else text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
                return {
                    type: 'text',
                    raw: cap[0],
                    text: text
                };
            }
        };
        return Tokenizer;
    }();
    var noopTest = helpers.noopTest, edit = helpers.edit, merge$1 = helpers.merge;
    /**
   * Block-Level Grammar
   */ var block$1 = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        table: noopTest,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        // regex template, placeholders will be replaced according to different paragraph
        // interruption rules of commonmark and the original markdown spec:
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
        text: /^[^\n]+/
    };
    block$1._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
    block$1._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block$1.def = edit(block$1.def).replace('label', block$1._label).replace('title', block$1._title).getRegex();
    block$1.bullet = /(?:[*+-]|\d{1,9}[.)])/;
    block$1.listItemStart = edit(/^( *)(bull) */).replace('bull', block$1.bullet).getRegex();
    block$1.list = edit(block$1.list).replace(/bull/g, block$1.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block$1.def.source + ')').getRegex();
    block$1._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    block$1._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
    block$1.html = edit(block$1.html, 'i').replace('comment', block$1._comment).replace('tag', block$1._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block$1.paragraph = edit(block$1._paragraph).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
    .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block$1._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    block$1.blockquote = edit(block$1.blockquote).replace('paragraph', block$1.paragraph).getRegex();
    /**
   * Normal Block Grammar
   */ block$1.normal = merge$1({
    }, block$1);
    /**
   * GFM Block Grammar
   */ block$1.gfm = merge$1({
    }, block$1.normal, {
        table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" // Cells
    });
    block$1.gfm.table = edit(block$1.gfm.table).replace('hr', block$1.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block$1._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */ block$1.pedantic = merge$1({
    }, block$1.normal, {
        html: edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace('comment', block$1._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: noopTest,
        // fences not supported
        paragraph: edit(block$1.normal._paragraph).replace('hr', block$1.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block$1.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
    });
    /**
   * Inline-Level Grammar
   */ var inline$1 = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: noopTest,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        // CDATA section
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        reflinkSearch: 'reflink|nolink(?!\\()',
        emStrong: {
            lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
            //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
            //        () Skip orphan delim inside strong    (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
            rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
            rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: noopTest,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/
    }; // list of punctuation marks from CommonMark spec
    // without * and _ to handle the different emphasis markers * and _
    inline$1._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
    inline$1.punctuation = edit(inline$1.punctuation).replace(/punctuation/g, inline$1._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>
    inline$1.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
    inline$1.escapedEmSt = /\\\*|\\_/g;
    inline$1._comment = edit(block$1._comment).replace('(?:-->|$)', '-->').getRegex();
    inline$1.emStrong.lDelim = edit(inline$1.emStrong.lDelim).replace(/punct/g, inline$1._punctuation).getRegex();
    inline$1.emStrong.rDelimAst = edit(inline$1.emStrong.rDelimAst, 'g').replace(/punct/g, inline$1._punctuation).getRegex();
    inline$1.emStrong.rDelimUnd = edit(inline$1.emStrong.rDelimUnd, 'g').replace(/punct/g, inline$1._punctuation).getRegex();
    inline$1._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    inline$1._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline$1._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline$1.autolink = edit(inline$1.autolink).replace('scheme', inline$1._scheme).replace('email', inline$1._email).getRegex();
    inline$1._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline$1.tag = edit(inline$1.tag).replace('comment', inline$1._comment).replace('attribute', inline$1._attribute).getRegex();
    inline$1._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline$1._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
    inline$1._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline$1.link = edit(inline$1.link).replace('label', inline$1._label).replace('href', inline$1._href).replace('title', inline$1._title).getRegex();
    inline$1.reflink = edit(inline$1.reflink).replace('label', inline$1._label).getRegex();
    inline$1.reflinkSearch = edit(inline$1.reflinkSearch, 'g').replace('reflink', inline$1.reflink).replace('nolink', inline$1.nolink).getRegex();
    /**
   * Normal Inline Grammar
   */ inline$1.normal = merge$1({
    }, inline$1);
    /**
   * Pedantic Inline Grammar
   */ inline$1.pedantic = merge$1({
    }, inline$1.normal, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline$1._label).getRegex(),
        reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline$1._label).getRegex()
    });
    /**
   * GFM Inline Grammar
   */ inline$1.gfm = merge$1({
    }, inline$1.normal, {
        escape: edit(inline$1.escape).replace('])', '~|])').getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    });
    inline$1.gfm.url = edit(inline$1.gfm.url, 'i').replace('email', inline$1.gfm._extended_email).getRegex();
    /**
   * GFM + Line Breaks Inline Grammar
   */ inline$1.breaks = merge$1({
    }, inline$1.gfm, {
        br: edit(inline$1.br).replace('{2,}', '*').getRegex(),
        text: edit(inline$1.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
    });
    var rules = {
        block: block$1,
        inline: inline$1
    };
    var Tokenizer$1 = Tokenizer_1;
    var defaults$3 = defaults$5.exports.defaults;
    var block = rules.block, inline = rules.inline;
    var repeatString = helpers.repeatString;
    /**
   * smartypants text replacement
   */ function smartypants(text) {
        return text // em-dashes
        .replace(/---/g, "\u2014") // en-dashes
        .replace(/--/g, "\u2013") // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
        .replace(/'/g, "\u2019") // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
        .replace(/"/g, "\u201D") // ellipses
        .replace(/\.{3}/g, "\u2026");
    }
    /**
   * mangle email addresses
   */ function mangle(text) {
        var out = '', i, ch;
        var l = text.length;
        for(i = 0; i < l; i++){
            ch = text.charCodeAt(i);
            if (Math.random() > 0.5) ch = 'x' + ch.toString(16);
            out += '&#' + ch + ';';
        }
        return out;
    }
    /**
   * Block Lexer
   */ var Lexer_1 = /*#__PURE__*/ function() {
        function Lexer(options) {
            this.tokens = [];
            this.tokens.links = Object.create(null);
            this.options = options || defaults$3;
            this.options.tokenizer = this.options.tokenizer || new Tokenizer$1();
            this.tokenizer = this.options.tokenizer;
            this.tokenizer.options = this.options;
            this.tokenizer.lexer = this;
            this.inlineQueue = [];
            this.state = {
                inLink: false,
                inRawBlock: false,
                top: true
            };
            var rules = {
                block: block.normal,
                inline: inline.normal
            };
            if (this.options.pedantic) {
                rules.block = block.pedantic;
                rules.inline = inline.pedantic;
            } else if (this.options.gfm) {
                rules.block = block.gfm;
                if (this.options.breaks) rules.inline = inline.breaks;
                else rules.inline = inline.gfm;
            }
            this.tokenizer.rules = rules;
        }
        /**
     * Expose Rules
     */ /**
     * Static Lex Method
     */ Lexer.lex = function lex(src, options) {
            var lexer = new Lexer(options);
            return lexer.lex(src);
        };
        Lexer.lexInline = function lexInline(src, options) {
            var lexer = new Lexer(options);
            return lexer.inlineTokens(src);
        };
        var _proto = Lexer.prototype;
        _proto.lex = function lex(src) {
            src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
            this.blockTokens(src, this.tokens);
            var next;
            while(next = this.inlineQueue.shift())this.inlineTokens(next.src, next.tokens);
            return this.tokens;
        };
        _proto.blockTokens = function blockTokens(src, tokens) {
            var _this = this;
            if (tokens === void 0) tokens = [];
            if (this.options.pedantic) src = src.replace(/^ +$/gm, '');
            var token, lastToken, cutSrc, lastParagraphClipped;
            while(src){
                if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(extTokenizer) {
                    if (token = extTokenizer.call({
                        lexer: _this
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) continue;
                 // newline
                if (token = this.tokenizer.space(src)) {
                    src = src.substring(token.raw.length);
                    if (token.type) tokens.push(token);
                    continue;
                } // code
                if (token = this.tokenizer.code(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.
                    if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    continue;
                } // fences
                if (token = this.tokenizer.fences(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // heading
                if (token = this.tokenizer.heading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // hr
                if (token = this.tokenizer.hr(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // blockquote
                if (token = this.tokenizer.blockquote(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // list
                if (token = this.tokenizer.list(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // html
                if (token = this.tokenizer.html(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // def
                if (token = this.tokenizer.def(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.raw;
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else if (!this.tokens.links[token.tag]) this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title
                    };
                    continue;
                } // table (gfm)
                if (token = this.tokenizer.table(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // lheading
                if (token = this.tokenizer.lheading(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // top-level paragraph
                // prevent paragraph consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startBlock) (function() {
                    var startIndex = Infinity;
                    var tempSrc = src.slice(1);
                    var tempStart = void 0;
                    _this.options.extensions.startBlock.forEach(function(getStartIndex) {
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === 'number' && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                })();
                if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
                    lastToken = tokens[tokens.length - 1];
                    if (lastParagraphClipped && lastToken.type === 'paragraph') {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    lastParagraphClipped = cutSrc.length !== src.length;
                    src = src.substring(token.raw.length);
                    continue;
                } // text
                if (token = this.tokenizer.text(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === 'text') {
                        lastToken.raw += '\n' + token.raw;
                        lastToken.text += '\n' + token.text;
                        this.inlineQueue.pop();
                        this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
                    } else tokens.push(token);
                    continue;
                }
                if (src) {
                    var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    } else throw new Error(errMsg);
                }
            }
            this.state.top = true;
            return tokens;
        };
        _proto.inline = function inline(src, tokens) {
            this.inlineQueue.push({
                src: src,
                tokens: tokens
            });
        };
        _proto.inlineTokens = function inlineTokens(src, tokens) {
            var _this2 = this;
            if (tokens === void 0) tokens = [];
            var token, lastToken, cutSrc; // String with links masked to avoid interference with em and strong
            var maskedSrc = src;
            var match;
            var keepPrevChar, prevChar; // Mask out reflinks
            if (this.tokens.links) {
                var links = Object.keys(this.tokens.links);
                if (links.length > 0) {
                    while((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null)if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                }
            } // Mask out other blocks
            while((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
             // Mask out escaped em & strong delimiters
            while((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null)maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
            while(src){
                if (!keepPrevChar) prevChar = '';
                keepPrevChar = false; // extensions
                if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(extTokenizer) {
                    if (token = extTokenizer.call({
                        lexer: _this2
                    }, src, tokens)) {
                        src = src.substring(token.raw.length);
                        tokens.push(token);
                        return true;
                    }
                    return false;
                })) continue;
                 // escape
                if (token = this.tokenizer.escape(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // tag
                if (token = this.tokenizer.tag(src)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                } // link
                if (token = this.tokenizer.link(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // reflink, nolink
                if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                    src = src.substring(token.raw.length);
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                } // em & strong
                if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // code
                if (token = this.tokenizer.codespan(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // br
                if (token = this.tokenizer.br(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // del (gfm)
                if (token = this.tokenizer.del(src)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // autolink
                if (token = this.tokenizer.autolink(src, mangle)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // url (gfm)
                if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    continue;
                } // text
                // prevent inlineText consuming extensions by clipping 'src' to extension start
                cutSrc = src;
                if (this.options.extensions && this.options.extensions.startInline) (function() {
                    var startIndex = Infinity;
                    var tempSrc = src.slice(1);
                    var tempStart = void 0;
                    _this2.options.extensions.startInline.forEach(function(getStartIndex) {
                        tempStart = getStartIndex.call({
                            lexer: this
                        }, tempSrc);
                        if (typeof tempStart === 'number' && tempStart >= 0) startIndex = Math.min(startIndex, tempStart);
                    });
                    if (startIndex < Infinity && startIndex >= 0) cutSrc = src.substring(0, startIndex + 1);
                })();
                if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
                    src = src.substring(token.raw.length);
                    if (token.raw.slice(-1) !== '_') // Track prevChar before string of ____ started
                    prevChar = token.raw.slice(-1);
                    keepPrevChar = true;
                    lastToken = tokens[tokens.length - 1];
                    if (lastToken && lastToken.type === 'text') {
                        lastToken.raw += token.raw;
                        lastToken.text += token.text;
                    } else tokens.push(token);
                    continue;
                }
                if (src) {
                    var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(errMsg);
                        break;
                    } else throw new Error(errMsg);
                }
            }
            return tokens;
        };
        _createClass(Lexer, null, [
            {
                key: "rules",
                get: function get() {
                    return {
                        block: block,
                        inline: inline
                    };
                }
            }
        ]);
        return Lexer;
    }();
    var defaults$2 = defaults$5.exports.defaults;
    var cleanUrl = helpers.cleanUrl, escape$1 = helpers.escape;
    /**
   * Renderer
   */ var Renderer_1 = /*#__PURE__*/ function() {
        function Renderer(options) {
            this.options = options || defaults$2;
        }
        var _proto = Renderer.prototype;
        _proto.code = function code(_code, infostring, escaped) {
            var lang = (infostring || '').match(/\S*/)[0];
            if (this.options.highlight) {
                var out = this.options.highlight(_code, lang);
                if (out != null && out !== _code) {
                    escaped = true;
                    _code = out;
                }
            }
            _code = _code.replace(/\n$/, '') + '\n';
            if (!lang) return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
            return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
        };
        _proto.blockquote = function blockquote(quote) {
            return '<blockquote>\n' + quote + '</blockquote>\n';
        };
        _proto.html = function html(_html) {
            return _html;
        };
        _proto.heading = function heading(text, level, raw, slugger) {
            if (this.options.headerIds) return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
             // ignore IDs
            return '<h' + level + '>' + text + '</h' + level + '>\n';
        };
        _proto.hr = function hr() {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        };
        _proto.list = function list(body, ordered, start) {
            var type = ordered ? 'ol' : 'ul', startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
            return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
        };
        _proto.listitem = function listitem(text) {
            return '<li>' + text + '</li>\n';
        };
        _proto.checkbox = function checkbox(checked) {
            return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
        };
        _proto.paragraph = function paragraph(text) {
            return '<p>' + text + '</p>\n';
        };
        _proto.table = function table(header, body) {
            if (body) body = '<tbody>' + body + '</tbody>';
            return "<table>\n<thead>\n" + header + '</thead>\n' + body + '</table>\n';
        };
        _proto.tablerow = function tablerow(content) {
            return '<tr>\n' + content + '</tr>\n';
        };
        _proto.tablecell = function tablecell(content, flags) {
            var type = flags.header ? 'th' : 'td';
            var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
            return tag + content + '</' + type + '>\n';
        } // span level renderer
        ;
        _proto.strong = function strong(text) {
            return '<strong>' + text + '</strong>';
        };
        _proto.em = function em(text) {
            return '<em>' + text + '</em>';
        };
        _proto.codespan = function codespan(text) {
            return '<code>' + text + '</code>';
        };
        _proto.br = function br() {
            return this.options.xhtml ? '<br/>' : '<br>';
        };
        _proto.del = function del(text) {
            return '<del>' + text + '</del>';
        };
        _proto.link = function link(href, title, text) {
            href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) return text;
            var out = '<a href="' + escape$1(href) + '"';
            if (title) out += ' title="' + title + '"';
            out += '>' + text + '</a>';
            return out;
        };
        _proto.image = function image(href, title, text) {
            href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
            if (href === null) return text;
            var out = '<img src="' + href + '" alt="' + text + '"';
            if (title) out += ' title="' + title + '"';
            out += this.options.xhtml ? '/>' : '>';
            return out;
        };
        _proto.text = function text(_text) {
            return _text;
        };
        return Renderer;
    }();
    /**
   * TextRenderer
   * returns only the textual part of the token
   */ var TextRenderer_1 = /*#__PURE__*/ function() {
        function TextRenderer() {
        }
        var _proto = TextRenderer.prototype;
        // no need for block level renderers
        _proto.strong = function strong(text) {
            return text;
        };
        _proto.em = function em(text) {
            return text;
        };
        _proto.codespan = function codespan(text) {
            return text;
        };
        _proto.del = function del(text) {
            return text;
        };
        _proto.html = function html(text) {
            return text;
        };
        _proto.text = function text(_text) {
            return _text;
        };
        _proto.link = function link(href, title, text) {
            return '' + text;
        };
        _proto.image = function image(href, title, text) {
            return '' + text;
        };
        _proto.br = function br() {
            return '';
        };
        return TextRenderer;
    }();
    /**
   * Slugger generates header id
   */ var Slugger_1 = /*#__PURE__*/ function() {
        function Slugger() {
            this.seen = {
            };
        }
        var _proto = Slugger.prototype;
        _proto.serialize = function serialize(value) {
            return value.toLowerCase().trim() // remove html tags
            .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
            .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
        };
        _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
            var slug = originalSlug;
            var occurenceAccumulator = 0;
            if (this.seen.hasOwnProperty(slug)) {
                occurenceAccumulator = this.seen[originalSlug];
                do {
                    occurenceAccumulator++;
                    slug = originalSlug + '-' + occurenceAccumulator;
                }while (this.seen.hasOwnProperty(slug))
            }
            if (!isDryRun) {
                this.seen[originalSlug] = occurenceAccumulator;
                this.seen[slug] = 0;
            }
            return slug;
        };
        _proto.slug = function slug(value, options) {
            if (options === void 0) options = {
            };
            var slug = this.serialize(value);
            return this.getNextSafeSlug(slug, options.dryrun);
        };
        return Slugger;
    }();
    var Renderer$1 = Renderer_1;
    var TextRenderer$1 = TextRenderer_1;
    var Slugger$1 = Slugger_1;
    var defaults$1 = defaults$5.exports.defaults;
    var unescape = helpers.unescape;
    /**
   * Parsing & Compiling
   */ var Parser_1 = /*#__PURE__*/ function() {
        function Parser(options) {
            this.options = options || defaults$1;
            this.options.renderer = this.options.renderer || new Renderer$1();
            this.renderer = this.options.renderer;
            this.renderer.options = this.options;
            this.textRenderer = new TextRenderer$1();
            this.slugger = new Slugger$1();
        }
        /**
     * Static Parse Method
     */ Parser.parse = function parse(tokens, options) {
            var parser = new Parser(options);
            return parser.parse(tokens);
        };
        Parser.parseInline = function parseInline(tokens, options) {
            var parser = new Parser(options);
            return parser.parseInline(tokens);
        };
        var _proto = Parser.prototype;
        _proto.parse = function parse(tokens, top) {
            if (top === void 0) top = true;
            var out = '', i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
            var l = tokens.length;
            for(i = 0; i < l; i++){
                token = tokens[i]; // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    ret = this.options.extensions.renderers[token.type].call({
                        parser: this
                    }, token);
                    if (ret !== false || ![
                        'space',
                        'hr',
                        'heading',
                        'code',
                        'table',
                        'blockquote',
                        'list',
                        'html',
                        'paragraph',
                        'text'
                    ].includes(token.type)) {
                        out += ret || '';
                        continue;
                    }
                }
                switch(token.type){
                    case 'space':
                        continue;
                    case 'hr':
                        out += this.renderer.hr();
                        continue;
                    case 'heading':
                        out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                        continue;
                    case 'code':
                        out += this.renderer.code(token.text, token.lang, token.escaped);
                        continue;
                    case 'table':
                        header = ''; // header
                        cell = '';
                        l2 = token.header.length;
                        for(j = 0; j < l2; j++)cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                            header: true,
                            align: token.align[j]
                        });
                        header += this.renderer.tablerow(cell);
                        body = '';
                        l2 = token.rows.length;
                        for(j = 0; j < l2; j++){
                            row = token.rows[j];
                            cell = '';
                            l3 = row.length;
                            for(k = 0; k < l3; k++)cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                                header: false,
                                align: token.align[k]
                            });
                            body += this.renderer.tablerow(cell);
                        }
                        out += this.renderer.table(header, body);
                        continue;
                    case 'blockquote':
                        body = this.parse(token.tokens);
                        out += this.renderer.blockquote(body);
                        continue;
                    case 'list':
                        ordered = token.ordered;
                        start = token.start;
                        loose = token.loose;
                        l2 = token.items.length;
                        body = '';
                        for(j = 0; j < l2; j++){
                            item = token.items[j];
                            checked = item.checked;
                            task = item.task;
                            itemBody = '';
                            if (item.task) {
                                checkbox = this.renderer.checkbox(checked);
                                if (loose) {
                                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                                        item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                                    } else item.tokens.unshift({
                                        type: 'text',
                                        text: checkbox
                                    });
                                } else itemBody += checkbox;
                            }
                            itemBody += this.parse(item.tokens, loose);
                            body += this.renderer.listitem(itemBody, task, checked);
                        }
                        out += this.renderer.list(body, ordered, start);
                        continue;
                    case 'html':
                        // TODO parse inline content if parameter markdown=1
                        out += this.renderer.html(token.text);
                        continue;
                    case 'paragraph':
                        out += this.renderer.paragraph(this.parseInline(token.tokens));
                        continue;
                    case 'text':
                        body = token.tokens ? this.parseInline(token.tokens) : token.text;
                        while(i + 1 < l && tokens[i + 1].type === 'text'){
                            token = tokens[++i];
                            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                        }
                        out += top ? this.renderer.paragraph(body) : body;
                        continue;
                    default:
                        var errMsg = 'Token with "' + token.type + '" type was not found.';
                        if (this.options.silent) {
                            console.error(errMsg);
                            return;
                        } else throw new Error(errMsg);
                }
            }
            return out;
        };
        _proto.parseInline = function parseInline(tokens, renderer) {
            renderer = renderer || this.renderer;
            var out = '', i, token, ret;
            var l = tokens.length;
            for(i = 0; i < l; i++){
                token = tokens[i]; // Run any renderer extensions
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
                    ret = this.options.extensions.renderers[token.type].call({
                        parser: this
                    }, token);
                    if (ret !== false || ![
                        'escape',
                        'html',
                        'link',
                        'image',
                        'strong',
                        'em',
                        'codespan',
                        'br',
                        'del',
                        'text'
                    ].includes(token.type)) {
                        out += ret || '';
                        continue;
                    }
                }
                switch(token.type){
                    case 'escape':
                        out += renderer.text(token.text);
                        break;
                    case 'html':
                        out += renderer.html(token.text);
                        break;
                    case 'link':
                        out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                        break;
                    case 'image':
                        out += renderer.image(token.href, token.title, token.text);
                        break;
                    case 'strong':
                        out += renderer.strong(this.parseInline(token.tokens, renderer));
                        break;
                    case 'em':
                        out += renderer.em(this.parseInline(token.tokens, renderer));
                        break;
                    case 'codespan':
                        out += renderer.codespan(token.text);
                        break;
                    case 'br':
                        out += renderer.br();
                        break;
                    case 'del':
                        out += renderer.del(this.parseInline(token.tokens, renderer));
                        break;
                    case 'text':
                        out += renderer.text(token.text);
                        break;
                    default:
                        var errMsg = 'Token with "' + token.type + '" type was not found.';
                        if (this.options.silent) {
                            console.error(errMsg);
                            return;
                        } else throw new Error(errMsg);
                }
            }
            return out;
        };
        return Parser;
    }();
    var Lexer = Lexer_1;
    var Parser = Parser_1;
    var Tokenizer = Tokenizer_1;
    var Renderer = Renderer_1;
    var TextRenderer = TextRenderer_1;
    var Slugger = Slugger_1;
    var merge = helpers.merge, checkSanitizeDeprecation = helpers.checkSanitizeDeprecation, escape = helpers.escape;
    var getDefaults = defaults$5.exports.getDefaults, changeDefaults = defaults$5.exports.changeDefaults, defaults = defaults$5.exports.defaults;
    /**
   * Marked
   */ function marked(src, opt, callback) {
        // throw error in case of non string input
        if (typeof src === 'undefined' || src === null) throw new Error('marked(): input parameter is undefined or null');
        if (typeof src !== 'string') throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
        if (typeof opt === 'function') {
            callback = opt;
            opt = null;
        }
        opt = merge({
        }, marked.defaults, opt || {
        });
        checkSanitizeDeprecation(opt);
        if (callback) {
            var highlight = opt.highlight;
            var tokens;
            try {
                tokens = Lexer.lex(src, opt);
            } catch (e) {
                return callback(e);
            }
            var done = function done(err) {
                var out;
                if (!err) try {
                    if (opt.walkTokens) marked.walkTokens(tokens, opt.walkTokens);
                    out = Parser.parse(tokens, opt);
                } catch (e) {
                    err = e;
                }
                opt.highlight = highlight;
                return err ? callback(err) : callback(null, out);
            };
            if (!highlight || highlight.length < 3) return done();
            delete opt.highlight;
            if (!tokens.length) return done();
            var pending = 0;
            marked.walkTokens(tokens, function(token) {
                if (token.type === 'code') {
                    pending++;
                    setTimeout(function() {
                        highlight(token.text, token.lang, function(err, code) {
                            if (err) return done(err);
                            if (code != null && code !== token.text) {
                                token.text = code;
                                token.escaped = true;
                            }
                            pending--;
                            if (pending === 0) done();
                        });
                    }, 0);
                }
            });
            if (pending === 0) done();
            return;
        }
        try {
            var _tokens = Lexer.lex(src, opt);
            if (opt.walkTokens) marked.walkTokens(_tokens, opt.walkTokens);
            return Parser.parse(_tokens, opt);
        } catch (e) {
            e.message += '\nPlease report this to https://github.com/markedjs/marked.';
            if (opt.silent) return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
            throw e;
        }
    }
    /**
   * Options
   */ marked.options = marked.setOptions = function(opt) {
        merge(marked.defaults, opt);
        changeDefaults(marked.defaults);
        return marked;
    };
    marked.getDefaults = getDefaults;
    marked.defaults = defaults;
    /**
   * Use Extension
   */ marked.use = function() {
        var _this = this;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var opts = merge.apply(void 0, [
            {
            }
        ].concat(args));
        var extensions = marked.defaults.extensions || {
            renderers: {
            },
            childTokens: {
            }
        };
        var hasExtensions;
        args.forEach(function(pack) {
            // ==-- Parse "addon" extensions --== //
            if (pack.extensions) {
                hasExtensions = true;
                pack.extensions.forEach(function(ext) {
                    if (!ext.name) throw new Error('extension name required');
                    if (ext.renderer) {
                        // Renderer extensions
                        var prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
                        if (prevRenderer) // Replace extension with func to run new extension but fall back if false
                        extensions.renderers[ext.name] = function() {
                            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                            var ret = ext.renderer.apply(this, args);
                            if (ret === false) ret = prevRenderer.apply(this, args);
                            return ret;
                        };
                        else extensions.renderers[ext.name] = ext.renderer;
                    }
                    if (ext.tokenizer) {
                        // Tokenizer Extensions
                        if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') throw new Error("extension level must be 'block' or 'inline'");
                        if (extensions[ext.level]) extensions[ext.level].unshift(ext.tokenizer);
                        else extensions[ext.level] = [
                            ext.tokenizer
                        ];
                        if (ext.start) {
                            // Function to check for start of token
                            if (ext.level === 'block') {
                                if (extensions.startBlock) extensions.startBlock.push(ext.start);
                                else extensions.startBlock = [
                                    ext.start
                                ];
                            } else if (ext.level === 'inline') {
                                if (extensions.startInline) extensions.startInline.push(ext.start);
                                else extensions.startInline = [
                                    ext.start
                                ];
                            }
                        }
                    }
                    if (ext.childTokens) // Child tokens to be visited by walkTokens
                    extensions.childTokens[ext.name] = ext.childTokens;
                });
            } // ==-- Parse "overwrite" extensions --== //
            if (pack.renderer) (function() {
                var renderer = marked.defaults.renderer || new Renderer();
                var _loop = function _loop(prop) {
                    var prevRenderer = renderer[prop]; // Replace renderer with func to run extension, but fall back if false
                    renderer[prop] = function() {
                        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
                        var ret = pack.renderer[prop].apply(renderer, args);
                        if (ret === false) ret = prevRenderer.apply(renderer, args);
                        return ret;
                    };
                };
                for(var prop in pack.renderer)_loop(prop);
                opts.renderer = renderer;
            })();
            if (pack.tokenizer) (function() {
                var tokenizer = marked.defaults.tokenizer || new Tokenizer();
                var _loop2 = function _loop2(prop) {
                    var prevTokenizer = tokenizer[prop]; // Replace tokenizer with func to run extension, but fall back if false
                    tokenizer[prop] = function() {
                        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)args[_key4] = arguments[_key4];
                        var ret = pack.tokenizer[prop].apply(tokenizer, args);
                        if (ret === false) ret = prevTokenizer.apply(tokenizer, args);
                        return ret;
                    };
                };
                for(var prop in pack.tokenizer)_loop2(prop);
                opts.tokenizer = tokenizer;
            })();
             // ==-- Parse WalkTokens extensions --== //
            if (pack.walkTokens) {
                var walkTokens = marked.defaults.walkTokens;
                opts.walkTokens = function(token) {
                    pack.walkTokens.call(_this, token);
                    if (walkTokens) walkTokens(token);
                };
            }
            if (hasExtensions) opts.extensions = extensions;
            marked.setOptions(opts);
        });
    };
    /**
   * Run callback for every token
   */ marked.walkTokens = function(tokens, callback) {
        var _loop3 = function _loop3() {
            var token = _step.value;
            callback(token);
            switch(token.type){
                case 'table':
                    for(var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;){
                        var cell = _step2.value;
                        marked.walkTokens(cell.tokens, callback);
                    }
                    for(var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;){
                        var row = _step3.value;
                        for(var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;){
                            var _cell = _step4.value;
                            marked.walkTokens(_cell.tokens, callback);
                        }
                    }
                    break;
                case 'list':
                    marked.walkTokens(token.items, callback);
                    break;
                default:
                    if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) // Walk any extensions
                    marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
                        marked.walkTokens(token[childTokens], callback);
                    });
                    else if (token.tokens) marked.walkTokens(token.tokens, callback);
            }
        };
        for(var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;)_loop3();
    };
    /**
   * Parse Inline
   */ marked.parseInline = function(src, opt) {
        // throw error in case of non string input
        if (typeof src === 'undefined' || src === null) throw new Error('marked.parseInline(): input parameter is undefined or null');
        if (typeof src !== 'string') throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
        opt = merge({
        }, marked.defaults, opt || {
        });
        checkSanitizeDeprecation(opt);
        try {
            var tokens = Lexer.lexInline(src, opt);
            if (opt.walkTokens) marked.walkTokens(tokens, opt.walkTokens);
            return Parser.parseInline(tokens, opt);
        } catch (e) {
            e.message += '\nPlease report this to https://github.com/markedjs/marked.';
            if (opt.silent) return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
            throw e;
        }
    };
    /**
   * Expose
   */ marked.Parser = Parser;
    marked.parser = Parser.parse;
    marked.Renderer = Renderer;
    marked.TextRenderer = TextRenderer;
    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;
    marked.Tokenizer = Tokenizer;
    marked.Slugger = Slugger;
    marked.parse = marked;
    var marked_1 = marked;
    return marked_1;
});


function _templateObject1() {
    var data = $d80b82f9cbb6a283$export$2e2bcd8739ae039([
        "<main>",
        "</main>"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject() {
    var data = $d80b82f9cbb6a283$export$2e2bcd8739ae039([
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _ = function(t) {
    return t;
}, t, t1;
// ALLOWS LINE BREAKS WITH RETURN BUTTON
(/*@__PURE__*/$parcel$interopDefault($41d52f03626a175b$exports)).setOptions({
    breaks: true
});
var $7cb6c3d411b4158f$var$markdownLink = "https://raw.githubusercontent.com/dpsoccerdude101/dpsoccerdude101.github.io/master/index.md";
var $7cb6c3d411b4158f$var$Main = function() {
    var ref = $1156f94a82362102$export$2e2bcd8739ae039($0c1b1580df2ce10c$export$60241385465d0a34(), 2), markdownText = ref[0], setMarkdownText = ref[1];
    var ref1 = $1156f94a82362102$export$2e2bcd8739ae039($0c1b1580df2ce10c$export$60241385465d0a34(), 2), markupText = ref1[0], setMarkupText = ref1[1];
    $3731d809633ee12d$export$6d9c69b0de29b591($66a81edb4bc8c1a0$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($86a79651cc295bac$exports)).mark(function _callee() {
        return (/*@__PURE__*/$parcel$interopDefault($86a79651cc295bac$exports)).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return $9fdd35ce8c952e28$export$eec08455e72dba68($7cb6c3d411b4158f$var$markdownLink);
                case 2:
                    return _ctx.abrupt("return", setMarkdownText(_ctx.sent));
                case 3:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    })), []);
    $3731d809633ee12d$export$6d9c69b0de29b591(function() {
        var markupStr = (/*@__PURE__*/$parcel$interopDefault($41d52f03626a175b$exports))(markdownText);
        var markup = $9fdd35ce8c952e28$export$46f761b6245bcfc0(markupStr);
        setMarkupText(markup);
    }, [
        markdownText
    ]);
    return $e96d67fa7454c8ba$export$c0bb0b647f701bb5(t1 || (t1 = _(_templateObject1(), 0)), markupText ? $e96d67fa7454c8ba$export$c0bb0b647f701bb5(t || (t = _(_templateObject(), 0)), markupText) : "");
};
customElements.define("main-component", $df13a05f331fcc4c$export$d8556a2a8f973135($7cb6c3d411b4158f$var$Main, {
    useShadowDOM: false
}));



function _templateObject() {
    var data = $d80b82f9cbb6a283$export$2e2bcd8739ae039([
        " <main-component></main-component> "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _ = function(t) {
    return t;
}, t;
var $933923e164b0c663$var$App = function() {
    return $e96d67fa7454c8ba$export$c0bb0b647f701bb5(t || (t = _(_templateObject())));
};
var $933923e164b0c663$export$2e2bcd8739ae039 = $933923e164b0c663$var$App;
customElements.define("app-page", $df13a05f331fcc4c$export$d8556a2a8f973135($933923e164b0c663$var$App, {
    useShadowDOM: false
}));

})();
//# sourceMappingURL=index.2324a9b6.js.map
