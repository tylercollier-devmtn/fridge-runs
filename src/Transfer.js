import React, { Component } from 'react';
import styled from 'styled-components';
import {primaryRed, primaryOrange, white, black, highlightOrange} from './css-master'



const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.6)
`
const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 750px;
    width: 850px;
    background-color: ${white}
`
const Header = styled.div`
    background-color: ${primaryRed};
    padding: 15px;
    > h2 {
        color: ${white};
        text-align: center;
        margin: 0;
    }
`  
const ModalContent = styled.div`
    padding: 10px 25px;
`
const RecipientSelector = styled.div`
    padding: 15px;
    display: flex;
    justify-content: center;
    > input {
        text-align: center;
        font-size: 1.3em;
        padding: 10px;
    }

`
const Lists = styled.div`
    display: flex;
    justify-content: space-between;
`

const RunList = styled.div`
    border: 1px solid ${black};
    width: 350px;
    height: 475px;
    overflow: auto;
`

const SendButton = styled.div`
    display: flex;
    justify-content: center;
    > button {
        background-color: ${primaryOrange};
        border: none;
        color: ${white};
        width: 500px;
        cursor: pointer;
        &:hover {
            background-color: ${highlightOrange};
            color: ${black};
        }
    }
`



class Transfer extends Component {


    render() {
        
        

        return (
            <div>
                <Background>
                    <Modal>
                        <Header>
                            <h2>Transfer Runs</h2>
                        </Header>
                        <ModalContent>
                            <RecipientSelector>
                                <input placeholder="Select Recipient"/>
                            </RecipientSelector>
                            <Lists>
                                <RunList>
                                    asdf
                                </RunList>

                                <RunList>
                                    asdf
                                </RunList>

                            </Lists>
                            <SendButton>
                                <button><h3>Transfer Runs to</h3></button>
                            </SendButton>
                        </ModalContent>
                    </Modal>
                </Background>
            </div>
        );
    }
}

export default Transfer;