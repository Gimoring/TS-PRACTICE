interface ChildProps {
	color: string;
	onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<div>
			{color} <button onClick={onClick}>Click CLick me</button>
		</div>
	);
};

// 이런식으로 해주면 우리는 타입스크립트에게 명시를 해줄 수 있다.
// Child는 리액트 함수 컴포넌트이다.
// Child는 propTypes, contextTypes, displayName등의 프로퍼티들을 가질 수 있다.
// Child는 <ChildProps> 라는 props type를 받는다.
export const ChildAsFC: React.FC<ChildProps> = ({
	color,
	onClick,
	children,
}) => {
	return (
		<div>
			{color}
			{children}
			<button onClick={onClick}>Click CLick me</button>
		</div>
	);
};
