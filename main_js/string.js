var str1="hello";
var str2=`brother`;
var str3="      trim";
var str4="fsfd,fdsf,sdfs,sdf"
console.log("this is sr1 :- "+str1);
console.log(`this is str2 using interpolatioin :- ${str2}`);
console.log("concat str1 and str2 by using + :-"+str1+" "+str2);
console.log("concat str1 and str2 by using concat :-"+str1.concat(str2));
console.log("length of str1 :- "+str1.length);
console.log(`use literal on str1 to add line :-${str1}`);
console.log(`character at 0th index: ${str1[0]}`);
console.log(`character at 1th index: ${str1.charAt(1)}`);
console.log(str1.toUpperCase())
console.log(str1.slice(0,4))
console.log(str1.slice(-4))
console.log(str1.substring(0,2))
console.log(str1.indexOf("l"))
console.log(str1.lastIndexOf("l"))
console.log(str1.includes("o"))
console.log(str1.startsWith("o"))
console.log(str1.startsWith("h"))
console.log(str1.endsWith("h"))
console.log(str1.endsWith("o"))
console.log(str1.replace("o","p"))
console.log("remove extra space:- "+str3.trim())
console.log("remove extra space:- "+str3.trimStart())
console.log("remove extra space:- "+str3.trimEnd())
console.log(str1.repeat(3))
console.log(str4.split(","))
console.log(str4)