
import store from './Redux/store'
import {Provider} from 'react-redux'
import LayoutPage from './Pages/LayoutPage'
function App() {
  return (
    <Provider store={store}>
        <LayoutPage/>
    </Provider>
    
  )
}
export default App;
