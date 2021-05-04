import { ChildAsFC } from './Child';

const Parent = () => <ChildAsFC color="red" onClick={() => { console.log('here clicked'); }}> </ChildAsFC>;

export default Parent;
