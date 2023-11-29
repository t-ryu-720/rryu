function checkValue(value) {
    if (value === -1) {
        throw new Error('値が -1 なのでエラーです');
    }
}
// 例: 関数の呼び出し
try {
    checkValue(-1);
    console.log('正常に処理されました');
}
catch (error) {
    console.log("\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ".concat(error.message));
}
