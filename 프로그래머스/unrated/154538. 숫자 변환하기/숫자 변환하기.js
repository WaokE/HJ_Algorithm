class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.head) {
            return -1; // 큐가 비어있는 경우에 대한 예외 처리
        }
        const removedValue = this.head.value;
        this.head = this.head.next;
        this.size--;
        if (!this.head) {
            this.tail = null;
        }
        return removedValue;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

function solution(x, y, n) {
    const MAX_VALUE = 1000000;
    const visited = new Array(MAX_VALUE + 1).fill(false);
    const bfsQueue = new Queue(); // 수정: 큐를 연결 리스트 기반의 Queue로 변경
    bfsQueue.enqueue([x, 0]); // 수정: [x, 0]을 큐에 추가

    while (!bfsQueue.isEmpty()) {
        const [current, count] = bfsQueue.dequeue(); // 수정: 큐에서 요소 추출

        if (current === y) return count;
        if (current > y) continue;
        if (visited[current]) continue;

        visited[current] = true;

        const nextX1 = current + n;
        const nextX2 = current * 2;
        const nextX3 = current * 3;

        if (nextX1 <= MAX_VALUE) {
            bfsQueue.enqueue([nextX1, count + 1]); // 수정: [nextX1, count + 1]을 큐에 추가
        }
        if (nextX2 <= MAX_VALUE) {
            bfsQueue.enqueue([nextX2, count + 1]); // 수정: [nextX2, count + 1]을 큐에 추가
        }
        if (nextX3 <= MAX_VALUE) {
            bfsQueue.enqueue([nextX3, count + 1]); // 수정: [nextX3, count + 1]을 큐에 추가
        }
    }

    return -1;
}
