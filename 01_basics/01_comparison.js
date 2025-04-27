// console.log(1>2);
// console.log(1<2);
// console.log(1>=2);
// console.log(1<=2);
// console.log(1==2);
// console.log(2===2);


// these all are tricky comparisons that can confuse you try to avoid these comparisons

// console.log(null>0)   // js automatically converts null to 0 
// console.log(null==0); // loose equality(==) works differntly than >,<,<=,>= ; null only compatible with undefined 
// console.log(null>=0)   
 
// console.log(undefined>0); // js try to convert undefine into number NaN and is always result in false in case of comparison
// console.log(undefined==0);
// console.log(undefined>=0);

// this is important to knwo and it is used mostly
// console.log("2" === 2)  // it compare type equality as well as value and not coverting any type 