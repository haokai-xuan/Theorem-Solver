def gcd(a, b):
    a = abs(a)
    b = abs(b)
    if a == 0 and b == 0:
        return 0
    elif a == 0 or b == 0:
        return max(a, b)
    
    return gcd(b, a % b)

# ax + by = d
# d = gcd(a, b)
def eea(a, b):
    # Ensure that a and b are non-negative for the algorithm
    r1 = abs(a)
    r2 = abs(b)

    x1, y1, x2, y2 = 1, 0, 0, 1

    while r2 != 0:
        q = r1 // r2
        temp = r1
        r1 = r2
        r2 = temp % r2

        xtemp, ytemp = x1, y1
        x1, y1 = x2, y2
        x2, y2 = xtemp - q * x2, ytemp - q * y2

    if a < 0:
        x1 = -x1
    if b < 0:
        y1 = -y1

    return x1, y1

# ax + by = c
def lindio(a, b, c):
    d = gcd(a, b)

    if d == 0 or c % d != 0:
        print("No solution")
        return "No Solution"
    
    x0, y0 = eea(a, b)
    factor = c // d

    print(f"One particular solution: x = {x0 * factor}, y = {y0 * factor}")

    print("General solution:")
    print(f"{{(x, y) : x = {x0 * factor} + {b // d}n, y = {y0 * factor} - {a // d}n, n ∈ ℤ}}")

    return x0 * factor, y0 * factor, b // d, a // d

def crt(a1, m1, a2, m2):
    d = gcd(m1, m2)

    if d != 1:
        print("No Solution")
        return "No Solution"
    
    result = lindio(-m1, m2, a1 - a2)
    x0 = result[0]
    n0 = m1 * x0 + a1

    n0 %= m1 * m2

    print(f"n ≡ {n0} (mod {m1 * m2})")

    return n0, m1 * m2

def lincong(a, b, m):
    d = gcd(a, m)
    result = lindio(-a, m, -b)

    if result == "No Solution":
        print("No solution")
        return result
    
    x = result[0]

    x %= (m // d)

    print(f"x ≡ {x} (mod {m})")
    return x, m // d

def rsa(text, key, n):
    return pow(text, key) % n

'''
def rsa_d(C, d, n):
    result = product_of_primes(n)

    if result is None:
        print("Invalid modulo, must be product of primes")
        return None
    
    n1, n2 = result
    C1, C2 = C, C

    C1 %= n1
    C2 %= n2

    a1 = pow(C1, d) % n1
    a2 = pow(C2, d) % n2

    R = crt(a1, n1, a2, n2)

    return R
    return pow(C, d) % n
'''
    
# key * x ≡ 1 (mod (p - 1) * (q - 1))
def get_key(key, p, q):
    return lincong(key, 1, (p - 1) * (q - 1))