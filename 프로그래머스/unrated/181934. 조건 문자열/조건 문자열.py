def solution(ineq, eq, n, m):
    result = True;
    if ineq == '<' and eq == '=':
        result = n <= m;
    if ineq == '<' and eq == '!':
        result =  n < m;
    if ineq == '>' and eq == '=':        
        result = n >= m;
    if ineq == '>' and eq == '!':                
        result =  n > m
    if result: return 1;
    else: return 0;