import Link from 'next/link';
import { withRouter } from 'next/router';
import { Container, LinkText } from './styles';

const Header = ({ router: { pathname } }) => (
    <Container>
        <Link prefetch href="/bellwoods">
            <a>
                <LinkText isActive={pathname === '/about' && 'is-active'}>
                    bellwoods
                </LinkText>
            </a>
        </Link>
    </Container>
);

export default withRouter(Header);
