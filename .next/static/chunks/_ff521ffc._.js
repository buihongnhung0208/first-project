(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/actions/cart.actions.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 'use server';
// import { auth } from '@/auth';
// import { cookies } from 'next/headers';
// import { z } from 'zod';
// import { formatError } from '../utils';
// import { cartItemSchema, insertCartSchema } from '../validators';
// // import { prisma } from '@/db/prisma';
// import { CartItem } from '@/types';
// import { Prisma } from '@prisma/client';
// import { convertToPlainObject } from '../utils';
// export const addItemToCart = async (data: z.infer<typeof cartItemSchema>) => {
//       try {
//         // Check for session cart cookie
//         const sessionCartId = (await cookies()).get('sessionCartId')?.value;
//         if (!sessionCartId) throw new Error('Cart Session not found');
//         // Get session and user ID
//         const session = await auth();
//         const userId = session?.user.id as string | undefined;
//         // Get cart from database
//         const cart = await getMyCart();
//         // Parse and validate submitted item data
//         const item = cartItemSchema.parse(data);
//         // Find product in database
//         //TODO
//         const product = {}
//       //   const product = await prisma.product.findFirst({
//       //     where: { id: item.productId },
//       //   });
//         if (!product) throw new Error('Product not found');
//         // Testing
//         console.log({
//           'Session Cart ID': sessionCartId,
//           'User ID': userId,
//           'Item Requested': item,
//           'Product Found': product,
//           cart: cart,
//         });
//         return {
//           success: true,
//           message: 'Testing Cart',
//         };
//       } catch (error) {
//         return { success: false, message: formatError(error) };
//       }
//     };
//     //  Get user cart from database
//     export async function getMyCart() {
//       // Check for session cart cookie
//       const sessionCartId = (await cookies()).get('sessionCartId')?.value;
//       if (!sessionCartId) return undefined;
//       // Get session and user ID
//       const session = await auth();
//       const userId = session?.user.id;
//       // Get user cart from database
//       const cart = {}
//       // const cart = await prisma.cart.findFirst({
//       //   where: userId ? { userId: userId } : { sessionCartId: sessionCartId },
//       // });
//       if (!cart) return undefined;
//       // Convert Decimal values to strings for compatibility with AddToCart component
//       return convertToPlainObject({
//         ...cart,
//         items: cart.items as CartItem[],
//         itemsPrice: cart.itemsPrice.toString(),
//         totalPrice: cart.totalPrice.toString(),
//         shippingPrice: cart.shippingPrice.toString(),
//         taxPrice: cart.taxPrice.toString(),
//       });
//     }
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/product/add-to-cart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$cart$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions/cart.actions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const AddToCart = (param)=>{
    let { item } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleAddToCart = async ()=>{
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$cart$2e$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addItemToCart"])(item);
        if (!res.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("".concat(item.name, " added to the cart"), {
            action: {
                label: 'Go to cart',
                onClick: ()=>router.push('/cart')
            }
        });
    };
    //   return <Button className='w-full' type='button' onClick={handleAddToCart}>
    //   <Plus />
    //   Add to cart
    // </Button>
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleAddToCart,
        children: "Add to cart"
    }, void 0, false, {
        fileName: "[project]/components/shared/product/add-to-cart.tsx",
        lineNumber: 33,
        columnNumber: 8
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddToCart, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddToCart;
const __TURBOPACK__default__export__ = AddToCart;
var _c;
__turbopack_context__.k.register(_c, "AddToCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_ff521ffc._.js.map