import "./Card.css";
export default function Card(props) {
    console.log('props: ', props);
  return (
    <>
      <div className="post-card">
        <h2 className="post-card-title" style={{
            color:props.color
        }} >{props.title}</h2>

        <div className="post-card-meta">
          <span>12 Feb 2020</span>
          <span className="separator">|</span>
          <span>Design, Pattern</span>
        </div>

        <p className="post-card-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </>
  );
}
