function superbowlWin(record) {
    let wins = record.find(object => object.result === 'W')
     if (wins){
       return wins.year
    }
 }
 
superbowlWin(record);


