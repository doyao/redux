import Reduxs from './component/Reduxs'
import store from './Redux/store'
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
        <Reduxs/>
    </Provider>
    
  )
}
export default App;
