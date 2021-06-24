import React from 'react';

const EventComponent: React.FC = () => {
	//여기선 타입 오류가 뜬다
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e);
	};

	const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		console.log(e);
	};

	// 타입 추론은 리턴 전 인라인에서 콜백펑션을 정의할 때 JSX에서만 일어난다.
	// 리턴 안에서는 뜨지 않는다.
	return (
		<div>
			<input onChange={onChange} />
			<div draggable onDragStart={onDragStart}>
				Drag MEEEEEE~!!!
			</div>
		</div>
	);
};

export default EventComponent;
