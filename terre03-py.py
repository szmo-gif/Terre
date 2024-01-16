donnee_lettre = input("Entrer une lettre: ")

if len(donnee_lettre) == 1 and donnee_lettre.isalpha():
    for i in range(ord(donnee_lettre), ord('z') + 1):
        print(chr(i), end=' ')

    print()
else : print("j'ai demandé qu'une lettre")