const mathData = [
    [0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 0],
    [1, 0, 0], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 0], [1, 11, 0],
    [2, 0, 0], [2, 1, 0], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 0], [2, 11, 0],
    [3, 0, 0], [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0], [3, 11, 0],
    [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 0], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 0], [4, 10, 0], [4, 11, 0],
    [5, 0, 0], [5, 1, 0], [5, 2, 0], [5, 3, 0], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 0], [5, 9, 0], [5, 10, 0], [5, 11, 0],
    [6, 0, 0], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 0], [6, 11, 0],
    [7, 0, 0], [7, 1, 0], [7, 2, 0], [7, 3, 0], [7, 4, 0], [7, 5, 0], [7, 6, 0], [7, 7, 0], [7, 8, 0], [7, 9, 0], [7, 10, 0], [7, 11, 0],
    [8, 0, 0], [8, 1, 0], [8, 2, 0], [8, 3, 0], [8, 4, 0], [8, 5, 0], [8, 6, 0], [8, 7, 0], [8, 8, 0], [8, 9, 0], [8, 10, 0], [8, 11, 0],
    [9, 0, 0], [9, 1, 0], [9, 2, 0], [9, 3, 0], [9, 4, 0], [9, 5, 0], [9, 6, 0], [9, 7, 0], [9, 8, 0], [9, 9, 0], [9, 10, 0], [9, 11, 0],
    [10, 0, 0], [10, 1, 0], [10, 2, 0], [10, 3, 0], [10, 4, 0], [10, 5, 0], [10, 6, 0], [10, 7, 0], [10, 8, 0], [10, 9, 0], [10, 10, 0], [10, 11, 0],
    [11, 0, 0], [11, 1, 0], [11, 2, 0], [11, 3, 0], [11, 4, 0], [11, 5, 0], [11, 6, 0], [11, 7, 0], [11, 8, 0], [11, 9, 0], [11, 10, 0], [11, 11, 0],
    [12, 0, 0], [12, 1, 0], [12, 2, 0], [12, 3, 0], [12, 4, 0], [12, 5, 0], [12, 6, 0], [12, 7, 0], [12, 8, 0], [12, 9, 0], [12, 10, 0], [12, 11, 0],
    [13, 0, 0], [13, 1, 0], [13, 2, 0], [13, 3, 0], [13, 4, 0], [13, 5, 0], [13, 6, 0], [13, 7, 0], [13, 8, 0], [13, 9, 0], [13, 10, 0], [13, 11, 0],
    [14, 0, 0], [14, 1, 0], [14, 2, 0], [14, 3, 0], [14, 4, 0], [14, 5, 0], [14, 6, 0], [14, 7, 0], [14, 8, 0], [14, 9, 0], [14, 10, 0], [14, 11, 0],
    [15, 0, 0], [15, 1, 0], [15, 2, 0], [15, 3, 0], [15, 4, 0], [15, 5, 0], [15, 6, 0], [15, 7, 0], [15, 8, 0], [15, 9, 0], [15, 10, 0], [15, 11, 0],
    [16, 0, 0], [16, 1, 0], [16, 2, 0], [16, 3, 0], [16, 4, 0], [16, 5, 0], [16, 6, 0], [16, 7, 0], [16, 8, 0], [16, 9, 0], [16, 10, 0], [16, 11, 0],
    [17, 0, 0], [17, 1, 0], [17, 2, 0], [17, 3, 0], [17, 4, 0], [17, 5, 0], [17, 6, 0], [17, 7, 0], [17, 8, 0], [17, 9, 0], [17, 10, 0], [17, 11, 0],
    [18, 0, 0], [18, 1, 0], [18, 2, 0], [18, 3, 0], [18, 4, 0], [18, 5, 0], [18, 6, 0], [18, 7, 0], [18, 8, 0], [18, 9, 0], [18, 10, 0], [18, 11, 0],
    [19, 0, 0], [19, 1, 0], [19, 2, 0], [19, 3, 0], [19, 4, 0], [19, 5, 0], [19, 6, 0], [19, 7, 0], [19, 8, 0], [19, 9, 0], [19, 10, 0], [19, 11, 0],
    [20, 0, 0], [20, 1, 0], [20, 2, 0], [20, 3, 0], [20, 4, 0], [20, 5, 0], [20, 6, 0], [20, 7, 0], [20, 8, 0], [20, 9, 0], [20, 10, 0], [20, 11, 0],
    [21, 0, 0], [21, 1, 0], [21, 2, 0], [21, 3, 0], [21, 4, 0], [21, 5, 0], [21, 6, 0], [21, 7, 0], [21, 8, 0], [21, 9, 0], [21, 10, 0], [21, 11, 0],
    [22, 0, 0], [22, 1, 0], [22, 2, 0], [22, 3, 0], [22, 4, 0], [22, 5, 0], [22, 6, 0], [22, 7, 0], [22, 8, 0], [22, 9, 0], [22, 10, 0], [22, 11, 0],
    [23, 0, 0], [23, 1, 0], [23, 2, 0], [23, 3, 0], [23, 4, 120], [23, 5, 0], [23, 6, 0], [23, 7, 0], [23, 8, 0], [23, 9, 0], [23, 10, 0], [23, 11, 0],
    [24, 0, 0], [24, 1, 0], [24, 2, 0], [24, 3, 0], [24, 4, 0], [24, 5, 0], [24, 6, 0], [24, 7, 0], [24, 8, 0], [24, 9, 0], [24, 10, 0], [24, 11, 0],
    [25, 0, 0], [25, 1, 0], [25, 2, 0], [25, 3, 0], [25, 4, 75], [25, 5, 0], [25, 6, 0], [25, 7, 0], [25, 8, 0], [25, 9, 0], [25, 10, 0], [25, 11, 0],
    [26, 0, 0], [26, 1, 0], [26, 2, 0], [26, 3, 0], [26, 4, 0], [26, 5, 0], [26, 6, 0], [26, 7, 0], [26, 8, 0], [26, 9, 0], [26, 10, 0], [26, 11, 0],
    [27, 0, 0], [27, 1, 0], [27, 2, 0], [27, 3, 0], [27, 4, 0], [27, 5, 0], [27, 6, 0], [27, 7, 0], [27, 8, 0], [27, 9, 0], [27, 10, 0], [27, 11, 0],
    [28, 0, 0], [28, 1, 0], [28, 2, 0], [28, 3, 0], [28, 4, 0], [28, 5, 0], [28, 6, 0], [28, 7, 0], [28, 8, 0], [28, 9, 0], [28, 10, 0], [28, 11, 0],
    [29, 0, 0], [29, 1, 0], [29, 2, 0], [29, 3, 0], [29, 4, 0], [29, 5, 0], [29, 6, 0], [29, 7, 0], [29, 8, 0], [29, 9, 0], [29, 10, 0], [29, 11, 0]
];

const mathLinks = {
    "23.4": "http://mathprofi.ru/predely_primery_reshenii.html",
    "25.4": "http://mathprofi.ru/zamechatelnye_predely.html"
};
