import ReactDOM from 'react-dom';
//  1번째 스테이트 예제 import GuestList from './state/GuestList';
//  2번째 스테이트 예제 import UserSearch from './state/UserSearch';
//  3번째 이벤트 예제import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch'; //4번째 ref 예제.

const App = () => {
	return (
		<div>
			<UserSearch />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

// workflow
/*
  컴포넌트 Props에 타입을 추가한다.
  컴포넌트 스테이트에 타입을 추가한다.
  이벤트핸들러에 타입을 추가한다.
*/
