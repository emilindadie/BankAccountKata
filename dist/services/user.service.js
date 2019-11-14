"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("src/entity/user");
class UserService {
    checkIfEmailExist(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield typeorm_1.getConnection().getRepository(user_1.User).find({ where: { email: email } });
            if (users.length > 0) {
                return true;
            }
            return false;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map