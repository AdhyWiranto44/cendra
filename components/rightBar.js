export default function RightBar(props) {
  return (
    <div className="container-fluid hidden lg:block lg:w-4/12">
      <div id="cendra-trends" className="pt-4 border-l h-screen border-slate-600 overflow-y-auto flex-col">
        {props.contents}
      </div>
    </div>
  );
}