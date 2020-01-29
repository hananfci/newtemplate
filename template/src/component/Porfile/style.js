import styled from 'styled-components'

 export const Profileskills = styled.div `
    padding: 50px 0;
    overflow: hidden;
`

export const Profile =styled.div `
    width: 50%;
    float: left;
`

export const Profilelist = styled.ul `
    list-style: none
`

export const Profileitem = styled.li `
    margin-bottom: 8px
`

export const Profileitemspan = styled.span `
    display: inline-block;
    width: 100px;
    font-weight: bold
`
export const Profileitemspanweb = styled.span `
    font-weight: normal;
    color: #eb5424
`
export const Skillsection = styled.div `
    width: 50%;
    float: left;
`

export const Skillsdesc = styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Skillsbar  = styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const Barspantitle = styled.span `
    float: left;
`

export const Barspanperc = styled.span `
    float: right;
    margin-right: 100px
`

export const Barsparent = styled.div `
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`
export const Barsparentspan = styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.sp }
`


/* .profile_skills .skills .bar .parent span.sp1 {
    width: 100%;
}

.profile_skills .skills .bar .parent span.sp2 {
    width: 90%;
}

.profile_skills .skills .bar .parent span.sp3 {
    width: 80%;
}
 */
export const Profileskillstitle = styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px
`
export const Profileskillsspantitle = styled.span `
font-weight: normal;
`
