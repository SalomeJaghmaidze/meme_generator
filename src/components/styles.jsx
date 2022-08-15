import styled from "styled-components";

export const Heading = styled.header`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
  color: white;
  height: 65px;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  img {
    height: 100%;
    margin-right: 6px;
  }

  h2 {
    font-family: "Karla", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20.7482px;
    margin-right: auto;
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  }
`;

export const Form = styled.div`

padding: 36px;

div {
  display: flex;
  justify-content: space-between;
}

input {
  width: 230px;
  border: 1px solid #D5D4D8;
  border-radius: 5px;
  padding: 10px 0;
  text-indent: 5px;
}

button {
  width: 477px;
  padding: 10px 0;
  background: linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);
  border-radius: 5px;
  border: none;
  color: white;
  margin: 20px 0;
  font-family: 'Karla';
  font-size: 16px;
  cursor: pointer;
}
`

export const MemeImg = styled.img`
max-width: 100%;
height: 300px;
margin: auto;
`

export const MemeDiv = styled.div`
position: relative;
 
h2 {
  position: absolute;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-family: impact, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;
}

h2:last-child {
  position: absolute;
    bottom: 0;
    right: 0;
}
`