import {useParams, useLocation} from 'react-router-dom';

function Home() {
    let {state} = useLocation();
    return (
        <div>
            <h3>Chào mừng {state.Id}</h3>
        </div>
    );
}
export default Home;