(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__5f162e0b._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/db/prisma.ts [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/auth.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "config",
    ()=>config,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcrypt$2d$ts$2d$edge$2f$dist$2f$browser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcrypt-ts-edge/dist/browser.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/node_modules/@auth/core/providers/credentials.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$prisma$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/prisma.ts [middleware-edge] (ecmascript)");
;
;
;
;
const config = {
    secret: process.env.NEXTAUTH_SECRET || "fallback-secret-key-for-development",
    pages: {
        signIn: '/sign-in',
        error: '/sign-in'
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
            credentials: {
                email: {
                    type: 'email'
                },
                password: {
                    type: 'password'
                }
            },
            async authorize (credentials) {
                if (credentials == null) return null;
                // Find user in database
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$prisma$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
                    where: {
                        email: credentials.email
                    }
                });
                // Check if user exists and password is correct
                if (user && user.password) {
                    const isMatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcrypt$2d$ts$2d$edge$2f$dist$2f$browser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["compareSync"])(credentials.password, user.password);
                    // If password is correct, return user object
                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role
                        };
                    }
                }
                // If user doesn't exist or password is incorrect, return null
                return null;
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user, trigger, session }) {
            // Assign user fields to token
            if (user) {
                token.id = user.id;
                token.role = user.role;
                // If user has no name, use email as their default name
                if (user.name === 'NO_NAME') {
                    token.name = user.email.split('@')[0];
                    // Update the user in the database with the new name
                    await __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$prisma$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["prisma"].user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            name: token.name
                        }
                    });
                }
            }
            // Handle session updates (e.g., name change)
            if (session?.user.name && trigger === 'update') {
                token.name = session.user.name;
            }
            return token;
        },
        async session ({ session, user, trigger, token }) {
            // Map the token data to the session object
            session.user.id = token.id || token.sub;
            session.user.name = token.name;
            session.user.role = token.role;
            // Optionally handle session updates (like name change)
            if (trigger === 'update' && token.name) {
                session.user.name = token.name;
            }
            // Return the updated session object
            return session;
        }
    }
};
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(config);
}),
"[project]/middleware.ts [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [middleware-edge] (ecmascript)");
;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middleware",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["auth"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/middleware.ts [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [middleware-edge] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5f162e0b._.js.map