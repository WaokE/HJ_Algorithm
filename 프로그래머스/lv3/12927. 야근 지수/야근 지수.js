class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 노드의 인덱스를 반환합니다.
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드의 인덱스를 반환합니다.
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // 오른쪽 자식 노드의 인덱스를 반환합니다.
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // 두 노드를 스왑합니다.
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // 새로운 요소를 힙에 추가합니다.
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 힙을 아래로 정리합니다.
  heapifyDown(index = 0) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let largest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largest]
    ) {
      largest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largest]
    ) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  // 힙을 위로 정리합니다.
  heapifyUp(index = this.heap.length - 1) {
    const parentIndex = this.getParentIndex(index);

    if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  // 최대 요소를 반환하고 제거합니다.
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  // 힙의 크기를 반환합니다.
  size() {
    return this.heap.length;
  }
}

function solution(n, works) {
    const worksHeap = new MaxHeap();
    works.forEach((work) => {worksHeap.insert(work)});
    
    for (let i=0;i<n;i++) {
        worksHeap.heap[0]--;
        worksHeap.heapifyDown();
    }
    
    let result = 0;
    [...worksHeap.heap].forEach((work) => {
        if (work > 0) result += work ** 2
    })
    
    return result
}