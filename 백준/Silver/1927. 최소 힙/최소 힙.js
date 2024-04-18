const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("test.txt").toString().trim().split("\n");

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heap.length;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heap.length;
    }

    leftChild(parentIndex) {
        return this.heap[this.getLeftChildIndex(parentIndex)];
    }

    rightChild(parentIndex) {
        return this.heap[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex) {
        return this.heap[this.getParentIndex(childIndex)];
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    poll() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (
            this.hasParent(currentIndex) &&
            this.parent(currentIndex) > this.heap[currentIndex]
        ) {
            this.swap(this.getParentIndex(currentIndex), currentIndex);
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (this.hasLeftChild(currentIndex)) {
            let smallerChildIndex = this.getLeftChildIndex(currentIndex);
            if (
                this.hasRightChild(currentIndex) &&
                this.rightChild(currentIndex) < this.leftChild(currentIndex)
            ) {
                smallerChildIndex = this.getRightChildIndex(currentIndex);
            }

            if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(currentIndex, smallerChildIndex);
            }

            currentIndex = smallerChildIndex;
        }
    }
}

function solution(input) {
    const N = Number(input[0]);
    const minHeap = new MinHeap();
    const result = [];
    for (let i = 0; i < N; i++) {
        const command = Number(input[i + 1]);
        switch (command) {
            case 0:
                const polled = minHeap.poll();
                result.push(polled === null ? 0 : polled);
                break;
            default:
                minHeap.add(command);
                break;
        }
    }
    console.log(result.join("\n"));
}

solution(input);
