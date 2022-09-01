
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Index'
import { LayoutContainer, Content } from './style'

export function DefaultLayout() {
    return(
        <LayoutContainer>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </LayoutContainer>
    )
}