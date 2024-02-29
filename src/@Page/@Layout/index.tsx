// @Layout/index.tsx
import { ReactNode } from "react";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

interface Props {
    children: ReactNode;
    introduceLayout?: ReactNode; 
}

const Layout = (props: Props) => {
    return (
        <>
            <HeaderLayout />
            <section className="bg-white">
                {props.introduceLayout} 
                {props.children} 
            </section>
            <FooterLayout />
        </>
    );
};

export default Layout;
