//1->installation of material ui...
//2->implement roboto font...
//3->PAPER......

/*---------------1------------>
for install material ui in terminal 
'npm install @mui/material @emotion/react @emotion/styled'...
*/

/*-------------2-------------->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

go to 'index.html' and paste that link...

make some changes in 'index.css'.....
*/

/*-------------3---PAPER------>
-in paper 'elevation' means box shadow we can change elevation to 0 to 10...
-or square means border radius square...
*/

/*-------------4--CONTAINER----->
-the container centers your content horizontally. is's the most basix layout element.
 */

/*-----------5--GRID--------->
-in grid total size horizonatlly is 12 so in inner child we can distribute by using this.
-'spacing' in grid is 0 to 12 to create a space between components...
-'<Grid item xs={3}>' to give horizontal space to the particular thing...
*/

/*----------6--TYPOGRAPHY------->
-in typography 'component' means what actually it would be.
-and 'variant' means how it looks like.
*/

/*----------7--for using icons---------->
-in terminal 'npm install @mui/icons-material'...
or 'import { AccessTime } from '@mui/icons-material';'
or '<AccessTime sx={{width: 12.5}} />'
*/

/*-----------8--RATING-------------------->
-'import Rating from '@mui/material/Rating';'
-or '<Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />' */

/*------THEME PROVIDERS----------------------->
import {createTheme, ThemeProvider} from "@mui/material";
const theme=createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant: "body2"
                    },
                    style:{
                        fontSize: 11,
                    }
                },
                {
                    props:{
                        variant: "body3"
                    },
                    style:{
                        fontSize: 9,
                    }
                },
            ]
        }
    }
})
(or) cover with 'ThemeProvider' above paper...see in 'TourCard.js'...
 */

/*-----------------8--APP BAR--------->
copy the code by 'appbar' documentation..... */