import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './screens';

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='' component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
};