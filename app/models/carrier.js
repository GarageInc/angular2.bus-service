System.register(["./base/Synchronizable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Synchronizable_1;
    var Carrier;
    return {
        setters:[
            function (Synchronizable_1_1) {
                Synchronizable_1 = Synchronizable_1_1;
            }],
        execute: function() {
            Carrier = (function (_super) {
                __extends(Carrier, _super);
                function Carrier() {
                    _super.apply(this, arguments);
                }
                return Carrier;
            }(Synchronizable_1.Synchronizable));
            exports_1("Carrier", Carrier);
        }
    }
});
//# sourceMappingURL=carrier.js.map