def combo_string(a, b):
    len_a = len(a)
    len_b = len(b)

    if (len_a < len_b):
        return a + b + a
    else:
        return b + a + b
