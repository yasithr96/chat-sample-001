"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.userSchema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type: mongoose_1.Schema.Types.String,
        unique: true,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    password: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        minlength: 3,
        maxlength: 60,
    },
}, {
    _id: true,
    timestamps: true,
});
exports.userSchema.set("toJSON", {
    transform: function (doc, ret, opt) {
        delete ret["password"];
        return ret;
    },
});
const User = mongoose_1.default.model("User", exports.userSchema);
exports.default = User;
//# sourceMappingURL=user-schema.js.map