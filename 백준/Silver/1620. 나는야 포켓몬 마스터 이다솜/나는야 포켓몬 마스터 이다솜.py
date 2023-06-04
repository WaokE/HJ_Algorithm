import sys
input = sys.stdin.readline

N, M = list(map(int, input().split()))

pokemons_num = {}
pokemons_name = {}

pokemonCount = 1
for _ in range(N):
    pokemon = input().strip()
    pokemons_num[pokemonCount] = pokemon
    pokemons_name[pokemon] = pokemonCount

    pokemonCount += 1

for _ in range(M):
    command = input().strip()
    try:
        command = int(command)
        print(pokemons_num[command])
        
    except:
        print(pokemons_name[command])
