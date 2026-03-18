def sum2(nums):
  length = len(nums)
  if length == 0:
    return 0;
  elif length == 1:
    return nums[0]
  else:
    return nums[0] + nums[1]
