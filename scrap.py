gpa = [21, 24, 26, 27, 29, 25, 25, 30]
act = [2.8, 3.4, 3.0, 3.5, 3.6, 3.0, 2.7, 3.7]


def find_mean(ls):
    mean = 0
    for i in ls:
        mean += i
    mean = mean/len(ls)
    return mean


mgpa = find_mean(gpa)
mact = find_mean(act)
print("meanGPA", mgpa)
print("meanACT", mact)


def find_cov(l1, l2):
    cov = 0
    for i in range(len(l1)):
        cov += (l1[i] - find_mean(l1)) * (l2[i] - find_mean(l2))
    return cov


def find_var(x):
    var = 0
    for i in x:
        var += (i - mact)**2
    return var


cov = find_cov(act, gpa)
varx = find_var(act)

print("cov", cov)
print("varx", varx)

beta1 = find_cov(act, gpa)/find_var(act)
print("beta1", beta1)

beta0 = find_mean(gpa) - beta1*find_mean(act)
print("beta0", beta0)
