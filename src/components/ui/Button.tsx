interface ButtonProps {
  backgroundColor: string;
  color?: string;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="py-3 px-4 text-sm font-semibold rounded-full transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      {props.children}
    </button>
  );
}
