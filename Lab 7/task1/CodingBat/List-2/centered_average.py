def centered_average(nums):
    smallest = min(nums)
    largest = max(nums)

    total = sum(nums) - smallest - largest

    return total // (len(nums) - 2)
