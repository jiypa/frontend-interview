const arr = [8, 9, 4, 2, 1, 5, 6, 7];

// 冒泡排序
const bubbleSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] >= array[j]) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
};

// 快速排序
const quickSort = array => {
    if (array.length <= 1) return array;

    const pivot = array[0];
    const left = [], right = [];

    for (let i = 1; i < array.length; i++) array[i] < pivot ? left.push(array[i]) : right.push(array[i]);

    return [...quickSort(left), pivot, ...quickSort(right)];
};

// 选择排序
const selectionSort = array => {
    let res = [];

    while (array.length > 0) {
        const min = Math.min(...array);
        res.push(min);
        array.splice(array.indexOf(min), 1);
    }

    return res;
};

console.log(`冒泡排序结果：${bubbleSort(arr)}\n快速排序结果：${quickSort(arr)}\n选择排序结果：${selectionSort(arr)}`);