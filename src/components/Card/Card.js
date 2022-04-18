import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {FaUserAstronaut} from 'react-icons/fa'
import { collection, getDocs } from 'firebase/firestore'
import { dbase } from '../Fire/Fire'


export default function Card() {
    
    const [fireData, setFireData] = useState([])

    const getData = async () =>{
        const data = await getDocs(collection(dbase, "tester"))
        setFireData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    }

    useEffect(() =>{
        getData()
    }, [])

  return (
    <>
        <Container>
            {fireData?.map((props) => {
                return(
                    <Wrapper key={props.id}>
                        <FaUserAstronaut size={'3.5rem'}/>
                        <Name>Name: {props.name}</Name>
                        <Age>Age: {props.age}</Age>
                        <Country>Country: {props.country}</Country>
                        <Present>Attendance: {props.present}</Present>
                    </Wrapper>
                )
            })}
        </Container>
    </>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    margin: 30px;
`;
const Name = styled.div`
    font-size: 1rem;
    font-weight: 600;
`;
const Age = styled.div`
    font-size: 1rem;
    font-weight: 600;
`;
const Present = styled.div`
    font-size: 1rem;
    font-weight: 700;
`;
const Country = styled.div`
    font-size: 1rem;
    font-weight: 500;
`;
