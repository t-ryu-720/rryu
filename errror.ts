function checkValue(value: number): void {
    if (value === -1) {
        throw new Error('値が -1 なのでエラーです');
    }
}

// 例: 関数の呼び出し
try {
    checkValue(-1);
    console.log('正常に処理されました');
} catch (error) {
    console.log(`エラーが発生しました: ${error.message}`);
}