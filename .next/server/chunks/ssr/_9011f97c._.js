module.exports = [
"[project]/components/shared/product/add-to-cart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
// import { addItemToCart } from '@/lib/actions/cart.actions';
const AddToCart = ({ item })=>{
    //TODO
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleAddToCart = async ()=>{
    // const res = await addItemToCart(item);
    // if (!res.success) {
    //   toast.error(res.message);
    //   return;
    // }
    // toast(`${item.name} added to the cart`, {
    //   action: {
    //     label: 'Go to cart',
    //     onClick: () => router.push('/cart'),
    //   },
    // });
    };
    //   return <Button className='w-full' type='button' onClick={handleAddToCart}>
    //   <Plus />
    //   Add to cart
    // </Button>
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-sm text-primary cursor-pointer",
        onClick: handleAddToCart,
        children: "Add to cart"
    }, void 0, false, {
        fileName: "[project]/components/shared/product/add-to-cart.tsx",
        lineNumber: 34,
        columnNumber: 8
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AddToCart;
}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_9011f97c._.js.map