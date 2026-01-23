a = 5
b = 7
m = 4096
y = 4003
n = 8

def rnd_init():
    global y
    y = 4003

def rnd():
    global y
    t = []
    for _ in range(n):
        y = (a * y + b) % m
        t.append(y % 256)
    return t

# === ENCODING/DECODING ===
def en_de_crypt(fin, fout, mode):
    rnd_init()
    with open(fin, "rb") as fin:
        with open(fout, "wb") as fout:
            while True:
                data = fin.read(n)
                if not data:
                    break
                gamma = rnd()
                arr = []
                for i in range(len(data)):
                    if mode == "enc":
                        arr.append((data[i] + gamma[i]) % 256)
                    elif mode == "dec":
                        arr.append((data[i] - gamma[i]) % 256)
                fout.write(bytes(arr))

en_de_crypt("Source.txt", "Coded.txt", mode="enc")
en_de_crypt("Coded.txt", "DeCoded.txt", mode="dec")

print("Encryption and decryption complete.")
