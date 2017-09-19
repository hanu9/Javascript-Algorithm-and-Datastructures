/*Given 3 sorted arrays. Find(x,y,z), (where x is from 1st array, y is from 2nd array, and z is from 3rd array), such that x<y<z. 

x = element(s) from array 1
y= element(s) from array 2
z = element(s) from array 3

I can have more than 1 elements from each array. But at least 1 from each array is mandatory and elements from .


int[] arr1 = {3};
        int[] arr2 = {11, 13,  16};
        int[] arr3 = {45};

   Correct Output : 6

		(3,11,45)
		(3,13,45)
		(3,16,45)
		(3,11,13,45)
		(3,11,16,45)
		(3,11,13,16,45)
Need to find the number of such sequences./*
