import { Link } from 'react-router-dom';
import { PATHCONSTANTS } from '../../../routers';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul className="bg-yellow-400 flex gap-4">
                    <li>
                        <Link to={PATHCONSTANTS.DASHBOARD.PATH}>{PATHCONSTANTS.DASHBOARD.TITLE}</Link>
                    </li>
                    <li>
                        <Link to={PATHCONSTANTS.USER_MANAGER.PATH}>{PATHCONSTANTS.USER_MANAGER.TITLE}</Link>
                    </li>
                    <li>
                        <Link to={PATHCONSTANTS.POST_MANAGER.PATH}>{PATHCONSTANTS.POST_MANAGER.TITLE}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
