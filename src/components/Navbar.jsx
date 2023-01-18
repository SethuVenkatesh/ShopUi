import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@material-ui/core";

const Container=styled.div`
    height:60px;
`;
const Wrapper=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;

const Left=styled.div`
     flex:1;
     display:flex;
     align-items:center;

    
`;
const Language=styled.span`
font-size:14px;
cursor:pointer;
`;
const SearchContainer=styled.div`
border:0.5px solid lightgray;
padding:5px;
margin-left:25px;
display :flex;
align-items:center;
border-radius:5px;
`;
const Input=styled.input`
    border:none;
    :focus{
        outline:none;
    }
    
`;
const Center=styled.div`
    flex:1;  
`;
const Logo=styled.h1`
font-weight:bold;

`;

const Right=styled.div`
   
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    
`
const MenuItem=styled.h1`
font-size:14px;
cursor:pointer;
margin-left:15px;
margin-right:10px;

`;

   



const Navbar = () => {
  return (
   <Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input></Input>
                <SearchIcon style={{color:"gray",fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Center>
            <Logo>Sethu</Logo>
        </Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </Badge>
                
            </MenuItem>
        </Right>
    </Wrapper>
   </Container> 
  )
}

export default Navbar
