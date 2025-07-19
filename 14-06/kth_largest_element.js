//https://leetcode.com/problems/kth-largest-element-in-an-array/description/
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor(this.size() / 2) - 1; i >= 0; --i) {
            this.heapifyDown(i);
        }
        return this.heap;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0] || null;
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.size() - 1);
    }

    extractMax() {
        if (this.size() === 0) return null;
        this.swap(0, this.size() - 1);
        const max = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyUp(i) {
        if (i === 0) return;
        let current = i;
        let parent = Math.floor((i - 1) / 2);
        if (this.heap[current] > this.heap[parent]) {
            this.swap(current, parent);
            this.heapifyUp(parent);
        }
    }

    heapifyDown(i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let size = this.size();
        if (left < size && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < size && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (i !== largest) {
            this.swap(i, largest);
            this.heapifyDown(largest);
        }
    }

    heapSortAscending() {
        const sortedArray = [];
        for (let i = 0; i < this.size(); ++i) {
            sortedArray.push(this.peek());
        }
        return sortedArray.reverse();
    }

    heapSortDescending() {
        const sortedArray = [];
        for (let i = 0; i < this.size(); ++i) {
            sortedArray.push(this.peek());
        }
        return sortedArray;
    }

}

const findKthLargest = (nums, k) => {
    const maxHeap = new MaxHeap();
    nums.forEach(num => maxHeap.insert(num));

    let result;
    for (let i = 0; i < k; i++) {
        result = maxHeap.extractMax();
    }

    return result;
}