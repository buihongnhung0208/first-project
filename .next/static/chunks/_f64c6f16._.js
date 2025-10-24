(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/actions/data:690bf5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f2ba547b95a6929fa4581e60505c58d39f18a2185":"addItemToCart"},"lib/actions/cart.actions.ts",""] */ __turbopack_context__.s([
    "addItemToCart",
    ()=>addItemToCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addItemToCart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f2ba547b95a6929fa4581e60505c58d39f18a2185", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addItemToCart"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2FydC5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycyc7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyBmb3JtYXRFcnJvciwgcm91bmQyIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgY2FydEl0ZW1TY2hlbWEsIGluc2VydENhcnRTY2hlbWEgfSBmcm9tICcuLi92YWxpZGF0b3JzJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvZGIvcHJpc21hJztcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgeyBjb252ZXJ0VG9QbGFpbk9iamVjdCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFByaXNtYSwgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgYWRkSXRlbVRvQ2FydCA9IGFzeW5jIChcbiAgICAgIGRhdGE6IHouaW5mZXI8dHlwZW9mIGNhcnRJdGVtU2NoZW1hPixcbik6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuOyBtZXNzYWdlOiBzdHJpbmcgfT4gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBzZXNzaW9uIGNhcnQgY29va2llXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uQ2FydElkID0gKGF3YWl0IGNvb2tpZXMoKSkuZ2V0KCdzZXNzaW9uQ2FydElkJyk/LnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFzZXNzaW9uQ2FydElkKSB0aHJvdyBuZXcgRXJyb3IoJ0NhcnQgU2Vzc2lvbiBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIC8vIEdldCBjYXJ0IGZyb20gZGF0YWJhc2UgKGlmIGV4aXN0cylcbiAgICAgICAgICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBnZXRNeUNhcnQoKTtcbiAgICAgICAgICAgIC8vIFBhcnNlIGFuZCB2YWxpZGF0ZSBzdWJtaXR0ZWQgaXRlbSBkYXRhXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY2FydEl0ZW1TY2hlbWEucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAvLyBGaW5kIHByb2R1Y3QgaW4gZGF0YWJhc2VcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGl0ZW0ucHJvZHVjdElkIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcHJvZHVjdCkgdGhyb3cgbmV3IEVycm9yKCdQcm9kdWN0IG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgaWYgKCFjYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNhcnQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICBjb25zdCBuZXdDYXJ0ID0gaW5zZXJ0Q2FydFNjaGVtYS5wYXJzZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtpdGVtXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25DYXJ0SWQ6IHNlc3Npb25DYXJ0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jYWxjUHJpY2UoW2l0ZW1dKSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgLy8gQWRkIHRvIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgICBhd2FpdCBwcmlzbWEuY2FydC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbmV3Q2FydCxcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAvLyBSZXZhbGlkYXRlIHByb2R1Y3QgcGFnZVxuICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9wcm9kdWN0LyR7cHJvZHVjdC5zbHVnfWApO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJdGVtIGFkZGVkIHRvIGNhcnQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGV4aXN0aW5nIGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RJdGVtID0gKGNhcnQuaXRlbXMgYXMgQ2FydEl0ZW1bXSkuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICh4KSA9PiB4LnByb2R1Y3RJZCA9PT0gaXRlbS5wcm9kdWN0SWRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAvLyBJZiBub3QgZW5vdWdoIHN0b2NrLCB0aHJvdyBlcnJvclxuICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3Quc3RvY2sgPCBleGlzdEl0ZW0ucXR5ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgZW5vdWdoIHN0b2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluY3JlYXNlIHF1YW50aXR5IG9mIGV4aXN0aW5nIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIChjYXJ0Lml0ZW1zIGFzIENhcnRJdGVtW10pLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeCkgPT4geC5wcm9kdWN0SWQgPT09IGl0ZW0ucHJvZHVjdElkXG4gICAgICAgICAgICAgICAgICAgICAgICApIS5xdHkgPSBleGlzdEl0ZW0ucXR5ICsgMTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBzdG9jaywgYWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3Quc3RvY2sgPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ05vdCBlbm91Z2ggc3RvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnQuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0byBkYXRhYmFzZVxuICAgICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLmNhcnQudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjYXJ0LmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogY2FydC5pdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNhbGNQcmljZShjYXJ0Lml0ZW1zIGFzIENhcnRJdGVtW10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICByZXZhbGlkYXRlUGF0aChgL3Byb2R1Y3QvJHtwcm9kdWN0LnNsdWd9YCk7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7cHJvZHVjdC5uYW1lfSAke2V4aXN0SXRlbSA/ICd1cGRhdGVkIGluJyA6ICdhZGRlZCB0bydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2FydCBzdWNjZXNzZnVsbHlgLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+UjSBERUJVRzogRXJyb3IgaW4gYWRkSXRlbVRvQ2FydDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGZvcm1hdEVycm9yKGVycm9yKSB9O1xuICAgICAgfVxufTtcblxuLy8gIEdldCB1c2VyIGNhcnQgZnJvbSBkYXRhYmFzZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE15Q2FydCgpIHtcbiAgICAgIC8vIENoZWNrIGZvciBzZXNzaW9uIGNhcnQgY29va2llXG4gICAgICBjb25zdCBzZXNzaW9uQ2FydElkID0gKGF3YWl0IGNvb2tpZXMoKSkuZ2V0KCdzZXNzaW9uQ2FydElkJyk/LnZhbHVlO1xuICAgICAgaWYgKCFzZXNzaW9uQ2FydElkKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBHZXQgdXNlciBjYXJ0IGZyb20gZGF0YWJhc2VcbiAgICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBwcmlzbWEuY2FydC5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IHsgc2Vzc2lvbkNhcnRJZCB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghY2FydCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgLy8gQ29udmVydCBEZWNpbWFsIHZhbHVlcyB0byBzdHJpbmdzIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQWRkVG9DYXJ0IGNvbXBvbmVudFxuICAgICAgcmV0dXJuIGNvbnZlcnRUb1BsYWluT2JqZWN0KHtcbiAgICAgICAgICAgIC4uLmNhcnQsXG4gICAgICAgICAgICBpdGVtczogY2FydC5pdGVtcyBhcyBDYXJ0SXRlbVtdLFxuICAgICAgICAgICAgaXRlbXNQcmljZTogY2FydC5pdGVtc1ByaWNlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0b3RhbFByaWNlOiBjYXJ0LnRvdGFsUHJpY2UudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJpY2U6IGNhcnQuc2hpcHBpbmdQcmljZS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGF4UHJpY2U6IGNhcnQudGF4UHJpY2UudG9TdHJpbmcoKSxcbiAgICAgIH0pO1xufVxuXG5jb25zdCBjYWxjUHJpY2UgPSAoaXRlbXM6IHouaW5mZXI8dHlwZW9mIGNhcnRJdGVtU2NoZW1hPltdKSA9PiB7XG4gICAgICBjb25zdCBpdGVtc1ByaWNlID0gcm91bmQyKFxuICAgICAgICAgICAgaXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIE51bWJlcihpdGVtLnByaWNlKSAqIGl0ZW0ucXR5LCAwKVxuICAgICAgKSxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJpY2UgPSByb3VuZDIoaXRlbXNQcmljZSA+IDEwMCA/IDAgOiAxMCksXG4gICAgICAgICAgICB0YXhQcmljZSA9IHJvdW5kMigwLjE1ICogaXRlbXNQcmljZSksXG4gICAgICAgICAgICB0b3RhbFByaWNlID0gcm91bmQyKGl0ZW1zUHJpY2UgKyBzaGlwcGluZ1ByaWNlICsgdGF4UHJpY2UpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zUHJpY2U6IGl0ZW1zUHJpY2UudG9GaXhlZCgyKSxcbiAgICAgICAgICAgIHNoaXBwaW5nUHJpY2U6IHNoaXBwaW5nUHJpY2UudG9GaXhlZCgyKSxcbiAgICAgICAgICAgIHRheFByaWNlOiB0YXhQcmljZS50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgdG90YWxQcmljZTogdG90YWxQcmljZS50b0ZpeGVkKDIpLFxuICAgICAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUNhcnQocHJvZHVjdElkOiBzdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBHZXQgc2Vzc2lvbiBjYXJ0IGlkXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uQ2FydElkID0gKGF3YWl0IGNvb2tpZXMoKSkuZ2V0KCdzZXNzaW9uQ2FydElkJyk/LnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFzZXNzaW9uQ2FydElkKSB0aHJvdyBuZXcgRXJyb3IoJ0NhcnQgU2Vzc2lvbiBub3QgZm91bmQnKTtcblxuICAgICAgICAgICAgLy8gR2V0IHByb2R1Y3RcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHRocm93IG5ldyBFcnJvcignUHJvZHVjdCBub3QgZm91bmQnKTtcblxuICAgICAgICAgICAgLy8gR2V0IHVzZXIgY2FydFxuICAgICAgICAgICAgY29uc3QgY2FydCA9IGF3YWl0IGdldE15Q2FydCgpO1xuICAgICAgICAgICAgaWYgKCFjYXJ0KSB0aHJvdyBuZXcgRXJyb3IoJ0NhcnQgbm90IGZvdW5kJyk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGNhcnQgaGFzIGl0ZW1cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0ID0gKGNhcnQuaXRlbXMgYXMgQ2FydEl0ZW1bXSkuZmluZChcbiAgICAgICAgICAgICAgICAgICh4KSA9PiB4LnByb2R1Y3RJZCA9PT0gcHJvZHVjdElkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFleGlzdCkgdGhyb3cgbmV3IEVycm9yKCdJdGVtIG5vdCBmb3VuZCcpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjYXJ0IGhhcyBvbmx5IG9uZSBpdGVtXG4gICAgICAgICAgICBpZiAoZXhpc3QucXR5ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIGNhcnRcbiAgICAgICAgICAgICAgICAgIGNhcnQuaXRlbXMgPSAoY2FydC5pdGVtcyBhcyBDYXJ0SXRlbVtdKS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAoeCkgPT4geC5wcm9kdWN0SWQgIT09IGV4aXN0LnByb2R1Y3RJZFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBEZWNyZWFzZSBxdWFudGl0eSBvZiBleGlzdGluZyBpdGVtXG4gICAgICAgICAgICAgICAgICAoY2FydC5pdGVtcyBhcyBDYXJ0SXRlbVtdKS5maW5kKCh4KSA9PiB4LnByb2R1Y3RJZCA9PT0gcHJvZHVjdElkKSEucXR5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0LnF0eSAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGluIGRhdGFiYXNlXG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEuY2FydC51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGNhcnQuaWQgfSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBjYXJ0Lml0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2FsY1ByaWNlKGNhcnQuaXRlbXMgYXMgQ2FydEl0ZW1bXSksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJldmFsaWRhdGUgcHJvZHVjdCBwYWdlXG4gICAgICAgICAgICByZXZhbGlkYXRlUGF0aChgL3Byb2R1Y3QvJHtwcm9kdWN0LnNsdWd9YCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7cHJvZHVjdC5uYW1lfSAgJHsoY2FydC5pdGVtcyBhcyBDYXJ0SXRlbVtdKS5maW5kKCh4KSA9PiB4LnByb2R1Y3RJZCA9PT0gcHJvZHVjdElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndXBkYXRlZCBpbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JlbW92ZWQgZnJvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2FydCBzdWNjZXNzZnVsbHlgLFxuICAgICAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZm9ybWF0RXJyb3IoZXJyb3IpIH07XG4gICAgICB9XG59OyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoia1NBWWEifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$690bf5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:690bf5 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AddToCart = (param)=>{
    let { item } = param;
    _s();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleAddToCart = async ()=>{
        startTransition(async ()=>{
            // Execute the addItemToCart action
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$690bf5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addItemToCart"])(item);
            if (!res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Something went wrong!!!!");
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("".concat(item.name, " added to the cart"), {
                action: {
                    label: 'Go to cart',
                    onClick: ()=>router.push('/cart')
                }
            });
        });
    };
    //   return <Button className='w-full' type='button' onClick={handleAddToCart}>
    //   <Plus />
    //   Add to cart
    // </Button>
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-sm text-primary cursor-pointer",
        onClick: handleAddToCart,
        children: "Add to cart"
    }, void 0, false, {
        fileName: "[project]/components/shared/product/add-to-cart.tsx",
        lineNumber: 35,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddToCart, "r0+bhqBgOc5BXO1NQwYvB0wIgU4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
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
]);

//# sourceMappingURL=_f64c6f16._.js.map