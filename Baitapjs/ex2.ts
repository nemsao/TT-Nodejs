
function bai2() {
    const styles:string[]=["jazz","blue"];
     styles.push("Rock'n roll")
     console.log("bai 2.1 /output ::",styles);
     styles[ Math.round(styles.length / 2)-1 ]="Classic";
     console.log("bai 2.2 /output ::",styles);
     console.log("bai 2.3 /output ::",styles.shift());styles.unshift("Rap","Reggae")  ;
     console.log("bai 2.4 /output ::", styles);
  }
  
bai2();