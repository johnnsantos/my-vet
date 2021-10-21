import styled from 'styled-components'

export const InformationContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
width: 100%;
height: 100%;
min-height: 150px;
margin-top: 15px;

.info {
width: 100%;
height: 100%;
display: flex;
flex-flow: column-reverse nowrap;
box-sizing: border-box;
text-align: center;
}

.info-title {
padding-bottom: 15px;
color: #7E8192;
}

.info-content {
font-weight: 500;
width: 50%;
margin: 0 auto 15px;
}

.sex {
border-right: 1px solid #EEEEEE;
border-bottom: 1px solid #EEEEEE;
}

.breed {
border-bottom: 1px solid #EEEEEE;
}

.weight {
border-right: 1px solid #EEEEEE;
}

.age{

}
`