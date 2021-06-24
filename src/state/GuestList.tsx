import { useState } from 'react';

const GuestList: React.FC = () => {
	// 타입 추론을 하려한다.
	// 근데 엉뚱하게 추론할 수도 있어서 명시를 해주어야한다.
	// useState<type>(initValue); 이런식으로.
	const [name, setName] = useState('');
	const [guests, setGuests] = useState<string[]>([]);

	const onClick = () => {
		setName('');
		setGuests([...guests, name]);
	};

	return (
		<div>
			<h3>Guest List</h3>
			<ul>
				{guests.map((guest) => (
					<li key={guest}>{guest}</li>
				))}
			</ul>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Add Guest</button>
		</div>
	);
};

export default GuestList;
