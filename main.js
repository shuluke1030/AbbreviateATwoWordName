function abbrevName(name){
    let arr = name.split("");
    for( let i = 0; i < arr.length; i++){
        if( arr[i] === ' ' ){
            let LN = arr[i + 1].toUpperCase();
            let SN = arr[0].toUpperCase();
            return SN + "." + LN;
        }
    }
    

}
console.log(abbrevName("Sam Harris"));
//===============================================
var nameArray = name.split(" ");
return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

// 首先，split(" ")方法被用來將姓名字串中的空格作為分隔符，將其拆分成一個包含名字和姓氏的陣列。例如，如果輸入的姓名是 "John Doe"，那麼 name.split(" ") 會返回一個長度為 2 的陣列，其中 nameArray[0] 為 "John"，nameArray[1] 為 "Doe"。

// 接下來，陣列索引被用來選取每個單詞的第一個字母。例如，nameArray[0][0] 會返回名字 "John" 的第一個字母 "J"，而 nameArray[1][0] 則會返回姓氏 "Doe" 的第一個字母 "D"。

// 接著，這些字母被連接起來，用一個點號 "." 分隔。例如，nameArray[0][0] + "." + nameArray[1][0] 會返回 "J.D"。

// 最後，toUpperCase() 方法被用來將縮寫化的名字轉換成大寫字母。例如，如果輸入的姓名是 "John Doe"，那麼最終返回的值就是 "J.D"（全部大寫）。