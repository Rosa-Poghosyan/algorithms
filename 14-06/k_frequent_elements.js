class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
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
        if (this.heap[current].freq > this.heap[parent].freq) {
            this.swap(current, parent);
            this.heapifyUp(parent);
        }
    }

    heapifyDown(i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let size = this.size();
        if (left < size && this.heap[left].freq > this.heap[largest].freq) {
            largest = left;
        }
        if (right < size && this.heap[right].freq > this.heap[largest].freq) {
            largest = right;
        }
        if (i !== largest) {
            this.swap(i, largest);
            this.heapifyDown(largest);
        }
    }

}

const topKFrequent = function(nums, k) {
    const result = [];
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const maxHeap = new MaxHeap();
    for (const [num, freq] of frequencyMap.entries()) {
        maxHeap.insert({ num, freq });

    }
    for (let i = 0; i < k; ++i) {
        const maxElement = maxHeap.extractMax();
        if (maxElement) {
            result.push(maxElement.num);
        }
    }

    return result;
}

let nums = [1, 2];
let k = 2;
topKFrequent(nums, k)

console.log(topKFrequent(nums, k)); // Output: [1, 2]