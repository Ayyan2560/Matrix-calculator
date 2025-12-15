function Calculate_add(){
    let arr_1 =[]
    let arr_2 =[]
    let result =[]
    arr_1[0]=document.getElementById("Matix_1").value
    arr_1[1]=document.getElementById("Matix_2").value
    arr_1[2]=document.getElementById("Matix_3").value
    arr_1[3]=document.getElementById("Matix_4").value
    arr_1[4]=document.getElementById("Matix_5").value
    arr_1[5]=document.getElementById("Matix_6").value
    arr_1[6]=document.getElementById("Matix_7").value
    arr_1[7]=document.getElementById("Matix_8").value
    arr_1[8]=document.getElementById("Matix_9").value

    
    arr_2[0]=document.getElementById("Matix_10").value
    arr_2[1]=document.getElementById("Matix_11").value
    arr_2[2]=document.getElementById("Matix_12").value
    arr_2[3]=document.getElementById("Matix_13").value
    arr_2[4]=document.getElementById("Matix_14").value
    arr_2[5]=document.getElementById("Matix_15").value
    arr_2[6]=document.getElementById("Matix_16").value
    arr_2[7]=document.getElementById("Matix_17").value
    arr_2[8]=document.getElementById("Matix_18").value


    result[0]=Number(arr_1[0])+Number(arr_2[0])
    result[1]=Number(arr_1[1])+Number(arr_2[1])
    result[2]=Number(arr_1[2])+Number(arr_2[2])
    result[3]=Number(arr_1[3])+Number(arr_2[3])
    result[4]=Number(arr_1[4])+Number(arr_2[4])
    result[5]=Number(arr_1[5])+Number(arr_2[5])
    result[6]=Number(arr_1[6])+Number(arr_2[6])
    result[7]=Number(arr_1[7])+Number(arr_2[7])
    result[8]=Number(arr_1[8])+Number(arr_2[8])
    document.getElementById("Matix_19").value = result[0]
    document.getElementById("Matix_20").value = result[1]
    document.getElementById("Matix_21").value = result[2]
    document.getElementById("Matix_22").value = result[3]
    document.getElementById("Matix_33").value = result[4]
    document.getElementById("Matix_24").value = result[5]
    document.getElementById("Matix_25").value = result[6]
    document.getElementById("Matix_26").value = result[7]
    document.getElementById("Matix_27").value = result[8]
}
function Calculate_Sub(){
    let arr_1 =[]
    let arr_2 =[]
    let result =[]
    arr_1[0]=document.getElementById("Matix_1").value
    arr_1[1]=document.getElementById("Matix_2").value
    arr_1[2]=document.getElementById("Matix_3").value
    arr_1[3]=document.getElementById("Matix_4").value
    arr_1[4]=document.getElementById("Matix_5").value
    arr_1[5]=document.getElementById("Matix_6").value
    arr_1[6]=document.getElementById("Matix_7").value
    arr_1[7]=document.getElementById("Matix_8").value
    arr_1[8]=document.getElementById("Matix_9").value

    
    arr_2[0]=document.getElementById("Matix_10").value
    arr_2[1]=document.getElementById("Matix_11").value
    arr_2[2]=document.getElementById("Matix_12").value
    arr_2[3]=document.getElementById("Matix_13").value
    arr_2[4]=document.getElementById("Matix_14").value
    arr_2[5]=document.getElementById("Matix_15").value
    arr_2[6]=document.getElementById("Matix_16").value
    arr_2[7]=document.getElementById("Matix_17").value
    arr_2[8]=document.getElementById("Matix_18").value


    result[0]=Number(arr_1[0])-Number(arr_2[0])
    result[1]=Number(arr_1[1])-Number(arr_2[1])
    result[2]=Number(arr_1[2])-Number(arr_2[2])
    result[3]=Number(arr_1[3])-Number(arr_2[3])
    result[4]=Number(arr_1[4])-Number(arr_2[4])
    result[5]=Number(arr_1[5])-Number(arr_2[5])
    result[6]=Number(arr_1[6])-Number(arr_2[6])
    result[7]=Number(arr_1[7])-Number(arr_2[7])
    result[8]=Number(arr_1[8])-Number(arr_2[8])
    document.getElementById("Matix_19").value = result[0]
    document.getElementById("Matix_20").value = result[1]
    document.getElementById("Matix_21").value = result[2]
    document.getElementById("Matix_22").value = result[3]
    document.getElementById("Matix_33").value = result[4]
    document.getElementById("Matix_24").value = result[5]
    document.getElementById("Matix_25").value = result[6]
    document.getElementById("Matix_26").value = result[7]
    document.getElementById("Matix_27").value = result[8]
}


function Calculate_product(){
    let arr_1 =[]
    let arr_2 =[]
    let result =[]
    arr_1[0]=document.getElementById("Matix_1").value
    arr_1[1]=document.getElementById("Matix_2").value
    arr_1[2]=document.getElementById("Matix_3").value
    arr_1[3]=document.getElementById("Matix_4").value
    arr_1[4]=document.getElementById("Matix_5").value
    arr_1[5]=document.getElementById("Matix_6").value
    arr_1[6]=document.getElementById("Matix_7").value
    arr_1[7]=document.getElementById("Matix_8").value
    arr_1[8]=document.getElementById("Matix_9").value

    
    arr_2[0]=document.getElementById("Matix_10").value
    arr_2[1]=document.getElementById("Matix_11").value
    arr_2[2]=document.getElementById("Matix_12").value
    arr_2[3]=document.getElementById("Matix_13").value
    arr_2[4]=document.getElementById("Matix_14").value
    arr_2[5]=document.getElementById("Matix_15").value
    arr_2[6]=document.getElementById("Matix_16").value
    arr_2[7]=document.getElementById("Matix_17").value
    arr_2[8]=document.getElementById("Matix_18").value



    result[0] = arr_1[0]*arr_2[0] + arr_1[1]*arr_2[3] + arr_1[2]*arr_2[6]
    result[1] = arr_1[0]*arr_2[1] + arr_1[1]*arr_2[4] + arr_1[2]*arr_2[7]
    result[2] = arr_1[0]*arr_2[2] + arr_1[1]*arr_2[5] + arr_1[2]*arr_2[8]

    result[3] = arr_1[3]*arr_2[0] + arr_1[4]*arr_2[3] + arr_1[5]*arr_2[6]
    result[4] = arr_1[3]*arr_2[1] + arr_1[4]*arr_2[4] + arr_1[5]*arr_2[7]
    result[5] = arr_1[3]*arr_2[2] + arr_1[4]*arr_2[5] + arr_1[5]*arr_2[8]

    result[6] = arr_1[6]*arr_2[0] + arr_1[7]*arr_2[3] + arr_1[8]*arr_2[6]
    result[7] = arr_1[6]*arr_2[1] + arr_1[7]*arr_2[4] + arr_1[8]*arr_2[7]
    result[8] = arr_1[6]*arr_2[2] + arr_1[7]*arr_2[5] + arr_1[8]*arr_2[8]
console.log(arr_1)
console.log(arr_2)
console.log(result)

    // ===== Output =====
    document.getElementById("Matix_19").value = result[0]
    document.getElementById("Matix_20").value = result[1]
    document.getElementById("Matix_21").value = result[2]
    document.getElementById("Matix_22").value = result[3]
    document.getElementById("Matix_23").value = result[4]
    document.getElementById("Matix_24").value = result[5]
    document.getElementById("Matix_25").value = result[6]
    document.getElementById("Matix_26").value = result[7]
    document.getElementById("Matix_27").value = result[8]
   
}



