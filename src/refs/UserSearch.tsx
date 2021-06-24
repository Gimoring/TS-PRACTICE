import { useState, useRef, useEffect } from 'react';

const users = [
	{ name: 'Taeho', age: 28 },
	{ name: 'mingu', age: 29 },
	{ name: 'minji', age: 30 },
];

const UserSearch: React.FC = () => {
	// ref를 만들 때 HTML요소를 참조하려고 만드는 것. 그래서 generic사용해 타입 지정
	// 만들고 나서 타입스크립트는 실제로 만든 ref가 사용될것인지 안될 것인지 모른다.
	// 그래서 사용이 안될 경우를 위해서 null을 추가해준다.
	// 그러면 타입스크립트가 더이상 불평하지 않는다.
	// (인풋 요소일 수도 있고 null일 수도 있고)
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	useEffect(() => {
		//inputRef.current가 정의되지 않았따면 그냥 return
		if (!inputRef.current) {
			//인풋요소의 current에 어떤 밸류도 없을 때를 위해서 이 타입가드를 명시해줍니다.
			// null 체크임
			return;
		}

		inputRef.current.focus(); // 이제 current가 HTMLInputElement라고 뜸.
	}, []);

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});

		setUser(foundUser);
	};
	return (
		<div>
			User Search
			<input
				ref={inputRef} //ref
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
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
