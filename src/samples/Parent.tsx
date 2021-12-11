import { ChildAsFunc } from './Child';

const Parent = () => <ChildAsFunc color="red" onClick={() => { console.log('HERE'); }}> </ChildAsFunc>;

export default Parent;
