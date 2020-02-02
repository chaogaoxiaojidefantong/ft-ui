
import h5UserRoute from './h5/h5UserRoute'
import userRoute from './userRoute'
import manageRoute from './manageRoute'
import publicRoute from './publicRoute';
const routes = [
    ...h5UserRoute,
    ...userRoute,
    ...manageRoute,
    ...publicRoute
]
export default routes;