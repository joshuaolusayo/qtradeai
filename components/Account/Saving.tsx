import FadeLoader from 'react-spinners/FadeLoader';

export default function Saving(props): JSX.Element {
  return (
    <div
      className="flex flex-col justify-center items-center"
      onClick={() => setTimeout(props.setSaved(true), 3000)}
    >
      <FadeLoader color="#09157f" loading={true} />
      <div className="mt-5 text-center -ml-3">Saving</div>
    </div>
  );
}
