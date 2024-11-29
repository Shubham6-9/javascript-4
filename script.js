// console.log("-------------------Question 1-------------------")
// function q1(){
//     let a=0
//     let count=0
//     for(a=0 ; count<10 ; a++){
//         if(a%2==0){
//             console.log(a)
//             count++
//         }
//     }
// }
// q1()
// console.log("-------------------Question 2-------------------")
// function q2(){
//     let sum=0
//     for(let i=2 ; i<30 ; i++){
//         if(i%3==0){
//             sum+=i;
//         }
//     }
//     console.log(sum)
// }
// q2()
// console.log("-------------------Question 3-------------------")
// function q3(){
//     for(let i=0 ; i<=50 ; i++){
//         if(i%5==0){
//             console.log("BUZZ !!")
//             continue;
//         }
//         console.log(i)
//     }
// }
// q3()
// console.log("-------------------Question 4-------------------")
// function q4(){
//     let n=4
//     for(let i=1 ; i<=10 ; i++){
//         console.log(i+" x "+n+" = "+ n*i)
//     }
// }
// q4()
// console.log("-------------------Question 5-------------------")
// function q5(){
//     let pro=1
//     for(let i=1 ; i<=5 ; i++){
//         pro*=i
//     }
//     console.log(pro)
// }
// q5()
// console.log("-------------------Question 6-------------------")
// function q6(){
//     let n=50
//     for(let b=1 ; b<n ; b++){
//         let count=0
//         for(let i=2 ; i<b ; i++){
//             if(b%i==0){
//                 count++
//             }
//         }
//         if(count==0)
//             console.log(b)
//     }
// }
// q6()
// console.log("-------------------Question 8-------------------")
// function q8(){
//     for(let i=1 ; i< 100 ; i++){
//         if(i==50){
//             continue;
//         }
//         console.log(i);
//     }
// }
// q8()
// console.log("MEDIUM FOR LOOP");
// console.log("-------------------Med. Question 1-------------------")
// function mq1(){
//     let n=6
//     let fack=1
//     for(let i=1 ; i<=6 ; i++){
//         fack*=i
//     }
//     console.log(fack)
// }
// mq1()
// console.log("-------------------Med. Question 2-------------------")
// function mq2(){
//     for(let i=1; i<=4; i++){
//         {
//             let str = "";
//             for(var j=1; j<=i; j++)
//             {
//                 str += "*";
//             }
//             console.log(str);
//         }
//     }
// }
// mq2()
// console.log("-------------------Med. Question 3-------------------")
// function mq3() {
//     let a = 12345
//     let b = String(12345)
//     let sum = 0;
//     for (let i = 0; i < b.length; i++) {
//         sum += +(b[i])
//     }
//     console.log(sum)
// }
// mq3()
// console.log("-------------------Med. Question 4-------------------")
// function mq4() {
//     let flag = false;
//     let target = 16;
//     for (let i = 0; i<(target/2); i++) {
//         if (i*i == target) {
//             flag = true;
//         }
//     }
//     if (flag)
//         console.log("Perfect square");
//     else
//         console.log("not Perfect square");
// }
// mq4()
// console.log("-------------------Med. Question 5-------------------")
// function mq5() {
//     let a = 123
//     let b = String(a)
//     let sum = 0;
//     for (let i = 0; i < b.length; i++) {
//         sum += +(b[i])
//     }
//     console.log(sum)
// }
// mq5()
// console.log("WHILE LOOP");
// console.log("-------------------While Question 1-------------------")
// function wq1() {
//     let a = 10;
//     while (a <= 100) {
//         console.log(a);
//         a += 10;
//     }
// }
// wq1()
// console.log("-------------------While Question 2-------------------")
// function wq2() {
//     let a = 0;
//     let b = 1;
//     console.log(a, b);
//     let z = 0;
//     while (z < 50) {
//         z = a + b;
//         console.log(z);
//         a = b;
//         b = z;
//     }
// }
// wq2()
// console.log("-------------------While Question 3-------------------")
// function wq3() {
//     let a = 0;
//     let b = 1;
//     console.log(a, b);
//     let z = 0;
//     while (z < 50) {
//         z = a + b;
//         console.log(z);
//         a = b;
//         b = z;
//     }
// }
// wq3()