import { Component } from 'react';

interface User {
	name: string;
	age: number;
}

interface UserSearchProps {
	users: User[];
}

interface UserSearchState {
	name: string;
	user: User | undefined;
}

// 클래스 만들때 타입 Component에 props 타입은 UserSearchProps
class UserSearch extends Component<UserSearchProps> {
	//스테이트에 타입추가
	state: UserSearchState = {
		name: '',
		user: undefined,
	};

	onClick = () => {
		const foundUser = this.props.users.find((user) => {
			return user.name === this.state.name;
		});

		this.setState({ user: foundUser });
	};

	render() {
		const { name, user } = this.state;

		return (
			<div>
				User Search
				<input
					value={name}
					onChange={(e) => this.setState({ name: e.target.value })}
				/>
				<button onClick={this.onClick}>Search User</button>
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
	}
}

export default UserSearch;
