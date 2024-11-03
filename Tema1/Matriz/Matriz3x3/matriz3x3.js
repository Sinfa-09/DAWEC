"use strict"

    let matriz=[[1,2,3],[4,5,6],[7,8,9]];

    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz.length;j++){
            if (i==j){
                document.write(matriz[i][j]);
            }
        }
    }

    

    function transponer(arrayMat){
        let matNueva=[];
        for(let i=0;i<arrayMat.length;i++){
            matNueva[i]=[];
            for(let j=0;j<arrayMat.length;j++){
               // matNueva[i].push(arrayMat[j][i]);  
               matNueva[i][j]=arrayMat[j][i];
            }
           
        } return(matNueva);
        }
        console.log("nueva funcion");
        let nuevaMatriz=transponer(mat);
        console.log(nuevaMatriz);
            
    