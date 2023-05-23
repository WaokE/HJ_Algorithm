#include <iostream>
#include <deque>
#include <vector>
#include <sstream>

int main() {
    int T;
    std::cin >> T;
    std::cin.ignore(); // Ignore the remaining newline character after reading T

    for (int t = 0; t < T; t++) {
        std::string p;
        std::getline(std::cin, p);

        int n;
        std::cin >> n;
        std::cin.ignore(); // Ignore the remaining newline character after reading n

        std::deque<int> arr;
        std::string arrStr;
        std::getline(std::cin, arrStr);

        if (arrStr != "[]") {
            std::string numStr;
            std::stringstream ss(arrStr.substr(1, arrStr.length() - 2));
            while (std::getline(ss, numStr, ',')) {
                arr.push_back(std::stoi(numStr));
            }
        }

        bool error = false;
        bool reversed = false;
        for (char c : p) {
            if (c == 'R') {
                reversed = !reversed;
            } else if (c == 'D') {
                if (arr.empty()) {
                    error = true;
                    break;
                }

                if (reversed) {
                    arr.pop_back();
                } else {
                    arr.pop_front();
                }
            }
        }

        if (error) {
            std::cout << "error\n";
        } else {
            std::cout << '[';
            if (reversed) {
                for (auto it = arr.rbegin(); it != arr.rend(); ++it) {
                    std::cout << *it;
                    if (it != arr.rend() - 1) {
                        std::cout << ',';
                    }
                }
            } else {
                for (auto it = arr.begin(); it != arr.end(); ++it) {
                    std::cout << *it;
                    if (it != arr.end() - 1) {
                        std::cout << ',';
                    }
                }
            }
            std::cout << "]\n";
        }
    }

    return 0;
}
