import styled from 'styled-components'

export const Dropsection = styled.div `

    padding: 50px 0;
    text-align: center
`
export const Droptitle = styled.h2 `
.drop .drop-title {
    font-size: 60px;
    margin-bottom: 30px
`
export const Droptitlespan = styled.span `

    font-weight: normal
`
export const Dropform = styled.form `

    width: 70%;
    margin: auto;
`

export const Dropinput = styled.input `
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
`

export const FormInput = styled.div `
    overflow: hidden
`

export const Dropinputtext = styled(Dropinput) `
    width: 49%;
    float: left
`

export const Dropinputemail = styled(Dropinput) `
     width: 49%;
    float: right
`

export const Dropinputsub = styled(Dropinput) `
    width: 100%;
`

export const Droptextarea = styled.textarea `
    width: 100%;
    outline: 0;
    background: #ccc
`

export const Dropinputsubmit = styled(Dropinput) `
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`