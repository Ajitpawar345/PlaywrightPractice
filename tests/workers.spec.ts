

//workers: processes ---> nodejs
//sequential or parallerl mode


//workers = 1 : sequence mode
//workers = 4: parallel mode

//default worker count: cpu core: 8/2 =4
// we can give the workers in percentage as well e.g - 50% 

//CPU core = 1; w=4: sequence

//FullyParallel = true, w=4
//toal tcs - 75 (test case pool) - it will start exaecuting test cases randomly by pick up from the pool

//all the files and their test cases also will start running in the parallel mode
// make sure that all the test cases are independent 

//fullyParaller = false, w= 4 - this spec pool (file pool) - files are running parallely but tcs are are running in swquential mode
//w1--- file 1 (10 tcs) --  1- tcs will run in the sequential mode
//w2--- file 2 (5 tcs) --- 5 tcs will run in the sequential mode
//w3 --- file 3
//w4 --- file 4

//AAA ---> do not create the dependency in the test cases