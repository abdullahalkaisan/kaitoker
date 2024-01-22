import PropTypes from 'prop-types';

export default function Iframe(props) {
  return (
    <iframe
    width="100%"
    height="100%"
    src={`https://www.youtube.com/embed/${props.url}`}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  )
}


Iframe.propTypes = {
    url: PropTypes.string,
  };