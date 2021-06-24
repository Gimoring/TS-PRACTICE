import { ChildAsFC } from './Child';

const Parent = () => {
	return (
		<ChildAsFC color="red" onClick={() => console.log('Clicked')}>
			hihihihi
		</ChildAsFC>
	);
};

export default Parent;
