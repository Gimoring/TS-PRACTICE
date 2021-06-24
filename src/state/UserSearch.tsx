import { useState } from 'react';

const users = [
	{ name: 'Taeho', age: 28 },
	{ name: 'mingu', age: 29 },
	{ name: 'minji', age: 30 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});

		setUser(foundUser);
	};
	return (
		<div>
			User Search
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Search User</button>
			<div>
				{user === undefined ? (
					<p>user not found</p>
				) : (
					<>
						{/* if user is true username will be printed out*/}
						{user && user.name}
						{user && user.age}
					</>
				)}
			</div>
		</div>
	);
};

export default UserSearch;
