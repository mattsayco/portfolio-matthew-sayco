import Photo from "../../public/Personal Photo.jpg";

export default function Landing() {
  return (
    <section>
      <div id="landing">
        <div id="picture">
          <img src={Photo}></img>
        </div>
        <div id="landing-heading">
          <div>Matthew Paul Sayco</div>
          <div>Software Developer</div>
          <div>I simply create efficient code and I enjoy what I do</div>
        </div>
      </div>
    </section>
  );
}
