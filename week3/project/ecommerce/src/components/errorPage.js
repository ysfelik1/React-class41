const ErrorPage = ({errorText}) => {
  return (
    <div >
      <h3>Seems something went wrong!</h3>

      <div className="error">
        <img src={process.env.PUBLIC_URL + '/error.webp'} alt="error" />
        <p>{errorText}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
