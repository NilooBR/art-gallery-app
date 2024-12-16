import Link from "next/link";
import styled from "styled-components";

const FooterLink = styled(Link)`

`
export default function Footer(){
    return(
        <>
            <ul>
                <FooterLink></FooterLink>
            </ul>
        </>
    )
}