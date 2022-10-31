// import { Button } from "@mui/material";
// import { border, borderColor } from "@mui/system";
// import { styled } from '@mui/material/styles';

// import { Children } from "react"

// export const CustomButton = styled(Button)({
//     backgroundColor : 'green',
//     padding: '10px 60px',
//     fontSize :16,
//     color:'red'
// })





// export const SecondButton = styled(Button)({
//     backgroundColor : 'red',
//     padding:'20px 20px',
//     fontSize: ' 10px',
//     fontWeight:'800',

//     '&:hover' :{
//         backgroundColor:'green'
//     }
// })  





export const Button =({backgroundColor,padding,fontSize,borderRadius,children,border,color})=>{
    return (
            <button
              style={{
                backgroundColor,
                padding,
                borderRadius,
                fontSize,border,color
              }}  

            >
                {children}
            </button>
    )
}